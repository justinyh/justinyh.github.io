"use client"

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "motion/react";

interface IProps {
    children: ReactNode,
    href: string,
    id: string,
    active?: string,
};

export default function Tab(props: IProps) {
    const { children, id, active, href } = props;
    const isActive = active === id;

    return (
        <Link href={href} scroll={false} className={`${isActive ? "text-green" : "text-white"} dark:text-white grow rounded-sm p-1 relative text-center transition-colors duration-300`}>
            {isActive &&
                <motion.div
                    layoutId="tab-indicator"
                    className="h-full w-full bg-white dark:bg-green z-10 absolute rounded-sm top-0 left-0"
                    transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                />
            }
            <div className="z-30 relative">{children}</div>
        </Link>
    );
}
