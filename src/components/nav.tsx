import { ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import cx from "classnames";

type NavItemProps = {
  href: string;
  children: ReactNode;
  className?: string;  
}

const NavItem = ({ href, children, className }: NavItemProps) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <a
        className={cx(
          "text-base text-neutral-300 hover:text-white",
          isActive && "font-medium",
          className,
        )}
      >
        {children}
      </a>
    </Link>
  )
}

export const Nav = () => {
  return (
    <nav className="flex justify-between mx-2">
      <Link href="/">
        <h1 className="text-xl font-medium">
          vedant nandwana
        </h1>
      </Link>
      
      <div className="flex gap-4 group">
        <NavItem href="/blogs">blogs</NavItem>
        <NavItem href="/projects">projects</NavItem>
        <NavItem href="/about">about</NavItem>
        <NavItem href="/contact">contact</NavItem>
      </div>
    </nav>
  )
}
