import Section from "@/components/Section";
import Experience from "@/components/Experience";
import { Chip } from "@/components/Chip";

export default function Professional() {
    return (
        <div className="flex flex-col gap-10">
            <Section title="Digital Resume">
                <p>I'm a software engineer with over five years of full-stack development experience. I currently work at <Chip fillColor="#0052CC" href="https://www.atlassian.com/">Atlassian</Chip>
                    , where I'm helping develop their new enterprise strategic planning product called <Chip fillColor="#F68909" fontColor="#FFFFFF" href="https://www.atlassian.com/software/focus">Focus</Chip>.
                </p>
            </Section>
            <Section title="How I Got Here">
                <div className="flex flex-col gap-4">
                    <p>My journey into software engineering wasn't straightforward. I initially entered college with the intention to study biology and work in healthcare. However, I had a background in the arts and felt that my creative drive wasn't satisfied by the field I was pursuing.</p>
                    <p>In my sophomore year, I took two introductory CS classes and quickly fell in love. I found I had a knack for it, putting my childhood love of brain teasers and logic puzzles to good use. I soon changed majors, and to this day I consider this one of the best decisions I have ever made.</p>
                </div>
            </Section>
            {/* <Section title="Tools I Use">
                <div className="text-4xl mt-4">
                    <ButtonGroup>
                        <FontAwesomeIcon icon={faReact} />
                        <FontAwesomeIcon icon={faReact} />
                        <FontAwesomeIcon icon={faReact} />
                    </ButtonGroup>
                </div>
            </Section> */}
            <Section title="Experiences">
                <div className="mt-4 flex flex-col gap-8">
                    <Experience title="Full Stack Software Engineer @ Atlassian" date="February 2025 - Present" imgSrc="/images/Atlassian_Logo_blue.svg" imgAlt="Atlassian Logo">
                        Biggest Accomplishment: Developed Views, a feature that allows users to save and return to commonly used table displays. By using React + Relay, we were able to build a reusable component that scaled across the application to three different entities.
                    </Experience>
                    <Experience title="Advanced Software Engineer @ Relativity" date="June 2021 - January 2025" imgSrc="about/Relativity.jpeg" imgAlt="A neon sign that is lit with the word 'Relativity'">
                        Biggest Accomplishment: Led a build system migration, achieving a 45% reduction in build times, a 38% decrease in bundle size, and resulted in zero P1/P2 incidents.
                    </Experience>
                    <Experience title="Student @ University of Southern California" date="August 2017 - May 2021" imgSrc="about/Justin_USC.jpeg" imgAlt="Justin dressed up in his graduation sash posing with a 'Fight on!' sign.">
                        Biggest Accomplishment: Graduated with a Bachelor's of Science in Computer Science.
                    </Experience>
                    <Experience title="Software Engineer Intern @ Relativity" imgSrc="about/Relativity_2.jpg" imgAlt="A neon sign that is lit with the word 'Relativity'" date="May 2020 - August 2020">
                        Biggest Accomplishment: Contributed to a shared web component library using JavaScript and Sass harnessed by over 500 internal engineers and deployed to a worldwide customer base.
                    </Experience>
                </div>
            </Section>
        </div>
    );
}