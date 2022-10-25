import Link from "next/link";
import { NowPlaying } from "@/components";

export function Footer() {
  return (
    <div className="my-6 w-full">
      <NowPlaying />

      <div className="flex gap-8 text-base font-medium text-neutral-400 md:gap-12 md:text-lg">
        <div className="flex flex-col gap-4">
          <Link href="/">home</Link>
          <Link href="/blogs">blog</Link>
          <Link href="/#projects">projects</Link>
          <Link href="/#contact">contact</Link>
        </div>

        <div className="flex flex-col gap-4">
          <a
            href="https://twitter.com/vedantnn71"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>
          <a
            href="https://linkedin.com/in/vedant-nandwana"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
          <a
            href="https://github.com/vedantnn71"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          <a
            href="https://www.buymeacoffee.com/vedantnandwana"
            target="_blank"
            rel="noopener noreferrer"
          >
            buy me a coffee
          </a>
        </div>
      </div>
    </div>
  );
}
