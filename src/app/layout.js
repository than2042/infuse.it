import { Inter, Montserrat } from "next/font/google";
import { ClerkProvider, auth, UserButton } from "@clerk/nextjs";
import { FormProvider } from "@/context/FormContext";
import Header from "@/components/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
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
        <html lang="en">
          <body className={inter.className}>
            <div className="flex justify-evenly m-auto">
              {userId && <UserButton afterSignOutUrl="/" />}
              <Header />
            </div>
            <main className={montserratFont.className}>{children}</main>
          </body>
        </html>
      </FormProvider>
    </ClerkProvider>
  );
}
