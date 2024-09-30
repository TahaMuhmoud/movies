import { useState } from "react";
import { CN } from "../utils/helpers";

const ExpandedText = ({
  text,
  length,
  className,
}: {
  text: string;
  length: number;
  className?: string;
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const toggleExpanded = () => {
    setIsExpanded((is) => !is);
  };
  return (
    <>
      {text.length > length ? (
        <p className={CN("", className || "")}>
          <span>{!isExpanded ? text.slice(0, length) : text}</span>
          {!isExpanded ? (
            <button
              className="rounded-lg bg-primary/20 p-1 px-2 hover:bg-primary/60"
              onClick={toggleExpanded}
            >
              shom more
            </button>
          ) : (
            <button
              className="rounded-lg bg-primary/20 p-1 px-2 hover:bg-primary/60"
              onClick={toggleExpanded}
            >
              shom less
            </button>
          )}
        </p>
      ) : (
        <p className={CN("", className || "")}>{text}</p>
      )}
    </>
  );
};

export default ExpandedText;
