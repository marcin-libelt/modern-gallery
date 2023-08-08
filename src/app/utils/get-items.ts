import { cache } from "react";
import { unsplash_photos } from "../data";
import { ItemProps, AuthorProps } from "../types";

export const revalidate = 3600; // revalidate the data at most every hour

const getItem = cache(async (id: string): Promise<ItemProps | undefined> => {
  // mimic fetch delay
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  return unsplash_photos.find((photo) => photo.id === id);
});

const getItems = cache(async (username?: string): Promise<ItemProps[]> => {
  // mimic fetch delay
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
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

export { getItems, getItem, getAuthor };
