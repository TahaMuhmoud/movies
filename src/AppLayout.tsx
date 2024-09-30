import { RxDoubleArrowUp } from "react-icons/rx";
import { Outlet } from "react-router-dom";
import VideoOverlay from "./components/VideoOverlay";
import { VideoContext } from "./context/VideoContext";
import { useContext } from "react";
import Navbar from "./components/Navbar";
import SearchOverlay from "./features/search/SearchOverlay";
import { SearchOverlayContext } from "./context/SearchOverlayContext";

function AppLayout() {
  const { video } = useContext(VideoContext);
  const { searchOverlay } = useContext(SearchOverlayContext);
  return (
    <div className="relative h-full w-full select-none overflow-x-hidden">
      <Navbar />
      <div className="min-h-screen w-full pb-10">
        <Outlet />
      </div>

      <div
        className="fixed bottom-10 right-10 z-40 cursor-pointer rounded-full bg-white/10 p-3 hover:bg-white/40"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <RxDoubleArrowUp className="animate-bounce" />
      </div>
      {video?.isOpen && <VideoOverlay />}
      {searchOverlay.isShow && <SearchOverlay />}
    </div>
  );
}

export default AppLayout;
