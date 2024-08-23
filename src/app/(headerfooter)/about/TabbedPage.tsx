"use client"
import Container from "@/components/Container";
import Tab from "@/components/tabs/Tab";
import Tabs from "@/components/tabs/Tabs";
import useSessionStorage from "@/hooks/useSessionStorage";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

enum ResumeType {
    Engineer = 1,
    Personal = 2,
}

interface IProps {
    personal: ReactNode,
    professional: ReactNode
}

export default function AboutPage(props: IProps) {
    const { personal, professional } = props;
    const [type, setType] = useSessionStorage("AboutType", ResumeType.Engineer.toString());
    const typeNumber = parseInt(type);
    return (
        <Container>
        <Tabs>
            <Tab id={ResumeType.Engineer.toString()} onClick={setType} active={type}>Engineer 🖥️</Tab>
            <Tab id={ResumeType.Personal.toString()} onClick={setType} active={type}>Personal 👋</Tab>
        </Tabs>
        <div className="flex flex-col gap-10 mt-6">
            <AnimatePresence mode="wait">
                <motion.div
                    key={type ? type : "empty"}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <span className={typeNumber === ResumeType.Engineer ? "block" : "hidden"}>
                        {professional}
                    </span>
                    <span className={typeNumber === ResumeType.Personal ? "block" : "hidden"}>
                        {personal}
                    </span>
                </motion.div>
            </AnimatePresence>
        </div>
      </Container>
    );
}