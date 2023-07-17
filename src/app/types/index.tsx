/* export interface Episode {
  air_date: string;
  name: string;
  id: string;
  episode: string;
}

export interface Origin {
  name: string;
}

export interface Character {
  image: string;
  name: string;
  id: string;
  origin: Origin;
  species: string;
  status: string;
  gender: string;
  type: string;
  episode: Episode[];
}

export interface GenericList {
  data: Array<object> | Array<JSX.Element> | object[] | any;
  rendererItem: Function;
  renderEmpty: JSX.Element;
  rootClassName?: string;
  itemClassName?: string;
}
*/

interface ItemUrlsAttributes {
  small: string;
}

interface UnsplashUser {
  instagram_username?: string;
  username: string;
}

export interface RowItemProps {
  id: string;
  urls: ItemUrlsAttributes;
  alt_description: string;
  user: UnsplashUser;
}

export interface VirtualizedGridProps {
  items: object[];
  columns: number;
  containerHeight: number;
  gapTwClass?: string;
}
