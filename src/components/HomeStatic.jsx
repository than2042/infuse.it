"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { arryImage } from "@/lib/ImgData";
import DesktopScreen from "./DesktopScreen";

const HomeStatic = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 700);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="w-full">
      <div className="flex flex-col">
        {isDesktop ? (
          <DesktopScreen />
        ) : (
          <div className=" grid grid-cols-2 gap-8 m-auto tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 ">
            {arryImage.map((item) => {
              return (
                <div key={item.title} className="flex justify-evenly gap-1">
                  <Image
                    width={150}
                    height={70}
                    src={item.image}
                    alt="cocktail image"
                    key={item.image}
                    className="tablet:w-full "
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeStatic;
