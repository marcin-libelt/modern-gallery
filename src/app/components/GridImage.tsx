"use client";

import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import type { ItemProps } from "../types";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: block;
  aspect-ratio: 1/1;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  .img-wrapper {
    position: relative;
    height: 100%;
  }

  img {
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    opacity: 0.7;
  }
`;

interface GridImageProps extends ItemProps {
  priority?: boolean;
}

const GridImage = ({
  id,
  color,
  urls,
  alt_description,
  width,
  height,
  priority,
}: GridImageProps) => {
  return (
    <StyledLink href={`/photo/${id}`} style={{ backgroundColor: color }}>
      <div className="img-wrapper">
        <Image
          src={urls.raw}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          width={width}
          height={height}
          priority={priority}
          alt={alt_description ? alt_description : ""}
        />
      </div>
    </StyledLink>
  );
};

GridImage.displayName = "GridImage";

export default memo(GridImage);
