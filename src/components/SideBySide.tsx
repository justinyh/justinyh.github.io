import React, { ReactNode } from "react";
import Section from "./Section";

interface IProps {
    children: ReactNode,
    title?: string,
    sx?: string,
    h?: number,
    gap?: number,
}

export default function SideBySide(props: IProps) {
    const { children, title, gap, sx = "", h } = props;
    return (
        <Section title={title} h={h}>
            <div className={`flex flex-col sm:flex-row ${gap ? `gap-${gap}` : ""} ${sx}`}>
                {children}
            </div>
        </Section>
    );
  }