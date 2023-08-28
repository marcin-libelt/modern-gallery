import { useMemo } from "react";
import { ScreenToColumns, VirtualizedGridHookProps } from "../types";
import useWindowScroll from "./useWindowScroll";

const columnsCountMap = [
  { screen: 9999, cols: 4 },
  { screen: 1024, cols: 3 },
  { screen: 768, cols: 2 },
  { screen: 640, cols: 1 },
];

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
    .sort((a, b) => (a.screen === b.screen ? 0 : a.screen > b.screen ? -1 : 1))
    .filter((breakpoint) => screenWidth < breakpoint.screen);
  return keys[keys.length - 1];
};

export default function useVirtualizedGrid({
  itemHeight,
  items,
  containerHeight,
  containerWidth,
  gap,
}: VirtualizedGridHookProps) {
  const scrollTop = useWindowScroll();

  const { cols: columns } = getColumnCountByScreenWidth(
    containerWidth,
    columnsCountMap
  );

  const rowsCount = items.length / columns;
  let startIndex = Math.floor(scrollTop / (itemHeight + gap));

  const endIndex = Math.min(
    startIndex + Math.ceil(containerHeight / itemHeight),
    rowsCount
  );

  const visibleItems = useMemo(
    () => items.slice(startIndex * columns, (endIndex + 2) * columns),
    [startIndex, endIndex, columns]
  );

  console.log(startIndex, endIndex, scrollTop, containerHeight);

  return {
    columns,
    rowsCount,
    startIndex,
    endIndex,
    visibleItems,
  };
}
