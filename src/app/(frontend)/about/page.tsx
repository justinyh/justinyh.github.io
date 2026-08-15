import Container from "@/components/Container";
import Tab from "@/components/tabs/Tab";
import Tabs from "@/components/tabs/Tabs";
import useQueryParams from "@/hooks/useQueryParams";
import { AnimatePresence, motion } from "motion/react";
import { ReactNode } from "react";
import { isEnum } from "@/util/is-enum"
import Professional from "./Professional";
import Personal from "./Personal"
import { Metadata } from "next";
import { TabSwitcher } from "./TabSwitcher"

export enum ResumeType {
    Engineer = "professional",
    Personal = "personal",
}

interface IProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export const metadata: Metadata = {
title: 'Justin Hu | About',
description: 'Justin Hu is a software engineer based in Chicago, IL. He has over three years of development experience.',
}

export default async function AboutPage({ searchParams }: IProps) {
    const { type: typeParam } = await searchParams;
    const type = isEnum<ResumeType>(typeParam, ResumeType) ? typeParam : ResumeType.Engineer;
    return (
        <main className="mt-4">
            <Container>
                <Tabs>
                    <Tab id={ResumeType.Engineer.toString()} href={'?type=professional'} active={type}>Engineer 🖥️</Tab>
                    <Tab id={ResumeType.Personal.toString()} href={'?type=personal'} active={type}>Personal 👋</Tab>
                </Tabs>
                <div className="flex flex-col gap-10 mt-6">
                    <TabSwitcher type={type} />
                </div>
            </Container>
        </main>
    );
}