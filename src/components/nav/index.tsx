import { useWindowDimensions } from "@/hooks";
import { MobileMenu } from "./mobileMenu";
import { NavItem } from "./item";
import Link from "next/link";

export const Nav = () => {
  const dimensions = useWindowDimensions();

  return (
    <nav className="flex w-full justify-between">
      <Link href="/">
        <h1 className="text-xl font-medium">vedant nandwana</h1>
      </Link>

      {dimensions.width < 768 ? (
        <MobileMenu />
      ) : (
        <div className="group flex gap-4">
          <NavItem href="/blogs">blogs</NavItem>
          <NavItem href="#projects">projects</NavItem>
          <NavItem href="#about">about</NavItem>
          <NavItem href="#contact">contact</NavItem>
        </div>
      )}
    </nav>
  );
};
