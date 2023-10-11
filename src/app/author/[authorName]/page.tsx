import { AuthorInfo, Grid, PageContainer } from "@/app/components";
import { getAuthor, getItems } from "@/app/utils/get-data";

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
      <AuthorInfo {...author} />
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
