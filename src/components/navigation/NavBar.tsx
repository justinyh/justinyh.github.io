"use client"
import React, { Fragment } from "react";
import { faBars } from "../../../node_modules/@fortawesome/free-solid-svg-icons/index";
import Link from "../../../node_modules/next/link";
import IconButton from "../buttons/IconButton";
import NavItem from "./NavItem";
import NavMenu from "./NavMenu";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export default function NavBar() {
    const [ menuIsVisible, setMenuIsVisible ] = React.useState(false);

    function handleNavItemClick() {
        setMenuIsVisible(false);
    }

    function handleMenuButtonClick() {
        setMenuIsVisible(!menuIsVisible);
    }

    const navMenuElement = (
        <NavMenu isVisible={menuIsVisible}>
            <NavItem title="Home" href="/" onClick={handleNavItemClick} />
            <NavItem title="About" href="/about" onClick={handleNavItemClick}/>
            <NavItem title="Projects" href="/projects"onClick={handleNavItemClick} />
            <NavItem title="Blog" href="/blog" onClick={handleNavItemClick}/>
        </NavMenu>
    );

    return (
        <Fragment>
            <div className={`flex justify-between items-center sm:px-8 h-16 font-medium ${manrope.className}`}>
                <div>
                    {/* Logo here */}
                </div>
                <IconButton icon={faBars} sx="sm:hidden z-30 border-none" size="xl" variant="secondary" onClick={handleMenuButtonClick}></IconButton>
                {navMenuElement}
            </div>
        </Fragment>
    );
  }