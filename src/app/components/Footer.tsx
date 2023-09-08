import { LayoutContainer } from "../components";

const Footer = () => {
  const classes = {
    root: "mx-auto w-full flex justify-between text-xs pt-5 my-5",
  };

  return (
    <footer className={classes.root}>
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
    </footer>
  );
};

Footer.displayName = "Footer";

export default Footer;
