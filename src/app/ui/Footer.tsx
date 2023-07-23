import LayoutContainer from "./LayoutContainer";

export default function Footer(): JSX.Element {
  const classes = {
    root: "mx-auto w-full flex justify-between text-xs pt-5 my-5",
  };

  return (
    <footer className={classes.root}>
      <LayoutContainer>
        <p>
          GitHub:{" "}
          <a href="https://github.com/marcin-libelt">
            https://github.com/marcin-libelt
          </a>
        </p>
        <p>Copyright &copy; Marcin Libelt {new Date().getFullYear()}</p>
      </LayoutContainer>
    </footer>
  );
}
