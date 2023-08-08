import {
  AuthorInfo,
  BackButton,
  GalleryImage,
  Heading,
  OtherPhotos,
} from "@/app/components";
import { unsplash_photos } from "@/app/data";
import Link from "next/link";
import { ItemProps } from "@/app/types";
import { getItem, getOtherPhotos } from "@/app/utils/get-data";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const Photo = async ({
  params,
}: {
  params: { photoId: string };
}): Promise<JSX.Element> => {
  const { photoId } = params;
  const photo = await getItem(photoId);

  if (!photo) {
    throw new Error("Error: Photo not found");
  }

  const otherPhotos = await getOtherPhotos(photoId, photo.user.username);
  const timePassed = formatDistanceToNow(new Date(photo.created_at));

  const classes = {
    root: `md:flex md:gap-8 items-start`,
    media: `md:w-7/12 p-2 border border-gray-400`,
    info: `md:w-5/12`,
    caption: `text-xs`,
  };

  return (
    <>
      <BackButton />
      <div className={classes.root}>
        <div className={classes.media}>
          <GalleryImage photo={photo} />
          <p className={classes.caption}></p>
        </div>
        <div className={classes.info}>
          <span className="text-xs text-gray-400">
            <span className="sr-only">{"Photo added "}</span>
            {timePassed}
            <span className="sr-only">{" ago "}</span>{" "}
          </span>
          <span className="text-sm italic text-gray-400 whitespace-nowrap">
            by {photo.user.username}
          </span>
          <Heading
            level={1}
            title={photo.description || photo.alt_description}
            className="mt-3 mb-10 md:mb-5"
          />
          <AuthorInfo
            author={photo.user}
            className="border-0 border-t border-gray-400 pt-8 pb-14"
          ></AuthorInfo>
          {otherPhotos.length > 0 && (
            <>
              <OtherPhotos limit={5} photos={otherPhotos} />
              <Link
                href={`/author/${photo.user.username}`}
                className="text-xs text-gray-400"
              >
                {"See all"}
                <span className="sr-only">{" from this author"}</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

const fetchLocalData = new Promise<ItemProps[]>((resolve, reject) => {
  if (unsplash_photos.length > 0) {
    resolve(unsplash_photos);
  }
});

export const dynamicParams = false;
export async function generateStaticParams() {
  const photos = await fetchLocalData.then((res) => res);

  return photos.map((photo: ItemProps) => ({
    photoId: photo.id,
  }));
}

export default Photo;
