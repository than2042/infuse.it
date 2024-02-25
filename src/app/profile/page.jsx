import NavBar from "@/components/NavBar";
import ProfileAccordion from "@/components/ProfileAccordion";
import { auth } from "@clerk/nextjs";
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function Profile() {
  const { userId } = auth();
  const userIdRes = await db.query(
    `SELECT id FROM users WHERE clerk_user_id = $1`,
    [userId]
  );
  const user_id = userIdRes.rows[0].id;

  const fav_spiritsRes = await db.query(`SELECT * FROM fav_spirits`);
  const fav_spiritsOptions = fav_spiritsRes.rows;

  const ingredientsRes = await db.query(`SELECT * FROM cabinet`);
  const ingredientsOptions = ingredientsRes.rows;

  async function handleDeleteIng(id) {
    "use server";
    await db.query(
      `DELETE FROM cabinet_users WHERE user_id = $1 AND cabinet_id = $2`,
      [user_id, id]
    );
    revalidatePath("/profile");
    redirect("/profile");
  }

  return (
    <div className="profile-form-container">
      <div className="profile-page">
        <h2 className="mb-7 pl-4 text-4xl">Profile Page</h2>
        <ProfileAccordion
          handleDeleteIng={handleDeleteIng}
          ingredientsOptions={ingredientsOptions}
          fav_spiritsOptions={fav_spiritsOptions}
        />
        <NavBar />
      </div>
    </div>
  );
}
