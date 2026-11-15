"use client"

import { PropsWithChildren } from "react";
import { motion, Variants } from "motion/react";

type Kind = "title" | "hero" | "meta" | "body";

const ease = [0.22, 1, 0.36, 1] as const;

const group: Variants = {
    hidden: {},
    shown: { transition: { staggerChildren: 0.25 } },
}

const text: Variants = {
    hidden: { opacity: 0, y: 12 },
    shown: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease } },
}

const items: Record<Kind, Variants> = {
    title: { ...text, hidden: { opacity: 0, y: 12, filter: "blur(4px)" } },
    hero: {
        hidden: { opacity: 0 },
        shown: { opacity: 1, transition: { duration: 1.4, ease } },
    },
    meta: text,
    body: text,
}

const heroZoom: Variants = {
    hidden: { scale: 1.25 },
    shown: { scale: 1, transition: { duration: 2, ease } },
}

interface RevealProps {
    className?: string,
}

export const RevealGroup = ({ children, className }: PropsWithChildren<RevealProps>) => (
    <motion.div className={className} variants={group} initial="hidden" animate="shown">
        {children}
    </motion.div>
)

export const RevealItem = ({ children, className, kind }: PropsWithChildren<RevealProps & { kind: Kind }>) => (
    <motion.div
        className={`${kind === "hero" ? "overflow-hidden rounded-md" : ""} ${className ?? ""}`}
        variants={items[kind]}
    >
        {kind === "hero" ? <motion.div variants={heroZoom}>{children}</motion.div> : children}
    </motion.div>
)
