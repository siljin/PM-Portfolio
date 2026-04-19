import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Nav } from "@/components/Nav";
import { full_name } from "@/lib/global-variables";
import "./globals.css";

export const metadata: Metadata = {
  title: `${full_name} — Product Manager`,
  description:
    "Product Manager portfolio: projects, AI prototypes, and how I ship outcomes for users and teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={GeistSans.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
