import prisma from "@/lib/db/prisma";


export async function getIdDataFromScanId(scanId:number) {
    const data = await prisma.scan.findUnique({
        where: {
            id : scanId,
        },
        select:{
            analyzer: true,
            scanner: true,
            advisor : true,

        }
    })
    return data;
}

export async function getFullInventory(analyzerId:number) {
    const data = await prisma.analyzerPackage.findMany({
        where:{
            analyzerId : analyzerId,
        },
        select: {
            packId: true,
            purl: true,
            description: true,
            homepageUrl: true,
            declaredLicenses : {
                select: {
                    name: true,
                }
            },
            sources : {
                select:{
                    url: true,
                }
            },
            binaries : {
                select:{
                    url: true,
                }
            },
        }
        
    })
    // console.log(data);
    // console.log(JSON.stringify(data));
    return data;
}

export async function getCopyrights(scannerId: number){
    const result = await prisma.copyrights.findMany({
        where:{
            scannerId : scannerId,
        },
        select:{
            path: true,
            statement:true,
        }
    });
    return result;
}

export async function getLicenses(scannerId: number){
    const result = await prisma.licenses.findMany({
        where:{
            scannerId : scannerId,
        },
        select:{
            path: true,
            licenseName:true,
        }
    });
    return result;
}

export async function getVulnerability(advisorId:number) {
    const result =    await prisma.advisorPackage.findMany({
        where:{
            advisorId: advisorId,
            vulnerabilities: {some : {}},
        },
        select :{
            name:true,
            vulnerabilities:{
                select:{
                    vulId:true,
                    description:true,
                    references:{
                        take: 1,
                        where:{
                            scoringSystem : "CVSS_V3",
                        },
                        select:{
                            score:true,
                            severity:true,
                        }
                    }
                }
            }

        }
    });
    return result;
}