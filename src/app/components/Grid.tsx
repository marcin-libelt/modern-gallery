import { GridImage } from ".";
import type { VirtualizedGridProps } from "../types";

const Grid: React.FC<VirtualizedGridProps> = ({ items, gap = 0 }) => {
  return (
    <div
      className={`grid relative sm:grid-cols-2
        md:grid-cols-3 
        lg:grid-cols-4`}
      style={{
        gap,
      }}
    >
      {items.map((item, index) => (
        <GridImage key={index + item.id} {...item} />
      ))}
    </div>
  );
};

Grid.displayName = "Grid";

export default Grid;
