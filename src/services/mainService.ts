import { addAnalyzerPackages, createAnalyzer } from "@/database/analyzerAccess";
import { createProject, getProjectByName } from "@/database/projectAccess";
import { createScan } from "@/database/scanAccess";

export async function createScanService(userId : string , reportData : any, projectName : string) {
    let projectId = await getProjectByName(projectName,userId);
    if (!projectId){
        projectId = await createProject(userId,{name:projectName});
    }
    const scanId = await createScan(projectId);
    const analyzerId = await createAnalyzer(scanId);
    const analyzerPkg = await addAnalyzerPackages(analyzerId,reportData.analyzer.result.packages);
}