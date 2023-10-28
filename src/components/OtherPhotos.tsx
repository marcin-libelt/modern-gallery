import Image from "next/image";
import { ItemProps } from "@/types";
import { Heading } from ".";

const OtherPhotos = ({
  limit = 9,
  photos,
}: {
  limit: number;
  photos: ItemProps[];
}): React.JSX.Element => {
  return (
    <>
      <Heading level={3} title={"More from this author"} className="mb-5" />
      <ul className={"grid grid-cols-5 gap-5 mb-1"} role="list">
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
};

OtherPhotos.displayName = "OtherPhotos";

export default OtherPhotos;
