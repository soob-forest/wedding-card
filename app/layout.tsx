import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const bmjua = localFont({
  src: "./fonts/BMJUA_ttf.ttf",
  display: "swap",
  weight: "45 920",
  variable: "--font-bmjua",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "이수배, 조인혜 청첩장",
  description: "조인혜, 이수배 청첩장",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${bmjua.variable}`}>
      <body className={bmjua.className}>{children}</body>
    </html>
  );
}
