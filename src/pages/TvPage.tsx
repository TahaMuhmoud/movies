import { useParams } from "react-router-dom";
import { useSeries } from "../hooks/useSeries";
import TvLandingSection from "../features/TvPage/TvLandingSection";
import TvDetails from "../features/TvPage/TvDetails";
import MovieImages from "../features/MoviePage/MovieImages";
import CreditsSection from "../features/MoviePage/CreditsSection";
import MoviesSection from "../features/Home/MoviesSection";
import { MovieType } from "../services/all";
import SeasonsSection from "../features/seasons/SeasonsSection";
import { Movie, TVShow } from "../types/types";
import LoadingPage from "./LoadingPage";

const TvPage = () => {
  const { id } = useParams();
  const { data: tvShow, isLoading } = useSeries(Number(id));
  if (!tvShow || isLoading) return <LoadingPage />;
  return (
    <div className="w-full">
      <TvLandingSection tvShow={tvShow} />

      <div className="sticky flex w-screen flex-col gap-5 overflow-x-hidden bg-black p-3 sm:p-5">
        <TvDetails tvShow={tvShow} />

        {tvShow.number_of_seasons > 0 && (
          <SeasonsSection
            numOfSeasons={tvShow.number_of_seasons}
            seasons={tvShow.seasons}
            seriesID={id!}
          />
        )}
        {(tvShow.images.posters.length > 0 ||
          tvShow.images.backdrops.length > 0 ||
          tvShow.images.logos.length > 0) && (
          <MovieImages images={tvShow.images} />
        )}
        {(tvShow.credits.cast.length > 0 || tvShow.credits.crew.length > 0) && (
          <CreditsSection
            cast={tvShow.credits.cast}
            crew={tvShow.credits.crew}
          />
        )}
        {tvShow.similar.results.length > 0 && (
          <div className="w-full p-5">
            <MoviesSection
              movies={tvShow.similar.results as (Movie & TVShow)[]}
              title="Similar TvShows"
              type={MovieType.TV}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TvPage;
