"use client";

import { AuthorProps } from "../types";
import { Avatar, Heading } from "../components";
import styled from "styled-components";

const StyledAuthorInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid #7f7f89;
  padding-bottom: 3.5rem;
  padding-top: 2rem;
  text-align: center;

  .avatar {
    margin-bottom: 1rem;
  }

  .bio {
    font-size: ${({ theme }) => theme.fontSize.small};
  }

  .name {
    margin-bottom: 0.5rem;
  }
`;

const StyledIgLink = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  font-size: ${({ theme }) => theme.fontSize.tiny};

  a {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const AuthorInfo = ({
  profile_image,
  name,
  bio,
  instagram_username,
}: AuthorProps) => {
  const Bio = ({ copy }: { copy: string }) => {
    return <p className="bio">{copy}</p>;
  };

  const InstagramLink = ({ name }: { name: string }) => {
    const instagramUrl = `https://instagram.com/${name}`;
    return (
      <StyledIgLink>
        <a
          href={instagramUrl}
          target="_blank"
          aria-label={"Instagram account link opens in new tab window."}
        >
          @{name}
        </a>{" "}
        on Instagram
      </StyledIgLink>
    );
  };

  return (
    <StyledAuthorInfo>
      <Avatar image={profile_image.medium} title={name} className="avatar" />
      <Heading level={2} title={name} className="name" />
      {bio && <Bio copy={bio} />}
      {instagram_username && <InstagramLink name={instagram_username} />}
    </StyledAuthorInfo>
  );
};
AuthorInfo.displayName = "AuthorInfo";
export default AuthorInfo;
