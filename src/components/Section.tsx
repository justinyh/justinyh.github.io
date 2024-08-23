import React, { ReactNode } from "react";

interface IProps {
    title?: string,
    children: ReactNode,
    h?: number,
};

const headerMap = {
    1: "",
    2: "text-4xl font-bold",
    3: "text-2xl font-bold",
    4: "text-1xl",
    5: "text-1xl font-bold",
    6: "text-xl font-bold",
};

function getHeadingEl(headerNum: number, children: ReactNode) {
    const tag = `h${headerNum}`;
    return React.createElement(tag, { className: `${headerMap[headerNum]} mb-4` }, children);
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