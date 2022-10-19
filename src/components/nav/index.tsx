import { useWindowDimensions } from "@/hooks";
import { MobileMenu } from "./mobileMenu";
import { NavItem } from "./item";
import Link from "next/link";

export function Nav() {
  const dimensions = useWindowDimensions();

  return (
    <nav className="flex w-full justify-between items-center">
      <Link href="/">
        <h1 className="text-lg font-medium md:text-xl">vedant nandwana</h1>
      </Link>

      {dimensions.width < 768 ? (
        <MobileMenu />
      ) : (
        <div className="md:hover:text-neutral-500 flex max-w-fit">
          <NavItem href="/blogs">blogs</NavItem>
          <NavItem href="#projects">projects</NavItem>
          <NavItem href="#about">about</NavItem>
          <NavItem href="#contact">contact</NavItem>
        </div>
      )}
    </nav>
  );
};
