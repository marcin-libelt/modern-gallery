import { cache } from "react";
import { unsplash_photos } from "../data";
import { ItemProps, AuthorProps } from "../types";

export const revalidate = 3600;

const getItem = cache(async (id: string): Promise<ItemProps> => {
  return unsplash_photos.find((photo) => photo.id === id) as ItemProps;
});

const getItems = cache(async (username?: string): Promise<ItemProps[]> => {
  if (!username) {
    return unsplash_photos as Array<ItemProps>;
  }
  return unsplash_photos.filter(
    (photo) => photo.user.username === username
  ) as Array<ItemProps>;
});

const getAuthor = cache(async (username: string): Promise<AuthorProps> => {
  const photo = unsplash_photos.find(
    (photo) => photo.user.username === username
  );
  return photo?.user as AuthorProps;
});

const getOtherPhotos = cache(
  async (id: string, username: string): Promise<ItemProps[]> => {
    const otherPhotos = unsplash_photos.filter(
      (photo) => photo.user.username === username && photo.id !== id
    );

    return otherPhotos as Array<ItemProps>;
  }
);

export { getItems, getItem, getAuthor, getOtherPhotos };
