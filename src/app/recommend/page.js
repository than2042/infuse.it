import NavBar from "@/components/NavBar";
import RenderedLists from "@/components/RenderedLists";

export default async function Recommend() {
  // fetch set lists from api and to be rendered on page conditionally depending on user preferences
  const nonAlcRes = await fetch(
    "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Non_Alcoholic"
  );
  const nonAlc = await nonAlcRes.json();
  const nonAlcList = nonAlc.drinks;

  const milkRes = await fetch(
    "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Milk"
  );
  const milkList = await milkRes.json();

  const creamRes = await fetch(
    "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Heavy_cream"
  );
  const creamList = await creamRes.json();

  const yoghurtRes = await fetch(
    "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Yoghurt"
  );
  const yoghurtList = await yoghurtRes.json();
  const dairyList = [
    ...milkList.drinks,
    ...creamList.drinks,
    ...yoghurtList.drinks,
  ];

  return (
    <>
      <RenderedLists nonAlcList={nonAlcList} dairyList={dairyList} />
      <NavBar />
      <div className="h-[50px]"></div>
    </>
  );
}
