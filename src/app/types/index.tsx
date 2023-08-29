import { CSSProperties } from "react";

export interface HeadingProps {
  level: number;
  title: string | JSX.Element | null;
  className?: string;
}

export interface AuthorProps {
  [key: string]: any;
}

export interface StylesDictionary {
  [key: string]: CSSProperties;
}

interface ItemUrls {
  raw: string;
  thumb: string;
}

interface UserProps {
  username: string;
}

export interface ItemProps {
  id: string;
  color: string;
  urls: ItemUrls;
  description: string | null;
  alt_description: string | null;
  width: number;
  height: number;
  user: UserProps;
  created_at: string;
}

export interface VirtualizedGridProps {
  items: ItemProps[];
  gap?: number;
}

export interface VirtualizedGridHookProps {
  itemHeight: number;
  items: ItemProps[];
  containerHeight: number;
  containerWidth: number;
  gap: number;
}

export interface ScreenToColumns {
  screen: number;
  cols: number;
}

export interface RowProps {
  group: ItemProps[];
  gapCls?: string;
}
