import {
  AuthorInfo,
  BackButton,
  GalleryImage,
  Heading,
  OtherPhotos,
  PageContainer,
} from "@/app/components";
import { ScrollToTop } from "@/app/components/utils";
import Link from "next/link";
import { ItemProps } from "@/app/types";
import { getItem, getItems, getOtherPhotos } from "@/app/utils/get-data";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const PhotoPage = async ({
  params,
}: {
  params: { photoId: string };
}): Promise<React.JSX.Element> => {
  const { photoId } = params;
  const photo = await getItem(photoId);

  if (!photo) {
    throw new Error("Error: Photo not found");
  }

  const otherPhotos = (await getOtherPhotos(
    photoId,
    photo.user.username
  )) as Array<ItemProps>;
  const timePassed = formatDistanceToNow(new Date(photo.created_at));

  const classes = {
    root: `md:flex md:gap-8 items-start`,
    media: `md:w-8/12 md:p-2 md:border border-secondary`,
    info: `md:w-4/12 mt-2 md:mt-0 md:sticky top-[100px]`,
    caption: `text-xs`,
  };

  return (
    <PageContainer headerActions={<BackButton />}>
      <ScrollToTop />
      <div className={classes.root}>
        <div className={classes.media}>
          <GalleryImage photo={photo} />
          <p className={classes.caption}></p>
        </div>
        <div className={classes.info}>
          <span className="text-xs text-secondary">
            <span className="sr-only">{"Photo added "}</span>
            {timePassed}
            <span className="sr-only">{" ago "}</span>{" "}
          </span>
          <span className="text-sm italic text-secondary whitespace-nowrap">
            by {photo.user.username}
          </span>
          <Heading
            level={1}
            title={photo.description || photo.alt_description}
            className="mt-3 mb-10 md:mb-5"
          />
          <AuthorInfo
            {...photo.user}
            className="border-0 border-t border-secondary pt-8 pb-14"
          ></AuthorInfo>
          {otherPhotos.length > 0 && (
            <>
              <OtherPhotos limit={5} photos={otherPhotos} />
              <Link
                href={`/author/${photo.user.username}`}
                className="text-xs text-secondary"
              >
                {"See all"}
                <span className="sr-only">{" from this author"}</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </PageContainer>
  );
};

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const photos = (await getItems()) as Array<ItemProps>;

  return photos.map((photo) => ({
    photoId: photo.id,
  }));
};

PhotoPage.displayName = "PhotoPage";

export default PhotoPage;
