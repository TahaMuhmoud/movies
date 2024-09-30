import { useParams } from "react-router-dom";
import { useSeason } from "../hooks/useSeason";

import SeasonPageLandingSection from "../features/seasons/SeasonPageLandingSection";

import SeasonEpisodes from "../features/seasons/SeasonEpisodes";
import CreditsSection from "../features/MoviePage/CreditsSection";
import LoadingPage from "./LoadingPage";

const SeasonPage = () => {
  const { series_id, season_number } = useParams();
  const { data: season, isLoading } = useSeason({
    season_number: season_number || "",
    series_id: series_id || "",
  });

  if (!season || isLoading) return <LoadingPage />;
  return (
    <div className="">
      <div className="min-h-screen w-full">
        <SeasonPageLandingSection season={season} />
        <div className="p-3 sm:p-5">
          {season.episodes.length > 0 && (
            <SeasonEpisodes episodes={season.episodes} />
          )}
          {(season.credits.cast.length > 0 ||
            season.credits.crew.length > 0) && (
            <CreditsSection
              cast={season.credits.cast}
              crew={season.credits.crew}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default SeasonPage;
