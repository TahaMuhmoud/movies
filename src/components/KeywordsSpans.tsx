import { useNavigate } from "react-router-dom";
import { Keyword } from "../types/types";

const KeywordsSpans = ({
  keywords,
  type,
}: {
  keywords: Keyword[];
  type: "movies" | "tvs";
}) => {
  const nav = useNavigate();
  return (
    <div className="">
      <h4 className="font-bold text-white/40">keywords:</h4>
      <p className="flex flex-wrap items-center gap-2">
        {keywords.map((keyword, i) => (
          <span
            key={i}
            className="w-fit bg-white/20 p-px px-1 hover:underline"
            onClick={() => nav(`/${type}?keywords=${keyword.id}`)}
          >
            {keyword.name}
          </span>
        ))}
      </p>
    </div>
  );
};

export default KeywordsSpans;
