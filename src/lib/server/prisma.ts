import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// async function main() {
//   const users = await prisma.user.findMany();
//   return users;

//   //   const newUser = await prisma.user.create({
//   //     data: {
//   //       username: 'lucia',
//   //       email: 'lucia@lucia.com',
//   //       password: 'this is a secret',
//   //     },
//   //   });
//   //   return newUser;

//   //   const userRemoved = await prisma.user.delete({
//   //     where: {
//   //       id: 'd8001b71-200b-40fd-9958-5ef39d3dff38',
//   //     },
//   //   });

//   //   return userRemoved;
// }

// main()
//   .then(data => {
//     prisma.$disconnect();
//     console.log(data);
//   })
//   .catch(error => {
//     prisma.$disconnect();
//     console.error(error);
//   });

export default prisma;
