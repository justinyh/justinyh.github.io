import { ReactNode } from "react"
import { Manrope } from "next/font/google";

export type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
 
interface Props {
    children: ReactNode,
    level?: HeadingLevels,
    tag?: HeadingTag,
}

const levelMap = {
    1: 'text-3xl md:text-4xl xl:text-5xl',
    2: 'text-2xl md:text-3xl xl:text-4xl',
    3: 'text-xl md:text-2xl xl:text-3xl',
    4: 'text-lg md:text-xl xl:text-2xl',
    5: 'text-md md:text-lg xl:text-xl',
    6: 'text-sm md:text-md xl:text-lg'
}

const manrope = Manrope({ subsets: ["latin"] });

export const Heading = ({ children, level = 2, tag: Tag = "h1" }: Props) => {
    return (
        <Tag className={`${manrope.className} ${levelMap[level]} font-extrabold`}>{children}</Tag>
    )
}