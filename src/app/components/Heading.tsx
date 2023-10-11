"use client";

import { PropsWithChildren } from "react";
import { HeadingProps } from "../types";
import styled from "styled-components";

const Heading = ({
  level,
  title,
  className,
}: PropsWithChildren<HeadingProps>) => {
  const HeadingTag = `h${level}` as keyof React.JSX.IntrinsicElements;

  const StyledHeading = styled(HeadingTag)`
    display: flex;
  `;

  return (
    <StyledHeading className={`${className && className}`}>
      {title}
    </StyledHeading>
  );
};

Heading.displayName = "Heading";

export default Heading;
