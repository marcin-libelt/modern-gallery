import { GenericList } from "../types";

export default function List({
  data = [],
  rendererItem,
  renderEmpty,
  rootClassName = "",
  itemClassName = "",
}: GenericList): JSX.Element {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul className={rootClassName}>
      {data.map((item: object, index: number) => (
        <li key={index} className={itemClassName}>
          {rendererItem(item)}
        </li>
      ))}
    </ul>
  );
}
