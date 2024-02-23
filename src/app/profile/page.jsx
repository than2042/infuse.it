import NavBar from "@/components/NavBar";
import ProfileAccordion from "@/components/ProfileAccordion";
import { auth } from "@clerk/nextjs";
import { db } from "@/db";
import { revalidatePath } from "next/cache";

export default async function Profile() {
  const { userId } = auth();

  const fav_spiritsRes = await db.query(`SELECT * FROM fav_spirits`);
  const fav_spiritsOptions = fav_spiritsRes.rows;

  const ingredientsRes = await db.query(`SELECT * FROM cabinet`);
  const ingredientsOptions = ingredientsRes.rows;

  async function handleDeleteIng(id) {
    "use server";
    await db.query(
      `DELETE FROM cabinet_users WHERE user_id = $1 AND cabinet_id = $2`,
      [userInfo.id, id]
    );
    revalidatePath("/profile");
  }

  return (
    <>
      <h2>Profile Page</h2>
      <ProfileAccordion
        handleDeleteIng={handleDeleteIng}
        ingredientsOptions={ingredientsOptions}
        fav_spiritsOptions={fav_spiritsOptions}
      />
      <NavBar />
    </>
  );
}
