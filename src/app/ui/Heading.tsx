import { PropsWithChildren } from "react";

interface HeadingProps {
  level: number;
  className?: string;
}

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
