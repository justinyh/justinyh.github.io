"use client"

import { Poppins } from "next/font/google";
import "./globals.css";
import React, {PropsWithChildren, useContext, useRef} from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation'; // Import your pathname utility
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400"]
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
            <AnimatePresence>
                <motion.div
                    key={pathname}
                    initial={{ y:10, opacity: 0 }}
                    animate={{ y:0, opacity: 1 }}
                    transition={{ duration: 0.4, type: 'tween' }}
                >
                    <FrozenRouter>
                        
                                {props.children}
                    </FrozenRouter>
                </motion.div>
            </AnimatePresence>
        </body>
    </html>
  );
}
