import type { Metadata } from "next";
import { Roboto_Serif } from 'next/font/google';
import "./globals.css";
import Footerpage from "./Footer/page";

const robotoSerif = Roboto_Serif({ weight: '700', subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Sky financial",
  description: "Lander page of sky finance "
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoSerif.className}`}>
        {children}
        < Footerpage />
        </body>
    </html>
  );
}
