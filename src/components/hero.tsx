import { Emoji } from "@/components";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center my-16">
      <h1 className="font-semibold text-neutral-400 text-center text-5xl md:text-8xl">
        a dev who just
        <br />
        <span className="italic text-neutral-100">loveeees</span> to
        tinker with pixels.
      </h1>

      <Link href="#about">
        <button
          className="button button-md md:button-lg button-primary mt-10"
        >
          Explore
          <Emoji name="eyes" size={24} />
        </button>
      </Link>
    </div>
  );
};

