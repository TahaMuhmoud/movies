import { useContext } from "react";
import { Video } from "../../types/types";

import { VideoContext } from "../../context/VideoContext";
import { BiPlay } from "react-icons/bi";
import DraggableBox from "../../components/DraggableBox";

const FirstSectionTrailers = ({ trailers }: { trailers: Video[] }) => {
  const { setVideo } = useContext(VideoContext);

  return (
    <div className="flex flex-col gap-2">
      <div className="font-title text-2xl font-black">Trailers</div>
      <DraggableBox className="scrollbar-hide flex gap-2 overflow-x-auto">
        {trailers.map((vid, i) => (
          <div
            key={i}
            className="relative aspect-video min-w-[130px] max-w-[130px] overflow-hidden rounded-xl sm:min-w-[150px] sm:max-w-[150px]"
          >
            <div className="absolute h-full w-full">
              <div
                className="absolute left-1/2 top-1/2 grid aspect-square -translate-x-1/2 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white/10 p-3 hover:bg-white/40"
                onClick={() => {
                  setVideo({ isOpen: true, vid });
                }}
              >
                <BiPlay size={45} />
              </div>
            </div>
            <img
              src={`https://img.youtube.com/vi/${vid.key}/hqdefault.jpg`}
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
        ))}
      </DraggableBox>
    </div>
  );
};

export default FirstSectionTrailers;
