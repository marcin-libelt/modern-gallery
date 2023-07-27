import { CSSProperties } from "react";

interface UrlsProps {
  [key: string]: string;
}

export interface HeadingProps {
  level: number;
  className?: string;
}

export interface AuthorInfoProps {
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
