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

  console.log(ingValue);

  // mapping through array of values from fav spirits input, spreading favIds, adding new rows to table
  const favValues = favValue.map((obj) => [user_id, obj.id]);
  let favQuery;
  if (favValues.length === 1) {
    favQuery = `INSERT INTO fav_spirits_users (user_id, fav_spirits_id) VALUES ($1, $2)`;
  } else {
    favQuery = `
    INSERT INTO fav_spirits_users (user_id, fav_spirits_id) VALUES ${favValues
      .map((_, index) => `($1, $${index + 2})`)
      .join(", ")}`;
  }
  const favIds = favValues.map((obj) => obj[1]);
  await db.query(favQuery, [user_id, ...favIds]);

  // mapping through array of values from cabinet ingredients input, spreading ingIds, adding new rows to table
  const ingValues = ingValue.map((obj) => [user_id, obj.id]);
  let ingQuery;
  if (ingValues.length === 1) {
    ingQuery = `INSERT INTO cabinet_users (user_id, cabinet_id) VALUES ($1, $2)`;
  } else {
    ingQuery = `
    INSERT INTO cabinet_users (user_id, cabinet_id) VALUES ${ingValues
      .map((_, index) => `($1, $${index + 2})`)
      .join(", ")}`;
  }
  const ingIds = ingValues.map((obj) => obj[1]);
  await db.query(ingQuery, [user_id, ...ingIds]);

  revalidatePath("/profile");
  redirect("/profile");
}
