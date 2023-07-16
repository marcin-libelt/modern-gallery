import { memo, useRef } from "react";
import { useWindowScroll } from "../hooks";
import { divideArray } from "../lib/helpers";
import RowItem from "./RowItem";

const Row = memo(({ items }) => (
  <div
    className="
        grid 
        sm:grid-cols-2
        md:grid-cols-3 
        lg:grid-cols-4
                "
  >
    {items.map((item) => (
      <RowItem {...item} />
    ))}
  </div>
));

interface VirtualizedGridProps {
  items: object[];
  columns: number;
  containerHeight: number;
}

const VirtualizedGrid: React.FC<VirtualizedGridProps> = ({
  items,
  columns,
  containerHeight,
}) => {
  const containerRef = useRef(null);
  const itemHeight = !containerRef.current
    ? 0
    : containerRef.current.getBoundingClientRect().width / columns;

  const scrollTop = useWindowScroll();
  const groups = divideArray(items, columns);
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
        ref={containerRef}
        style={{
          position: "relative",
          height: `${visibleItems.length * itemHeight}px`,
          top: `${startIndex * itemHeight}px`,
        }}
      >
        {visibleItems.map((group) => (
          <Row items={group} />
        ))}
      </div>
      <div style={{ height: `${invisibleItemsHeight}px` }} />
    </div>
  );
};

export default VirtualizedGrid;
