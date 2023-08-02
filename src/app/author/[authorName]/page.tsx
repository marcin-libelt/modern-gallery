import AuthorPhotos from "@/app/ui/AuthorPhotos";

interface Props {
  params: { authorName: string };
}

export default function AllAuthorPhotos({ params }: Props): JSX.Element {
  return <AuthorPhotos authorName={params.authorName} />;
}

export function generateMetadata({ params }: Props) {
  const title = `Architecture gallery - ${params.authorName}'s imaginery.`;
  return {
    title,
  };
}
