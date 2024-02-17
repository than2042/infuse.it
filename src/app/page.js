"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import HomeStatic from "@/components/HomeStatic";

const HomePage = () => {
  const [drinks, setDrinks] = useState([]);

  const shuffleImage = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };
  useEffect(() => {
    async function fetchDrinks() {
      const response = await fetch("/api/retrieveCocktails");
      const data = await response.json();
      const firstSixDrink = shuffleImage(data).slice(0, 6);
      console.log(data);
      setDrinks(firstSixDrink);
    }
    fetchDrinks();
  }, []);
  return (
    <div className="m-auto  w-11/12">
      <h1>Home Page</h1>
      <Link href={"/Search"}>Search</Link>

      <div className="mt-8 grid grid-cols-2 gap-5 ">
        {drinks.map((drink) => (
          <div key={drink.idDrink} className="flex justify-evenly gap-1">
            {/* <Link href={`/Search/${drink.idDrink}`}> */}
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
            {/* </Link> */}
          </div>
        ))}
      </div>
      <HomeStatic />
    </div>
  );
};

export default HomePage;
