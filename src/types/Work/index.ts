export interface WorkItem extends GridItem {
  title: string;
  feature: string;
  image: string;
}
export interface GridItem {
  id: number | string;
  className?: string;
  style?: React.CSSProperties;
}

export interface GridProps<T extends GridItem> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
  gridClassName?: string;
  animate?: boolean;
  columns?: number;
  gap?: number;
  responsive?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    "2xl"?: number;
  };
}
