import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const main = async () => {
  // create (Insert Data)
  const user = await prisma.user.create({
    data: {
      name: "rishabh",
      email: "rishabh@gmail.com",
    },
  });
  console.log(user);
};

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
