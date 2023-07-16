"use client";

import React, { useEffect, useState } from "react";
import { unsplash_photos } from "../data";
import { createApi } from "unsplash-js";
import { useWindowSize } from "../hooks";
import VirtualizedGrid from "./VirtualizedGrid";
import { array, object } from "prop-types";

const { screens } = require("tailwindcss/defaultTheme");
const ACCESS_KEY = "U8N1cGbWESoxjSxdXBg-8drXbeH_ApF1AVbvX5po-xg"; // move to .env

export default function Gallery({ page }: { page: number }) {
  const [photos, setPhotos] = useState([]);
  const [width, height] = useWindowSize();
  const serverApi = createApi({
    accessKey: ACCESS_KEY,
  });

  useEffect(() => {
    /*serverApi.topics
      .getPhotos({
        topicIdOrSlug: "architecture-interior",
        perPage: PER_PAGE,
        page,
        orientation: "squarish",
      })
      .then((result) => {
        if (result.errors) {
          // handle error here
          console.log("error occurred: ", result.errors[0]);
        } else {
          // handle success here
          console.log(result.response.results);
          setPhotos(result.response.results);
        }
      }); */
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

  if (!photos) {
    return <p>Not found</p>;
  }

  return (
    <VirtualizedGrid
      items={photos}
      columns={cols}
      containerHeight={height * 2}
      gapTwClass={`gap-5 md:gap-7`}
    />
  );
}

//
