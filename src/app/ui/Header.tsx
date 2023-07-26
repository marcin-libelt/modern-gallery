"use client";

import Heading from "./Heading";
import LayoutContainer from "./LayoutContainer";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header(): JSX.Element {
  const pathname = usePathname();

  const isHomepage = pathname === "/";

  const classes = {
    root: "w-full flex sticky items-center bg-black h-24 justify-start gap-3 items-end",
  };

  return (
    <header className="sticky top-0 z-10">
      <LayoutContainer className={classes.root}>
        {!isHomepage ? (
          <Link href={"/"} className={"text-xl flex no-underline"}>
            ARCHITECTURE <span className="text-xs">&copy;</span>
          </Link>
        ) : (
          <Heading level={1}>
            ARCHITECTURE <span className="text-xs">&copy;</span>
          </Heading>
        )}
      </LayoutContainer>
    </header>
  );
}
