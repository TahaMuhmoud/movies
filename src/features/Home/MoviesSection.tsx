import { Movie, TVShow } from "../../types/types";
import MovieCard from "./MovieCard";
import { MutableRefObject, ReactNode, useRef } from "react";
import DraggableBox from "../../components/DraggableBox";
import { MovieType } from "../../services/all";
import ScrollToButton from "../../components/ScrollToButton";

const MoviesSection = ({
  movies,
  title,
  navbar,
  type,
}: {
  title: string;
  movies: (Movie & TVShow)[];
  navbar?: ReactNode;
  type: MovieType;
}) => {
  const scrollableSec = useRef() as MutableRefObject<HTMLDivElement>;

  return (
    <div className="flex w-full flex-col gap-5 sm:flex-row md:gap-10">
      <h3 className="grid font-title text-4xl font-black sm:min-w-[150px] sm:max-w-[150px] sm:place-items-center sm:text-3xl md:text-4xl">
        {title}
      </h3>
      <div className="flex w-full flex-col gap-3 overflow-x-hidden">
        {navbar}
        <div className="relative">
          <ScrollToButton direction="left" boxRef={scrollableSec} />

          <ScrollToButton direction="right" boxRef={scrollableSec} />
          <div className="absolute left-0 z-20 h-full w-2/12 bg-gradient-to-l from-transparent to-black"></div>
          <div className="absolute right-0 z-20 h-full w-2/12 bg-gradient-to-r from-transparent to-black"></div>
          <DraggableBox
            box={scrollableSec}
            className="scrollbar-hide scrollbar-hide flex w-full gap-3 overflow-x-scroll"
          >
            {movies.map((movie, i) => (
              <MovieCard key={i} movie={movie} type={type} />
            ))}
          </DraggableBox>
        </div>
      </div>
    </div>
  );
};

export default MoviesSection;
