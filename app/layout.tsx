import type { Metadata, Viewport } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const bmjua = localFont({
  src: "./fonts/BMJUA_ttf.ttf",
  display: "swap",
  weight: "45 920",
  variable: "--font-bmjua",
});
export const metadata: Metadata = {
  title: "이수배 & 조인혜 결혼할 결심",
  description: "마침내... 10월 12일 저희 결혼합니다",
  openGraph: {
    images: "https://wedding-card-kappa.vercel.app/thumbnail.jpg",
  },
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
      <Toaster />
    </html>
  );
}
