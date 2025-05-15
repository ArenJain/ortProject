'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import axios from 'axios';
import { useState } from 'react';

export default function Home() {
  const { data: session } = useSession();
  const [repoUrl, setRepoUrl] = useState('');
  const [status, setStatus] = useState('');
  const [runStatus, setRunStatus] = useState('');
  const [runId, setRunId] = useState<number | null>(null);
  const [artifacts, setArtifacts] = useState<any[]>([]);

  const workflowFile = `name: ORT Analyzer

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
          ort-cli-args: '-P ort.scanner.skipExcluded=true'
          ort-cli-scan-args: '--package-types=PROJECT'
`;

  const getRepoDetails = () => {
    const cleanUrl = repoUrl.replace('https://github.com/', '');
    const [owner, repo] = cleanUrl.split('/');
    return {  owner : "ArenJain", repo :"scc_ui" };
  };

  const pushWorkflow = async () => {
    if (!repoUrl) return alert('Enter a GitHub repo URL');
    const { owner, repo } = getRepoDetails();
    console.log(owner,repo);

    setStatus('Pushing workflow...');
    try {
      const res = await axios.post('/api/github/push', {
        repo: `${owner}/${repo}`,
        path: '.github/workflows/ort.yml',
        content: workflowFile,
      });
      setStatus('✅ Workflow pushed!');
    } catch (err) {
      console.error(err);
      setStatus('❌ Failed to push workflow');
    }
  };

  const triggerWorkflow = async () => {
    const { owner, repo } = getRepoDetails();
    setStatus('Triggering workflow...');

    try {
      await axios.post(
        `https://api.github.com/repos/${owner}/${repo}/actions/workflows/ort.yml/dispatches`,
        { ref: 'main' },
        {
          headers: {
            Authorization: `token ${session?.accessToken}`,
            Accept: 'application/vnd.github.v3+json',
          },
        }
      );
      setStatus('🚀 Workflow triggered!');
    } catch (err) {
      console.error(err);
      setStatus('❌ Failed to trigger workflow');
    }
  };

  const checkWorkflowStatus = async () => {
    const { owner, repo } = getRepoDetails();
    setStatus('Checking workflow status...');

    try {
      const res = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}/actions/workflows/ort.yml/runs`,
        {
          headers: {
            Authorization: `token ${session?.accessToken}`,
            Accept: 'application/vnd.github.v3+json',
          },
        }
      );
      console.log(res);
      const latestRun = res.data.workflow_runs[0];
      if (!latestRun) return setRunStatus('No workflow runs found.');

      setRunStatus(
        `Latest run: #${latestRun.run_number} - ${latestRun.status} (${latestRun.conclusion || 'in progress'})`
      );
      setRunId(latestRun.id);
    } catch (err) {
      console.error(err);
      setRunStatus('❌ Failed to fetch workflow status');
    }
  };

  const downloadArtifacts = async () => {
    if (!runId) return alert('Check workflow status first.');
  
    const { owner, repo } = getRepoDetails();
    setStatus('Fetching artifacts...');
  
    try {
      const res = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}/actions/runs/${runId}/artifacts`,
        {
          headers: {
            Authorization: `token ${session?.accessToken}`,
            Accept: 'application/vnd.github.v3+json',
          },
        }
      );
      console.log(res);
      const artifacts = res.data.artifacts;
      setArtifacts(artifacts);
  
      if (artifacts.length === 0) return setStatus('No artifacts found for latest run.');
  
      for (const artifact of artifacts) {
        const response = await axios.get(
          `https://api.github.com/repos/${owner}/${repo}/actions/artifacts/${artifact.id}/zip`,
          {
            headers: {
              Authorization: `token ${session?.accessToken}`,
              Accept: 'application/vnd.github.v3+json',
            },
            responseType: 'blob',
          }
        );
  
        // Download the file in browser
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${artifact.name}.zip`);
        document.body.appendChild(link);
        link.click();
        link.remove();
      }
  
      setStatus('✅ Artifacts downloaded.');
    } catch (err) {
      console.error(err);
      setStatus('❌ Failed to download artifacts.');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">GitHub ORT Workflow Runner</h1>

      {session ? (
        <>
          <p className="mb-2">Logged in as: <strong>{session.user?.email}</strong></p>

          <input
            type="text"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            placeholder="https://github.com/user/repo"
            className="border p-2 rounded w-full mb-4"
          />

          <div className="flex flex-col gap-2">
            <button onClick={pushWorkflow} className="bg-blue-600 text-white py-2 px-4 rounded">
              📦 Push Workflow
            </button>
            <button onClick={triggerWorkflow} className="bg-green-600 text-white py-2 px-4 rounded">
              🚀 Trigger Workflow
            </button>
            <button onClick={checkWorkflowStatus} className="bg-gray-800 text-white py-2 px-4 rounded">
              🔍 Check Workflow Status
            </button>
            <button onClick={downloadArtifacts} className="bg-purple-600 text-white py-2 px-4 rounded">
  ⬇️ Download Artifacts
</button>

            <button onClick={() => signOut()} className="bg-red-500 text-white py-2 px-4 rounded">
              Sign Out
            </button>
          </div>

          {status && <p className="mt-4 text-blue-700">{status}</p>}
          {runStatus && <p className="mt-2 text-green-700">{runStatus}</p>}
        </>
      ) : (
        <button onClick={() => signIn('github')} className="bg-black text-white py-2 px-4 rounded">
          Sign in with GitHub
        </button>
      )}
    </div>
  );
}
