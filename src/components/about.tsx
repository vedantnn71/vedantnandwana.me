import { Emoji } from "@/components";
import { ReactNode } from "react";

export const About = () => (
  <div className="flex flex-col w-full h-full text-neutral-400 font-semibold text-xl md:text-3xl gap-6" id="about">
    <h1 className="text-lg md:text-2xl">about me</h1>
    <p className="">
      heyy <Emoji name="wave" size={24} /> I’m <Highlight>vedant</Highlight>. A
      young dev who <Highlight>loveeeees</Highlight> tinkering and playing with
      software.
    </p>
    <p>
      I’m passionate about <Highlight>building sh#t</Highlight> that makes our
      lives easier with a{" "}
      <span className="stretch underline-offset-8 hover:underline decoration-wavy ease-out">
        buttery smoooth
      </span>{" "}
      user experience.
    </p>
    <p>
      {" "}
      currently I’m <Highlight>building dive.</Highlight> an app which can help
      you make it easy to plan your life.
    </p>
  </div>
);

type HighlightProps = {
  children: ReactNode;
};

const Highlight = ({ children }: HighlightProps) => (
  <span className="text-neutral-100 italic">{children}</span>
);
