import { Inter, Montserrat } from "next/font/google";
import { ClerkProvider, auth, UserButton } from "@clerk/nextjs";
import { FormProvider } from "@/context/FormContext";
// import CreateProfile from "@/components/CreateProfile";
// import HomePage from "./page";
import Header from "@/components/Header";
// import { db } from "@/db";

import "./globals.css";
// import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const montserratFont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "infuse.it",
  description: "Cocktail Mixer Final Project",
};

export default async function RootLayout({ children }) {
  const { userId } = auth();

  // const profileCreate = await db.query(
  //   `SELECT * FROM users WHERE clerk_user_id = $1`,
  //   [userId]
  // );

  // const rowCount = profileCreate?.rowCount || 0;

  return (
    <ClerkProvider>
      <FormProvider>
        <html lang="en">
          <body className={inter.className}>
            <div className="flex justify-evenly m-auto">
              {userId && <UserButton afterSignOutUrl="/" />}
              <Header />
              {/* {userId && rowCount === 0 && (
                <Link href={"./create-profile"}>Create Profile</Link>
              )} */}
            </div>
            {/* {rowCount !== 0 && ( */}
            <main className={montserratFont.className}>{children}</main>
            {/* )} */}
            {/* {!userId && <HomePage />} */}
          </body>
        </html>
      </FormProvider>
    </ClerkProvider>
  );
}
