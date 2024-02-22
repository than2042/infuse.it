import Image from "next/image";

const DesktopScreen = () => {
  return (
    <div className="w-full" role="img" aria-labelledby="cocktail Image">
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
