import {
  AuthorInfo,
  BackButton,
  GalleryImage,
  Heading,
  OtherPhotos,
  PageContainer,
} from "@/app/components";
import { Info, Media, PhotoPageWrapper } from "./page.styled";
import { ScrollToTop } from "@/app/components/utils";
import { ItemProps } from "@/app/types";
import { getItem, getItems, getOtherPhotos } from "@/app/utils/get-data";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
// import { device } from "@/app/styles/breakpoints";
// import styled from "styled-components";

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

  // const StyledLink = styled(Link)``;
  // const StyledH = styled(Heading)`
  //   margin-top: 0.75rem;
  //   margin-bottom: 2.5rem;

  //   @media (${device.md}) {
  //     margin-bottom: 1.25rem;
  //   }
  // `;

  return (
    <PageContainer headerActions={<BackButton />}>
      <ScrollToTop />
      <PhotoPageWrapper>
        <Media>
          <GalleryImage photo={photo} />
        </Media>
        <Info>
          <span className="meta">
            <span className="sr-only">{"Photo added "}</span>
            {timePassed}
            <span className="sr-only">{" ago "}</span>{" "}
          </span>
          <span className="meta name">by {photo.user.username}</span>
          <Heading
            level={1}
            title={photo.description || photo.alt_description}
            className="heading"
          />
          <AuthorInfo {...photo.user}></AuthorInfo>
          {otherPhotos.length > 0 && (
            <OtherPhotos
              limit={5}
              photos={otherPhotos}
              username={photo.user.username}
            />
          )}
        </Info>
      </PhotoPageWrapper>
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
