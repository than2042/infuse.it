export async function GET() {
  // get the search params here
  const responseAlcoholic = await fetch(
    "http://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Alcoholic"
  );
  const responseNonAlcoholic = await fetch(
    "http://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Non_Alcoholic"
  );
  const dataAlc = await responseAlcoholic.json();
  const dataNonAlc = await responseNonAlcoholic.json();

  const data = [...dataAlc.drinks, ...dataNonAlc.drinks];
  //trying to get everything but the api didn't like this many calls
  // async function getEverything() {
  //   return data.map(async (item) => {
  //     console.log(item.idDrink);
  //     // const responseAll = await fetch(
  //     //   `https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${item.idDrink}`
  //     // );
  //     // const json = await responseAll.json();
  //     // return json;
  //   });
  // }
  // const everything = await getEverything();

  // // const responseAll = await fetch(
  // //   `https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=11007`
  // // );
  // // const json = await responseAll.json();

  return Response.json(data);
}
