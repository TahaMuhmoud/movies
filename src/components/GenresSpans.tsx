import { useNavigate } from "react-router-dom";
import { Genre } from "../types/types";

const GenresSpans = ({
  genres,
  type,
}: {
  genres: Genre[];
  type: "movies" | "tvs";
}) => {
  const nav = useNavigate();
  return (
    <div className="">
      <h4 className="font-bold text-white/40">Genres:</h4>
      <p className="flex items-center gap-2">
        {genres.map((genre, i) => (
          <span
            key={i}
            className="w-fit bg-white/20 p-px px-1 hover:underline"
            onClick={() => nav(`/${type}?genres=${genre.id}`)}
          >
            {genre.name}
          </span>
        ))}
      </p>
    </div>
  );
};

export default GenresSpans;
