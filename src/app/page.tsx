import Image from "next/image";
import { Manrope } from "next/font/google";
import Container from "@/components/Container";
import ProfilePic from "../../../public/justin_profile.jpg";
import ButtonGroup from "@/components/buttons/ButtonGroup";
import { LinkButton } from "@/components/buttons/LinkButton";
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
            <div className="sm:max-w-72 md:max-w-96 lg:max-w-none">
              <h1 className={`${manrope.className} text-4xl md:text-5xl font-extrabold`}>Hey, I'm Justin!</h1>
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
              <Image src="/justin_profile.jpg" alt="A picture of Justin." priority width={1092} height={1092} sizes="(max-width: 640px) 100vw, 50vw" style={{
                width: '100%',
                height: 'auto',
              }}/>
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
