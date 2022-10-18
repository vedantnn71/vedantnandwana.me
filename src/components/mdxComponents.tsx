import Link from "next/link";
import Image, { ImageProps } from "next/future/image";
import { ProsCard, ConsCard } from "@/components";
import { ReactNode } from "react";

type CalloutProps = {
  emoji: string;
  children: ReactNode;
};

function CustomLink(props: JSX.IntrinsicElements["a"]) {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props: ImageProps) {
  return <Image className="rounded-lg" {...props} />;
}

function Callout(props: CalloutProps) {
  return (
    <div className="my-8 flex rounded-lg bg-gray-200 p-4 dark:bg-gray-800">
      <div className="mr-4 flex w-4 items-center">{props.emoji}</div>
      <div className="callout w-full">{props.children}</div>
    </div>
  );
}

export const MDXComponents = {
  Image: RoundedImage,
  a: CustomLink,
  Callout,
  ConsCard,
  ProsCard,
};
