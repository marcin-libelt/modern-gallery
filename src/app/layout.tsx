import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./ui/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Gallery App",
  description: "Generated by create next app hydrated by Unsplash",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto px-5 w-full lg:w-9/12 max-w-screen-xl">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
