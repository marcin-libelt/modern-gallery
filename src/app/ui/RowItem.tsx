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
        <Loading
          show={!loaded}
          className={"flex justify-center items-center h-full"}
        />

        <Image
          src={urls.regular}
          sizes="33vw"
          onLoad={() => setLoaded(true)}
          fill={true}
          priority={true}
          alt={alt_description ? alt_description : ""}
          className={`max-w-full h-auto group-hover:opacity-60 group-hover:scale-[105%]
              transition-transform`}
        />

        <Heading
          title={
            <>
              <span
                aria-hidden
                className={`${commonCls} bottom-[1px] left-[1px] text-black`}
              >
                {user.username}
              </span>
              <span aria-hidden className={`${commonCls} bottom-0  `}>
                {user.username}
              </span>
            </>
          }
          level={2}
          className={`${commonCls} bottom-1 left-2 -translate-x-[1px] -translate-y-[1px] text-gray-700`}
        />
      </Link>
    </div>
  );
};

export default RowItem;
