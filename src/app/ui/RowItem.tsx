import Image from "next/image";
import type { ItemProps } from "../types";

const RowItem = ({
  id,
  urls,
  alt_description,
  user,
}: ItemProps): JSX.Element => {
  const commonCls = `absolute text-xs italic`;
  return (
    <div className={`aspect-square relative group`}>
      <Image
        src={urls.small}
        sizes="33vw"
        fill={true}
        priority={true}
        alt={alt_description ? alt_description : ""}
        className={`max-w-full h-auto group-hover:opacity-60 group-hover:scale-[105%]
              transition-transform`}
      />
      <h2
        className={`${commonCls} bottom-1 left-2 -translate-x-[1px] -translate-y-[1px] text-gray-700`}
      >
        <span
          aria-hidden
          className={`${commonCls} bottom-[1px] left-[1px] text-black`}
        >
          {user.username}
        </span>
        <span aria-hidden className={`${commonCls} bottom-0  `}>
          {user.username}
        </span>
      </h2>
    </div>
  );
};

export default RowItem;
