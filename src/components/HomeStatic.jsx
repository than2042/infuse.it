import Image from "next/image";
import cocktail1 from "../../public/images/cocktail1.svg";
import cocktail2 from "../../public/images/cocktail2.svg";
import cocktail5 from "../../public/images/cocktail5.svg";
import cocktail6 from "../../public/images/cocktail6.svg";
import cocktail7 from "../../public/images/cocktail7.svg";
import cocktail8 from "../../public/images/cocktail8.svg";

const arryImage = [
  {
    image: cocktail1,
  },
  {
    image: cocktail5,
  },
  {
    image: cocktail6,
  },

  {
    image: cocktail7,
  },
  {
    image: cocktail8,
  },
  {
    image: cocktail2,
  },
];

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
                  height={80}
                  src={item.image}
                  alt="cocktail image"
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
