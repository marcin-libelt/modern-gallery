import Image from "next/image";

export default function Avatar({
  image,
  title,
  size = 50,
  className,
}: {
  image: string;
  title?: string;
  size?: number;
  className?: string;
}): JSX.Element {
  return (
    <Image
      src={image}
      width={size}
      height={size}
      alt={`Profile image of ${title}`}
      className={`rounded-full ${className}`}
    />
  );
}
