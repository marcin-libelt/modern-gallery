import { PropsWithChildren } from "react";
<<<<<<< HEAD

interface HeadingProps {
  level: number;
  className?: string;
}
=======
import { HeadingProps } from "../types";
>>>>>>> 7f63471 (initial photo page with user description)

export default function Heading({
  level,
  className,
  children,
  className,
}: PropsWithChildren<HeadingProps>): JSX.Element {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
<<<<<<< HEAD
=======

>>>>>>> 7f63471 (initial photo page with user description)
  return (
    <HeadingTag className={`text-xl flex ${className}`}>{children}</HeadingTag>
  );
}
