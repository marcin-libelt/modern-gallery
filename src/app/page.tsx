"use client";

import Gallery from "./ui/Gallery";
import { useEffect, useState } from "react";
import { unsplash_photos } from "@/app/data";
import { ItemProps } from "./types";

export default function Page(): JSX.Element {
  const [photos, setPhotos] = useState<ItemProps[]>([]);

  const Gradient = () => (
    <div className="pointer-events-none bg-gradient-to-b from-black w-full h-24 fixed z-10 scale-110 opacity-60"></div>
  );

  useEffect(() => {
    setPhotos(unsplash_photos);
  }, []);

  if (!photos.length) {
    return <p>No photos has found</p>;
  }

  return (
    <>
      <Gradient />
      <Gallery data={photos} />
    </>
  );
}
