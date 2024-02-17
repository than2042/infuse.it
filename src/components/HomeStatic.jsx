import Image from "next/image";
import lime from "../../public/images/lime.svg";
import orange from "../../public/images/orange.svg";
import port from "../../public/images/port.svg";
import rum from "../../public/images/rum.svg";
import tea from "../../public/images/tea.svg";
import cognic from "../../public/images/cognic.svg";

const arryImage = [
  {
    image: lime,
  },
  {
    image: port,
  },
  {
    image: rum,
  },

  {
    image: tea,
  },
  {
    image: cognic,
  },
  {
    image: orange,
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
                  height={70}
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
