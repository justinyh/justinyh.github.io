'use client'
import { AnimatePresence, motion } from "motion/react";
import { ResumeType } from "./resume-type"
import Professional from "./Professional";
import Personal from "./Personal";

export const TabSwitcher = ({ type }: { type: ResumeType }) => {
    const side = type === ResumeType.Personal ? "100vw" : "-100vw";

    return (
        <div className="relative">
            <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                    key={type}
                    initial={{ x: side }}
                    animate={{ x: 0 }}
                    exit={{ x: side }}
                    transition={{ type: "spring", bounce: 0.3, duration: 0.65 }}
                >
                    {type === ResumeType.Personal ? <Personal /> : <Professional />}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
