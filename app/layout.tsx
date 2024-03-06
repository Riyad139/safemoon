import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Chakra_Petch({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Safe Moon",
  description: "it’s Solana meme coin season",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
