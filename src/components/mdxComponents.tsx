import Link from "next/link";
import Image, { ImageProps } from "next/future/image";
import { ProsCard, ConsCard } from "@/components";
import { ReactNode } from "react";

type CalloutProps = {
  emoji: string;
  children: ReactNode;
};

const CustomLink = (props: JSX.IntrinsicElements["a"]) => {
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
    <div className="flex bg-gray-200 dark:bg-gray-800 rounded-lg p-4 my-8">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
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

