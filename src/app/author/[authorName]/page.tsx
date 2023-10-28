import { AuthorInfo, Grid, PageContainer } from "@/components";
import { getAuthor, getItems } from "@/utils/get-data";

interface AuthorPageProps {
  params: { authorName: string };
}

const AuthorPage = async ({
  params,
}: AuthorPageProps): Promise<React.JSX.Element> => {
  const [author, photos] = await Promise.all([
    getAuthor(params.authorName),
    getItems(params.authorName),
  ]);

  if (!author) {
    throw new Error("No author found");
  }

  return (
    <PageContainer>
      <AuthorInfo {...author} className={"mt-8 mb-12 md:w-1/2 md:mx-auto"} />
      <Grid items={photos} gap={20} />
    </PageContainer>
  );
};

export function generateMetadata({ params }: AuthorPageProps) {
  const title = `Architecture - ${params.authorName}'s atelier.`;
  return {
    title,
  };
}

AuthorPage.displayName = "AuthorPage";

export default AuthorPage;
