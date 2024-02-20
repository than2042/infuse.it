"use client";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";

export default function Search() {
  const [drinks, setDrinks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchDrinks() {
      const api = searchQuery
        ? `/api/retrieveCocktails/search?query=${searchQuery}`
        : "/api/retrieveCocktails";
      const response = await fetch(api);
      console.log(response);
      const data = await response.json();
      console.log(data);
      setDrinks(data);
    }
    fetchDrinks();
  }, [searchQuery]);

  return (
    <div className="flex flex-col margin-10">
      <p>Browse or Search our Drinks</p>
      <div className="flex flex-col gap-10 items-center p-6 ">
        <form
          className="flex justify-center w-2/3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="px-5 py-1 w-2/3 sm:px5 sm:py3 flex-1 text-orange-500 bg-slate-200 border-black rounded-full"
            placeholder="What are you in the mood for?"
          />
        </form>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-10">
        {drinks.map((drink, index) => (
          <div key={drink.idDrink} className="flex justify-evenly gap-1">
            <Link key={drink.index} href={`/search/${drink.idDrink}`}>
              <Image
                src={drink.strDrinkThumb}
                height={150}
                width={150}
                alt={drink.strDrink}
                title={drink.strDrink}
                className="object-cover rounded-md hover:opacity-75"
              />
              <div className="absolute top-0 left-0 right-0 text-center text-sm bg-black bg-opacity-50 px-2 py-1 hidden hover:block">
                {drink.strDrink}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
