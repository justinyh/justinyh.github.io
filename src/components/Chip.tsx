import { ReactNode } from "react"
import Link from "next/link"

interface ChipProps {
    children: ReactNode,
    fillColor?: string,
    fontColor?: string,
    href?: string,
}

export const Chip = ({ children, href, ...props }: ChipProps) => {
    if (href) {
        return (
            <Link href={href} target="_blank">
                <ChipContent {...props}>{children}</ChipContent>
            </Link>
        )
    }
    return (<ChipContent {...props}>{children}</ChipContent>);
}

const ChipContent = ({ fillColor, fontColor, children}: Omit<ChipProps, "href">) => (
    <span className="font-bold text-xs align-middle bg-green p-1 px-1.5 rounded-full shadow-md text-white whitespace-nowrap inline-flex " style={{backgroundColor: fillColor, color: fontColor}}>
        {children}
    </span>
)