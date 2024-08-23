import Section from "@/components/Section";
import USCPic from "/public/USC.jpg";
import RelativityPic from "/public/Relativity.JPG";
import RelativityPic2 from "/public/Relativity_2.jpg";
import RelativityFriendsPic from "/public/Relativity_Friends.JPG";
import Experience from "@/components/Experience";

const experiences = [
    {
        id: "relativity",
        title: "Advanced Software Engineer @ Relativity",
        date: "April 2023 - Present",
        accomplishments: [
            "Led a build system migration, achieving a 45% reduction in build times, a 38% decrease in bundle size, and resulted in zero P1/P2 incidents.",
            // "Contributed 5+ components to a framework-agnostic design system used across 50+ applications, resulting in 1000+ total hours of time savings per component for company reinvestment.",
        ],
        img: {
            src: RelativityPic2,
            alt: "A neon sign that is lit with the word \"Relativity\"",
        }
    },
    {
        title: "Software Engineer @ Relativity",
        date: "June 2021 - April 2023",
        accomplishments: [
            // "Converted a legacy .NET Web Service to .NET Framework that retrieved, aggregated, and cached 15 system settings from disparate SQL tables to be displayed in the UI. This conversion supported company efforts to deprecate single-tenant web servers in favor of multi-tenant Kubernetes microservices.",
            "Developed a team onboarding and documentation process, which facilitated knowledge sharing and reduced onboarding time for new engineers."
        ],
        img: {
            src: RelativityFriendsPic,
            alt: "A neon sign that is lit with the word \"Relativity\"",
        }
    },
    {
        title: "Student @ University of Southern California",
        date: "August 2017 - May 2021",
        learnings: [
            "Learned the basics of C++/C, Java, HTML/CSS/Javascript, and Python.",
            "Developed a passion for writing in my Thematic Option Honors Program classes."
        ],
        accomplishments: [
            "Graduated with a Bachelor's of Science in Computer Science.",
            "Developed strong written communication"
        ],
        img: {
            src: USCPic,
            alt: "Justin dressed up in his graduation sash posing with a \"Fight on!\" sign.",
        },
    },
    {
        title: "Software Engineer Intern @ Relativity",
        date: "May 2020 - August 2020",
        learnings: [
            "Something"
        ],
        accomplishments: [
            "Contributed to a shared web component library using JavaScript and Sass harnessed by over 500 internal engineers and deployed to a worldwide customer base.",
            "Fixed three critical defects in Relativity Forms in preparation for general availability of the Aero UI product-wide redesign.",
            "Wrote C#/.NET integration test suites to increase our deployment confidence, resulting in our release cadence improving from once per month to on-demand via CI/CD."
        ],
        img: {
            src: RelativityPic,
            alt: "A neon sign that is lit with the word \"Relativity\"",
        }
    }
]

export default function Professional() {
    return (
        <div className="flex flex-col gap-10">
            <Section title="Digital Resume">
                <p>Hi, I'm Justin! I'm a software engineer with over three years of full-stack development experience. I am currently at Relativity, which is the world's leading e-discovery platform. There, I have spearheaded multiple high-impact projects.</p>
            </Section>
            <Section title="How I Got Here">
                <div className="flex flex-col gap-4">
                    <p>My journey into software engineering wasn't straightforward. I initially entered college with the intention to study biology and enter the healthcare industry. However, I had a background in the arts and felt that my creative drive wasn't satisfied by the field I was pursuing.</p>
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
                {
                    experiences.map((item) => (
                        <Experience key={item.title} data={item} imgSrc={item.imgSrc} />
                    ))
                }
                </div>
            </Section>
        </div>
    );
}