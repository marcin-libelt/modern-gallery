import { LayoutContainer, StyledFooter } from "@/app/styles/sharedstyles";

const Footer = () => {
  return (
    <StyledFooter>
      <LayoutContainer>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/marcin-libelt"
            className="text-white"
            rel="nofollow"
            aria-label="Click to visit Marcin's Libelt GitHub profile"
          >
            https://github.com/marcin-libelt
          </a>
        </p>
        <p>&copy; {new Date().getFullYear()} by Marcin Libelt </p>
      </LayoutContainer>
    </StyledFooter>
  );
};

Footer.displayName = "Footer";

export default Footer;
