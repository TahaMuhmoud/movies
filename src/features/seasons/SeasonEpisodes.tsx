import { Episode } from "../../types/types";
import Pagination from "../../components/Pagination";
import { useState } from "react";
import EpisodeCard from "./EpisodeCard";
const PAGE_SIZE = 10;
const SeasonEpisodes = ({ episodes }: { episodes: Episode[] }) => {
  const [page, setPage] = useState<number>(1);
  const totalPages = Math.ceil(episodes.length / PAGE_SIZE);
  const episodesOnPage = episodes.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  );

  return (
    <div className="flex flex-col justify-around gap-5">
      <h3 className="grid place-items-center font-title text-4xl font-black sm:text-3xl md:text-4xl">
        Episodes ({episodes.length})
      </h3>
      <div className="">
        <div className="flex flex-wrap justify-center gap-3">
          {episodesOnPage.map((episode, i) => (
            <EpisodeCard key={i} episode={episode} />
          ))}
        </div>
        <div className="mt-5 flex items-center justify-end">
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            changePageState={setPage}
          />
        </div>
      </div>
    </div>
  );
};

export default SeasonEpisodes;
