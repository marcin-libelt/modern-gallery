"use client";

import { Heading, LayoutContainer } from "@/app/components";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "@/app/components/icons/Logo";

const Header = (): JSX.Element => {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const classes = {
    root: "flex sticky items-center bg-black h-24 justify-start gap-3 items-end",
  };

  const HeadigCopy = () => <p className="text-white">ARCHITECTURE</p>;

  return (
    <header className="sticky top-0 z-10 mb-1">
      <LayoutContainer className={classes.root}>
        <Logo width={35} color={"#ff9e42"} />
        {!isHomepage ? (
          <Link href={"/"} className={"text-xl flex no-underline"}>
            <HeadigCopy />
          </Link>
        ) : (
          <Heading level={1} title={<HeadigCopy />} />
        )}
      </LayoutContainer>
    </header>
  );
};

Header.displayName = "Header";

export default Header;
