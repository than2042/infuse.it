import { Montserrat } from "next/font/google";
import { ClerkProvider, auth, UserButton } from "@clerk/nextjs";
import { FormProvider } from "@/context/FormContext";
import Header from "@/components/Header";
import { ApiProvider } from "@/context/ApiContext";
import { UserProvider } from "@/context/UserContext";
import { db } from "@/db";

import "./globals.css";
// import CreateProfile from "@/components/CreateProfile";

const montserratFont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "infuse.it",
  description: "Cocktail Mixer Final Project",
};

export default async function RootLayout({ children }) {
  const { userId } = auth();

  //   const profileCreate = await db.query(
  //     `SELECT * FROM users WHERE clerk_user_id = $1`,
  //     [userId]
  //   );
  //   console.log("profileCreate", profileCreate);

  // const rowCount = profileCreate?.rowCount || 0;
  // console.log(rowCount);
  return (
    <ClerkProvider>
      <FormProvider>
        <ApiProvider>
          <UserProvider userId={userId}>
            <html lang="en">
              <body>
                <div className="flex justify-evenly m-auto">
                  {userId && <UserButton afterSignOutUrl="/" />}
                  <Header />
                </div>
                {/* {rowCount !== 0 && ( */}
                <main className={montserratFont.className}>{children}</main>
                {/* )} */}
                {/* {userId && rowCount === 0 && <Link href={"/"}></Link>} */}
              </body>
            </html>
          </UserProvider>
        </ApiProvider>
      </FormProvider>
    </ClerkProvider>
  );
}
