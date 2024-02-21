import Link from "next/link";

const CreateProfile = () => {
  return (
    <div>
      <Link
        className="text-orange text-center underline decoration-2 h-8"
        href={"./create-profile"}
      >
        Create Profile!!!
      </Link>
    </div>
  );
};

export default CreateProfile;
