import prisma from "@/lib/db/prisma"

export async function createScanner(scanId: number) {
  const scanner = await prisma.scanner.create({
    data: {
      scanId,
      createdAt: new Date()
    }
  })
  return scanner.id
}

export async function addLicensesAndCopyrights (scannerId : number, packages : any){
    // console.log(packages);
    const licenses = await prisma.licenses.createMany({
        data : packages.licenses.map((l:any) => ({
            createdAt: new Date(),
            licenseName : l.license,
            path : l.location.path,
            startLine : l.location.start_line,
            endLine : l.location.end_line,
            score: l.score,
            scannerId

        }))
    });
    const copyrights = await prisma.copyrights.createMany({
        data : packages.copyrights.map((l:any) => ({
            createdAt: new Date(),
            statement : l.statement,
            path : l.location.path,
            startLine : l.location.start_line,
            endLine : l.location.end_line,
            scannerId

        }))
    });

    return {licenses , copyrights}
}