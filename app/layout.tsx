import { ClerkProvider } from "@clerk/nextjs"
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: {
    default: "SnipSnap - Smart Video Compression",
    template: "%s | SnipSnap",
  },
  description: "Compress your videos intelligently without losing quality. Fast, secure, and easy to use.",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    title: "SnipSnap - Smart Video Compression",
    description: "Compress your videos intelligently without losing quality.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
