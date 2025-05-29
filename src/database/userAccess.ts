import prisma from '@/lib/db/prisma'
import { v4 as uuidv4 } from 'uuid'

export async function createUser(userdata : any) {
  const userId = uuidv4()
  const user = await prisma.user.create({
    data: {
      userId,
      userName: userdata.userName ?? '',
      email: userdata.email ?? '',
      password: userdata.password ?? '',
      createdAt: new Date(),
    }
  })
  return user.userId
}

export async function getUserByEmail(email: string) {
  if (!email) throw new Error("Email is required");

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return user;
}

export async function getUserByUsername(name:string){
  if (!name) throw new Error("UserName is required");

  const user = await prisma.user.findFirst({
    where: {
      userName: name,
    },
  });
  console.log(user);
  return user;
}