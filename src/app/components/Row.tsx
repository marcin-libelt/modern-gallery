import { RowItem } from "../components";
import type { RowProps } from "../types";

const Row = ({ group, gapCls }: RowProps) => (
  <div
    className={`grid  ${gapCls}
          sm:grid-cols-2
          md:grid-cols-3 
          lg:grid-cols-4
        `}
  >
    {group.map((item) => (
      <RowItem key={item.id} {...item} />
    ))}
  </div>
);

Row.displayName = "Row";

export default Row;
