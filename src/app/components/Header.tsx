"use client";

import { Heading } from "@/app/components";
import { LayoutContainer } from "@/app/styles/sharedstyles";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "@/app/components/icons/Logo";
import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";

const LinkCss = css`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-decoration-line: none;

  color: ${({ theme }) => theme.font};
`;

const StyledLink = styled(Link)`
  ${LinkCss}
`;

const StyledA = styled.a`
  ${LinkCss}
`;

const HeaderActionBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  margin-bottom: 0.25rem;
  background-color: ${({ theme }: { theme: any }) => theme.body};

  .logo path {
    fill: ${({ theme }: { theme: any }) => theme.font};
  }
`;

const HeaderStyledContainer = styled(LayoutContainer)`
  display: flex;
  height: 6rem;
  justify-content: space-between;
`;

const Header = ({
  className,
  children,
}: PropsWithChildren & { className?: string }) => {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  const HeadigCopy = () => <p>ARCHITECTURE</p>;
  const logoTitle = "Architecture gallery logo";
  const origin = typeof window === "undefined" ? "/" : window.location.origin;

  return (
    <StyledHeader className={className}>
      <HeaderStyledContainer>
        {!isHomepage ? (
          <StyledLink href={"/"}>
            <Logo width={35} title={logoTitle} />
            <HeadigCopy />
          </StyledLink>
        ) : (
          <StyledA href={origin} rel="nofollow">
            <Logo width={35} title={logoTitle} />
            <Heading level={1} title={<HeadigCopy />} />
          </StyledA>
        )}
        <HeaderActionBox>{children}</HeaderActionBox>
      </HeaderStyledContainer>
    </StyledHeader>
  );
};

Header.displayName = "Header";

export default Header;
