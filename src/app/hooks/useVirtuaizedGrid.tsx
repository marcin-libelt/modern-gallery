import { useMemo } from "react";
import { VirtualizedGridHookProps } from "../types";

export default function useVirtualizedGrid({
  scrollTop,
  itemHeight,
  columns,
  items,
  containerHeight,
  gap,
}: VirtualizedGridHookProps) {
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
