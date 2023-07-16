import { memo, useRef } from "react";
import { useWindowScroll } from "../hooks";
import { divideArray } from "../lib/helpers";
import RowItem from "./RowItem";

interface RowProps extends React.ComponentPropsWithoutRef<typeof RowItem> {
  items: object[];
  gapCls?: string;
}

const Row = ({ items, gapCls }: RowProps) => (
  <div
    className={`grid  ${gapCls}
        sm:grid-cols-2
        md:grid-cols-3 
        lg:grid-cols-4
      `}
  >
    {items.map((item) => (
      <RowItem {...item} />
    ))}
  </div>
);

interface VirtualizedGridProps {
  items: object[];
  columns: number;
  containerHeight: number;
  gapTwClass?: string;
}

const VirtualizedGrid: React.FC<VirtualizedGridProps> = ({
  items,
  columns,
  containerHeight,
  gapTwClass,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemHeight = !containerRef.current
    ? 0
    : containerRef.current.getBoundingClientRect().width / columns;

  const scrollTop = useWindowScroll();

  // The main reasoin of grouping images is to have seamless responsive grid
  // with the accessability approach
  const groups: object[] = divideArray(items, columns);

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
        {visibleItems.map((group) => (
          <Row items={group} gapCls={gapTwClass} />
        ))}
      </div>
      <div style={{ height: `${invisibleItemsHeight}px` }} />
    </div>
  );
};

export default VirtualizedGrid;
