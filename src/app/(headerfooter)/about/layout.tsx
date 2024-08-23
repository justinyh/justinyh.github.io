import { Manrope } from "next/font/google";
import Container from "@/components/Container";
import { useEffect, useState } from "react";
import Tabs from "@/components/tabs/Tabs";
import Tab from "@/components/tabs/Tab";
import { AnimatePresence, motion } from "framer-motion";
import { Metadata } from "next";
import useSessionStorage from "@/hooks/useSessionStorage";
import AboutPage from "./TabbedPage";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: 'Justin Hu | About',
    description: 'Justin Hu is a software engineer based in Chicago, IL. He has over three years of development experience.',
  }

enum ResumeType {
    Engineer = 1,
    Personal = 2,
}

export default function About({
    children,
    personal,
    professional
}) {

  return (
    <main className="mt-4">
        <AboutPage personal={personal} professional={professional} />
    </main>
  );
}