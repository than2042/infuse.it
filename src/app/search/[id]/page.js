import { revalidatePath } from "next/cache";
import { db } from "@/db";
import { auth } from "@clerk/nextjs";
import FavouriteButton from "@/components/FavouriteButton";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export const metadata = {
  title: "More details",
  description: "All the details for your chosen cocktail",
};

export default async function SinglePostPage({ params }) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${params.id}`
  ); // call the API
  const details = await response.json(); // parse the response as JSON - called it details so clear it is different to previous page

  const { userId } = auth();

  const userIdRes = await db.query(
    `SELECT id FROM users WHERE clerk_user_id = $1`,
    [userId]
  );
  const user_id = userIdRes.rows[0].id;

  const favRes = await db.query(
    `SELECT * FROM favourite WHERE user_id = $1 AND cocktail_id = $2`,
    [user_id, params.id]
  );
  const favStatus = favRes.rows.length === 0 ? false : true;

  async function handleAddFav() {
    "use server";
    await db.query(
      `INSERT INTO favourite (user_id, cocktail_id) VALUES ($1, $2)`,
      [user_id, params.id]
    );
    revalidatePath(`/Search/${params.id}`);
  }

  async function handleDeleteFav() {
    "use server";
    await db.query(
      `DELETE FROM favourite WHERE user_id = $1 AND cocktail_id = $2`,
      [user_id, params.id]
    );
    revalidatePath(`/Search/${params.id}`);
  }

  return (
    <>
      <div className="w-screen h-full">
        {details.drinks.map((detail) => (
          <div className=" text-black mb-4  " key={detail.idDrink}>
            <div className="flex m-auto single-page">
              <div className=" ml-3 ">
                <h2 className="text-pink text-2xl font-semibold single-drink ">
                  {detail.strDrink}
                </h2>
              </div>
              <FavouriteButton
                handleAddFav={handleAddFav}
                handleDeleteFav={handleDeleteFav}
                favStatus={favStatus}
              />
            </div>
            <div className="single-container">
              <div className="desktop-display">
                <Image
                  className="object-fill rounded-lg mb-5 shadow-md singleImg"
                  width={390}
                  height={100}
                  src={detail.strDrinkThumb}
                  alt={detail.strDrinkThumb}
                />
                <div className=" ingredent">
                  <div className="ml-9 ">
                    <h3 className="font-semibold mt-1 mb-1 ">Ingredients</h3>
                    <div className="flex flex-col items-start gap-1">
                      <div className="flex gap-2">
                        <p>{detail.strMeasure1}</p>
                        <p>{detail.strIngredient1}</p>
                      </div>
                      <div className="flex gap-2">
                        {detail.strMeasure2 ? (
                          <p>{detail.strMeasure2}</p>
                        ) : null}
                        {detail.strIngredient2 ? (
                          <p>{detail.strIngredient2}</p>
                        ) : null}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {detail.strMeasure3 ? <p>{detail.strMeasure3}</p> : null}
                      {detail.strIngredient3 ? (
                        <p>{detail.strIngredient3}</p>
                      ) : null}
                    </div>
                    <div className="flex gap-2">
                      {detail.strMeasure4 ? <p>{detail.strMeasure4}</p> : null}
                      {detail.strIngredient4 ? (
                        <p>{detail.strIngredient4}</p>
                      ) : null}
                    </div>
                    <div className="flex gap-2">
                      {detail.strMeasure5 ? <p>{detail.strMeasure5}</p> : null}
                      {detail.strIngredient5 ? (
                        <p>{detail.strIngredient5}</p>
                      ) : null}
                    </div>
                    <div className="flex gap-2">
                      {detail.strMeasure6 ? <p>{detail.strMeasure6}</p> : null}
                      {detail.strIngredient6 ? (
                        <p>{detail.strIngredient6}</p>
                      ) : null}
                    </div>
                    <div className="flex gap-2">
                      {detail.strMeasure6 ? <p>{detail.strMeasure6}</p> : null}
                      {detail.strIngredient6 ? (
                        <p>{detail.strIngredient6}</p>
                      ) : null}
                    </div>
                    <div className="flex gap-2">
                      {detail.strMeasure7 ? <p>{detail.strMeasure7}</p> : null}
                      {detail.strIngredient7 ? (
                        <p>{detail.strIngredient7}</p>
                      ) : null}
                    </div>
                    <div className="flex gap-2">
                      {detail.strMeasure8 ? <p>{detail.strMeasure8}</p> : null}
                      {detail.strIngredient8 ? (
                        <p>{detail.strIngredient8}</p>
                      ) : null}
                    </div>
                    <div className="flex gap-2">
                      {detail.strMeasure9 ? <p>{detail.strMeasure9}</p> : null}
                      {detail.strIngredient9 ? (
                        <p>{detail.strIngredient9}</p>
                      ) : null}
                    </div>
                    <div className="flex gap-2s">
                      {detail.strMeasure10 ? (
                        <p>{detail.strMeasure10}</p>
                      ) : null}
                      {detail.strIngredient10 ? (
                        <p>{detail.strIngredient10}</p>
                      ) : null}
                    </div>
                  </div>
                  <div
                    className="flex flex-col items-left gap-2 m-auto w-10/12 instruction"
                    key={detail.idDrink}
                  >
                    <h3 className="font-semibold">Instructions</h3>
                    <p>{detail.strInstructions}</p>

                    <h3>Glass</h3>
                    <p>{detail.strGlass}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <NavBar />
    </>
  );
}
