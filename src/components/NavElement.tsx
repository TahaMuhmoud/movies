const NavElement = ({
  innerText,
  onClick,
  selected = false,
}: {
  innerText: string;
  selected?: boolean;
  onClick: () => void;
}) => {
  return (
    <span
      className={`hover:bg-primary/20 cursor-pointer rounded-full px-2 ${selected ? "bg-primary" : ""}`}
      onClick={onClick}
    >
      {innerText}
    </span>
  );
};

export default NavElement;
