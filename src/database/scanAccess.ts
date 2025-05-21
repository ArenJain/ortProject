import prisma from "@/lib/db/prisma"

export async function createScan(projectId: string) {
  const scan = await prisma.scan.create({
    data: {
      projectId,
      createdAt: new Date()
    }
  })
  return scan.id
}