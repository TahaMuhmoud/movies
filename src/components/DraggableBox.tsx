import {
  MouseEvent,
  MutableRefObject,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import { ChildrenProp } from "../types/types";
import { CN } from "../utils/helpers";

const DraggableBox = ({
  children,
  className,
  box,
}: {
  className: string;
  box?: MutableRefObject<HTMLDivElement>;
} & ChildrenProp) => {
  const ref2 = useRef() as MutableRefObject<HTMLDivElement>;
  const ref = box || ref2;
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  // Handle Mouse/Touch Down Event
  const handleDragStart = (e: MouseEvent | TouchEvent) => {
    const pageX = (e as MouseEvent).pageX || (e as TouchEvent).touches[0].pageX;
    setIsDragging(true);
    setStartX(pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  };

  // Handle Mouse/Touch End Event
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Handle Mouse/Touch Move Event
  const handleDragMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();

      const pageX =
        (e as MouseEvent).pageX || (e as TouchEvent).touches[0].pageX;
      const x = pageX - ref.current.offsetLeft;
      const walk = (x - startX) * 1.5; // increase the multiplier for faster scroll on drag
      ref.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, scrollLeft, startX],
  );

  // Add event listeners for touch support
  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => handleDragMove(e);
    const handleTouchEnd = () => handleDragEnd();

    const currentBox = ref.current;
    currentBox.addEventListener("touchmove", handleTouchMove);
    currentBox.addEventListener("touchend", handleTouchEnd);

    return () => {
      currentBox.removeEventListener("touchmove", handleTouchMove);
      currentBox.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, startX, scrollLeft, handleDragMove]);

  return (
    <div
      ref={ref}
      className={CN(
        "flex cursor-grab overflow-x-auto active:cursor-grabbing",
        className,
      )} // Add grab & grabbing cursor styles
      onMouseDown={handleDragStart}
      onMouseLeave={handleDragEnd}
      onMouseUp={handleDragEnd}
      onMouseMove={handleDragMove}
    >
      {children}
    </div>
  );
};

export default DraggableBox;
