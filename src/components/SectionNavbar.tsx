import { ChildrenProp } from "../types/types";

const SectionNavbar = ({ children }: ChildrenProp) => {
  return (
    <div className="flex w-fit gap-2 rounded-full bg-white/20 p-1">
      {children}
    </div>
  );
};

export default SectionNavbar;
