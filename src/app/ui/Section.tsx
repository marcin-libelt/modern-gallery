export default function Section({
  labelby,
  hLevel = 4,
  title,
  children,
}: {
  labelby: string;
  hLevel?: number;
  title?: string;
  children: React.ReactNode;
}) {
  const HeadingTag = `h${hLevel}` as keyof JSX.IntrinsicElements;
  const classes = {
    root: "mb-5",
    heading: "text-secondary",
  };
  return (
    <section aria-labelledby={labelby} className={classes.root}>
      {title ? (
        <HeadingTag id={labelby} className={classes.heading}>
          {title}
        </HeadingTag>
      ) : null}
      {children}
    </section>
  );
}
