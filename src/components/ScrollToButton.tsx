import { MutableRefObject } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ScrollToButton = ({
  direction,
  boxRef,
}: {
  direction: "left" | "right";

  boxRef: MutableRefObject<HTMLElement>;
}) => {
  return (
    <div
      className={`group absolute top-1/2 z-[1000] grid aspect-square w-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full border hover:bg-white ${direction === "right" ? "right-0" : "left-0"}`}
      onClick={() => {
        boxRef.current.scrollTo({
          left:
            direction === "right"
              ? boxRef.current.scrollLeft + boxRef.current.clientWidth
              : boxRef.current.scrollLeft - boxRef.current.clientWidth,
          behavior: "smooth",
        });
      }}
    >
      {direction === "right" ? (
        <IoIosArrowForward className="group-hover:fill-primary" />
      ) : (
        <IoIosArrowBack className="group-hover:fill-primary" />
      )}
    </div>
  );
};

export default ScrollToButton;
