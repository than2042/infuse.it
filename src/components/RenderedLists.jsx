"use client";
import { useApi } from "@/context/ApiContext";
import { useUser } from "@/context/UserContext";
import DrinkSwiper from "./DrinkSwiper";
import { useEffect, useState } from "react";

export default function RenderedLists() {
  const { drinks, setDrinks } = useApi();
  const {
    userData,
    setUserData,
    favSpirits,
    setFavSpirits,
    cabinetIng,
    setCabinetIng,
  } = useUser();
  const [spiritList, setSpiritList] = useState([]);

  useEffect(() => {
    const spirits = [];
    async function checkFavSpirits() {
      return favSpirits.map(async (spirit) => {
        const responseAll = await fetch(
          `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${spirit.fav_spirits}`
        );
        spirits[`${spirit.fav_spirits}`] = await responseAll.json();
        setSpiritList(spirits);
      });
    }
    checkFavSpirits();
  }, [drinks, favSpirits]);

  return (
    <div>
      <DrinkSwiper dataList={spiritList.Gin} listTitle={"Gin Cocktails"} />
      <DrinkSwiper
        dataList={spiritList.Tequila}
        listTitle={"Tequila Cocktails"}
      />
    </div>
  );
}
