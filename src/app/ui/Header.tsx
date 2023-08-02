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

  const HeadigCopy = () => (
    <>
      ARCHITECTURE <span className="text-xs">&copy;</span>
    </>
  );

  return (
    <header className="sticky top-0 z-10 mb-1">
      <LayoutContainer className={classes.root}>
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
}
