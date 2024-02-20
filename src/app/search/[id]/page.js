import Link from "next/link";
import { revalidatePath } from "next/cache";
import { db } from "@/db";
import { auth } from "@clerk/nextjs";
import FavouriteButton from "@/components/FavouriteButton";

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
  console.log(userId);
  const userIdRes = await db.query(
    `SELECT id FROM users WHERE clerk_user_id = $1`,
    [userId]
  );
  const user_id = userIdRes.rows[0].id;
  console.log("user_id", user_id);

  const favRes = await db.query(
    `SELECT * FROM favourite WHERE user_id = $1 AND cocktail_id = $2`,
    [user_id, params.id]
  );
  const favStatus = favRes.rows.length === 0 ? false : true;
  console.log(favStatus);

  async function handleAddFav() {
    "use server";
    console.log("clicked");
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

  // revalidatePath(`/Search/${params.id}`);

  return (
    <>
      <div className="detail-container">
        <h2>Cocktail #{params.id}</h2>
        <FavouriteButton
          handleAddFav={handleAddFav}
          handleDeleteFav={handleDeleteFav}
          favStatus={favStatus}
        />

        <ul className="detailOrg">
          {details.drinks.map((detail) => (
            <div className="sidebyside" key={detail.idDrink}>
              <li className="grow">{detail.strDrink}</li>
              <img className="thumb" src={detail.strDrinkThumb} alt="thumb" />

              <h3>Ingredients</h3>
              <div className="ingredients-container">
                <p>{detail.strMeasure1}</p>
                <p>{detail.strIngredient1},</p>

                {detail.strMeasure2 ? <p>{detail.strMeasure2}</p> : null}
                {detail.strIngredient2 ? <p>{detail.strIngredient2},</p> : null}

                {detail.strMeasure3 ? <p>{detail.strMeasure3}</p> : null}
                {detail.strIngredient3 ? <p>{detail.strIngredient3},</p> : null}

                {detail.strMeasure4 ? <p>{detail.strMeasure4}</p> : null}
                {detail.strIngredient4 ? <p>{detail.strIngredient4},</p> : null}

                {detail.strMeasure5 ? <p>{detail.strMeasure5}</p> : null}
                {detail.strIngredient5 ? <p>{detail.strIngredient5},</p> : null}

                {detail.strMeasure6 ? <p>{detail.strMeasure6}</p> : null}
                {detail.strIngredient6 ? <p>{detail.strIngredient6},</p> : null}

                {detail.strMeasure6 ? <p>{detail.strMeasure6}</p> : null}
                {detail.strIngredient6 ? <p>{detail.strIngredient6},</p> : null}

                {detail.strMeasure7 ? <p>{detail.strMeasure7}</p> : null}
                {detail.strIngredient7 ? <p>{detail.strIngredient7},</p> : null}

                {detail.strMeasure8 ? <p>{detail.strMeasure8}</p> : null}
                {detail.strIngredient8 ? <p>{detail.strIngredient8},</p> : null}

                {detail.strMeasure9 ? <p>{detail.strMeasure9}</p> : null}
                {detail.strIngredient9 ? <p>{detail.strIngredient9},</p> : null}

                {detail.strMeasure10 ? <p>{detail.strMeasure10}</p> : null}
                {detail.strIngredient10 ? (
                  <p>{detail.strIngredient10}</p>
                ) : null}
              </div>
              <div key={detail.idDrink}>
                <h3>Instructions</h3>
                <p>{detail.strInstructions}</p>
                <h3>Glass</h3>
                <p>{detail.strGlass}</p>
              </div>
              <nav>
                <Link href="/search">Return to Cocktail List</Link>
              </nav>
            </div>
          ))}
          ;
        </ul>
      </div>
    </>
  );
}
