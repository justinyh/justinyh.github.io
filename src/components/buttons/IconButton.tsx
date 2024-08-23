"use client"

import { MouseEventHandler } from "react";
import { FontAwesomeIcon } from "../../../node_modules/@fortawesome/react-fontawesome/index";
import Link from "../../../node_modules/next/link";
import { variantClasses } from "./ButtonHelpers";
import Button from "./Button";

interface IProps {
    icon: IconDefinition,
    href?: string,
    onClick?: () => void,
    size: string,
    sx: string,
    children: HTMLElement,
}

export default function IconButton(props: IProps) {
    const { icon, href="#", onClick, size, sx, variant, children} = props;
    const iconElement = (<FontAwesomeIcon icon={icon} size={size} />);
    return onClick ? (
        <Button variant={variant} sx={sx} onClick={onClick}>
            {iconElement}
            {children}
        </Button>
    ) : (
        <a href={href}>
            {iconElement}
        </a>
    )
}