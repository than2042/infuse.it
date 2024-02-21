import { NextResponse } from "next/server";

export async function GET(request) {
  const responseAlcoholic = await fetch(
    "http://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Alcoholic"
  );
  const responseNonAlcoholic = await fetch(
    "http://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Non_Alcoholic"
  );
  const dataAlc = await responseAlcoholic.json();
  const dataNonAlc = await responseNonAlcoholic.json();

  const cocktails = [...dataAlc.drinks, ...dataNonAlc.drinks];
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const filteredCocktails = cocktails.filter((cocktail) => {
    return cocktail.strDrink.toLowerCase().includes(query.toLowerCase());
  });
  return NextResponse.json(filteredCocktails);
}
