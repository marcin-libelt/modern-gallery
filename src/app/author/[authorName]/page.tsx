"use client";

import AuthorInfo from "@/app/ui/AuthorInfo";
import Gallery from "@/app/ui/Gallery";
import { useEffect, useState } from "react";
import { unsplash_photos } from "@/app/data";
import { AuthorProps, ItemProps } from "@/app/types";

export default function AllAuthorPhotos({
  params,
}: {
  params: { authorName: string };
}): JSX.Element {
  const [author, setAuthor] = useState<AuthorProps>();
  const [photos, setPhotos] = useState<ItemProps[]>([]);

  useEffect(() => {
    const authorPhotos: ItemProps[] = unsplash_photos.filter(
      (photo) => photo.user.username === params.authorName
    );

    if (authorPhotos.length) {
      setAuthor(authorPhotos[0].user);
      setPhotos(authorPhotos);
    }
  }, []);

  if (!author) {
    return <p>No author has found</p>;
  }

  if (!photos.length) {
    return <p>No photos has found</p>;
  }

  return (
    <>
      <AuthorInfo author={author} className={"my-5 md:w-1/2 md:mx-auto"} />
      <Gallery data={photos} isAuthorList={true} />
    </>
  );
}
