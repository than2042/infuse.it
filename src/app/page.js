// import Link from "next/link";
import HomeStatic from "@/components/HomeStatic";
import JoinToMix from "@/components/JoinToMix";

const HomePage = () => {
  return (
    <div className="m-auto flex flex-col justify-center w-11/12">
      {/* <Link href={"/search"}>Search</Link> */}
      <HomeStatic />
      <JoinToMix />
    </div>
  );
};

export default HomePage;
