import { useEffect, useRef, useState } from "react";
import { useWindowScroll, useWindowSize } from "../hooks";
import { divideArray } from "../lib/helpers";
import Row from "./Row";
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
  const [itemHeight, setItemH] = useState(0);

  useEffect(() => {
    setItemH(
      !containerRef.current
        ? 0
        : containerRef.current.getBoundingClientRect().width / columns
    );
  }, [width]);

  // The main reasoin of grouping images is to have seamless responsive grid
  // with the accessability approach
  const groups: Array<ItemProps[]> = divideArray(items, columns);

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    startIndex + Math.ceil(containerHeight / itemHeight),
    groups.length
  );
  const visibleItems = groups.slice(startIndex, endIndex);
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

export default VirtualizedGrid;
