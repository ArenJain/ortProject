import { addAnalyzerPackages, createAnalyzer } from "@/database/analyzerAccess";
import { createProject, getProjectByName } from "@/database/projectAccess";
import { createScan } from "@/database/scanAccess";
import { addLicensesAndCopyrights, createScanner } from "@/database/scannerAccess";

export async function createScanService(userId : string , reportData : any, projectName : string , runId : string) {
    let projectId = await getProjectByName(projectName,userId);
    if (!projectId){
        projectId = await createProject(userId,{name:projectName});
    }
    const scanId = await createScan(projectId,runId);
    const analyzerId = await createAnalyzer(scanId);
    const analyzerPkg = await addAnalyzerPackages(analyzerId,reportData.analyzer.result.packages);
    const scannerId = await createScanner(scanId);
    const licAndCopyrights = await addLicensesAndCopyrights(scannerId, reportData.scanner.scan_results[0].summary);
}