import { ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import cx from "classnames";

type NavItemProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function NavItem({ href, children, className }: NavItemProps) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <a
        className={cx(
          "px-3 text-base md:hover:text-white",
          isActive &&
            "rounded-xl bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 py-2 font-medium text-neutral-800 md:bg-none",
          className
        )}
      >
        {children}
      </a>
    </Link>
  );
};
