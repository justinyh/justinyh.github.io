import { MouseEventHandler, ReactNode } from "react";

export const variantClasses = {
    primary: "h-10 px-5 rounded-sm bg-green text-white transition duration-200 hover:brightness-90 hover:-translate-y-px",
    secondary: "h-10 px-5 rounded-sm border-2 border-green text-green transition duration-200 hover:bg-green/10 hover:-translate-y-px"
}

export type ButtonVariant = keyof typeof variantClasses;

interface ButtonProps {
    children: ReactNode,
    onClick?: MouseEventHandler,
    sx?: string,
    variant?: ButtonVariant,
}

export default function Button(props: ButtonProps) {
    const { children, variant = "primary", sx, onClick } = props;
    return (
        <button className={`cursor-pointer ${variantClasses[variant]} ${sx}`} onClick={onClick}>
            {children}
        </button>
    );
}