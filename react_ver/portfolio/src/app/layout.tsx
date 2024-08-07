import type { Metadata } from "next";
import { Inter, Nunito, Rubik } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mauricio Romero Portfolio",
  description: "Base web page to describe Muaricio Romero's work in a Next js app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
