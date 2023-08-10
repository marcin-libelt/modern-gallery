"use client";

import { useWindowSize } from "../hooks";
import { VirtualizedGrid } from "../components";
import type { ScreenToColumns, GalleryProps } from "../types";

const Gallery = ({ data }: GalleryProps): JSX.Element => {
  const [width, height] = useWindowSize();

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

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <VirtualizedGrid
      items={data}
      columns={cols}
      containerHeight={height}
      gapTwClass={`gap-7`}
    />
  );
};

Gallery.displayName = "Gallery";

export default Gallery;
