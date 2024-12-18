import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import SyncUserWithConvex from "@/components/SyncUserWithConvex";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Scotty's Shop",
  description: "By ScottyLabs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <ConvexClientProvider>
          <ClerkProvider>
            <SyncUserWithConvex />
            <div className="fixed top-0 w-full z-[100]">
              <Banner />
              <Header />
            </div>
            <main className="min-h-[calc(100vh-4rem)] pt-40 relative z-0">
              {children}
            </main>
          </ClerkProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
