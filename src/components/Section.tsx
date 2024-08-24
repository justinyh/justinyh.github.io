import { Manrope } from "next/font/google";
import React, { ReactNode } from "react";

const manrope = Manrope({ subsets: ["latin"] });


interface IProps {
    title?: string,
    children: ReactNode,
    h?: keyof typeof headerMap,
};

export const headerMap = {
    1: "",
    2: "text-4xl font-bold",
    3: "text-2xl font-bold",
    4: "text-1xl",
    5: "text-1xl font-bold",
    6: "text-xl font-bold",
};

function getHeadingEl(headerNum: keyof typeof headerMap, children: ReactNode) {
    const tag = `h${headerNum}`;
    return React.createElement(tag, { className: `${headerMap[headerNum]} ${manrope.className} mb-4` }, children);
}

export default function Section(props: IProps) {
    const { title, children, h = 2 } = props;
    return (
        <section>
            {title ?
            getHeadingEl(h, title) 
            : null
}
            {children}
        </section>
    );
  }