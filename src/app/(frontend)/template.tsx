"use client"

import { PropsWithChildren } from "react";
import { motion, MotionConfig } from "motion/react";

export default function Template({ children }: PropsWithChildren) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
