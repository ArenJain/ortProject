import prisma from "@/lib/db/prisma"
import { v4 } from "uuid"

export async function createProject(userId: string , projectData : any) {
  const project = await prisma.project.create({
    data: {
      id: v4(),
      name: projectData.name ?? '',
      createdAt: new Date(),
      userId
    }
  })
  return project.id
}

export async function getProjectByName(projectName : string, userId : string){
    const project = await prisma.project.findUnique({
        where :{
            userId_name : {
                userId : userId,
                name : projectName
            }
            
        }
    });
    return project?.id;
}