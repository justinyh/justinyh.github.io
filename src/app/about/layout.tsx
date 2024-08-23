"use client"
import React, {PropsWithChildren, useContext, useRef} from "react";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@/components/buttons/Button";
import { useRouter } from "next/navigation";
import Container from "@/components/Container";

export default function Layout(props: PropsWithChildren) {
  const router = useRouter();

  return (
    <main>
      <header className="h-12 text-xl">
        <div>
          <Button variant="secondary" onClick={() => router.back()}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </Button>
        </div>
      </header>
        <Container>
          <article className="prose">
            {props.children}
          </article>
        </Container>
    </main>
  );
}