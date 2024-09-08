import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const bmjua = localFont({
  src: "./fonts/BMJUA_ttf.ttf",
  display: "swap",
  weight: "45 920",
  variable: "--font-bmjua",
});
export const metadata: Metadata = {
  title: "이수배, 조인혜 청첩장",
  description: "조인혜, 이수배 청첩장",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  minimumScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  userScalable: false,
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
