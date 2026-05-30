import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Infinity Tripsters",
  description: "Luxury group travel meets Instagram storytelling.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden flex flex-col bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(45,125,255,0.35),transparent_60%),radial-gradient(900px_500px_at_100%_0%,rgba(0,212,255,0.18),transparent_55%)]">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <Navbar />
        <div className="flex flex-col flex-1 pb-[calc(5.5rem+env(safe-area-inset-bottom))] lg:pb-0">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
