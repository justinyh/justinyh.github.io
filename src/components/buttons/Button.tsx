"use client"

import { MouseEventHandler } from "react";
import { variantClasses } from "./ButtonHelpers";

export default function Button({ variant="primary", children, onClick = ()=>{}, sx }) {
    return (
        <button className={`${variantClasses[variant]} ${sx}`} onClick={onClick}>
            {children}
        </button>
    );
}