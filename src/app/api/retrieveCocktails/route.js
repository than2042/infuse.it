export async function GET() {
  const responseAlcoholic = await fetch(
    "http://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Alcoholic"
  );
  const responseNonAlcoholic = await fetch(
    "http://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Non_Alcoholic"
  );
  const dataAlc = await responseAlcoholic.json();
  const dataNonAlc = await responseNonAlcoholic.json();

  const data = [...dataAlc.drinks, ...dataNonAlc.drinks];

  return Response.json(data);
}
