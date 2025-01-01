export type ProjectCategory = 'All' | 'Mobile Development' | 'Web Development' | 'UI-UX Designing';

export interface WorkItem {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  image: string;
  height?: number; // for masonry layout
  link: string;
}