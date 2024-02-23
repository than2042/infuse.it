"use client";
import { useApi } from "@/context/ApiContext";
import { useUser } from "@/context/UserContext";
import DrinkSwiper from "./DrinkSwiper";
import { useEffect, useState } from "react";

export default function RenderedLists({ nonAlcList, dairyList }) {
  const { drinks } = useApi();
  const {
    userData,
    setUserData,
    favSpirits,
    setFavSpirits,
    cabinetIng,
    setCabinetIng,
  } = useUser();
  const [spiritList, setSpiritList] = useState([]);

  // checking the favourite spirits set the user and returning list of cocktails for each spirit to render dynamically on the page
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
  }, [favSpirits]);

  return (
    <div>
      {Object.entries(spiritList).map(([title, list]) => (
        <DrinkSwiper key={title} dataList={list.drinks} listTitle={title} />
      ))}
      {userData.alc === "Non-Alcoholic" ||
        ("Both" && (
          <DrinkSwiper dataList={nonAlcList} listTitle={"Alcohol Free"} />
        ))}
      {userData.dairy === true && (
        <DrinkSwiper dataList={dairyList} listTitle={"Contains Dairy"} />
      )}
    </div>
  );
}
