'use client'
import { AnimatePresence, motion } from "motion/react";
import { ResumeType } from "./page"
import Professional from "./Professional";
import Personal from "./Personal";

export const TabSwitcher = ({type}: { type: ResumeType}) => {
    return (<AnimatePresence mode="wait">
        <motion.div
            key={type ? type : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <span className={type === "professional" ? "block" : "hidden"}>
                <Professional />
            </span>
            <span className={type === "personal" ? "block" : "hidden"}>
                <Personal />
            </span>
        </motion.div>
    </AnimatePresence>);
}