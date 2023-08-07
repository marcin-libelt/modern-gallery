"use client";

import Image from "next/image";
import { ItemProps } from "../types";
import { unsplashLoader } from "../utils/unsplashLoader";

const GalleryImage = ({ photo }: ItemProps) => {
  return (
    <Image
      loader={unsplashLoader}
      src={photo.urls.regular}
      width={photo.width}
      height={photo.height}
      sizes="(max-width:  767px) 100vw, 60vw"
      alt={photo.alt_description ? photo.alt_description : ""}
    />
  );
};

export default GalleryImage;
