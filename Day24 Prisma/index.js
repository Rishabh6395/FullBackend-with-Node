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
  // const newUser = await prisma.user.createMany({
  //   data: [
  //     {
  //       name: "jhon",
  //       email: "jhon@gmail.com",
  //     },
  //     {
  //       name: "jane",
  //       email: "jane@exmample.com",
  //     },
  //   ],
  // });
  // console.log(newUser);
  // READ (FETCH DATA)
  // GET ALL USERS ------
  // const users = await prisma.user.findMany()
  // console.log(users)
  // FIND UNIQUE WITH ID
  // const users = await prisma.user.findUnique({
  //   where: { id: 11 },
  // });
  // console.log(users);

  // GET USERS WITH FILTERING-------
  // const users = await prisma.user.findMany({
  //   where: { name: "rishabh" },
  // });
  // console.log(users);
  // UPDATE (MODIFY DATA)
  // Update One User
  // const updateUser = await prisma.user.update({
  //   where: { id: 10 },
  //   data: { name: "bobThebuilder" },
  // });
  // console.log(updateUser);

  // UPDATE MULTIPLE USERS
  // const updateUser = await prisma.user.updateMany({
  //   where: { id: 10 },
  //   data: { email: "jhon@gmail.com" },
  // });
  // console.log(updateUser);

  // DELETE (REMOVE USER)
  // const delUser = await prisma.user.delete({
  //   where: { id: 10 },
  // });
  // console.log(delUser);

  // DELETE (REMOVE USER)
  // delete Multiple user
  const deleteUsers = await prisma.user.deleteMany({
    where: [{ id: 1 }, { id: 2 }, { id: 3 }],
  });
  console.log(deleteUsers);
};

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
