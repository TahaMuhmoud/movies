import { createContext, Dispatch, SetStateAction, useState } from "react";
import { ChildrenProp, Video } from "../types/types";

export const VideoContext = createContext<{
  video?: {
    isOpen: boolean;
    vid?: Video;
  };
  setVideo: Dispatch<
    SetStateAction<{
      isOpen: boolean;
      vid?: Video;
    }>
  >;
}>({ video: undefined, setVideo: () => {} });
const VideoProvider = ({ children }: ChildrenProp) => {
  const [video, setVideo] = useState<{
    isOpen: boolean;
    vid?: Video;
  }>({ isOpen: false });
  return (
    <VideoContext.Provider value={{ video, setVideo }}>
      {children}
    </VideoContext.Provider>
  );
};

export default VideoProvider;
