import { BiMenu, BiSearch } from "react-icons/bi";
import gsap from "gsap";
import { useContext, useState } from "react";
import { useGSAP } from "@gsap/react";
import { SearchOverlayContext } from "../context/SearchOverlayContext";
import SidebarMenu from "./SidebarMenu";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const nav = useNavigate();
  const [searchText, setSearchText] = useState<string>("");
  const { setSearchOverlay } = useContext(SearchOverlayContext);
  const { contextSafe } = useGSAP();
  return (
    <nav className="absolute top-0 z-50 flex w-full flex-col gap-3 px-3 py-3 sm:px-5 md:px-10">
      <div className="absolute inset-0 -z-50 bg-black/80 blur"></div>
      <SidebarMenu />
      <div className="flex items-center justify-between gap-5">
        <Link to={"/"}>
          <img src="/EL3WAMY.png" alt="" className="min-w-16 max-w-28" />
        </Link>
        <div className="mr-10 hidden w-full items-center md:flex">
          <ul className="flex flex-1 items-center justify-center gap-5 font-title">
            <li
              className="cursor-pointer hover:text-primary"
              onClick={() => nav("/movies")}
            >
              Movies
            </li>
            <li
              className="cursor-pointer hover:text-primary"
              onClick={() => nav("/tvs")}
            >
              TvShows
            </li>
          </ul>
          <div className="relative flex flex-1 overflow-hidden rounded-lg border border-primary">
            <input
              type="text"
              title="search"
              value={searchText}
              className="search-inp w-full border-none bg-transparent p-1 outline-none"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              title="search"
              type="button"
              className="w-fit bg-primary px-4"
              onClick={() => {
                if (searchText)
                  setSearchOverlay({ isShow: true, searchText: searchText });
                else setSearchOverlay({ isShow: true });
              }}
            >
              <BiSearch />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <BiSearch
            size={25}
            onClick={() => {
              if (searchText)
                setSearchOverlay({ isShow: true, searchText: searchText });
              else setSearchOverlay({ isShow: true });
            }}
            className="md:hidden"
          />
          <BiMenu
            className="cursor-pointer"
            size={25}
            onClick={contextSafe(() =>
              gsap.to(".side-menu", {
                translateX: "-100%",
                duration: 1,
                ease: "bounce.out",
                borderRadius: 0,
              }),
            )}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
