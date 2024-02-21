import Image from "next/image";

const Header = () => {
  return (
    <div className="size-full">
      <div className="flex w-4/5 m-3">
        <Image
          width={40}
          height={40}
          src="/images/cocktail-logo-orange.png"
          alt="logo"
        />
        {/* <Image
          width={80}
          height={80}
          src="/images/logo-orange.png"
          alt="logo"
        /> */}
        <Image
          width={80}
          height={80}
          src="/images/logo-with-tag-orange.png"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Header;
