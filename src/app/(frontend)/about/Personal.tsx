import Section from "@/components/Section";
import Image from "next/image";

export default function Personal() {
    return (
        <div className="flex flex-col gap-8 ">
            <div className="text-center">
                <Section title="About me">
                    <div className="w-80 mx-auto mb-4">
                        <Image src="profile_picture.jpg" priority alt="A picture of Justin." width={3024} height={4032} sizes="20rem" />
                    </div> 
                    <p>Hi, I'm Justin! My life's been a wild ride so far, so let me tell you bit about it.</p>

                </Section>
            </div>
            <Section title="My Background" center>
                <div className="flex flex-col gap-4">
                    <p>I was born & raised in a small suburb of Des Moines, Iowa. Before I was born, my parents immigrated to the United States in search of opportunity.</p>
                    <div className="w-80 h-80 mx-auto shrink-0">
                        <Image src="about/Family.jpeg" alt="A picture of Justin and his family." width={640} height={640} sizes="(max-width: 640px) 100vw, 50vw" />
                    </div>
                    <p>These days, I often think about how they left their families and lives behind and flew across the Pacific Ocean with nothing but a few hundred dollars to their name. When I asked them if they were scared to make such a crazy journey, they replied, "No honestly, we were excited!" And I think that just about sums up their attitude towards life.</p>
                    <p>Their story inspires me every day to pursue new experiences, even if they’re a bit scary. From them, I get my adventurous spirit and ambitious drive.</p>
                </div>
            </Section>
        </div>
    );
}