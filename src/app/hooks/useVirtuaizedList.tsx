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

  const visibleItems = items.slice(
    startIndex * columns,
    (endIndex + 2) * columns
  );

  return {
    startIndex,
    endIndex,
    visibleItems,
  };
}
