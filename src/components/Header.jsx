import Image from "next/image";

const Header = () => {
  return (
    <div className="w-11/12">
      <div className="flex w-4/5 m-3">
        <Image
          width={100}
          height={60}
          src="/images/logo-with-glass-orange.png"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Header;
