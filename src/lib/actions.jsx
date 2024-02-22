"use server";
import { db } from "../db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const { userId } = auth();

export async function AddUserData(data, ingValue, favValue) {
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

  favValue.map(
    async (fav) =>
      await db.query(
        `INSERT INTO fav_spirits_users (user_id, fav_spirits_id) VALUES ($1, $2)`,
        [user_id, fav.id]
      )
  );

  // if (ingValue.length === 1) {
  //   await db.query(
  //     `INSERT INTO cabinet_users (user_id, cabinet_id) VALUES ($1, $2)`,
  //     [user_id, ingValue[0].id]
  //   );
  // } else {
  ingValue.map(
    async (ing) =>
      await db.query(
        `INSERT INTO cabinet_users (user_id, cabinet_id) VALUES ($1, $2)`,
        [user_id, ing.id]
      )
  );
  // }

  console.log("ingValue actions", ingValue.id);

  revalidatePath("/recommend");
  redirect("/recommend");
}

export async function UpdateUserData(data, ingValue, favValue) {
  const userIdRes = await db.query(
    `SELECT id FROM users WHERE clerk_user_id = $1`,
    [userId]
  );
  const user_id = userIdRes.rows[0].id;

  // if (ingValue.length === 1) {
  //   await db.query(
  //     `INSERT INTO cabinet_users (user_id, cabinet_id) VALUES ($1, $2)`,
  //     [user_id, ingValue[0].id]
  //   );
  // } else {
  ingValue.map(
    async (ing) =>
      await db.query(
        `INSERT INTO cabinet_users (user_id, cabinet_id) VALUES ($1, $2)`,
        [user_id, ing.id]
      )
  );
  // }

  revalidatePath("/profile");
  redirect("/profile");
}
