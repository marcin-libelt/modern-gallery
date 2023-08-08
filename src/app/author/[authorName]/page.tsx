import { AuthorPhotos } from "@/app/components";

interface Props {
  params: { authorName: string };
}

export default function AllAuthorPhotos({ params }: Props): JSX.Element {
  return <AuthorPhotos authorName={params.authorName} />;
}

export function generateMetadata({ params }: Props) {
  const title = `Architecture - ${params.authorName}'s atelier.`;
  return {
    title,
  };
}
