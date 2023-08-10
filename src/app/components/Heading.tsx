import { PropsWithChildren } from "react";
import { HeadingProps } from "../types";

const Heading = ({
  level,
  title,
  className,
}: PropsWithChildren<HeadingProps>): JSX.Element => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <HeadingTag className={`flex ${className ? className : ""}`}>
      {title}
    </HeadingTag>
  );
};

Heading.displayName = "Heading";

export default Heading;
