"use client"
import Container from "@/components/Container";
import Tab from "@/components/tabs/Tab";
import Tabs from "@/components/tabs/Tabs";
import useQueryParams from "@/hooks/useQueryParams";
import { AnimatePresence, motion } from "motion/react";
import { ReactNode } from "react";
import { isEnum } from "@/util/is-enum"

enum ResumeType {
    Engineer = "professional",
    Personal = "personal",
}

interface IProps {
    personal: ReactNode,
    professional: ReactNode
}

export default function AboutPage(props: IProps) {
    const { personal, professional } = props;
    const [searchParams] = useQueryParams();
    const typeParam = searchParams.get("type");
    const type = isEnum<ResumeType>(typeParam, ResumeType) ? typeParam : ResumeType.Engineer;
    return (
        <Container>
            <Tabs>
                <Tab id={ResumeType.Engineer.toString()} href={'?type=professional'} active={type}>Engineer 🖥️</Tab>
                <Tab id={ResumeType.Personal.toString()} href={'?type=personal'} active={type}>Personal 👋</Tab>
            </Tabs>
            <div className="flex flex-col gap-10 mt-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={type ? type : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <span className={type === "professional" ? "block" : "hidden"}>
                            {professional}
                        </span>
                        <span className={type === "personal" ? "block" : "hidden"}>
                            {personal}
                        </span>
                    </motion.div>
                </AnimatePresence>
            </div>
        </Container>
    );
}