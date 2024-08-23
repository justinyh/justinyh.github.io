import Image from "next/image";
import { Manrope } from "next/font/google";
import Container from "@/components/Container";
import ProfilePic from "/public/justin_profile.jpg";
import ButtonGroup from "@/components/buttons/ButtonGroup";
import { LinkButton } from "@/components/buttons/LinkButton";
import Section from "@/components/Section";
import SideBySide from "@/components/SideBySide";
import { Metadata } from "next";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Justin Hu | Engineer',
  description: 'Justin Hu is a software engineer based in Chicago, IL. He has over three years of development experience.',
}

export default function Home() {
  return (
    <main className="">
      <Container>
        <div className="flex flex-col mt-12 gap-32">
          <SideBySide sx="flex-col-reverse items-center" gap={8}>
            <div className="md:min-w-96">
              <h1 className={`${manrope.className} text-4xl md:text-5xl font-bold`}>Hey, I'm Justin!</h1>
              <p className="text-base my-4">I’m a software engineer currently based in Chicago, IL. I have over three years of full-stack development experience.</p>
              <p>I’m originally from Des Moines, Iowa and the proud son of immigrant parents who taught me the value of dedication and dreaming big.</p>
              <div className="mt-6">
                <ButtonGroup>
                  <LinkButton href="/Justin_Hu_Resume_2024.pdf" newTab>Resume</LinkButton>
                  <LinkButton href="/about" variant="secondary">Meet Me</LinkButton>
                </ButtonGroup>
              </div>
            </div>
            <div>
              <Image src={ProfilePic} alt="A picture of Justin." />
            </div>
          </SideBySide>
          {/* <Section title="Latest Posts">
            Test
          </Section> */}
        </div>
      </Container>
    </main>
  );
}
