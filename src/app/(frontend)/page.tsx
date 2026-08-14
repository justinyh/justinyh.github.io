import Image from "next/image";
import Container from "@/components/Container";
import ButtonGroup from "@/components/buttons/ButtonGroup";
import { LinkButton } from "@/components/buttons/LinkButton";
import SideBySide from "@/components/SideBySide";
import { Metadata } from "next";
import { Heading } from "@/components/Heading";

export const metadata: Metadata = {
  title: 'Justin Hu | Developer',
  description: 'Justin Hu is a software engineer based in Seattle, WA. He has over five years of software development experience.',
}
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Justin Hu',
  url: "https://justinyh.com/"
}

export default function Home() {
  return (
    <main className="">
      <Container>
        <div className="flex flex-col mt-12 gap-32">
          <SideBySide sx="flex-col-reverse items-center" gap={8}>
            <div className="sm:max-w-72 md:max-w-96 lg:max-w-none">
              <Heading level={1}>Hey, I'm Justin!</Heading>
              <p className="text-base my-4">I’m a software engineer currently based in Seattle, WA. I have over five years of full-stack development experience.</p>
              <p>I’m originally from Des Moines, Iowa and the proud son of immigrant parents who taught me the value of dedication and dreaming big.</p>
              <div className="mt-6">
                <ButtonGroup>
                  <LinkButton href="https://ucopquvpjm213wrr.private.blob.vercel-storage.com/Hu_Resume_2024.pdf?vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfdWNPcFF1dlBqbTIxM3dSUiIsIm93bmVySWQiOiJ0ZWFtX05yN0pmdHh0eGR6a0dxZGNsbGpkdE82cCIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzg2NzIxMzYzMDg5LCJpYXQiOjE3ODY2NzgxNjMxNTF9.YTi7rWbqE3dWVTXZkC8JkjFt9nb0Eyc7PSrx6TUjkFI&vercel-blob-signature=9rJksOinZOrwTyHzajxYd8CIomGR8aK5CeXIJQipH2o" newTab>Resume</LinkButton>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
    </main>
  );
}
