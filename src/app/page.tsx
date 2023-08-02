"use client";

import Gallery from "./ui/Gallery";
import { useEffect, useState } from "react";
import { unsplash_photos } from "@/app/data";
import { ItemProps } from "./types";

export default function Page(): JSX.Element {
  const [photos, setPhotos] = useState<ItemProps[]>([]);

  useEffect(() => {
    setPhotos(unsplash_photos);
  }, []);

  if (!photos.length) {
    return <p>No photos has found</p>;
  }

  return <Gallery data={photos} />;
}
