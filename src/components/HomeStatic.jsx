import Image from "next/image";
import { arryImage } from "@/lib/ImgData";

const HomeStatic = () => {
  return (
    <div>
      <div className="flex flex-col m-auto">
        <div className="mt-8 grid grid-cols-2 gap-5">
          {arryImage.map((item) => {
            return (
              <div key={item.title} className="flex justify-evenly gap-1">
                <Image
                  width={150}
                  height={70}
                  src={item.image}
                  alt="cocktail image"
                  key={item.title}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeStatic;
