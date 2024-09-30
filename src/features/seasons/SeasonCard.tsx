import { LazyLoadImage } from "react-lazy-load-image-component";
import RateComponent from "../../components/RateComponent";
import { Season } from "../../types/types";
import { useImgConfigsContext } from "../../hooks/useImgConfigsContext";
import { useNavigate } from "react-router-dom";

const SeasonCard = ({
  season,
  seriesID,
}: {
  season: Season;
  seriesID: string;
}) => {
  const { secure_base_url, poster_sizes } = useImgConfigsContext();
  const nav = useNavigate();
  return (
    <div
      className="relative z-50 min-w-[150px] max-w-[250px] overflow-hidden rounded-xl bg-white/10"
      onClick={() =>
        nav(`/tv/${seriesID}/season/${season.season_number}`, { state: season })
      }
    >
      <div className="relative aspect-[1/1.2] w-full overflow-hidden">
        <div className="absolute -z-0 h-full w-full bg-gradient-to-b from-transparent to-black"></div>
        <LazyLoadImage
          src={secure_base_url + poster_sizes[6] + season.poster_path}
          placeholderSrc={
            secure_base_url + poster_sizes[0] + season.poster_path
          }
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="z-5 absolute right-3 top-3 grid aspect-square w-10 place-items-center rounded-full border bg-black/40">
        {season.season_number}
      </div>
      <div className="p-1">
        <div className="flex flex-wrap gap-x-2">
          <p>Name:</p>
          <h4 className="text-center font-name">{season.name}</h4>
        </div>
        <RateComponent vote_average={season.vote_average} />
        <div className="flex flex-wrap gap-x-2">
          <p>Episodes:</p>
          <h4 className="">{season.episode_count}</h4>
        </div>
      </div>
    </div>
  );
};

export default SeasonCard;
