import Image from "next/image";
import type { RowItemProps } from "../types";

const RowItem = ({
  id,
  urls,
  alt_description,
  user,
}: RowItemProps): JSX.Element => {
  return (
    <div key={id} className={`aspect-square relative group`}>
      <Image
        src={urls.small}
        sizes="33vw"
        fill={true}
        alt={alt_description ? alt_description : ""}
        className={`max-w-full h-auto group-hover:opacity-60 group-hover:scale-[105%]
              transition-opacity transition-transform`}
      />
      <h2 className="absolute -bottom-5 left-1 text-xs italic text-gray-700 group-hover:text-gray-300">
        {user.username}
      </h2>
    </div>
  );
};

export default RowItem;
