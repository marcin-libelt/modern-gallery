import Image from "next/image";
import { memo } from "react";
import type { ItemProps } from "../types";
import Link from "next/link";

const GridImage = ({
  id,
  color,
  urls,
  alt_description,
  width,
  height,
}: ItemProps): JSX.Element => {
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
          priority
          alt={alt_description ? alt_description : ""}
          className={"h-full object-cover"}
        />
      </div>
    </Link>
  );
};
GridImage.displayName = "GridImage";

export default memo(GridImage);
