import type { Metadata } from "next";
import { Roboto_Serif, Work_Sans } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";
import Footerpage from "./Footer/page";

const inter = Roboto_Serif({ subsets: ["latin"], variable: "--font-roboto" });
const work = Work_Sans({ subsets: ["latin"], variable: "--font-work" });

const gilroy = localfont({
  src: [
    {
      path: "../public/Fonts/Gilroy-Bold.woff",
      weight: "700",
    },
  ],
  variable: "--font-gilroy",
});
const gilroysmall = localfont({
  src: [
    {
      path: "../public/Fonts/Gilroy-Medium.woff",
      weight: "100",
    },
  ],
  variable: "--font-small",
});

export const metadata: Metadata = {
  title: "Sky Financial | Life Insurance Partner.",
  description:
    "At Sky Financial, we understand that every family deserves financial security and peace of mind. That's why we offer high-end service and personalized solutions to middle-class Americans. Our team of experts has over 30 years of experience in the financial services industry, specializing in life insurance and annuities. As a licensed provider in all 50 States, we are dedicated to helping clients nationwide secure their financial futures as well as delivering unparallel service for the longevity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${work.variable} ${gilroy.variable} ${gilroysmall.variable}`}
      >
        {children}
        <Footerpage />
      </body>
    </html>
  );
}
