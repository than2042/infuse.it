import { Inter, Montserrat } from "next/font/google";
import { ClerkProvider, auth, UserButton, SignIn } from "@clerk/nextjs";
import { FormProvider } from "@/context/FormContext";
import CreateProfile from "@/components/CreateProfile";
import HomePage from "./page";
import Header from "@/components/Header";
import { db } from "@/db";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserratFont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "infuse.it",
  description: "Cocktail Mixer Final Project",
};

export default async function RootLayout({ children }) {
  const { userId } = auth();

  const profileCreate = await db.query(
    `SELECT * FROM users WHERE clerk_user_id = $1`,
    [userId]
  );

  const rowCount = profileCreate?.rowCount || 0;

  return (
    <ClerkProvider>
      <FormProvider>
        <html lang="en">
          <body className={inter.className}>
            <div>
              {userId && <UserButton afterSignOutUrl="/" />}
              <Header />
            </div>
            {rowCount !== 0 && (
              <main className={montserratFont.className}>{children}</main>
            )}
            {!userId && <HomePage />}
            {userId && rowCount === 0 && <CreateProfile />}
          </body>
        </html>
      </FormProvider>
    </ClerkProvider>
  );
}
