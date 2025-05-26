import prisma from "@/lib/db/prisma";

export async function getRawInventory(advisorId: number, analyzerId: number) {
  const result = await prisma.$queryRaw`
  SELECT 
    ap.packId AS [Component Name],
    ap.purl AS Purl,
    ap.homepageUrl AS [Homepage Url],
    dlp.[spdxExpression] AS License,
    ba.url AS [Binary Artifact Url],
    sa.url AS [Source Artifact Url],
    CASE 
      WHEN adv.id IS NOT NULL THEN 1
      ELSE 0
    END AS [Security Vulnerability]
  FROM 
    AnalyzerPackage ap
  LEFT JOIN 
    AdvisorPackage adv ON ap.packId = adv.name AND adv.advisorId = ${advisorId}
  LEFT JOIN 
    DeclaredLicensesProcessed dlp ON ap.id = dlp.packageId
  LEFT JOIN 
    BinaryArtifact ba ON ap.id = ba.packageId
  LEFT JOIN 
    SourceArtifact sa ON ap.id = sa.packageId
  WHERE 
    ap.analyzerId = ${analyzerId};
`;
  return result;
}
