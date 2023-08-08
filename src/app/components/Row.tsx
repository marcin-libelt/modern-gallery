import { RowItem } from "../components";
import type { ItemProps } from "../types";

interface RowProps {
  group: ItemProps[];
  gapCls?: string;
}

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

export default Row;
