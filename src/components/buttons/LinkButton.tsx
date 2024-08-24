import { PropsWithChildren, ReactNode } from "react";
import Link from "../../../node_modules/next/link";
import { variantClasses } from "./ButtonHelpers";

interface LinkButtonProps {
    href: string,
    newTab?: boolean,
    variant?: keyof typeof variantClasses,
}

export function LinkButton({ variant="primary", children, href="#", newTab = false }: PropsWithChildren<LinkButtonProps>) {
        return (
        <Link href={href} target={newTab ? "_blank" : (void 0)}>
            <button tabIndex={-1} className={variantClasses[variant]}>
                {children}
            </button>
        </Link>
    );
}