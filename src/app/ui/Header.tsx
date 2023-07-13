export default function Header(): JSX.Element {
  return (
    <header className={classes.root}>
      <h1 className="text-xl flex">
        ARCHITECTURE <span className="text-xs">&copy;</span>
      </h1>
    </header>
  );
}

const classes = {
  root: "w-full flex sticky items-center h-24 bg-black top-0 z-10 justify-start gap-3 items-end",
};
