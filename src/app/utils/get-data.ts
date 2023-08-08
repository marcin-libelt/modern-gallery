import { cache } from "react";
import { unsplash_photos } from "../data";
import { ItemProps, AuthorProps } from "../types";

export const revalidate = 3600;

const getItem = cache(async (id: string): Promise<ItemProps | undefined> => {
  return unsplash_photos.find((photo) => photo.id === id);
});

const getItems = cache(async (username?: string): Promise<ItemProps[]> => {
  if (!username) {
    return unsplash_photos;
  }
  return unsplash_photos.filter((photo) => photo.user.username === username);
});

const getAuthor = cache(
  async (username: string): Promise<AuthorProps | undefined> => {
    const photo = unsplash_photos.find(
      (photo) => photo.user.username === username
    );
    return photo?.user;
  }
);

const getOtherPhotos = cache(
  async (id: string, username: string): Promise<ItemProps[]> => {
    const otherPhotos = unsplash_photos.filter(
      (photo) => photo.user.username === username && photo.id !== id
    );

    return otherPhotos;
  }
);

export { getItems, getItem, getAuthor, getOtherPhotos };
