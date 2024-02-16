import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href={"/Search"}>Search</Link>
    </div>
  );
};

export default HomePage;
