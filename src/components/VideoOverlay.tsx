import { useContext } from "react";
import { VideoContext } from "../context/VideoContext";
import { CgClose } from "react-icons/cg";

const VideoOverlay = () => {
  const { video, setVideo } = useContext(VideoContext);

  return (
    <div
      className={`fixed inset-0 z-[1000] grid h-screen w-full place-items-center bg-black/80 p-2`}
    >
      <div className="relative aspect-video w-full sm:w-[500px] md:w-[700px]">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video?.vid?.key}?si=${video?.vid?.id}`}
          title={video?.vid?.name}
          allowFullScreen
          className="h-full w-full"
        ></iframe>

        <div
          className="absolute left-1/2 top-0 grid aspect-square w-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-primary sm:left-full"
          onClick={() => setVideo({ isOpen: false })}
        >
          <CgClose />
        </div>
      </div>
    </div>
  );
};

export default VideoOverlay;
