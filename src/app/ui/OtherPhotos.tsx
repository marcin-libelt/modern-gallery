import Image from "next/image";
import { ItemProps } from "@/app/types";
import Heading from "./Heading";

export default function OtherPhotos({
  limit = 9,
  photos,
}: {
  limit: number;
  photos: ItemProps[];
}): JSX.Element {
  return (
    <>
      <Heading
        level={2}
        title={"More from this author"}
        className="text-white mb-5"
      />
      <ul className={"grid grid-cols-5 gap-5 mb-1"}>
        {photos
          .slice(0, limit)
          .map(({ id, urls, alt_description }: ItemProps) => (
            <li key={id}>
              <Image
                width={100}
                height={100}
                src={urls.thumb}
                alt={alt_description ? alt_description : ""}
              ></Image>
            </li>
          ))}
      </ul>
    </>
  );
}
