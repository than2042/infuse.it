"use client";
import Link from "next/link";
import Image from "next/image";
import { useApi } from "@/context/ApiContext";

export default function FavouritesDisplay({ favCocktailIds }) {
  const { drinks } = useApi();

  const filteredDrinks = drinks.filter(function (drink) {
    return favCocktailIds.includes(drink.idDrink);
  });
  console.log(filteredDrinks);

  return (
    <div className="flex flex-col margin-10 m-auto">
      <div className="flex flex-col gap-1 items-center search-container">
        <h2 className="p-4 text-xl tablet: text-1xl p5 search-header">
          Your Favourites
        </h2>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-10 tablet: search-images ">
        {filteredDrinks.map((drink, index) => (
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
    </div>
  );
}
