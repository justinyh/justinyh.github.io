import React, { ReactNode } from "react";

interface IProps {
    children: ReactNode,
    onClick: Function,
    id: string,
    active?: string,
};

export default function Tab(props: IProps) {
    const { children, onClick, id, active } = props;
    return (
        <button className={`${active === id ? " text-green" : "text-white"} grow rounded p-1 relative`} onClick={() => onClick(id)}>
            {active === id ? <span className="h-full w-full bg-white z-10 absolute rounded top-0 left-0 transition"></span> : null}
            <span className="z-30 relative">{children}</span>
        </button>
    );
  }