interface UrlsProps {
  [key: string]: string;
}

interface UnsplashUser {
  username: string;
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
