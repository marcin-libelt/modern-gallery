"use client";

import React, { useEffect, useState } from "react";
import { unsplash_photos } from "../data";
import { createApi } from "unsplash-js";
import { useWindowSize } from "../hooks";
import VirtualizedGrid from "./VirtualizedGrid";
import type { ItemProps, ScreenToColumns } from "../types";

const ACCESS_KEY = "U8N1cGbWESoxjSxdXBg-8drXbeH_ApF1AVbvX5po-xg"; // todo: move to .env

export default function Gallery(): JSX.Element {
  const [photos, setPhotos] = useState<ItemProps[]>();
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

  /**
   * Calculate columns count for given screen size
   * @param {number} screenWidth
   * @param {array} breakpointCols - array of objects {screen: x, cols: y}
   * @returns {{screen: number, cols: number}: ScreenToColumns} object with columns number and upper boundry
   */
  const getColumnCountByScreenWidth = (
    screenWidth: number,
    breakpointCols: ScreenToColumns[]
  ) => {
    const keys = breakpointCols
      .sort((a, b) =>
        a.screen === b.screen ? 0 : a.screen > b.screen ? -1 : 1
      )
      .filter((breakpoint) => screenWidth < breakpoint.screen);
    return keys[keys.length - 1];
  };

  const columnsCountMap = [
    { screen: 9999, cols: 4 },
    { screen: 1024, cols: 3 },
    { screen: 768, cols: 2 },
    { screen: 640, cols: 1 },
  ];

  const { cols } = getColumnCountByScreenWidth(width, columnsCountMap);

  if (!photos) {
    return <p>Loading...</p>;
  }

  return (
    <VirtualizedGrid
      items={photos}
      columns={cols}
      containerHeight={height}
      gapTwClass={`gap-7`}
    />
  );
}
