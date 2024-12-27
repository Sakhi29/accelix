/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  CarouselProps,
  CarouselRef,
  CarouselState,
  DotsConfig,
  NavigationConfig,
} from "@/types/Partials";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sub-components
const CarouselNavigation: React.FC<{
  config: Required<NavigationConfig>;
  onPrevClick: () => void;
  onNextClick: () => void;
  arrowFillColor?: string;
}> = ({ config, onPrevClick, onNextClick, arrowFillColor }) => (
  <div
    className={cn(
      "mb-0.5 flex items-center justify-center gap-4",
      config.containerClassName
    )}
  >
    {config.customPrevButton ? (
      <div onClick={onPrevClick}>{config.customPrevButton}</div>
    ) : (
      <button
        className={cn("mx-0", config.buttonClassName)}
        onClick={onPrevClick}
      >
        <ChevronLeft className="w-2.5 md:w-4" fill={arrowFillColor} />
      </button>
    )}
    {config.customNextButton ? (
      <div onClick={onNextClick}>{config.customNextButton}</div>
    ) : (
      <button
        className={cn("mx-0", config.buttonClassName)}
        onClick={onNextClick}
      >
        <ChevronRight className="w-2.5 md:w-4" fill={arrowFillColor} />
      </button>
    )}
  </div>
);

const CarouselDot: React.FC<{
  isSelected: boolean;
  onClick: () => void;
  config: Required<DotsConfig>;
}> = ({ isSelected, onClick, config }) => (
  <button
    className={cn(
      "size-2 rounded-full transition-all duration-300 md:size-2.5",
      isSelected ? "w-4 bg-blue md:w-5" : "bg-blue-light/40",
      isSelected ? config.selectedDotClassName : config.dotClassName
    )}
    onClick={onClick}
  />
);

// Main Component
export const Carousel = forwardRef<CarouselRef, CarouselProps>(
  (
    {
      children,
      className,
      slideClassName,
      contentClassName,
      containerClassName,
      useEmbla = true,
      navigation = {
        show: false,
        containerClassName: "",
        buttonClassName: "",
      },
      dots = {
        show: false,
        showOnDesktop: true,
        containerClassName: "",
        dotClassName: "",
        selectedDotClassName: "",
      },
      autoplay = {
        enabled: false,
        delay: 3000,
        playOnInit: true,
      },
      align = "center",
      loop = false,
      dragFree = false,
      axis = "x",
      slidesToScroll = "auto",
      dragEnabled = true,
      containScroll = "trimSnaps",
      onSlideChange,
      onDragStart,
      onDragEnd,
      ...restProps
    },
    ref
  ) => {
    const viewportRef = React.useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [viewport, emblaApi] = useEmblaCarousel(
      {
        align,
        loop,
        dragFree,
        axis,
        slidesToScroll,
        watchDrag: dragEnabled,
        containScroll,
        ...restProps,
      },
      autoplay.enabled
        ? [
            Autoplay({
              delay: autoplay.delay,
              playOnInit: autoplay.playOnInit,
              stopOnInteraction: false,
            }) as any,
          ]
        : []
    );

    const [state, setState] = React.useState<CarouselState>({
      currentIndex: 0,
      totalSlides: React.Children.count(children),
    });

    const updateState = useCallback((updates: Partial<CarouselState>) => {
      setState((prev) => ({ ...prev, ...updates }));
    }, []);

    const handleInit = useCallback(() => {
      if (!emblaApi) return;
      updateState({
        totalSlides: emblaApi.scrollSnapList().length,
        currentIndex: emblaApi.selectedScrollSnap(),
      });
    }, [emblaApi, updateState]);

    const handleSelect = useCallback(() => {
      if (!emblaApi) return;
      const index = emblaApi.selectedScrollSnap();
      updateState({ currentIndex: index });
      onSlideChange?.(index, state.totalSlides);
    }, [emblaApi, state.totalSlides, onSlideChange, updateState]);

    useEffect(() => {
      if (!emblaApi) return;

      const handlePointerDown = () => {
        setIsDragging(true);
        onDragStart?.();
      };
      const handlePointerUp = () => {
        setIsDragging(false);
        onDragEnd?.();
      };

      handleInit();
      emblaApi.on("init", handleInit);
      emblaApi.on("reInit", handleInit);
      emblaApi.on("select", handleSelect);
      emblaApi.on("pointerDown", handlePointerDown);
      emblaApi.on("pointerUp", handlePointerUp);

      return () => {
        emblaApi.off("init", handleInit);
        emblaApi.off("reInit", handleInit);
        emblaApi.off("select", handleSelect);
        emblaApi.off("pointerDown", handlePointerDown);
        emblaApi.off("pointerUp", handlePointerUp);
      };
    }, [emblaApi, handleInit, handleSelect, onDragStart, onDragEnd]);

    const basicScroll = useCallback(
      (direction: "prev" | "next" | number) => {
        if (!useEmbla && viewportRef.current) {
          const container = viewportRef.current;
          const slides = container.children[0].children;
          const slideWidth = slides[0].clientWidth;

          if (typeof direction === "number") {
            container.scrollLeft = slideWidth * direction;
            updateState({ currentIndex: direction });
          } else {
            const newIndex =
              direction === "prev"
                ? Math.max(0, state.currentIndex - 1)
                : Math.min(state.totalSlides - 1, state.currentIndex + 1);

            container.scrollLeft = slideWidth * newIndex;
            updateState({ currentIndex: newIndex });
          }
        }
      },
      [useEmbla, state.currentIndex, state.totalSlides, updateState]
    );

    const scrollPrev = useCallback(() => {
      if (useEmbla) {
        emblaApi?.scrollPrev();
      } else {
        basicScroll("prev");
      }
    }, [emblaApi, useEmbla, basicScroll]);

    const scrollNext = useCallback(() => {
      if (useEmbla) {
        emblaApi?.scrollNext();
      } else {
        basicScroll("next");
      }
    }, [emblaApi, useEmbla, basicScroll]);

    const scrollTo = useCallback(
      (index: number) => {
        if (useEmbla) {
          emblaApi?.scrollTo(index);
        } else {
          basicScroll(index);
        }
      },
      [emblaApi, useEmbla, basicScroll]
    );

    useImperativeHandle(ref, () => ({
      scrollPrev,
      scrollNext,
      scrollTo,
      canScrollPrev: () => emblaApi?.canScrollPrev() ?? false,
      canScrollNext: () => emblaApi?.canScrollNext() ?? false,
      getCurrentIndex: () => state.currentIndex,
      getTotalSlides: () => state.totalSlides,
    }));

    const renderDots = useMemo(
      () => (
        <div
          className={cn(
            "mt-5 flex items-center justify-center gap-[3px] md:mt-[30px]",
            !dots.showOnDesktop && "lg:hidden",
            dots.containerClassName
          )}
        >
          {Array.from({ length: state.totalSlides }, (_, index) => (
            <CarouselDot
              key={index}
              isSelected={index === state.currentIndex}
              onClick={() => scrollTo(index)}
              config={dots as Required<DotsConfig>}
            />
          ))}
        </div>
      ),
      [state.totalSlides, state.currentIndex, dots, scrollTo]
    );

    const renderSlides = useMemo(
      () => (
        <div className={cn("mx-auto flex max-w-fit", containerClassName)}>
          {React.Children.map(children, (child, index) => (
            <div key={index} className={slideClassName}>
              {child}
            </div>
          ))}
        </div>
      ),
      [children, slideClassName, containerClassName]
    );

    return (
      <div
        className={cn(
          "relative w-full overflow-hidden",
          isDragging && dragEnabled && "cursor-grabbing",
          className
        )}
        ref={useEmbla ? viewport : viewportRef}
      >
        {renderSlides}

        {dots.show && renderDots}

        {navigation.show && (
          <CarouselNavigation
            config={navigation as Required<NavigationConfig>}
            onPrevClick={scrollPrev}
            onNextClick={scrollNext}
            arrowFillColor={navigation.arrowFillColor}
          />
        )}
      </div>
    );
  }
);

Carousel.displayName = "Carousel";

export default Carousel;
