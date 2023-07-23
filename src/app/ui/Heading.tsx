import { PropsWithChildren } from "react";

interface HeadingProps {
  level: number;
}

export default function Heading({
  level,
  children,
}: PropsWithChildren<HeadingProps>): JSX.Element {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  return <HeadingTag className="text-xl flex">{children}</HeadingTag>;
}
