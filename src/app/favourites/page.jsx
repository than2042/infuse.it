// import NavBar from "@/components/NavBar";
// import DrinkSwiper from "@/components/DrinkSwiper";
// import { auth } from "@clerk/nextjs";
// import { db } from "@/db";

// export default async function Favourites() {
//   const { userId } = auth();

//   const userRes = await db.query(
//     `SELECT users.id, users.username, users.short, users.long, users.easy, users.complex, users.egg, users.dairy, alc.alc
//     FROM users
//     JOIN alc ON users.alc_id = alc.id
//     WHERE users.clerk_user_id = $1`,
//     [userId]
//   );
//   const userInfo = userRes.rows[0];

//   const favSpiritsRes = await db.query(
//     `SELECT fav_spirits.fav_spirits
//     FROM users
//     JOIN fav_spirits_users ON users.id = fav_spirits_users.user_id
//     JOIN fav_spirits ON fav_spirits_users.fav_spirits_id = fav_spirits.id
//     WHERE users.clerk_user_id = $1`,
//     [userId]
//   );
//   const favSpirits = favSpiritsRes.rows;

//   const cabinetRes = await db.query(
//     `SELECT cabinet_users.cabinet_id, cabinet.ingredients
//     FROM users
//     JOIN cabinet_users ON users.id = cabinet_users.user_id
//     JOIN cabinet ON cabinet_users.cabinet_id = cabinet.id
//     WHERE users.clerk_user_id = $1`,
//     [userId]
//   );
//   const cabinetIng = cabinetRes.rows;
//   // cabinetIng and favSpirits return array of objects

//   const latestRes = await fetch(
//     "https://www.thecocktaildb.com/api/json/v2/9973533/latest.php"
//   );
//   const latest = await latestRes.json();

//   const ginRes = await fetch(
//     "https://www.thecocktaildb.com/api/json/v2/1/filter.php?i=Gin"
//   );
//   const gin = await ginRes.json();

//   const vodkaRes = await fetch(
//     "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka"
//   );
//   const vodka = await vodkaRes.json();

//   return (
//     <>
//       <DrinkSwiper dataList={latest} listTitle={"Latest Cocktails"} />
//       <DrinkSwiper dataList={gin} listTitle={"Gin Cocktails"} />
//       <DrinkSwiper dataList={vodka} listTitle={"Vodka Cocktails"} />
//       <NavBar />
//     </>
//   );
// }
