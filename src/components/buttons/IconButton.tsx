"use client"

import { FontAwesomeIcon } from "../../../node_modules/@fortawesome/react-fontawesome/index";
import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";
import Button, { ButtonVariant } from "./Button";
import { ReactNode } from "react";

interface IProps {
    icon: IconDefinition,
    href?: string,
    onClick?: () => void,
    size?: SizeProp,
    sx?: string,
    children?: ReactNode,
    variant?: ButtonVariant,
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