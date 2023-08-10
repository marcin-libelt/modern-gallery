"use client";

import { useEffect, useRef, useState } from "react";
import { useWindowScroll, useWindowSize } from "../hooks";
import { divideArray } from "../utils/helpers";
import { Row } from "../components";
import type { VirtualizedGridProps, ItemProps } from "../types";

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

  // The main reasoin of grouping images is to have seamless responsive grid
  const groups: Array<ItemProps[]> = divideArray(items, columns);

  let startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    startIndex + Math.ceil(containerHeight / itemHeight),
    groups.length
  );

  // Amend startIndex and endIndex
  startIndex > 0 && startIndex--;

  const visibleItems = groups.slice(startIndex, endIndex + 1);
  const invisibleItemsHeight =
    (startIndex + visibleItems.length - endIndex) * itemHeight;

  return (
    <div style={{ height: `${groups.length * itemHeight}px` }}>
      <div
        className={`${gapTwClass} grid relative`}
        ref={containerRef}
        style={{
          height: `${visibleItems.length * itemHeight}px`,
          top: `${startIndex * itemHeight}px`,
        }}
      >
        {visibleItems.map((group, index) => (
          <Row key={index} group={group} gapCls={gapTwClass} />
        ))}
      </div>
      <div style={{ height: `${invisibleItemsHeight}px` }} />
    </div>
  );
};

VirtualizedGrid.displayName = "VirtualizedGrid";

export default VirtualizedGrid;
