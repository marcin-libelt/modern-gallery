"use client";

import { useEffect, useRef, useState } from "react";
import { useWindowSize, useVirtualizedGrid } from "../hooks";
import { GridImage } from "@/app/components";
import type { VirtualizedGridProps } from "../types";
import { StyledGrid } from "@/app/styles/sharedstyles";

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
      <StyledGrid
        ref={containerRef}
        style={{
          gap,
          top: `${startIndex * (itemHeight + gap)}px`,
        }}
      >
        {visibleItems.map((item, index) => (
          <GridImage key={index + item.id} {...item} priority />
        ))}
      </StyledGrid>
    </div>
  );
};

VirtualizedGrid.displayName = "VirtualizedGrid";

export default VirtualizedGrid;
