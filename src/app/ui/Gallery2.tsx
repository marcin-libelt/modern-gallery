"use client";

import React, { useEffect, useState } from "react";
import { unsplash_photos } from "../data";
import { useWindowSize } from "../hooks/";
import VirtualizedGrid from "./VirtualizedGrid";

const { screens } = require("tailwindcss/defaultTheme");

export default function Gallery({ page }: { page: number }) {
  const [photos, setPhotos] = useState([]);
  const [width, height] = useWindowSize();

  useEffect(() => {
    setPhotos(unsplash_photos);
  }, []);

  let cols = 4;
  if (width < 1024) {
    cols = 3;
  }
  if (width < 768) {
    cols = 2;
  }
  if (width < 640) {
    cols = 1;
  }

  console.log("ww");

  if (!photos) {
    return <p>Not found</p>;
  }

  return (
    <VirtualizedGrid
      items={photos}
      columns={cols}
      containerHeight={height * 2}
    />
  );
}

//
