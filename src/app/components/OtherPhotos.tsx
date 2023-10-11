"use client";

import Image from "next/image";
import Link from "next/link";
import { ItemProps } from "@/app/types";
import { Heading } from "@/app/components";
import styled from "styled-components";

const StyledUl = styled.ul`
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin-bottom: 0.25rem;
`;

const StyledH = styled(Heading)`
  margin-bottom: 1.25rem;
`;

const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.tiny};
  color: ${({ theme }) => theme.colors.secondary};
`;

const OtherPhotos = ({
  limit = 9,
  username,
  photos,
}: {
  limit: number;
  username: string;
  photos: ItemProps[];
}): React.JSX.Element => {
  return (
    <>
      <StyledH level={3} title={"More from this author"} />
      <StyledUl role="list">
        {photos
          .slice(0, limit)
          .map(({ id, urls, alt_description }: ItemProps) => (
            <li key={id}>
              <Image
                width={100}
                height={100}
                src={urls.thumb}
                alt={alt_description ? alt_description : ""}
              ></Image>
            </li>
          ))}
      </StyledUl>
      <StyledLink href={`/author/${username}`}>
        {"See all"}
        <span className="sr-only">{" from this author"}</span>
      </StyledLink>
    </>
  );
};

OtherPhotos.displayName = "OtherPhotos";

export default OtherPhotos;
