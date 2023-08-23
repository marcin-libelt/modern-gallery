import { useMemo } from "react";
import { ItemProps } from "../types";

export default function useVirtualizedList({
  scrollTop,
  itemHeight,
  columns,
  items,
  containerHeight,
  gap,
}: {
  scrollTop: number;
  itemHeight: number;
  columns: number;
  items: ItemProps[];
  containerHeight: number;
  gap: number;
}) {
  let startIndex = Math.floor(scrollTop / (itemHeight + gap));

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
