import { cache } from "react";
import { unsplash_photos } from "../data";
import { ItemProps } from "../types";

export const revalidate = 3600; // revalidate the data at most every hour

export const getOtherPhotos = cache(
  async (id: string, username: string): Promise<ItemProps[]> => {
    const otherPhotos = unsplash_photos.filter(
      (photo) => photo.user.username === username && photo.id !== id
    );

    return otherPhotos;
  }
);
