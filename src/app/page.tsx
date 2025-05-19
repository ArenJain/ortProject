'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import axios from 'axios';
import { useState } from 'react';
import { Loader2, Github } from 'lucide-react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export default function Home() {
  const { data: session } = useSession();
  const [repoUrl, setRepoUrl] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [artifactReady, setArtifactReady] = useState(false);

  const getRepoDetails = () => {
    const parts = repoUrl.split('/');
    return {
      owner:  'ArenJain',
      repo:  'scc_ui',
    };
  };

  const pushWorkflowAndRun = async () => {
    setStatus('');
    setLoading(true);
    setArtifactReady(false);
    setDownloadUrl(null);

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
          ort-cli-args : '-P ort.scanner.skipExcluded=true'
          ort-cli-scan-args: '--package-types=PROJECT'`;

    try {
      const { owner, repo } = getRepoDetails();

      await axios.post('/api/github/push', {
        repo: `${owner}/${repo}`,
        path: '.github/workflows/ort.yml',
        content: workflowFile,
      });

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

      setStatus('🚀 Workflow triggered. Monitoring run...');
      pollWorkflowStatus(owner, repo);
    } catch (error) {
      console.error(error);
      setStatus('❌ Failed to push or trigger workflow.');
      setLoading(false);
    }
  };

  const pollWorkflowStatus = async (owner: string, repo: string) => {
    const interval = setInterval(async () => {
      const res = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}/actions/workflows/ort.yml/runs`,
        {
          headers: {
            Authorization: `token ${session?.accessToken}`,
            Accept: 'application/vnd.github.v3+json',
          },
        }
      );

      const latestRun = res.data.workflow_runs[0];

      if (latestRun.status === 'completed') {
        clearInterval(interval);
        setStatus(`✅ Run #${latestRun.run_number} completed: ${latestRun.conclusion}`);
        downloadArtifacts(owner, repo, latestRun.id);
        setLoading(false);
      } else {
        setStatus(`⌛ Waiting... Current status: ${latestRun.status}`);
      }
    }, 10000);
  };

  const downloadArtifacts = async (owner: string, repo: string, runId: number) => {
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

      const artifacts = res.data.artifacts;
      if (artifacts.length === 0) {
        setStatus('❌ No artifacts found');
        return;
      }

      const zip = new JSZip();

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
        // console.log(response);
        const artifactZip = await JSZip.loadAsync(response.data);
        artifactZip.forEach((relativePath, file) => {
          zip.file(`${artifact.name}/${relativePath}`, file.async('blob'));
        });
        console.log(artifactZip);
      }
      console.log(zip);
      const finalZip = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(finalZip);
      console.log(url);
      setDownloadUrl(url);
      setArtifactReady(true);
    } catch (error) {
      console.error('Failed to download artifacts:', error);
      setStatus('❌ Failed to download artifacts.');
    }
  };
  const handleSubmit = async () => {
    const response = await axios.post('/api/github/run-ort', {
        repoUrl
      });
    console.log(response)
    setDownloadUrl(response.data)
  }


  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-md p-8 space-y-6">
        {session ? (
          <>
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-800">
                👋 Welcome, {session.user?.email}
              </h1>
              <button
                onClick={() => signOut()}
                className="text-sm text-red-600 hover:underline"
              >
                Sign Out
              </button>
            </div>

            <div className="space-y-3">
              <input
                type="text"
                className="w-full border rounded px-3 py-2 text-sm"
                placeholder="GitHub Repo URL (e.g., https://github.com/user/repo)"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
              />
              <button
                onClick={handleSubmit}
                disabled={loading || !repoUrl}
                className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-2 px-4 rounded flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin w-4 h-4" /> : '🔍 Scan Repo'}
              </button>
              {status && <p className="text-sm text-gray-600">{status}</p>}
              { downloadUrl && (
                <a
                  href={downloadUrl}
                  download="ort-results.zip"
                  className="block text-center mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                >
                  ⬇️ Download ORT Artifacts
                </a>
              )}
            </div>
          </>
        ) : (
          <button
            onClick={() => signIn('github')}
            className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-900 flex items-center justify-center gap-2"
          >
            <Github className="w-4 h-4" /> Sign in with GitHub
          </button>
        )}
      </div>
    </div>
  );
}
