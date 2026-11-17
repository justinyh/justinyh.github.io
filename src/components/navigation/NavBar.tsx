"use client"
import React, { useEffect } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavItem from "./NavItem";
import NavMenu from "./NavMenu";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export default function NavBar() {
    const [ menuIsVisible, setMenuIsVisible ] = React.useState(false);

    useEffect(() => {
        if (!menuIsVisible) {
            return;
        }
        const root = document.documentElement;
        root.style.overflow = "hidden";
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setMenuIsVisible(false);
            }
        };
        window.addEventListener("keydown", closeOnEscape);
        return () => {
            root.style.overflow = "";
            window.removeEventListener("keydown", closeOnEscape);
        };
    }, [menuIsVisible]);

    function handleNavItemClick() {
        setMenuIsVisible(false);
    }

    return (
        <div className={`flex justify-between items-center px-8 h-16 font-medium ${manrope.className}`}>
            <div />
            <button
                type="button"
                className="sm:hidden relative z-30 size-10 -mr-2 flex items-center justify-center rounded-full transition-colors hover:text-primary"
                aria-label={menuIsVisible ? "Close menu" : "Open menu"}
                aria-expanded={menuIsVisible}
                aria-controls="mobile-menu"
                onClick={() => setMenuIsVisible(!menuIsVisible)}
            >
                <FontAwesomeIcon icon={menuIsVisible ? faXmark : faBars} size="xl" fixedWidth />
            </button>
            <NavMenu isVisible={menuIsVisible}>
                <NavItem title="Home" href="/" onClick={handleNavItemClick} />
                <NavItem title="About" href="/about" onClick={handleNavItemClick} />
                <NavItem title="Tech" href="/tech" onClick={handleNavItemClick} />
                <NavItem title="Travels" href="/travels" onClick={handleNavItemClick} />
                <NavItem title="Thoughts" href="/thoughts" onClick={handleNavItemClick} />
            </NavMenu>
        </div>
    );
}
