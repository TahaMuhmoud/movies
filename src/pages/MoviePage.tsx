import { useParams } from "react-router-dom";
import FirstSection from "../features/MoviePage/FirstSection";
import { useFullMovie } from "../hooks/useFullMovie";
import LoadingPage from "./LoadingPage";

import SecondSection from "../features/MoviePage/SecondSection";
import MovieImages from "../features/MoviePage/MovieImages";
import MoviesSection from "../features/Home/MoviesSection";
import CreditsSection from "../features/MoviePage/CreditsSection";
import { MovieType } from "../services/all";
import { Movie, TVShow } from "../types/types";
const MoviePage = () => {
  const { id } = useParams();
  const { data: movie, isLoading } = useFullMovie(Number(id));

  if (!movie || isLoading) return <LoadingPage />;

  return (
    <div className="w-full">
      <FirstSection movie={movie} />

      <div className="sticky flex flex-col gap-5 bg-black p-3 sm:p-5">
        <SecondSection movie={movie} />

        {(movie.images.posters.length > 0 ||
          movie.images.backdrops.length > 0 ||
          movie.images.logos.length > 0) && (
          <MovieImages images={movie.images} />
        )}

        {(movie.credits.cast.length > 0 || movie.credits.crew.length > 0) && (
          <CreditsSection cast={movie.credits.cast} crew={movie.credits.crew} />
        )}

        {movie.similar.results.length > 0 && (
          <div className="w-full p-5">
            <MoviesSection
              movies={movie.similar.results as (Movie & TVShow)[]}
              title="Similar Movies"
              type={MovieType.MOVIE}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviePage;
