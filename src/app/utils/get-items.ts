import { cache } from "react";
import { unsplash_photos } from "../data";
import { ItemProps } from "../types";

export const revalidate = 3600; // revalidate the data at most every hour

const getItem = cache(async (id: string): Promise<ItemProps | undefined> => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  const item = unsplash_photos.find((photo) => photo.id === id);
  return item;
});

const getItems = cache(async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return unsplash_photos;
});

export { getItems, getItem };
