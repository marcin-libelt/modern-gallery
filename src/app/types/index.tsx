import { CSSProperties } from "react";

export interface GalleryProps {
  data: ItemProps[];
  className?: string;
  isAuthorList?: boolean;
}

export interface HeadingProps {
  level: number;
  title: string | JSX.Element;
  className?: string;
}

export interface AuthorProps {
  [key: string]: any;
}

export interface StylesDictionary {
  [key: string]: CSSProperties;
}

export interface ItemProps {
  [key: string]: any;
}

export interface VirtualizedGridProps {
  items: ItemProps[];
  columns: number;
  containerHeight: number;
  gap?: number;
}

export interface ScreenToColumns {
  screen: number;
  cols: number;
}

export interface RowProps {
  group: ItemProps[];
  gapCls?: string;
}
