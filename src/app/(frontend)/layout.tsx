"use client"

import type { Metadata } from "next";
import { DM_Sans, Manrope, Poppins, Jost } from "next/font/google";
import "./globals.css";
import React, { PropsWithChildren } from "react";
import NavBar from "@/components/navigation/NavBar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const poppins = DM_Sans({ 
  subsets: ["latin"],
  weight: ["400", "700"]
});

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en" className="">
      <body className={poppins.className}>
      <NavBar />
          {props.children}
          <Footer />
          <Analytics />
      </body>
    </html>
  );
}
