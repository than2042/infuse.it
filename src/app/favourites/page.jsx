"use client";
import NavBar from "@/components/NavBar";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";
import { db } from "@/db";
import Link from "next/link";
import Image from "next/image";
import { useApi } from "@/context/ApiContext";

export default async function Favourites() {
  // const { drinks } = useApi();
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
  const favouriteCocktailIds = favRes.rows.map((fav) => fav.cocktail_id);

  console.log(drinks);

  // Filter the cocktail API using favourite cocktail IDs
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${favouriteCocktailIds.join(
      ","
    )}`
  );
  const data = await response.json();
  const drinks = data.drinks || [];

  return (
    <div className="flex flex-col margin-10 m-auto">
      <div className="flex flex-col gap-1 items-center search-container">
        <h2 className="p-4 text-xl tablet: text-1xl p5 search-header">
          Your Favourites
        </h2>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-10 tablet: search-images ">
        {drinks.map((drink, index) => (
          <div
            key={drink.idDrink}
            className="flex justify-evenly gap-1 "
            role="img"
            aria-label={drink.strDrink}
          >
            <Link key={drink.index} href={`/search/${drink.idDrink}`}>
              <Image
                src={drink.strDrinkThumb}
                height={150}
                width={150}
                alt={drink.strDrink}
                title={drink.strDrink}
                className="object-cover rounded-md hover:opacity-75 searchImg"
              />
              <div
                key={drink.index}
                className="absolute top-0 left-0 right-0 text-center text-sm bg-black bg-opacity-50 px-2 py-1 hidden hover:block"
              >
                {drink.strDrink}
              </div>
            </Link>
          </div>
        ))}
      </div>
      <NavBar />
    </div>
  );
}
