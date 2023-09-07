import { PropsWithChildren } from "react";
import { HeadingProps } from "../types";

const Heading = ({
  level,
  title,
  className,
}: PropsWithChildren<HeadingProps>) => {
  const HeadingTag = `h${level}` as keyof React.JSX.IntrinsicElements;

  return (
    <HeadingTag className={`flex ${className ? className : ""}`}>
      {title}
    </HeadingTag>
  );
};

Heading.displayName = "Heading";

export default Heading;
