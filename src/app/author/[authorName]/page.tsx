import { AuthorInfo, Gallery } from "@/app/components";
import PageContainer from "@/app/components/PageContainer";
import { getAuthor, getItems } from "@/app/utils/get-data";

interface Props {
  params: { authorName: string };
}

const AuthorPage = async ({ params }: Props): Promise<JSX.Element> => {
  const [author, photos] = await Promise.all([
    getAuthor(params.authorName),
    getItems(params.authorName),
  ]);

  if (!author) {
    throw new Error("No author found");
  }

  return (
    <PageContainer>
      <AuthorInfo
        author={author}
        className={"mt-8 mb-12 md:w-1/2 md:mx-auto"}
      />
      <Gallery data={photos} />
    </PageContainer>
  );
};

export function generateMetadata({ params }: Props) {
  const title = `Architecture - ${params.authorName}'s atelier.`;
  return {
    title,
  };
}

AuthorPage.displayName = "AuthorPage";

export default AuthorPage;
