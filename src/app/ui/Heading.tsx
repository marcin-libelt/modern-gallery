import { PropsWithChildren } from "react";
import { HeadingProps } from "../types";

export default function Heading({
  level,
  className,
  children,
}: PropsWithChildren<HeadingProps>): JSX.Element {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <HeadingTag className={`text-xl flex ${className}`}>{children}</HeadingTag>
  );
}
