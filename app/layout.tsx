import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "@/components/NavBar/NavBar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emoney",
  description: "Welcome to Emoney network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
