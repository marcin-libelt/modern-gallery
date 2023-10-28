"use client";

import { useEffect, useRef, useState } from "react";
import { useWindowSize, useVirtualizedGrid } from "@/hooks";
import { GridImage } from ".";
import type { VirtualizedGridProps, ItemProps } from "@/types";

const VirtualizedGrid: React.FC<VirtualizedGridProps> = ({
  items,
  gap = 0,
}) => {
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
    if (width && containerRef.current) {
      setItemHeight(
        (containerRef.current.getBoundingClientRect().width -
          (columns - 1) * gap) /
          columns
      );
    }
  }, [width, columns, gap]);

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
        {visibleItems.map((item: ItemProps, index: number) => (
          <GridImage key={index + item.id} {...item} priority />
        ))}
      </div>
    </div>
  );
};

VirtualizedGrid.displayName = "VirtualizedGrid";

export default VirtualizedGrid;
