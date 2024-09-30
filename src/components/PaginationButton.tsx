import { CN } from "../utils/helpers";

type PaginationButtonProps = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};
const PaginationButton = ({
  children,
  className = "",
  disabled = false,
  onClick = () => {},
}: PaginationButtonProps) => {
  return (
    <button
      type="button"
      title="btn"
      className={CN(
        "rounded-lg border bg-white/20 p-2 disabled:hidden",
        className,
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
