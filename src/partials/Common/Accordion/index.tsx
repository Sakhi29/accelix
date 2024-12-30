import {
  forwardRef,
  ReactNode,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

export interface AccordionRef {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  toggle: () => void;
  updateHeight: () => void;
  height: number | string;
}

interface AccordionProps {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  titleClassName?: string;
  contentClassName?: string;
  containerClassName?: string;
  transitionDuration?: number;
  preventAutoClose?: boolean;
  onToggle?: (isOpen: boolean) => void;
}

const Accordion = forwardRef<AccordionRef, AccordionProps>(
  (
    {
      title,
      children,
      defaultOpen = false,
      titleClassName = "",
      contentClassName = "",
      containerClassName = "",
      transitionDuration = 300,
      preventAutoClose = false,
      onToggle,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number | string>("0px");

    const updateHeight = useCallback(() => {
      if (!contentRef.current) return;
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(isOpen ? `${contentHeight}px` : "0px");
    }, [isOpen]);

    useEffect(() => {
      updateHeight();
      // Add resize listener to handle content changes
      window.addEventListener("resize", updateHeight);
      return () => window.removeEventListener("resize", updateHeight);
    }, [isOpen, children, updateHeight]);

    const handleToggle = useCallback(
      (value: boolean) => {
        setIsOpen(value);
        onToggle?.(value);
      },
      [onToggle]
    );

    useImperativeHandle(ref, () => ({
      isOpen,
      setIsOpen: handleToggle,
      toggle: () => handleToggle(!isOpen),
      updateHeight,
      height,
    }));

    return (
      <div className={containerClassName}>
        <div
          className={`cursor-pointer ${titleClassName}`}
          onClick={() => {
            if (!preventAutoClose || !isOpen) {
              handleToggle(!isOpen);
            }
          }}
        >
          {title}
        </div>
        <div
          ref={contentRef}
          style={{
            maxHeight: height,
            overflow: "hidden",
            transition: `max-height ${transitionDuration}ms ease-in-out`,
          }}
        >
          <div className={contentClassName}>{children}</div>
        </div>
      </div>
    );
  }
);

Accordion.displayName = "Accordion";

export default Accordion;
