import { PropsWithChildren, ReactNode } from "react";
import Link from "../../../node_modules/next/link";
import { ButtonVariant, variantClasses } from "./Button";

interface LinkButtonProps {
    href: string,
    newTab?: boolean,
    variant?: ButtonVariant,
}

export function LinkButton({ variant="primary", children, href="#", newTab = false }: PropsWithChildren<LinkButtonProps>) {
        return (
        <Link href={href} target={newTab ? "_blank" : (void 0)}>
            <button tabIndex={-1} className={`cursor-pointer ${variantClasses[variant]}`}>
                {children}
            </button>
        </Link>
    );
}