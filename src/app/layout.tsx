import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Architecture - Gallery",
  description: "Demo gallery generated by create next app hydrated by Unsplash",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
};

RootLayout.displayName = "RootLayout";

export default RootLayout;
