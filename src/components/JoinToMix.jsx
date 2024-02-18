import { auth } from "@clerk/nextjs";
import Link from "next/link";

const JoinToMix = () => {
  const userId = auth();
  return (
    <div className="flex flex-col justify-center items-center w-11/12 m-auto gap-3 mt-4 ">
      <h1 className="w-11/12 text-xl">
        Join to <span className="text-3xl text-orange-500">Infuse.it</span> with
        no fees
      </h1>
      {userId && (
        <Link
          className="bg-pink-300 w-8/12 h-8 text-center p-1 rounded-md text-black "
          href={"./sign-in"}
        >
          Sign up for infuse.it
        </Link>
      )}

      {userId && (
        <Link
          className="bg-slate-200 w-8/12 h-8 text-center p-1 rounded-md text-black"
          href={"./sign-in"}
        >
          I already have an account
        </Link>
      )}
    </div>
  );
};

export default JoinToMix;
