// "use client";
// import { useState, useEffect } from "react";
import Link from "next/link";
// import Image from "next/image";
import HomeStatic from "@/components/HomeStatic";
import JoinToMix from "@/components/JoinToMix";

// const shuffleImage = (arr) => {
//   for (let i = arr.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
//   console.log(arr, "arr");
//   return arr;
// };

const HomePage = () => {
  // const [drinks, setDrinks] = useState([]);

  // useEffect(() => {
  //   async function fetchDrinks() {
  //     const response = await fetch("/api/retrieveCocktails");
  //     const data = await response.json();
  //     const firstSixDrink = shuffleImage(data).slice(0, 6);
  //     console.log(data);
  //     setDrinks(firstSixDrink);
  //   }
  //   fetchDrinks();
  // }, []);

  return (
    <div className="m-auto w-11/12">
      <Link href={"/search"}>Search</Link>
      <HomeStatic />
      <JoinToMix />
    </div>
  );
};

export default HomePage;
