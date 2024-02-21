import HomeStatic from "@/components/HomeStatic";
import JoinToMix from "@/components/JoinToMix";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center w-full">
      <HomeStatic />
      <JoinToMix />
    </div>
  );
};

export default HomePage;
