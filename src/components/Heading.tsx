import { ReactNode } from "react"
import { Manrope } from "next/font/google";

export type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
 
interface Props {
    children: ReactNode,
    level?: HeadingLevels,
    tag?: HeadingTag,
    className?: string,
}

const levelMap = {
    1: 'text-5xl',
    2: 'text-4xl',
    3: 'text-3xl',
    4: 'text-2xl',
    5: 'text-xl',
    6: 'text-lg'
}

const manrope = Manrope({ subsets: ["latin"] });

export const Heading = ({ children, className, level = 2, tag: Tag = "h1" }: Props) => {
    return (
        <Tag className={`${manrope.className} ${levelMap[level]} font-extrabold ${className}`}>{children}</Tag>
    )
}