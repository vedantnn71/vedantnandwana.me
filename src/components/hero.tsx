import { Emoji } from "@/components";
import Link from "next/link";

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-20">
      <h1 className="text-center text-5xl font-semibold text-neutral-400 md:text-7xl lg:text-9xl">
        a dev who just
        <br />
        <span className="italic text-neutral-100">loveeees</span> to tinker with
        pixels.
      </h1>

      <Link href="#about">
        <button
          data-event="click"
          data-event-name="Explore"
          className="button button-md md:button-lg button-primary mt-10"
        >
          Explore
          <Emoji name="eyes" size={24} />
        </button>
      </Link>
    </div>
  );
}
