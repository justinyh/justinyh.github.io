import React, { Fragment, ReactNode } from "react";
import { LayoutGroup } from "motion/react";
import { faBars } from "../../../node_modules/@fortawesome/free-solid-svg-icons/index";
import Link from "../../../node_modules/next/link";
import IconButton from "../buttons/IconButton";
import NavItem from "./NavItem";


interface IProps {
    children: ReactNode,
    isVisible: boolean
}

export default function NavMenu(props: IProps) {
    const { children, isVisible } = props;
    

    return (
        <Fragment>
            <div className={`${isVisible ? "opacity-90 z-20" : "opacity-0 -z-10"} w-screen h-screen transition dark:bg-background-dk bg-white fixed left-0 top-0`}>
                <div className="text-2xl text-center mt-24 flex flex-col items-center gap-8">
                    <LayoutGroup id="nav-mobile">{children}</LayoutGroup>
                </div>
            </div>
            <nav className={`hidden flex-col sm:flex sm:flex-row gap-8 text-l items-center`}>
                <LayoutGroup id="nav-desktop">{children}</LayoutGroup>
            </nav>
        </Fragment>
    );
  }