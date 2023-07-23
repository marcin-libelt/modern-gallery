import Heading from "./Heading";
import LayoutContainer from "./LayoutContainer";

export default function Header(): JSX.Element {
  const classes = {
    root: "w-full flex sticky items-center bg-black h-24 justify-start gap-3 items-end",
  };

  return (
    <header className="sticky top-0 z-10">
      <LayoutContainer className={classes.root}>
        <Heading level={1}>
          ARCHITECTURE <span className="text-xs">&copy;</span>
        </Heading>
      </LayoutContainer>
    </header>
  );
}
