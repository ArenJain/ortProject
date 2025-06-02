"use client";

import { useState } from "react";
import axios from "axios";
import { Loader2, FileDown, ArrowRight, ArrowLeft, X } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

// type ScanFormProps = {
//   sessionName: string;
//   onSignOut: () => void;
// };

const defaultPolicies = {
  Critical: ["AGPL-3.0", "SSPL", "EUPL-1.2", "RSAL"],
  High: ["GPL-2.0", "GPL-3.0", "Non-Polyform Commercial License"],
  Medium: ["EPL-2.0", "MPL-2.0", "LGPL-3.0"],
  Low: ["MIT", "Apache-2.0", "BSD-2-Clause", "BSD-3-Clause"],
};

export default function ScanForm2() {
  const [step, setStep] = useState(1);
  const [repoUrl, setRepoUrl] = useState("");
  const [projectName, setProjectName] = useState("");
  const [policies, setPolicies] = useState<Record<string, string[]>>(defaultPolicies);
  const [tstatus, setTstatus] = useState<Status>("idle");
  const [isExporting, setIsExporting] = useState(false);
  const [message, setMessage] = useState("");
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [scanId, setScanId] = useState<number>(0);

  const isSubmitting = tstatus === "submitting";

  const handleLicenseChange = (severity: string, index: number, value: string) => {
    const updated = [...(policies[severity] || [])];
    updated[index] = value;
    setPolicies({ ...policies, [severity]: updated });
  };

  const addLicense = (severity: string) => {
    setPolicies({ ...policies, [severity]: [...(policies[severity] || []), ""] });
  };

  const deleteLicense = (severity: string, index: number) => {
    const updated = [...(policies[severity] || [])];
    updated.splice(index, 1);
    setPolicies({ ...policies, [severity]: updated });
  };

  const handleSubmit = async () => {
    if (!repoUrl.trim() || !projectName.trim()) {
      setMessage("⚠️ Please enter both repository URL and project name.");
      return;
    }

    setDownloadUrl(null);
    setTstatus("submitting");
    setMessage("🚀 Creating and triggering workflow...");

    try {
      const projName = projectName.trim().split(" ").join("-");
      const response = await axios.post("/api/github/run-ort", {
        repoUrl,
        projectName: projName,
        policies,
      });

      if (response.data && response.data.scanId !== -1) {
        setScanId(response.data.scanId);
        setDownloadUrl(response.data.downloadUrl);
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

      const blob = new Blob([response.data], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${projectName}__${Date.now()}.xlsx`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("❌ Failed to download report:", error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="flex flex-col h-full w-full p-8 bg-white rounded-xl shadow-sm overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          {step === 1 ? "🔍 Create Project Scan" : "🛡️ Customize License Policies"}
        </h1>
      </div>

      {step === 1 && (
        <div className="flex flex-col gap-5 w-full max-w-2xl">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              GitHub Repo URL
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2 text-sm"
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
              className="w-full border rounded-lg px-4 py-2 text-sm"
              placeholder="e.g., my-project"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>

          <button
            onClick={() => setStep(2)}
            className="flex items-center gap-2 justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          >
            Continue <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-6 w-full max-w-2xl">
          {Object.entries(policies).map(([severity, licenses]) => (
            <div key={severity}>
              <h2 className="font-semibold text-md mb-2">{severity}</h2>
              <div className="flex-col">
              <div className="flex flex-wrap gap-2">
                {licenses.map((license, index) => (
                  <div key={index} className="flex items-center gap-1 border rounded px-2 py-1 bg-gray-100">
                    <input
                      type="text"
                      className="border-none bg-transparent text-sm w-28"
                      value={license}
                      onChange={(e) => handleLicenseChange(severity, index, e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => deleteLicense(severity, index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
                </div>
                <button
                  type="button"
                  onClick={() => addLicense(severity)}
                  className="text-blue-600 text-sm hover:underline"
                >
                  + Add License
                </button>
              </div>
            </div>
          ))}

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => setStep(1)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white ${
                isSubmitting ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Start Scan"}
            </button>
          </div>
        </div>
      )}

      {isSubmitting && (
        <p className="text-sm text-yellow-600 mt-4">
          ⚠️ Please do not refresh or navigate away while the scan is running.
        </p>
      )}

      {message && (
        <p className="text-sm text-gray-700 flex items-center gap-2 mt-4">
          {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
          {message}
        </p>
      )}

      {downloadUrl && (
        <div className="mt-4 w-1/3 flex flex-col gap-3">
          <a
            href={downloadUrl}
            download={`ort-results_${projectName}.zip`}
            className="block bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-center"
          >
            ⬇️ ORT Artifacts
          </a>
          <button
            onClick={handleExport}
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
          >
            {isExporting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <>
                <FileDown className="w-4 h-4" /> Export Project Report
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
