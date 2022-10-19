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
    <Link href={href} prefetch={false}>
      <a
        className={cx(
          "px-3 text-base text-neutral-300 md:py-0 md:text-inherit md:hover:text-white",
          isActive &&
            "rounded-xl bg-neutral-800 to-yellow-100 font-medium sm:py-2 md:bg-none",
          className
        )}
      >
        {children}
      </a>
    </Link>
  );
};
