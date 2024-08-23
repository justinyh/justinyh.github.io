import Link from "../../../node_modules/next/link";
import { variantClasses } from "./ButtonHelpers";

export const generateButtonEl = (variant: string, children) => {
    return (
        <button tabIndex={-1} className={variantClasses[variant]}>
            {children}
        </button>
    )
}

export function LinkButton({ variant="primary", children, href="#", newTab = false }) {
    
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