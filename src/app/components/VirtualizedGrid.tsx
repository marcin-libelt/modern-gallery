"use client";

import { useEffect, useRef, useState } from "react";
import { useWindowSize, useVirtualizedGrid } from "../hooks";
import { GridImage } from "../components";
import type { VirtualizedGridProps, ScreenToColumns } from "../types";

const VirtualizedGrid: React.FC<VirtualizedGridProps> = ({
  items,
  gap = 0,
}): JSX.Element => {
  const [width, height] = useWindowSize();
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemHeight, setItemHeight] = useState(0);

  const { columns, rowsCount, startIndex, visibleItems } = useVirtualizedGrid({
    itemHeight,
    containerWidth: width,
    items,
    containerHeight: height,
    gap,
  });

  useEffect(() => {
    setItemHeight(
      !containerRef.current
        ? 0
        : (containerRef.current.getBoundingClientRect().width -
            (columns - 1) * gap) /
            columns
    );
  }, [width]);

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
