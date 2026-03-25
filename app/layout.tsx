import type { Metadata } from "next";
import { Cormorant, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "KBS — Kitchen & Bath Society | Luxury Bath & Kitchen Fixtures",
  description: "Elevated essentials for modern kitchens and baths. Premium vanities, LED mirrors, closets, and fixtures designed with architectural precision.",
  keywords: "luxury bathroom, kitchen fixtures, vanities, LED mirrors, medicine cabinets, closets, premium faucets",
  openGraph: {
    title: "KBS — Kitchen & Bath Society",
    description: "Elevated essentials for modern kitchens and baths.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-warm-ivory">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
