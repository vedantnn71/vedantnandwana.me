import { Emoji } from "@/components";
import { ReactNode } from "react";

export function About() {
  return (
    <div
      className="flex h-full w-full flex-col gap-6 text-xl font-semibold text-neutral-400 md:text-3xl"
      id="about"
    >
      <h1 className="text-lg md:text-2xl">about me</h1>
      <p>
        heyy <Emoji name="wave" size={24} /> I’m <Highlight>vedant</Highlight>.
        A young dev who <Highlight>loveeeees</Highlight> tinkering and playing
        with software.
      </p>
      <p>
        I’m passionate about <Highlight>building sh#t</Highlight> that makes our
        lives easier with a{" "}
        <span className="stretch decoration-wavy underline-offset-8 ease-out hover:underline">
          buttery smoooth
        </span>{" "}
        user experience.
      </p>
      <p>
        {" "}
        currently I&apos;m diving into the world of <Highlight>open source</Highlight>, and building software for stuff that I find repetative and painful.
      </p>
    </div>
  );
}

type HighlightProps = {
  children: ReactNode;
};

function Highlight({ children }: HighlightProps) {
  return <span className="italic text-neutral-100">{children}</span>;
}

