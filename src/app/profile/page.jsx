import NavBar from "@/components/NavBar";
import ProfileAccordion from "@/components/ProfileAccordion";
import { auth } from "@clerk/nextjs";
import { db } from "@/db";
import { revalidatePath } from "next/cache";

export default async function Profile() {
  const { userId } = auth();
  const userRes = await db.query(
    `SELECT users.id, users.username, users.short, users.long, users.easy, users.complex, users.egg, users.dairy, alc.alc 
    FROM users 
    JOIN alc ON users.alc_id = alc.id
    WHERE users.clerk_user_id = $1`,
    [userId]
  );
  const userInfo = userRes.rows[0];

  const favSpiritsRes = await db.query(
    `SELECT fav_spirits.fav_spirits 
    FROM users 
    JOIN fav_spirits_users ON users.id = fav_spirits_users.user_id 
    JOIN fav_spirits ON fav_spirits_users.fav_spirits_id = fav_spirits.id 
    WHERE users.clerk_user_id = $1`,
    [userId]
  );
  const favSpirits = favSpiritsRes.rows;

  const cabinetRes = await db.query(
    `SELECT cabinet_users.cabinet_id, cabinet.ingredients 
    FROM users 
    JOIN cabinet_users ON users.id = cabinet_users.user_id 
    JOIN cabinet ON cabinet_users.cabinet_id = cabinet.id 
    WHERE users.clerk_user_id = $1`,
    [userId]
  );
  const cabinetIng = cabinetRes.rows;
  // cabinetIng and favSpirits return array of objects
  console.log("All user info", userInfo, cabinetIng, favSpirits);

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
        userInfo={userInfo}
        cabinetIng={cabinetIng}
        favSpirits={favSpirits}
        handleDeleteIng={handleDeleteIng}
        ingredientsOptions={ingredientsOptions}
      />
      <NavBar />
    </>
  );
}
