import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import PaginationButton from "./PaginationButton";
import { Dispatch, SetStateAction } from "react";
type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onGoPrevious?: () => void;
  onGoNext?: () => void;
  changePageState: Dispatch<SetStateAction<number>>;
};
const Pagination = ({
  currentPage,
  totalPages,
  onGoNext = () => {},
  onGoPrevious = () => {},
  changePageState,
}: PaginationProps) => {
  const handleNext = () => {
    changePageState((p) => {
      if (p < totalPages) {
        return p + 1;
      }
      return p;
    });
    onGoNext();
  };
  const handlePrevious = () => {
    changePageState((p) => {
      if (p > 1) {
        return p - 1;
      }
      return p;
    });
    onGoPrevious();
  };
  return (
    <div className="flex items-center gap-2">
      <PaginationButton disabled={currentPage == 1} onClick={handlePrevious}>
        <RxDoubleArrowLeft size={20} />
      </PaginationButton>
      <div
        className={
          currentPage == 1 && currentPage == totalPages ? "hidden" : ""
        }
      >
        {currentPage} / {totalPages}
      </div>
      <PaginationButton
        onClick={handleNext}
        disabled={currentPage == totalPages}
      >
        <RxDoubleArrowRight size={20} />
      </PaginationButton>
    </div>
  );
};

export default Pagination;
