// File: /app/api/report/export-csv/route.ts
import { NextRequest, NextResponse } from "next/server";
import {
    getCopyrights,
  getFullInventory,
  getIdDataFromScanId,
  getLicenses,
  getVulnerability,
} from "@/database/reportAccess";
import { getRawInventory } from "@/database/rawAccess";
import ExcelJS from "exceljs";
import { version } from "os";

type ExportXlsxRequestBody = {
  scanId: number;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ExportXlsxRequestBody;

    if (typeof body.scanId !== "number") {
      return NextResponse.json({ error: "Invalid scanId" }, { status: 400 });
    }

    const scanDetails = await getIdDataFromScanId(body.scanId);
    if (
      !scanDetails?.analyzer?.id ||
      !scanDetails?.advisor?.id ||
      !scanDetails?.scanner?.id
    ) {
      return NextResponse.json(
        { error: "Missing scan details" },
        { status: 500 }
      );
    }

    // console.log(scanDetails);

    const rawData = await getRawInventory(
      scanDetails.analyzer.id,
      scanDetails.advisor.id
    );
    // const fullData = await getFullInventory(scanDetails.analyzer.id);
    const licensesData = await getLicenses(scanDetails.scanner.id);
    const copyrightsData = await getCopyrights(scanDetails.scanner.id);
    const vulnerabilitiesData = await getVulnerability(scanDetails.advisor.id);

    const workbook = new ExcelJS.Workbook();

    // Sheet 1: Raw Inventory
    const rawSheet = workbook.addWorksheet("Full Inventory");
    if (Array.isArray(rawData) && rawData.length) {
      const filteredHeaders = Object.keys(rawData[0]).filter(
        (h) => h !== "packId"
      );
      const headers = ["Component Name", "Version", ...filteredHeaders];
      rawSheet.addRow(headers);

      rawData.forEach((row) => {
        const pkgId = row["packId"] || "";
        const parts = String(pkgId).split(":");
        const pkgName = parts[2] || "";
        const pkgVersion = parts[3] || "";

        const values = filteredHeaders.map((field) => {
          let val = row[field as keyof typeof row];
          if (Array.isArray(val)) {
            return val.join("; ");
          } else if (typeof val === "object" && val !== null) {
            return JSON.stringify(val);
          }
          return val ?? "";
        });

        rawSheet.addRow([pkgName, pkgVersion, ...values]);
      });
    }

    // Sheet 2: Full Inventory
    // const fullSheet = workbook.addWorksheet("Full Inventory");

    // if (Array.isArray(fullData) && fullData.length) {
    //   const filteredHeaders = Object.keys(fullData[0]).filter(
    //     (h) => h !== "packId"
    //   );
    //   const headers = ["Component Name", "Version", ...filteredHeaders];
    //   fullSheet.addRow(headers);

    //   fullData.forEach((row) => {
    //     const pkgId = row["packId"] || "";
    //     const parts = String(pkgId).split(":");
    //     const pkgName = parts[2] || "";
    //     const pkgVersion = parts[3] || "";

    //     const values = filteredHeaders.map((field) => {
    //       let val = row[field as keyof typeof row];
    //       if (Array.isArray(val)) {
    //         if (field === "declaredLicenses") {
    //           return val.map((lic: any) => lic.name).join("; ");
    //         } else if (field === "sources" || field === "binaries") {
    //           return val.map((src: any) => src.url).join("; ");
    //         }
    //         return val.join("; ");
    //       } else if (typeof val === "object" && val !== null) {
    //         return JSON.stringify(val);
    //       }
    //       return val ?? "";
    //     });

    //     fullSheet.addRow([pkgName, pkgVersion, ...values]);
    //   });
    // }

    //sheet : 2 Licenses data
    const licensesSheet = workbook.addWorksheet("Files with License");

    if (Array.isArray(licensesData) && licensesData.length) {
      // Define column structure
      licensesSheet.columns = [
        { header: "File Path", key: "path", width: 50 },
        { header: "Licenses", key: "licenses", width: 30 },
      ];

      // Add each row as an object
      licensesData.forEach((item) => {
        licensesSheet.addRow({
          path: item.path,
          licenses: item.licenseName,
        });
      });
    }
    // console.log(licensesData);

     //sheet : 3 Copyright data

     const CopyrightsSheet = workbook.addWorksheet("Files with Copyrights");

    if (Array.isArray(copyrightsData) && copyrightsData.length) {
      // Define column structure
      CopyrightsSheet.columns = [
        { header: "File Path", key: "path", width: 50 },
        { header: "Copyrights", key: "copyrights", width: 30 },
      ];

      // Add each row as an object
      copyrightsData.forEach((item) => {
        CopyrightsSheet.addRow({
          path: item.path,
          copyrights: item.statement,
        });
      });
    }

    //Sheet - 4 Security Vulnerability
    // console.log(vulnerabilitiesData);
    const vulnerabilitySheet = workbook.addWorksheet("Security Vulnerability");

    if (Array.isArray(vulnerabilitiesData) && vulnerabilitiesData.length) {
      // Define column structure
      vulnerabilitySheet.columns = [
        { header: "CVE ID", key: "id", width: 50 },
        { header: "Component Name", key: "name", width: 50 },
        { header: "Version", key: "version", width: 50 },
        { header: "CVSS 3.0 Score", key: "score", width: 50 },
        { header: "Description", key: "description", width: 50 },
        { header: "Severity", key: "severity", width: 50 },
      ];

      // Add each row as an object
      vulnerabilitiesData.forEach((item) => {
        const pkgId = item.name || "";
        const parts = String(pkgId).split(":");
        const pkgName = parts[2] || "";
        const pkgVersion = parts[3] || "";
        // if (item.vulnerabilities.length > 1)
        item.vulnerabilities.forEach((vul) => {
          vulnerabilitySheet.addRow({
            id: vul.vulId,
            name: pkgName,
            version: pkgVersion,
            score: vul.references[0].score,
            description: vul.description,
            severity: vul.references[0].severity,
          });
        });
      });
    }



    // Create Excel buffer
    const buffer = await workbook.xlsx.writeBuffer();

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename=report.xlsx`,
      },
    });
  } catch (error) {
    console.error("Excel Export Error:", error);
    return NextResponse.json(
      { error: "Failed to generate Excel file" },
      { status: 500 }
    );
  }
}
