import { Manrope } from "next/font/google";
import { Metadata } from "next";
import AboutPage from "./TabbedPage";
import { ReactNode } from "react";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: 'Justin Hu | About',
    description: 'Justin Hu is a software engineer based in Chicago, IL. He has over three years of development experience.',
  }

export default function About({
    personal,
    professional
}: {
    personal: ReactNode,
    professional: ReactNode,
}) {

  return (
    <main className="mt-4">
        <AboutPage personal={personal} professional={professional} />
    </main>
  );
}