import { auth } from "@clerk/nextjs";
import Link from "next/link";
import CreateProfile from "./CreateProfile";
import { db } from "@/db";

const JoinToMix = async () => {
  const { userId } = auth();

  const profileCreate = await db.query(
    `SELECT * FROM users WHERE clerk_user_id = $1`,
    [userId]
  );

  const rowCount = profileCreate?.rowCount || 0;
  return (
    <div className="flex flex-col justify-center items-center  w-11/12 gap-3 m-auto tablet:absolute custom-width">
      <h1 className="w-full text-lg text-center mt-4 ml-5 tablet:text-3xl mb-1">
        Join to{" "}
        <span className="text-2xl text-orange tablet:text-4x">Infuse.it</span>{" "}
        with no fees
      </h1>
      {!userId && (
        <div className="flex flex-col justify-center items-center w-11/12 gap-2 m-auto">
          <Link
            className="bg-pink w-8/12 h-8 text-center p-1 rounded-md text-black hover:bg-green "
            href="sign-up"
          >
            Sign up for infuse.it
          </Link>
          <Link
            className="bg-white w-9/12 h-8 text-center p-1 rounded-md text-black hover:bg-green"
            href={"./sign-in"}
          >
            I already have an account
          </Link>
        </div>
      )}
      {userId && rowCount === 0 && <CreateProfile />}
    </div>
  );
};

export default JoinToMix;
