"use client";

import { useEffect, useRef, useState } from "react";
import { useWindowScroll, useWindowSize, useVirtualizedList } from "../hooks";
import { RowItem } from "../components";
import type { VirtualizedGridProps } from "../types";

const VirtualizedGrid: React.FC<VirtualizedGridProps> = ({
  items,
  columns,
  containerHeight,
  gapTwClass,
}): JSX.Element => {
  const scrollTop = useWindowScroll();
  const [width] = useWindowSize();
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemHeight, setItemHeight] = useState(0);

  useEffect(() => {
    setItemHeight(
      !containerRef.current
        ? 0
        : containerRef.current.getBoundingClientRect().width / columns
    );
  }, [width]);

  const { startIndex, visibleItems } = useVirtualizedList({
    scrollTop,
    itemHeight,
    columns,
    items,
    containerHeight,
  });

  return (
    <div style={{ height: `${(items.length * itemHeight) / columns}px` }}>
      <div
        className={`gap-7 grid relative sm:grid-cols-2
        md:grid-cols-3 
        lg:grid-cols-4`}
        ref={containerRef}
        style={{
          top: `${startIndex * itemHeight}px`,
        }}
      >
        {visibleItems.map((item, index) => (
          <RowItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

VirtualizedGrid.displayName = "VirtualizedGrid";

export default VirtualizedGrid;
