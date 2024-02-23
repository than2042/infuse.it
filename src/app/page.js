import HomeStatic from "@/components/HomeStatic";
import JoinToMix from "@/components/JoinToMix";
import NavBar from "@/components/NavBar";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center w-full">
      <HomeStatic />
      <JoinToMix />
      {/* added navbar */}
      <NavBar />
    </div>
  );
};

export default HomePage;
