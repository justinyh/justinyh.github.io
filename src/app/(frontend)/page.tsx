import Image from "next/image";
import Container from "@/components/Container";
import ProfilePic from "../../../public/justin_profile.jpg";
import ButtonGroup from "@/components/buttons/ButtonGroup";
import { LinkButton } from "@/components/buttons/LinkButton";
import SideBySide from "@/components/SideBySide";
import { Metadata } from "next";
import { Heading } from "@/components/Heading";

export const metadata: Metadata = {
  title: 'Justin Hu | Engineer',
  description: 'Justin Hu is a software engineer based in Seattle, WA. He has over five years of software development experience.',
}

export default function Home() {
  return (
    <main className="">
      <Container>
        <div className="flex flex-col mt-12 gap-32">
          <SideBySide sx="flex-col-reverse items-center" gap={8}>
            <div className="sm:max-w-72 md:max-w-96 lg:max-w-none">
              <Heading size="l">Hey, I'm Justin!</Heading>
              <p className="text-base my-4">I’m a software engineer currently based in Seattle, WA. I have over five years of full-stack development experience.</p>
              <p>I’m originally from Des Moines, Iowa and the proud son of immigrant parents who taught me the value of dedication and dreaming big.</p>
              <div className="mt-6">
                <ButtonGroup>
                  <LinkButton href="https://r2.justinyh.com/Justin_Hu_Resume_2024.pdf" newTab>Resume</LinkButton>
                  <LinkButton href="/about" variant="secondary">Meet Me</LinkButton>
                </ButtonGroup>
              </div>
            </div>
            <div className="min-w-24">
              <Image src="profile_picture.jpg" alt="A picture of Justin." priority width={1092} height={1092}/>
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
