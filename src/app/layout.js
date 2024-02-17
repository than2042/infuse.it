import { Inter } from "next/font/google";
import { ClerkProvider, auth, UserButton, SignIn } from "@clerk/nextjs";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "infuse.it",
  description: "Cocktail Mixer Final Project",
};

export default function RootLayout({ children }) {
  const { userId } = auth();

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div>
            {userId ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <Link href={"/sign-in"}>Sign In</Link>
            )}
          </div>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
