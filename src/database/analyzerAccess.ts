import prisma from "@/lib/db/prisma"

export async function createAnalyzer(scanId: number) {
  const analyzer = await prisma.analyzer.create({
    data: {
      scanId,
      createdAt: new Date()
    }
  })
  return analyzer.id
}

export async function addAnalyzerPackages(analyzerId: number, packages: any[]) {
  const createdPackageIds: number[] = []

  for (const pkg of packages) {
    const createdPackage = await prisma.analyzerPackage.create({
      data: {
        analyzerId,
        packId: pkg.id ?? '',
        purl: pkg.purl ?? '',
        description: pkg.description ?? '',
        homepageUrl: pkg.homepage_url ?? '',
        createdAt: new Date(),

        authors: pkg.authors && pkg.authors.length > 0
          ? {
              create: pkg.authors.map((name: string) => ({ name }))
            }
          : undefined,
        
        declaredLicenses : pkg.declared_licenses && pkg.declared_licenses.length > 0
          ? {
              create: pkg.declared_licenses.map((name: string) => ({ name }))
            }
          : undefined,
        
        declaredLicensesProcessed : pkg.declared_licenses_processed && pkg.declared_licenses_processed.spdx_expression 
          ? {
              create: { spdxExpression: pkg.declared_licenses_processed.spdx_expression }
            }
          : undefined,

        binaries: pkg.binary_artifact 
          ? {
              create: { url: pkg.binary_artifact.url }
            }
          : undefined,

        sources: pkg.source_artifact 
          ? {
              create: { url: pkg.source_artifact.url }
            }
          : undefined,

        vcsList: pkg.vcs 
          ? {
              create: {
                type: pkg.vcs.type,
                url: pkg.vcs.url,
                revision: pkg.vcs.revision,
                path: pkg.vcs.path
              }
            }
          : undefined,

        vcsProcessed: pkg.vcs_processed 
          ? {
              create: {
                type: pkg.vcs_processed.type,
                url: pkg.vcs_processed.url,
                revision: pkg.vcs_processed.revision,
                path: pkg.vcs_processed.path
              }
            }
          : undefined
      }
    })
    createdPackageIds.push(createdPackage.id)
  }

  return createdPackageIds
}

