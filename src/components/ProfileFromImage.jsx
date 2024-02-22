import Image from "next/image";

const ProfileFromImage = () => {
  return (
    <div role="img" aria-label="cocktail glass image" className="display-img">
      <Image
        width={200}
        height={200}
        src={"/images/port.svg"}
        alt="cocktail glass image"
        className="profile-form-img"
      />
    </div>
  );
};

export default ProfileFromImage;
