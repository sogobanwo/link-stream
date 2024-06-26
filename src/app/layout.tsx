import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Web3Modal } from "@/connection";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Web3Modal>{children}</Web3Modal>
      </body>
    </html>
  );
}
