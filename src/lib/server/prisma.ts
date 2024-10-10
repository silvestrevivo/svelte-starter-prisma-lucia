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
//   //       id: 'b1d231d5-c22e-4dca-b58e-82b284f0a6b8',
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
