"use client"

import { MouseEventHandler, ReactNode } from "react";
import { variantClasses } from "./ButtonHelpers";

interface ButtonProps {
    children: ReactNode,
    onClick?: MouseEventHandler,
    sx?: string,
    variant?: keyof typeof variantClasses,
}

export default function Button(props: ButtonProps) {
    const { children, variant = "primary", sx, onClick } = props;
    return (
        <button className={`${variantClasses[variant]} ${sx}`} onClick={onClick}>
            {children}
        </button>
    );
}