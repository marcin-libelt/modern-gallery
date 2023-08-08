import { AuthorInfo, Gallery } from "@/app/components";
import { AuthorProps, ItemProps } from "@/app/types";
import { getAuthor, getItems } from "@/app/utils/get-items";

interface Props {
  params: { authorName: string };
}

export default async function AllAuthorPhotos({
  params,
}: Props): Promise<JSX.Element> {
  const author = await getAuthor(params.authorName);
  const photos = await getItems(params.authorName);

  if (!author) {
    throw new Error("No author found");
  }

  return (
    <>
      <AuthorInfo
        author={author}
        className={"mt-8 mb-12 md:w-1/2 md:mx-auto"}
      />
      <Gallery data={photos} isAuthorList={true} />
    </>
  );
}

export function generateMetadata({ params }: Props) {
  const title = `Architecture - ${params.authorName}'s atelier.`;
  return {
    title,
  };
}
