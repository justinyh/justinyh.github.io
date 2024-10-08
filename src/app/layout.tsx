"use client"

import type { Metadata } from "next";
import { DM_Sans, Manrope, Poppins } from "next/font/google";
import "./globals.css";
import React, {PropsWithChildren, useContext, useRef} from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation'; // Import your pathname utility

import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import NavBar from "@/components/navigation/NavBar";
import Footer from "@/components/Footer";

const poppins = DM_Sans({ 
  subsets: ["latin"],
  weight: ["300"]
});

function FrozenRouter(props: PropsWithChildren) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

export default function RootLayout(props: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <html lang="en" className="">
        <body className={poppins.className}>
        <NavBar />
            {/* <AnimatePresence>
                <motion.div
                    key={pathname}
                    initial={{ y:10, opacity: 0 }}
                    animate={{ y:0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, type: 'tween' }}
                >
                    <FrozenRouter> */}
                        
                                {props.children}
                    {/* </FrozenRouter> */}
                {/* </motion.div> */}
            {/* </AnimatePresence> */}
            <Footer />
        </body>
    </html>
  );
}
