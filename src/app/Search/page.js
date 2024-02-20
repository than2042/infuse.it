"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Search() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function fetchDrinks() {
      const response = await fetch("/api/retrieveCocktails");
      const data = await response.json();
      console.log(data);
      setDrinks(data);
    }
    fetchDrinks();
  }, []);

  return (
    <div className="flex flex-col margin-10">
      <p>Browse our Drinks</p>
      <div className="flex flex-col gap-10 items-center p-6 ">
        <input className="" />
      </div>
      <div className="mt-8 grid grid-cols-2 gap-10">
        {drinks.map((drink, index) => (
          <div key={drink.idDrink} className="flex justify-evenly gap-1">
            <Link key={drink.index} href={`/Search/${drink.idDrink}`}>
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
