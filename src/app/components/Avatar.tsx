"use client";

import Image from "next/image";
import styled from "styled-components";

const StyledAvatar = styled(Image)`
  border-radius: 9999px;
`;

interface AvatarProps {
  image: string;
  title?: string;
  size?: number;
  className?: string;
}

const Avatar = ({ image, title, size = 50, className }: AvatarProps) => {
  return (
    <StyledAvatar
      sizes="10vw"
      src={image}
      width={size}
      height={size}
      alt={`Profile image of ${title}`}
      className={`${className}`}
    />
  );
};

Avatar.displayName = "Avatar";

export default Avatar;
