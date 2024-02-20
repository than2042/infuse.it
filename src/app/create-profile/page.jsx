import ProfileForm from "@/components/ProfileForm";
import { db } from "@/db";

export default async function CreateProfilePage() {
  const fav_spiritsRes = await db.query(`SELECT * FROM fav_spirits`);
  const fav_spiritsOptions = fav_spiritsRes.rows;

  const ingredientsRes = await db.query(`SELECT * FROM cabinet`);
  const ingredientsOptions = ingredientsRes.rows;

  return (
    <>
      <ProfileForm
        fav_spiritsOptions={fav_spiritsOptions}
        ingredientsOptions={ingredientsOptions}
      />
    </>
  );
}
