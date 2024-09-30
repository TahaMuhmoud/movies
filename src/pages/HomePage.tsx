import LandingSection from "../features/Home/LandingSection";
import { add, format } from "date-fns";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MutableRefObject, useRef } from "react";
import PopularSection from "../features/Home/PopularSection";
import TrendingSection from "../features/Home/TrendingSection";
import { MovieType } from "../services/all";
import MoviesSection from "../features/Home/MoviesSection";
import { useFilteredMovies } from "../hooks/useFilteredMovies";
import { CgCopyright } from "react-icons/cg";
import LoadingPage from "./LoadingPage";
const HomePage = () => {
  const currentDate = new Date();
  const { data, isLoading: isLoading1 } = useFilteredMovies({
    page: 1,
    type: MovieType.MOVIE,
    with_genres: [18, 27],
  });
  const { data: data2, isLoading: isLoading2 } = useFilteredMovies({
    page: 1,
    type: MovieType.TV,
    with_genres: [10765],
  });
  const { data: data3, isLoading: isLoading3 } = useFilteredMovies({
    page: 1,
    type: MovieType.MOVIE,
    dateGte: format(currentDate, "yyyy-mm-dd"),
    dateLte: format(add(currentDate, { weeks: 1 }), "yyyy-mm-dd"),
  });

  // ================================
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);
  const container = useRef() as MutableRefObject<HTMLDivElement>;
  const section = useRef() as MutableRefObject<HTMLDivElement>;
  useGSAP(
    () => {
      if (section.current)
        gsap.from(section.current, {
          background: "rgba(0,0,0,0)",
          duration: 2,
          scrollTrigger: {
            trigger: section.current,
            scrub: true,
            start: "top bottom",
            end: "20% center",
          },
        });
    },
    { scope: container },
  );
  // ================================
  if (!data || !data2 || !data3 || isLoading1 || isLoading2 || isLoading3)
    return <LoadingPage />;
  return (
    <div className="w-full" ref={container}>
      <LandingSection />
      <div
        className="flex min-h-screen flex-col gap-10 overflow-x-hidden bg-black p-3 pt-20 sm:p-5"
        ref={section}
      >
        <MoviesSection
          title="Next week upcoming Movies"
          movies={data3.results}
          type={MovieType.MOVIE}
        />
        <TrendingSection type={MovieType.MOVIE} />
        <TrendingSection type={MovieType.TV} />
        <PopularSection />
        <MoviesSection
          type={MovieType.MOVIE}
          title="Horror & Drama Movies"
          movies={data.results}
        />
        <MoviesSection
          title="Sci-Fi & Fantasy TvShows"
          movies={data2.results}
          type={MovieType.TV}
        />
        <div className="flex items-center justify-center p-4">
          CopyRigh <CgCopyright /> Taha Mahmoud 2023
        </div>
      </div>
    </div>
  );
};

export default HomePage;
