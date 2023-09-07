import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import type { ItemProps } from "../types";

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
    <Link
      href={`/photo/${id}`}
      className={"aspect-square block hover:opacity-70 transition-opacity"}
      style={{ backgroundColor: color }}
    >
      <div className="relative h-full">
        <Image
          src={urls.raw}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          width={width}
          height={height}
          priority={priority}
          alt={alt_description ? alt_description : ""}
          className={"h-full object-cover"}
        />
      </div>
    </Link>
  );
};

GridImage.displayName = "GridImage";

export default memo(GridImage);
