import { ReactNode } from "react"
import { Manrope } from "next/font/google";

interface Props {
    children: ReactNode,
    size?: 's' | 'm' | 'l'
}

const fontSizeMap = {
    's': 'text-3xl',
    'm': 'text-2xl md:text-3xl xl:text-4xl',
    'l': 'text-3xl md:text-4xl xl:text-5xl',
}

const manrope = Manrope({ subsets: ["latin"] });

export const Heading = ({ children, size = 'm' }: Props) => {
    return (
        <h1 className={`${manrope.className} ${fontSizeMap[size]} font-extrabold`}>{children}</h1>
    )
}