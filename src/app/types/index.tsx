import { CSSProperties } from "react";

export interface GalleryProps {
  data: ItemProps[];
  isAuthorList?: boolean;
}

export interface HeadingProps {
  level: number;
  title: string | JSX.Element;
  className?: string;
}

export interface AuthorProps {
  [key: string]: string;
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
  gapTwClass?: string;
}

export interface ScreenToColumns {
  screen: number;
  cols: number;
}
