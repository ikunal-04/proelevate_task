import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import { EventProvider } from "@/context/eventContext";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Proelevate",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <EventProvider>
      <body className={inter.className}>
        <Navbar />
        <Banner />
        {children}
        <Toaster />
      </body>
      </EventProvider>
    </html>
  );
}
