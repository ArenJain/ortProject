"use client";

import axios from "axios";
import { useState } from "react";
import { Loader2, FileDown } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

type ScanFormProps = {
  sessionName: string;
  onSignOut: () => void;
};

export default function ScanForm({ sessionName, onSignOut }: ScanFormProps) {
  const [repoUrl, setRepoUrl] = useState("");
  const [projectName, setProjectName] = useState("");
  const [tstatus, setTstatus] = useState<Status>("idle");
  const [isExporting, setIsExporting] = useState(false);
  const [message, setMessage] = useState("");
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [scanId, setScanId] = useState<number>(0);

  const handleSubmit = async () => {
    setDownloadUrl(null);
    if (!repoUrl.trim() || !projectName.trim()) {
      setMessage("⚠️ Please enter both repository URL and project name.");
      return;
    }

    setTstatus("submitting");
    setMessage("🚀 Creating and triggering workflow...");
    const projName = projectName.trim().split(" ").join("-");

    try {
      const response = await axios.post("/api/github/run-ort", {
        repoUrl,
        projectName: projName,
      });

      if (response.data && response.data.scanId !== -1) {
        setDownloadUrl(response.data.downloadUrl);
        setScanId(response.data.scanId);
        setMessage("✅ Workflow complete! Ready to download results.");
        setTstatus("success");
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Something went wrong. Please try again.");
      setTstatus("error");
    }
  };

  const handleExport = async () => {
    setIsExporting(true);
    try {
      const response = await axios.post(
        "/api/report/export-xlsx",
        { scanId },
        {
          responseType: "blob",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const blob = new Blob([response.data], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${projectName}__${Date.now()}.xlsx`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("❌ Failed to download CSV:", error);
    } finally {
      setIsExporting(false);
    }
  };

  const isSubmitting = tstatus === "submitting";

  return (
    <div className="flex flex-col h-full w-full p-8 bg-white rounded-xl shadow-sm overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          👋 Create Project Scan
        </h1>
      </div>

      <div className="flex flex-col gap-5 w-full max-w-2xl ">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            GitHub Repo URL
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., https://github.com/user/repo"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Project Name
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., my-awesome-project"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg font-medium text-white transition ${
            isSubmitting
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isSubmitting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            "🔍 Scan Repo"
          )}
        </button>

        {/* Warning about navigation */}
        {isSubmitting && (
          <p className="text-sm text-yellow-600 mt-2">
            ⚠️ Please do not refresh or navigate away while the scan is in
            progress.
          </p>
        )}

        {/* Message output */}
        {message && (
          <p className="text-sm text-gray-700 flex items-center gap-2 mt-2">
            {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
            {message}
          </p>
        )}

        {downloadUrl && (
          <>
            <a
              href={downloadUrl}
              download={`ort-results_${projectName}.zip`}
              className="block text-center mt-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
            >
              ⬇️ ORT Artifacts
            </a>

            <button
              onClick={handleExport}
              className="w-full flex items-center justify-center gap-2 mt-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
            >
              {isExporting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <FileDown className="w-4 h-4" /> Project Report
                </>
              )}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
