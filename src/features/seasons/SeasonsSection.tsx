import { MutableRefObject, useRef } from "react";
import SeasonCard from "./SeasonCard";
import DraggableBox from "../../components/DraggableBox";
import ScrollToButton from "../../components/ScrollToButton";
import { Season } from "../../types/types";

const SeasonsSection = ({
  seriesID,
  numOfSeasons,
  seasons,
}: {
  numOfSeasons: number;
  seasons: Season[];
  seriesID: string;
}) => {
  const scrollableSec = useRef() as MutableRefObject<HTMLDivElement>;
  return (
    <div className="flex w-full flex-col gap-5 md:gap-10">
      <h3 className="font-title text-4xl font-black sm:text-3xl md:text-4xl">
        Seasons ({numOfSeasons})
      </h3>

      <div className="relative w-full">
        {scrollableSec.current?.scrollLeft != 0 && (
          <ScrollToButton direction="left" boxRef={scrollableSec} />
        )}
        {seasons?.length > 1 && (
          <ScrollToButton direction="right" boxRef={scrollableSec} />
        )}

        <DraggableBox
          box={scrollableSec}
          className="scrollbar-hide scrollbar-hide flex gap-3 overflow-x-scroll"
        >
          {seasons.map((season, i) => (
            <SeasonCard key={i} season={season} seriesID={seriesID} />
          ))}
        </DraggableBox>
      </div>
    </div>
  );
};

export default SeasonsSection;
