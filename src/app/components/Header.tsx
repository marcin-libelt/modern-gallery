"use client";

import { Heading, LayoutContainer } from "@/app/components";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "@/app/components/icons/Logo";
import { PropsWithChildren } from "react";

const Header = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const classes = {
    root: "flex sticky items-center bg-background h-24 justify-between ",
    headerLink: "flex items-center gap-3 text-xl no-underline",
  };

  const HeadigCopy = () => <p className="text-white">ARCHITECTURE</p>;
  const logoTitle = "Architecture gallery logo";
  const origin = typeof window === "undefined" ? "/" : window.location.origin;

  return (
    <header className="sticky top-0 z-10 mb-1">
      <LayoutContainer className={classes.root}>
        {!isHomepage ? (
          <Link href={"/"} className={classes.headerLink}>
            <Logo width={35} title={logoTitle} />
            <HeadigCopy />
          </Link>
        ) : (
          <a href={origin} className={classes.headerLink} rel="nofollow">
            <Logo width={35} title={logoTitle} />
            <Heading level={1} title={<HeadigCopy />} />
          </a>
        )}
        <div className="flex justify-between">{children}</div>
      </LayoutContainer>
    </header>
  );
};

Header.displayName = "Header";

export default Header;
