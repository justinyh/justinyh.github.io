import React, { Children, Fragment, ReactNode } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";

interface IProps {
    children: ReactNode,
    isVisible: boolean
}

export default function NavMenu(props: IProps) {
    const { children, isVisible } = props;

    return (
        <Fragment>
            <AnimatePresence>
                {isVisible &&
                    <motion.div
                        id="mobile-menu"
                        className="sm:hidden fixed left-0 top-0 z-20 w-full h-[100lvh] bg-(--background-hex)/95 backdrop-blur-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <nav className="pt-28 px-10 flex flex-col items-start gap-7 text-4xl font-extrabold">
                            <LayoutGroup id="nav-mobile">
                                {Children.map(children, (child, i) =>
                                    <motion.div
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.05 + i * 0.05, duration: 0.3, ease: "easeOut" }}
                                    >
                                        {child}
                                    </motion.div>
                                )}
                            </LayoutGroup>
                        </nav>
                    </motion.div>
                }
            </AnimatePresence>
            <nav className="hidden sm:flex flex-row gap-8 items-center">
                <LayoutGroup id="nav-desktop">{children}</LayoutGroup>
            </nav>
        </Fragment>
    );
}
