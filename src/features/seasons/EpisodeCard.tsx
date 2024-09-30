import { LazyLoadImage } from "react-lazy-load-image-component";
import { useImgConfigsContext } from "../../hooks/useImgConfigsContext";
import { Episode } from "../../types/types";

const EpisodeCard = ({ episode }: { episode: Episode }) => {
  const { secure_base_url, still_sizes } = useImgConfigsContext();
  return (
    <div className="group relative aspect-[1/1.3] min-w-[150px] max-w-[300px]">
      <LazyLoadImage
        src={secure_base_url + still_sizes[3] + episode.still_path}
        placeholderSrc={secure_base_url + still_sizes[0] + episode.still_path}
        alt={`${episode.name}`}
        className="absolute left-0 top-0 h-full w-full object-cover"
      />
      <div className="absolute left-0 top-0 grid h-full w-full place-items-center bg-indigo-600/30 duration-[2s] group-hover:opacity-0">
        <span className="font-name text-[5em] font-black text-black">
          {episode.episode_number}
        </span>
      </div>
    </div>
  );
};

export default EpisodeCard;
