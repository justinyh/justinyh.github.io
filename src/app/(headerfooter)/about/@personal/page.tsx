import Section from "@/components/Section";
import SideBySide from "@/components/SideBySide";
import Image from "next/image";
import JustinPic from "/public/justin_personal.jpg";
import FamilyPic from "/public/Family.jpg";

export default function Personal() {
    return (
        <div className="flex flex-col gap-8">
            <div className="text-center">
                <Section title="About me">
                    <p className="mt-3">Hi, I'm Justin! My life's been a wild ride so far, so let me tell you bit about it.</p>
                    <div className="w-80 mx-auto mt-3">
                        <Image src={JustinPic} priority alt="A picture of Justin." />
                    </div> 
                </Section>
            </div>
            <SideBySide title="My Background" gap={4}>
                <div className="flex flex-col gap-4">
                    <p>I was born & raised in a small suburb of Des Moines, Iowa. My parents immigrated to the United States in search of opportunity for their kids. As I grew up, they always taught me the value of dedication and dreaming big.</p>
                    <p>These days, I often think about how they left their families and lives behind and came across the Pacific Ocean with nothing but a few hundred dollars to their name. I asked them if they were scared to make such a crazy journey, they replied, "No honestly, we were excited!" And I think that sums up their attitude towards life.</p>
                    <p>Their story inspires me every day to pursue new experiences, even if they’re a bit scary. From them, I get my adventurous spirit and ambitious drive.</p>
                </div>
                <div>
                    <Image src={FamilyPic} alt="A picture of Justin and his family."/>
                </div>
            </SideBySide>
        </div>
    );
}