import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  try {
    // const newUser = await prisma.user.create({
    //   data: {
    //     name: "pabel",
    //     email: "pabel3339@gmail.com",
    //   },
    // });
    const newUser = await prisma.user.findUnique({
      where: {
        id: 3,
      },
    });
    console.log(newUser);
  } catch (error) {
    console.log(error);
  }
}

main();
