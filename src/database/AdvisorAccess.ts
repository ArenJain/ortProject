import prisma from "@/lib/db/prisma"
import { create } from "domain"

export async function createAdvisor(scanId: number) {
  const advisor = await prisma.advisor.create({
    data: {
      scanId,
      createdAt: new Date()
    }
  })
  return advisor.id
}

export async function addAdvisorPackages(advisorId: number, packages: any) {
  for (let pkgKey in packages) {
    const pkg = packages[pkgKey];

    await prisma.advisorPackage.create({
      data: {
        name: pkgKey,
        advisorId,
        vulnerabilities: pkg[0].vulnerabilities
          ? {
              create: pkg[0].vulnerabilities.map((v: any) => ({
                vulId: v.id,
                summary: v.summary,
                description: v.description,
                references: v.references
                  ? {
                      create: v.references.map((r: any) => ({
                        url: r.url,
                        scoringSystem: r.scoring_system,
                        severity: r.severity,
                        score : r.score,
                        vector : r.vector,
                      })),
                    }
                  : undefined,
              })),
            }
          : undefined,
      },
    });
  }
}
