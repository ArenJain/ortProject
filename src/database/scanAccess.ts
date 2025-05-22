import prisma from "@/lib/db/prisma"

export async function createScan(projectId: string, runId :string) {
  const scan = await prisma.scan.create({
    data: {
      projectId,
      gitRunId: runId,
      createdAt: new Date()
    }
  })
  return scan.id
}