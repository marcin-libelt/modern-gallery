"use client";

import Image from "next/image";
import { ItemProps } from "../types";

const GalleryImage = ({ photo }: ItemProps) => {
  return (
    <Image
      src={photo.urls.raw}
      width={photo.width}
      height={photo.height}
      priority
      sizes="(max-width:  767px) 100vw, 60vw"
      alt={photo.alt_description ? photo.alt_description : ""}
      style={{ backgroundColor: photo.color }}
    />
  );
};

export default GalleryImage;
