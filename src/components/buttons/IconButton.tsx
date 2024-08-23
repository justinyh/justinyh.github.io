"use client"

import { FontAwesomeIcon } from "../../../node_modules/@fortawesome/react-fontawesome/index";
import Button from "./Button";
import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { variantClasses } from "./ButtonHelpers";
import { ReactNode } from "react";

interface IProps {
    icon: IconDefinition,
    href?: string,
    onClick?: () => void,
    size?: SizeProp,
    sx?: string,
    children?: ReactNode,
    variant?: keyof typeof variantClasses,
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