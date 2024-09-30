import { VscDebugBreakpointLog } from "react-icons/vsc";
import { CN } from "../utils/helpers";
import { ReactNode } from "react";

const DotSpan = ({
  text,
  className,
  children,
}: {
  text?: string;
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div className="flex items-center gap-2">
      <VscDebugBreakpointLog className="fill-primary" />
      <span className={CN("", className || "")}>{text || children}</span>
    </div>
  );
};

export default DotSpan;
