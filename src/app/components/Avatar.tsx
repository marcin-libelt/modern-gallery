import Image from "next/image";

interface AvatarProps {
  image: string;
  title?: string;
  size?: number;
  className?: string;
}

const Avatar = ({
  image,
  title,
  size = 50,
  className,
}: AvatarProps): JSX.Element => {
  return (
    <Image
      sizes="10vw"
      src={image}
      width={size}
      height={size}
      alt={`Profile image of ${title}`}
      className={`rounded-full ${className}`}
    />
  );
};

Avatar.displayName = "Avatar";

export default Avatar;
