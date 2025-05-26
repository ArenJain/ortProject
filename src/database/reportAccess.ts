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