import { PropsWithChildren, ReactNode } from "react";
import Link from "../../../node_modules/next/link";
import { variantClasses } from "./ButtonHelpers";

export const generateButtonEl = (variant: keyof typeof variantClasses, children: ReactNode) => {
    return (
        <button tabIndex={-1} className={variantClasses[variant]}>
            {children}
        </button>
    )
}
interface LinkButtonProps {
    href: string,
    newTab?: boolean,
    variant?: keyof typeof variantClasses,
}

export function LinkButton({ variant="primary", children, href="#", newTab = false }: PropsWithChildren<LinkButtonProps>) {
    if (newTab) {
        return (
            <a href={href} target="_blank">
                {generateButtonEl(variant, children)}
            </a>
        )
    }
        return (
        <Link href={href}>
            {generateButtonEl(variant, children)}
        </Link>
    );
}