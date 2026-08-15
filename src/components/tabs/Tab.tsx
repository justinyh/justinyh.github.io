import Link from "next/link";
import { ReactNode } from "react";

interface IProps {
    children: ReactNode,
    href: string,
    id: string,
    active?: string,
};

export default function Tab(props: IProps) {
    const { children, id, active, href } = props;
    
    return (
        <Link href={href} className={`${active === id ? " text-green" : "text-white"} dark:text-white grow rounded-sm p-1 relative text-center`}>
            {active === id ? <div className="h-full w-full bg-white dark:bg-green z-10 absolute rounded-sm top-0 left-0 transition"></div> : null}
            <div className="z-30 relative">{children}</div>
        </Link>
    );
}