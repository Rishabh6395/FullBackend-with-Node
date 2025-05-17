import { db } from "./config/db.js";
import { usersTable } from "./drizzle/schema.js";
import { eq } from "drizzle-orm";

const main = async () => {
  // Insert Operation:
  //   const insertUser = await db
  //     .insert(usersTable)
  //     .values({ name: "rishabh", age: "22", email: "test@bhatt.com" });

  // INSERT MULTIPLE USERS:

  //   const insertUser = await db.insert(usersTable).values([
  //     { name: "rishabh", age: "22", email: "test@bhatt2.com" },
  //     { name: "aman", age: "20", email: "test@negi.com" },
  //     { name: "lol", age: "22", email: "test@lolo.com" },
  //   ]);

  //   console.log(insertUser);

  // READ:
  //   const users = await db.select().from(usersTable);
  //   const users = await db
  //     .select()
  //     .from(usersTable)
  //     .where({ email: "test@lolo.com" });
  //   console.log(users);

  // update:
  //   const updatedUser = await db
  //     .update(usersTable)
  //     .set({ name: "temp" })
  //     .where({ email: "test@lolo.com" });
  //   console.log(updatedUser);

  const updatedUser = await db
    .update(usersTable)
    .set({ name: "lol" })
    .where(eq(usersTable.email, "test@lolo.com"));
  console.log(updatedUser);
};

main().catch((error) => console.log(error));
