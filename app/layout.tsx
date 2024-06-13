import type { Metadata } from "next";
import { Roboto_Serif, Work_Sans } from 'next/font/google';
import "./globals.css";
import Sections from "@/app/Sections/page"

const robotoSerif = Roboto_Serif({ weight: '700', subsets: ['latin'] });
const workSans = Work_Sans({ weight: '400', subsets: ['latin'] });


export const metadata: Metadata = {
  title: "Sky finance",
  description: "Lander page of sky finance "
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoSerif.className} ${workSans.className}`}>
        {children}
        <Sections />
        </body>
    </html>
  );
}
