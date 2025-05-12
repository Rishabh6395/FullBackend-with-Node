import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const main = async () => {
  // create (Insert Data)
  // const user = await prisma.user.create({
  //   data: {
  //     name: "rishabh",
  //     email: "rishabh@gmail.com",
  //   },
  // });
  // console.log(user);

  // Multiple User (Insert Data)
  const newUser = await prisma.user.createMany({
    data: [
      {
        name: "jhon",
        email: "jhon@gmail.com",
      },
      {
        name: "jane",
        email: "jane@exmample.com",
      },
    ],
  });
  console.log(newUser);
};

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
