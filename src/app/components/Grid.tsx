import { GridImage } from ".";
import { StyledGrid } from "../styles/sharedstyles";
import type { VirtualizedGridProps } from "../types";

const Grid: React.FC<VirtualizedGridProps> = ({ items, gap = 0 }) => {
  return (
    <StyledGrid
      style={{
        gap,
      }}
    >
      {items.map((item, index) => (
        <GridImage key={index + item.id} {...item} />
      ))}
    </StyledGrid>
  );
};

Grid.displayName = "Grid";

export default Grid;
