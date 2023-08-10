"use client";

import Image from "next/image";
import { useState } from "react";
import type { ItemProps } from "../types";
import { Loading } from "../components";
import Link from "next/link";

const RowItem = ({
  id,
  color,
  urls,
  alt_description,
}: ItemProps): JSX.Element => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Link
      href={`/photo/${id}`}
      className={
        "aspect-square relative h-full block hover:opacity-70 transition-opacity"
      }
      style={{ backgroundColor: color }}
    >
      {!loaded && <Loading />}

      <Image
        src={urls.raw}
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        onLoad={() => setLoaded(true)}
        fill
        priority
        alt={alt_description ? alt_description : ""}
        className={"max-w-full h-auto"}
      />
    </Link>
  );
};

RowItem.displayName = "RowItem";

export default RowItem;
