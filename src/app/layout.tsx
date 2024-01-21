"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    window.fbAsyncInit = function () {
      FB.init({
        appId: '733266905392508',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v13.0',
      });
    };
  }, [])
  return (
    <html lang="en">
      <Script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></Script>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
