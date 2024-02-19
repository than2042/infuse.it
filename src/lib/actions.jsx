"use server";
import { db } from "../db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const { userId } = auth();

export async function AddUserData(data) {
  console.log(data);

  const newUser = await db.query(
    "INSERT INTO users (username, clerk_user_id, short, long, easy, complex, dairy, egg, alc_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
    [
      data.username,
      userId,
      data.short,
      data.long,
      data.easy,
      data.complex,
      data.dairy,
      data.egg,
      data.alc_id,
    ]
  );

  const user_id = newUser.rows[0].id;

  await db.query(
    "INSERT INTO fav_spirits_users (user_id, fav_spirits_id) VALUES ($1, $2)",
    [user_id, data.fav_spirits_id]
  );

  await db.query(
    "INSERT INTO cabinet_users (user_id, cabinet_id) VALUES ($1, $2)",
    [user_id, data.cabinet_id]
  );

  revalidatePath("/");
  redirect("/");
}
