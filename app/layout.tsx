import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavMain from "@/Components/NavMain";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hero Browser",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavMain></NavMain>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
