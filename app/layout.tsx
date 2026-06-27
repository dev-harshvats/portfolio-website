import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Harsh Vats | Portfolio",
  description: "Personal Portfolio of Harsh Vats - B.Tech. in Electronics & Communication Engineering student at Delhi Technological University. Full-Stack Developer and Competitive Programmer.",
  keywords: ["Harsh Vats", "DTU", "Delhi Technological University", "Competitive Programmer", "Full-Stack Developer", "Portfolio", "Software Engineer"],
  authors: [{ name: "Harsh Vats" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
