import { useImgConfigsContext } from "../../hooks/useImgConfigsContext";
import { useNavigate } from "react-router-dom";
import { Movie, TVShow } from "../../types/types";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { MovieType } from "../../services/all";
const MovieCard = ({
  movie,
  type,
}: {
  movie: Movie & TVShow;
  type: MovieType;
}) => {
  const nav = useNavigate();
  const { secure_base_url, poster_sizes, backdrop_sizes } =
    useImgConfigsContext();

  return (
    <div className="relative aspect-[1/1.2] min-w-[150px] max-w-[150px] sm:min-w-[200px] sm:max-w-[200px]">
      <div className="absolute -z-0 h-full w-full bg-gradient-to-b from-transparent to-black"></div>
      <LazyLoadImage
        src={
          movie.poster_path
            ? secure_base_url + poster_sizes[4] + movie.poster_path
            : secure_base_url + backdrop_sizes[3] + movie.backdrop_path
        }
        placeholderSrc={
          movie.poster_path
            ? secure_base_url + poster_sizes[0] + movie.poster_path
            : secure_base_url + backdrop_sizes[0] + movie.backdrop_path
        }
        alt="Image Alt"
        className="h-full w-full object-cover"
      />
      <div
        className="absolute top-0 flex h-full w-full cursor-pointer items-end justify-center bg-clip-text"
        onClick={() => nav(`/${type}/${movie.id}`, { state: movie })}
      >
        <div className="absolute right-2 top-2 grid aspect-square w-10 place-items-center rounded-full border-2 bg-black/40">
          {movie.vote_average.toFixed(1)}
        </div>
        <h5 className="line-clamp-2 text-center font-name text-2xl font-black text-white/40">
          {movie.name?.toUpperCase() || movie.title?.toUpperCase()}
        </h5>
      </div>
    </div>
  );
};

export default MovieCard;
