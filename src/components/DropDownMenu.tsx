import  { ReactNode, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CN } from "../utils/helpers";

const DropDownMenu = ({
  children,
  title,
  className,
}: {
  children: ReactNode;
  title: string;
  className?: string;
}) => {
  const [status, setStatus] = useState<boolean>(false);

  return (
    <div className={CN("w-full rounded-xl", className || "")}>
      <div
        className={`flex items-center justify-between gap-2 px-5 py-3 ${status && "border-b"}`}
        onClick={() => setStatus((is) => !is)}
      >
        <span className="text-xl">{title}</span>
        {status ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {status && <div className="p-3">{children}</div>}
    </div>
  );
};

export default DropDownMenu;
