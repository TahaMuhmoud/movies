import { useState } from "react";
import MoviesSection from "./MoviesSection";
import { MovieType } from "../../services/all";
import { usePopular } from "../../hooks/usePopular";
import Loader from "../../components/Loader";
import SectionNavbar from "../../components/SectionNavbar";
import NavElement from "../../components/NavElement";

const PopularSection = () => {
  const [popularType, setPopularType] = useState<MovieType>(MovieType.MOVIE);
  const { data: popular, isLoading } = usePopular(popularType);
  if (!popular || isLoading) return <Loader />;
  return (
    <MoviesSection
      title={`Popular ${popularType == MovieType.TV ? "TvShows" : "Movies"}`}
      movies={popular.results || []}
      type={popularType}
      navbar={
        <SectionNavbar>
          <NavElement
            innerText="Movies"
            selected={popularType == MovieType.MOVIE}
            onClick={() => setPopularType(MovieType.MOVIE)}
          />
          <NavElement
            innerText="TvShows"
            selected={popularType == MovieType.TV}
            onClick={() => setPopularType(MovieType.TV)}
          />
        </SectionNavbar>
      }
    />
  );
};

export default PopularSection;
