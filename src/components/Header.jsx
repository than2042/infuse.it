import Image from "next/image";

const Header = () => {
  return (
    <div className="size-full bg-lime-300">
      <div className="flex justify-between w-4/5 m-9">
        <Image width={40} height={40} src="/images/logo.svg" alt="logo" />
        <Image width={80} height={80} src="/images/logo1.svg" alt="logo" />
        <Image width={80} height={80} src="/images/logo2.svg" alt="logo" />
      </div>
    </div>
  );
};

export default Header;
