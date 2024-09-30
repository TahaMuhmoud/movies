import { useState } from "react";
import MoviesSection from "./MoviesSection";
import SectionNavbar from "../../components/SectionNavbar";
import NavElement from "../../components/NavElement";
import { MovieType, Period } from "../../services/all";
import { useTrendingMovies } from "../../hooks/useTrendingMovies";
import Loader from "../../components/Loader";

const TrendingSection = ({ type }: { type: MovieType }) => {
  const [period, setPeriod] = useState<Period>(Period.DAY);
  const { data: trending, isLoading } = useTrendingMovies({ period, type });
  if (!trending || isLoading) return <Loader />;
  return (
    <MoviesSection
      title={`${type == MovieType.TV ? "TvShows" : "Movies"} Trending Today`}
      movies={trending.results}
      type={type}
      navbar={
        <SectionNavbar>
          <NavElement
            innerText="this DAY"
            selected={period == Period.DAY}
            onClick={() => setPeriod(Period.DAY)}
          />
          <NavElement
            innerText="this WEEK"
            selected={period == Period.WEEK}
            onClick={() => setPeriod(Period.WEEK)}
          />
        </SectionNavbar>
      }
    />
  );
};

export default TrendingSection;
