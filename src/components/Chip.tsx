import { ReactNode } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

interface ChipProps {
    children: ReactNode,
    fillColor?: string,
    fontColor?: string,
    href?: string,
}

const baseClasses = "inline-flex items-center gap-1 align-[0.1em] whitespace-nowrap rounded-full bg-green px-2 py-0.5 text-[0.8em] font-semibold leading-tight text-white shadow-sm"

const linkClasses = "no-underline transition duration-200 hover:-translate-y-px hover:shadow-md hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"

export const Chip = ({ children, href, fillColor, fontColor }: ChipProps) => {
    const style = { backgroundColor: fillColor, color: fontColor }

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseClasses} ${linkClasses}`} style={style}>
                {children}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[0.75em] opacity-70" aria-hidden />
            </a>
        )
    }

    return <span className={baseClasses} style={style}>{children}</span>
}
