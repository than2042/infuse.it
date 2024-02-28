import NavBar from "@/components/NavBar";
import FavouritesDisplay from "@/components/FavouritesDisplay";
import { auth } from "@clerk/nextjs";
import { db } from "@/db";

export default async function Favourites() {
  const { userId } = auth();

  const userIdRes = await db.query(
    `SELECT id FROM users WHERE clerk_user_id = $1`,
    [userId]
  );
  const user_id = userIdRes.rows[0].id;

  const favRes = await db.query(
    `SELECT cocktail_id FROM favourite WHERE user_id = $1`,
    [user_id]
  );
  const favCocktailIds = favRes.rows.map((fav) => fav.cocktail_id);
  console.log("favCocktailIds", favCocktailIds);

  return (
    <>
      <FavouritesDisplay favCocktailIds={favCocktailIds} />
      <NavBar />
    </>
  );
}
