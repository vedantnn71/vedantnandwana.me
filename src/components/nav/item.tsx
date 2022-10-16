import { ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import cx from "classnames";

type NavItemProps = {
  href: string;
  children: ReactNode;
  className?: string;  
}

export const NavItem = ({ href, children, className }: NavItemProps) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <a
        className={cx(
          "text-base md:hover:text-white px-3 md:text-neutral-300 md:p-0",
          isActive && "font-medium text-neutral-800 py-2 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 rounded-xl md:bg-none",
          className,
        )}
      >
        {children}
      </a>
    </Link>
  )
}

