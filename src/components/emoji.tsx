import Image from "next/image";

type EmojiProps = {
  name: "wave" | "eyes";
  size: number;
};

export const Emoji = ({ name, size }: EmojiProps) => {
  return (
    <Image
      src={`/emojis/${name}.png`}
      alt={name}
      width={size}
      height={size}
    />
  );
}
