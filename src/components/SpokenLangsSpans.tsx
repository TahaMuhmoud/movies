import { SpokenLanguage } from "../types/types";

const SpokenLangsSpans = ({ langs }: { langs: SpokenLanguage[] }) => {
  return (
    <div className="">
      <h4 className="font-bold text-white/40">Spoken Languages:</h4>
      <p className="flex flex-wrap items-center gap-2">
        {langs.map((lang, i) => (
          <span key={i} className="w-fit bg-white/20 p-px px-1">
            {lang.english_name + " - " + lang.name}
          </span>
        ))}
      </p>
    </div>
  );
};

export default SpokenLangsSpans;
