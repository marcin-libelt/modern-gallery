import { LayoutContainer } from "../components";

export default function Footer(): JSX.Element {
  const classes = {
    root: "mx-auto w-full flex justify-between text-xs pt-5 my-5",
  };

  return (
    <footer className={classes.root}>
      <LayoutContainer>
        <p>
          GitHub:{" "}
          <a href="https://github.com/marcin-libelt" className="text-white">
            https://github.com/marcin-libelt
          </a>
        </p>
        <p>&copy; {new Date().getFullYear()} by Marcin Libelt </p>
      </LayoutContainer>
    </footer>
  );
}
