import React, { ReactNode } from "react";
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome/index";
import { faGithub, faLinkedin } from "../../node_modules/@fortawesome/free-brands-svg-icons/index";
import Section from "./Section";
import Button from "./buttons/Button";
import IconButton from "./buttons/IconButton";
import ButtonGroup from "./buttons/ButtonGroup";

interface IProps {

}
const SOCIAL_LINKS = {
    github: "https://github.com/justinyh",
    linkedin: "https://linkedin.com/in/justinyh"
}

export default function Footer(props: IProps) {
    return (
        <footer className="">
            <div className="mt-6 h-32 flex flex-col justify-center items-center gap-2">
                <ButtonGroup>
                    <IconButton icon={faGithub} href={SOCIAL_LINKS.github} size="2xl"/>
                    <IconButton icon={faLinkedin} href={SOCIAL_LINKS.linkedin} size="2xl" />
                </ButtonGroup>
                <div className="">
                    <p>Designed & Built by Justin Hu</p>
                </div>
            </div>
        </footer>
    );
  }