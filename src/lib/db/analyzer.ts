// import { PrismaClient } from '../../generated/prisma'
// import { v4 as uuidv4 } from 'uuid'

// const prisma = new PrismaClient()

// export async function createUser() {
//   const userId = uuidv4()
//   const user = await prisma.user.create({
//     data: {
//       userId,
//       userName: 'John Doe',
//       email: 'john@example.com',
//       password: 'securepassword123',
//       createdAt: new Date(),
//     }
//   })
//   return user.userId
// }

// export async function createProject(userId: string) {
//   const project = await prisma.project.create({
//     data: {
//       id: 'project-123',
//       name: 'Security Scanner',
//       createdAt: new Date(),
//       userId
//     }
//   })
//   return project.id
// }

// export async function createScan(projectId: string) {
//   const scan = await prisma.scan.create({
//     data: {
//       projectId,
//       createdAt: new Date()
//     }
//   })
//   return scan.id
// }



// export async function createAnalyzer(scanId: number) {
//   const analyzer = await prisma.analyzer.create({
//     data: {
//       scanId,
//       createdAt: new Date()
//     }
//   })
//   return analyzer.id
// }

// export async function addAnalyzerPackages(analyzerId: number, packages: any[]) {
//   const createdPackageIds: number[] = []

//   for (const pkg of packages) {
//     const createdPackage = await prisma.analyzerPackage.create({
//       data: {
//         analyzerId,
//         packId: pkg.packId ?? '',
//         purl: pkg.purl ?? '',
//         description: pkg.description ?? '',
//         homepageUrl: pkg.homepage_url ?? '',
//         createdAt: new Date(),

//         authors: pkg.authors && pkg.authors.length > 0
//           ? {
//               create: pkg.authors.map((name: string) => ({ name }))
//             }
//           : undefined,

//         binaries: pkg.binary_artifact && pkg.binary_artifact.length > 0
//           ? {
//               create: pkg.binary_artifact.map((b: any) => ({ url: b.url }))
//             }
//           : undefined,

//         sources: pkg.source_artifact && pkg.source_artifact.length > 0
//           ? {
//               create: pkg.source_artifact.map((s: any) => ({ url: s.url }))
//             }
//           : undefined,

//         vcsList: pkg.vcs && pkg.vcs.length > 0
//           ? {
//               create: pkg.vcs.map((v: any) => ({
//                 type: v.type,
//                 url: v.url,
//                 revision: v.revision,
//                 path: v.path
//               }))
//             }
//           : undefined,

//         vcsProcessed: pkg.vcs_processed && pkg.vcs_processed.length > 0
//           ? {
//               create: pkg.vcs_processed.map((vp: any) => ({
//                 type: vp.type,
//                 url: vp.url,
//                 revision: vp.revision,
//                 path: vp.path
//               }))
//             }
//           : undefined
//       }
//     })
//     createdPackageIds.push(createdPackage.id)
//   }

//   return createdPackageIds
// }



