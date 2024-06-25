import type { Metadata } from "next";
import { Roboto_Serif, Work_Sans } from "next/font/google";
import "./globals.css";
import Footerpage from "./Footer/page";

const inter = Roboto_Serif({ subsets: ["latin"], variable: "--font-roboto" });
const work = Work_Sans({ subsets: ["latin"], variable: "--font-work" });

export const metadata: Metadata = {
  title: "Sky financial",
  description: "Lander page of sky finance ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${work.variable}`}>
        {children}
        <Footerpage />
      </body>
    </html>
  );
}
