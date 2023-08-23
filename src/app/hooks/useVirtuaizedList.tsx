import { useMemo } from "react";
import { ItemProps } from "../types";

export default function useVirtualizedList({
  scrollTop,
  itemHeight,
  columns,
  items,
  containerHeight,
}: {
  scrollTop: number;
  itemHeight: number;
  columns: number;
  items: ItemProps[];
  containerHeight: number;
}) {
  let startIndex = Math.floor(scrollTop / itemHeight);
  startIndex > 0 && startIndex--;

  const endIndex = Math.min(
    startIndex + Math.ceil(containerHeight / itemHeight),
    items.length / columns
  );

  const visibleItems = useMemo(
    () => items.slice(startIndex * columns, (endIndex + 2) * columns),
    [startIndex, endIndex, columns]
  );

  return {
    startIndex,
    endIndex,
    visibleItems,
  };
}
