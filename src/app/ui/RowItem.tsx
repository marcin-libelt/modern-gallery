import Image from "next/image";
import { useState } from "react";
import type { ItemProps } from "../types";
import Heading from "./Heading";
import Loading from "./Loading";
import Link from "next/link";

const RowItem = ({
  id,
  color,
  urls,
  alt_description,
  user,
}: ItemProps): JSX.Element => {
  const [loaded, setLoaded] = useState(false);
  const commonCls = `absolute text-xs italic`;

  return (
    <div
      className={`aspect-square relative group`}
      style={{ backgroundColor: color }}
    >
      <Link href={`/photo/${id}`} className={"h-full block"}>
        {!loaded && <Loading />}

        <Image
          src={urls.raw}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          onLoad={() => setLoaded(true)}
          fill
          priority
          alt={alt_description ? alt_description : ""}
          className={`max-w-full h-auto group-hover:opacity-60 group-hover:scale-[105%]
              transition-transform`}
        />
      </Link>
    </div>
  );
};

export default RowItem;
