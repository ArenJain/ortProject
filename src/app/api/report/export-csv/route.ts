// File: /app/api/report/export-csv/route.ts

import { NextRequest, NextResponse } from "next/server";
import { getFullInventory, getIdDataFromScanId } from "@/database/reportAccess";
import { getRawInventory } from "@/database/rawAccess";

type ExportCsvRequestBody = {
  scanId: number;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ExportCsvRequestBody;

    if (typeof body.scanId !== "number") {
      return NextResponse.json(
        { error: "Invalid scanId in request body" },
        { status: 400 }
      );
    }

    const scanDetails = await getIdDataFromScanId(body.scanId);
    if (!scanDetails?.analyzer?.id || !scanDetails?.advisor?.id) {
      return NextResponse.json(
        { error: "Failed to retrieve analyzer ID from scan" },
        { status: 500 }
      );
    }

    console.log(scanDetails)

    const rawResult : any[] | unknown = await getRawInventory(scanDetails.analyzer.id,scanDetails.advisor.id) ;
    if (!rawResult ) {
      return new NextResponse('No data found', { status: 404 });
    }

    const rawCsv = convertToCSV(rawResult);
    console.log(rawResult);

    const data = await getFullInventory(scanDetails.analyzer.id);

    if (!data || data.length === 0) {
      return NextResponse.json(
        { error: "No data found to export" },
        { status: 404 }
      );
    }

    const headers = Object.keys(data[0]);
    console.log(headers);
    const filteredHeaders = Object.keys(data[0]).filter((h) => h !== "packId");
    const displayHeaders = filteredHeaders.map((h) => {
      if (h === "sources") return "Source Artifact Url";
      if (h === "binaries") return "Binary Artifact Url";
      if (h === "purl") return "Purl";
      if(h === "description") return "Description";
      if(h === "homepageUrl") return "Homepage Url";
      if(h === "declaredLicenses") return "Licenses";
      return h;
    });

    const csvRows: string[] = [
      // Add extra headers after removing 'packId'
      ["Component Name", "Version", ...displayHeaders].join(","),

      ...data.map((row) => {
        const baseRow = filteredHeaders.map((field) => {
          let value = row[field as keyof typeof row];

          // Handle arrays/objects
          if (Array.isArray(value)) {
            if (field === "declaredLicenses") {
              value = value.map((lic: any) => lic.name || lic).join("; ");
            } else if (field === "sources" || field === "binaries") {
              value = value.map((src: any) => src.url || "").join("; ");
            } else {
              value = value.join("; ");
            }
          } else if (typeof value === "object" && value !== null) {
            value = JSON.stringify(value);
          }

          const escaped = String(value ?? "").replace(/"/g, '""');
          return `"${escaped}"`;
        });

        // Still extract pkgName and pkgVersion from packId
        const pkgId = row["packId"] || "";
        let pkgName = "";
        let pkgVersion = "";
        const parts = String(pkgId).split(":");
        if (parts.length >= 4) {
          pkgName = parts[2];
          pkgVersion = parts[3];
        }

        const nameEscaped = `"${pkgName.replace(/"/g, '""')}"`;
        const versionEscaped = `"${pkgVersion.replace(/"/g, '""')}"`;

        return [nameEscaped, versionEscaped, ...baseRow].join(",");
      }),
    ];

    const csvString = csvRows.join("\n");
    const csvBlob = new Blob([rawCsv], { type: "text/csv" });

    return new NextResponse(csvBlob, {
      status: 200,
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": 'attachment; filename="data.csv"',
      },
    });
  } catch (error) {
    console.error("CSV Export Error:", error);
    return NextResponse.json(
      { error: "Failed to generate CSV file" },
      { status: 500 }
    );
  }
}

function convertToCSV(data: any[]): string {
  if (!data.length) return '';

  const headers = Object.keys(data[0]);
  const rows = data.map(row =>
    headers.map(field => {
      const value = row[field];
      // Escape quotes and commas
      return `"${String(value ?? '').replace(/"/g, '""')}"`;
    }).join(',')
  );

  return [headers.join(','), ...rows].join('\n');
}