"use client";

import { useEffect, useRef, useState } from "react";
import { useWindowScroll, useWindowSize, useVirtualizedGrid } from "../hooks";
import { GridImage } from "../components";
import type { VirtualizedGridProps } from "../types";

const VirtualizedGrid: React.FC<VirtualizedGridProps> = ({
  items,
  columns,
  containerHeight,
  gap = 0,
}): JSX.Element => {
  const scrollTop = useWindowScroll();
  const [width] = useWindowSize();
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemHeight, setItemHeight] = useState(0);

  useEffect(() => {
    setItemHeight(
      !containerRef.current
        ? 0
        : (containerRef.current.getBoundingClientRect().width -
            (columns - 1) * gap) /
            columns
    );
  }, [width]);

  const { startIndex, visibleItems } = useVirtualizedGrid({
    scrollTop,
    itemHeight,
    columns,
    items,
    containerHeight,
    gap,
  });

  const rowsCount = items.length / columns;

  return (
    <div
      style={{
        height: `${rowsCount * (itemHeight + gap) - gap}px`,
      }}
    >
      <div
        className={`grid relative sm:grid-cols-2
        md:grid-cols-3 
        lg:grid-cols-4`}
        ref={containerRef}
        style={{
          gap,
          top: `${startIndex * (itemHeight + gap)}px`,
        }}
      >
        {visibleItems.map((item, index) => (
          <GridImage key={index + item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

VirtualizedGrid.displayName = "VirtualizedGrid";

export default VirtualizedGrid;
