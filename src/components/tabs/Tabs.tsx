import React, { ReactNode } from "react";

interface IProps {
    children: ReactNode,
};

export default function Tabs(props: IProps) {
    const { children } = props;
    return (
        <div className="bg-green dark:bg-background-dk p-1 rounded flex gap-4 drop-shadow">
            {children}
        </div>
    );
  }