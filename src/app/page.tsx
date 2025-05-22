'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import axios from 'axios';
import { useState } from 'react';
import { Loader2, Github } from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Home() {
  const { data: session } = useSession();
  const [repoUrl, setRepoUrl] = useState('');
  const [projectName, setProjectName] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const handleSubmit = async () => {
    setDownloadUrl(null);
    if (!repoUrl.trim() || !projectName.trim()) {
      setMessage('⚠️ Please enter both repository URL and project name.');
      return;
    }

    setStatus('submitting');
    setMessage('🚀 Creating and triggering workflow...');
    const projName = projectName.trim().split(" ").join("-");
    console.log(projName);

    try {
      const response = await axios.post('/api/github/run-ort', {
        repoUrl,
         projectName : projName,
      });

      if (response.data) {
        setDownloadUrl(response.data);
        setMessage('✅ Workflow complete! Ready to download results.');
        setStatus('success');
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (err: any) {
      console.error(err);
      setMessage('❌ Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  const isLoading = status === 'submitting';

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
                onClick={() => signOut({ callbackUrl: "/" })}
                className="text-sm text-red-600 hover:underline"
              >
                Sign Out
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">
                  GitHub Repo URL
                </label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2 text-sm"
                  placeholder="e.g., https://github.com/user/repo"
                  value={repoUrl}
                  onChange={(e) => setRepoUrl(e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">
                  Project Name
                </label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2 text-sm"
                  placeholder="e.g., my-awesome-project"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className={`w-full transition text-white font-medium py-2 px-4 rounded flex items-center justify-center gap-2 ${
                  isLoading
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isLoading ? <Loader2 className="animate-spin w-4 h-4" /> : '🔍 Scan Repo'}
              </button>

              {message && <p className="text-sm text-gray-700">{message}</p>}

              {downloadUrl && (
                <a
                  href={downloadUrl}
                  download="ort-results.zip"
                  className="block text-center mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
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
