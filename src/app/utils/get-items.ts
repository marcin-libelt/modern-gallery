import { cache } from "react";
import { unsplash_photos } from "../data";
import { ItemProps } from "../types";

export const revalidate = 3600; // revalidate the data at most every hour

export const getItem = cache(
  async (id: string): Promise<ItemProps | undefined> => {
    const item = unsplash_photos.find((photo) => photo.id === id);
    return item;
  }
);
