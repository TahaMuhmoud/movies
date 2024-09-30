import { useNavigate } from "react-router-dom";
import { Movie, TVShow } from "../../types/types";
import { useImgConfigsContext } from "../../hooks/useImgConfigsContext";
import RateComponent from "../../components/RateComponent";
import { useContext } from "react";
import { SearchOverlayContext } from "../../context/SearchOverlayContext";
import { MovieType } from "../../services/all";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SearchedMovie = ({
  movie,
  type,
}: {
  movie: Movie & TVShow;
  type: MovieType;
}) => {
  const navigate = useNavigate();

  const { setSearchOverlay } = useContext(SearchOverlayContext);
  const { secure_base_url, backdrop_sizes } = useImgConfigsContext();

  function handleOnClick() {
    setSearchOverlay({ isShow: false });
    navigate(`/${type}/${movie.id}`);
  }
  return (
    <div
      className="grid max-h-24 min-h-20 w-full cursor-pointer grid-cols-6 items-center gap-1 overflow-hidden rounded-lg bg-white/20 p-1 hover:bg-white/40 sm:gap-3 md:gap-5"
      onClick={handleOnClick}
    >
      <div className="relative col-span-1 h-full overflow-hidden rounded-lg bg-black">
        <LazyLoadImage
          src={
            secure_base_url +
            backdrop_sizes[3] +
            (movie.poster_path || movie.backdrop_path)
          }
          placeholderSrc={
            secure_base_url +
            backdrop_sizes[0] +
            (movie.poster_path || movie.backdrop_path)
          }
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="col-span-5">
        <div className="mb-2 ml-1 line-clamp-1 font-name text-lg">
          {movie.title || movie.name}
        </div>
        <div className="flex items-center justify-between gap-2 px-1 text-base">
          <div className="flex items-center gap-2">
            {(movie.first_air_date || movie.release_date) && (
              <span className="rounded-lg bg-black/20 px-2 py-1">
                {new Date(
                  movie.first_air_date || movie.release_date,
                ).getFullYear()}
              </span>
            )}
            {movie.media_type && (
              <span className="rounded-lg bg-black/20 px-2 py-1">
                {movie.media_type}
              </span>
            )}
          </div>
          <RateComponent vote_average={movie.vote_average} />
        </div>
      </div>
    </div>
  );
};

export default SearchedMovie;
