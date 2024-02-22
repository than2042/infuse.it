import { Montserrat } from "next/font/google";
import { ClerkProvider, auth, UserButton } from "@clerk/nextjs";
import { FormProvider } from "@/context/FormContext";
import Header from "@/components/Header";
import { ApiProvider } from "@/context/ApiContext";
import { UserProvider } from "@/context/UserContext";

import "./globals.css";

const montserratFont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "infuse.it",
  description: "Cocktail Mixer Final Project",
};

export default async function RootLayout({ children }) {
  const { userId } = auth();

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
                <main className={montserratFont.className}>{children}</main>
              </body>
            </html>
          </UserProvider>
        </ApiProvider>
      </FormProvider>
    </ClerkProvider>
  );
}

// className={inter.className}
