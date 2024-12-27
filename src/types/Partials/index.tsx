export interface CarouselState {
  currentIndex: number;
  totalSlides: number;
}

export interface NavigationConfig {
  show?: boolean;
  containerClassName?: string;
  buttonClassName?: string;
  customPrevButton?: React.ReactNode;
  customNextButton?: React.ReactNode;
  arrowFillColor?: string;
}

export interface DotsConfig {
  show?: boolean;
  showOnDesktop?: boolean;
  containerClassName?: string;
  dotClassName?: string;
  selectedDotClassName?: string;
}

export interface AutoplayConfig {
  enabled?: boolean;
  delay?: number;
  playOnInit?: boolean;
}

export interface CarouselProps {
  // Core props
  children: React.ReactNode;
  className?: string;

  // Layout
  slideClassName?: string;
  contentClassName?: string;
  containerClassName?: string;

  // Features
  navigation?: NavigationConfig;
  dots?: DotsConfig;
  autoplay?: AutoplayConfig;
  align?: "start" | "center" | "end";
  loop?: boolean;
  dragFree?: boolean;
  axis?: "x" | "y";
  slidesToScroll?: "auto" | number;
  dragEnabled?: boolean;
  containScroll?: false | "keepSnaps" | "trimSnaps";
  useEmbla?: boolean;

  // Events
  onSlideChange?: (currentIndex: number, totalSlides: number) => void;
  onDragStart?: () => void;
  onDragEnd?: () => void;
}

export interface CarouselRef {
  scrollPrev: () => void;
  scrollNext: () => void;
  scrollTo: (index: number) => void;
  canScrollPrev: () => boolean;
  canScrollNext: () => boolean;
  getCurrentIndex: () => number;
  getTotalSlides: () => number;
}
