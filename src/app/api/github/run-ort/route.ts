// ------------------- app/api/github/run-ort/route.ts -------------------
import { NextRequest, NextResponse } from 'next/server';
import { Octokit } from '@octokit/rest';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth"; 
import JSZip from 'jszip';
import fs from 'fs';
import path from 'path';


export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.accessToken) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { repoUrl } = await req.json();
  const octokit = new Octokit({ auth: session.accessToken });

  const [ owner, repo] = ["ArenJain","scc_ui"]
  const workflowFilePath = '.github/workflows/ort.yml';
  const branch = 'main';

  const workflowContent = `name: ORT Analyzer
on:
  workflow_dispatch:
jobs:
  ort:
    runs-on: ubuntu-latest
    steps:
      - name: Use HTTPS instead of SSH for Git cloning
        run: git config --global url.https://github.com/.insteadOf ssh://git@github.com/
      - name: Run GitHub Action for ORT
        uses: oss-review-toolkit/ort-ci-github-action@v1
        with:
          vcs-url: '${repoUrl}'
          run: >
              cache-dependencies,
              labels,
              analyzer,
              scanner,
              advisor,
              evaluator,
              reporter,
              upload-results
          ort-cli-args : '-P ort.scanner.skipExcluded=true'
          ort-cli-scan-args: '--package-types=PROJECT'`;

  try {
    // Step 1: Push workflow file

    let sha: string | undefined;
    try {
      const { data: fileData } = await octokit.repos.getContent({
        owner,
        repo,
        path : workflowFilePath,
      });

      if (!Array.isArray(fileData) && fileData.sha) {
        sha = fileData.sha;
      }
    } catch (error: any) {
      // File doesn't exist – that’s okay (create operation doesn't need sha)
      if (error.status !== 404) throw error;
    }

    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: workflowFilePath,
      message: 'Add ORT workflow',
      content: Buffer.from(workflowContent).toString('base64'),
      branch,
      sha,
    });

    // Step 2: Trigger the workflow
    await octokit.request(`POST /repos/${owner}/${repo}/actions/workflows/ort.yml/dispatches`, {
      ref: branch,
    });

    // Step 3: Poll for workflow completion
    let runId = null;
    for (let i = 0; i < 30; i++) {
      const runs = await octokit.actions.listWorkflowRuns({ owner, repo, workflow_id: 'ort.yml' });
      const latest = runs.data.workflow_runs[0];

      if (latest?.status === 'completed') {
        runId = latest.id;
        break;
      }

      await new Promise(res => setTimeout(res, 10000));
    }

    if (!runId) {
      return NextResponse.json({ error: 'Workflow did not complete in time' }, { status: 504 });
    }
    console.log("step 3 Done !!!!");
    console.log(runId);
    // Step 4: Download and combine artifacts
    const { data: artifactList } = await octokit.actions.listWorkflowRunArtifacts({
      owner,
      repo,
      run_id: runId,
    });

    if (artifactList.artifacts.length === 0) {
      return NextResponse.json({ error: 'No artifacts found' }, { status: 404 });
    }

    let downloadUrl = "";

    const artifactsDir = path.join(process.cwd(), 'public', 'artifacts');
    if (!fs.existsSync(artifactsDir)) {
      fs.mkdirSync(artifactsDir, { recursive: true });
    }
    const artifact = artifactList.artifacts[0]
      const response = await octokit.request(`GET /repos/${owner}/${repo}/actions/artifacts/${artifact.id}/zip`, {
        headers: { Accept: 'application/vnd.github+json' },
      });

      const buffer = Buffer.from(response.data as ArrayBuffer);
      const filename = `artifact-${artifact.id}.zip`;
      const filePath = path.join(artifactsDir, filename);
      fs.writeFileSync(filePath, buffer);

      // Add relative download URL
      downloadUrl =`/artifacts/${filename}`;
    
      console.log(downloadUrl)

    return new NextResponse(downloadUrl, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename="ort-results.zip"',
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}