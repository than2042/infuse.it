import Image from "next/image";

const DesktopScreen = () => {
  return (
    <div className="w-full">
      <Image
        width={900}
        height={100}
        src="./images/watermelon.svg"
        alt="cocktail Image"
        className="rounded-2xl"
      />
    </div>
  );
};

export default DesktopScreen;
