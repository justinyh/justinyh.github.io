"use client"

import { PropsWithChildren } from "react";
import { motion } from "motion/react";

export const PageMain = ({ children, className }: PropsWithChildren<{ className?: string }>) => (
    <motion.main
        className={className}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
    >
        {children}
    </motion.main>
)
