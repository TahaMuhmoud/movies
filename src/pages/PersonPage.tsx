import { useParams } from "react-router-dom";
import { usePerson } from "../hooks/usePerson";
import PersonLandingSection from "../features/PersonPage/PersonLandingSection";
import LoadingPage from "./LoadingPage";
import ExpandedText from "../components/ExpandedText";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useImgConfigsContext } from "../hooks/useImgConfigsContext";
import MoviesSection from "../features/Home/MoviesSection";
import SectionNavbar from "../components/SectionNavbar";
import NavElement from "../components/NavElement";
import { useState } from "react";
import { CreditsEnum, Movie, TVShow } from "../types/types";
import { useIntervalNumber } from "../hooks/useIntervalNumber";
import { MovieType } from "../services/all";

const PersonPage = () => {
  const { id } = useParams();
  const { data: person, isLoading: isLoadingPerson } = usePerson(Number(id));
  const { secure_base_url, profile_sizes } = useImgConfigsContext();
  const [movieCreditsType, setMovieCreditsType] = useState<CreditsEnum>(
    CreditsEnum.CAST,
  );
  const [tvCreditsType, setTvCreditsType] = useState<CreditsEnum>(
    CreditsEnum.CAST,
  );
  const imgIndx = useIntervalNumber({
    interval: 3000,
    loop: true,
    times: (person?.images.profiles.length || 0) - 1,
  });

  if (!person || isLoadingPerson) return <LoadingPage />;

  return (
    <div className="w-full">
      <PersonLandingSection person={person} />

      <div className="sticky flex flex-col gap-5 bg-black p-3 sm:p-5">
        {person.biography && (
          <div className="flex items-center">
            <div className="relative col-span-1 hidden w-full place-items-center overflow-hidden md:grid">
              <div className="relative aspect-square w-full sm:w-[400px] md:w-[500px]">
                <div className="absolute inset-0 bg-rad"></div>
                <LazyLoadImage
                  src={
                    person.images.profiles[imgIndx].file_path
                      ? secure_base_url +
                        profile_sizes[3] +
                        person.images.profiles[imgIndx].file_path
                      : "/avatar.svg"
                  }
                  placeholderSrc={
                    person.images.profiles[imgIndx].file_path
                      ? secure_base_url +
                        profile_sizes[0] +
                        person.images.profiles[imgIndx].file_path
                      : "/avatar.svg"
                  }
                  alt="person"
                  className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
                />
              </div>
            </div>

            <div className="flex w-full flex-col gap-5">
              {person.name && (
                <h5 className="font-signature text-2xl">{person.name}</h5>
              )}
              {person.also_known_as?.length > 0 && (
                <div className="">
                  <h4 className="font-title text-3xl">Known As</h4>
                  <div className="flex flex-wrap gap-2">
                    {person.also_known_as.map((name, i) => (
                      <span
                        key={i}
                        className="w-fit rounded-lg border border-primary p-1 px-3"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {person.biography && (
                <div className="">
                  <h4 className="font-title text-3xl">Biography</h4>
                  <ExpandedText
                    className="text-sm md:text-lg"
                    length={400}
                    text={person.biography}
                  />
                </div>
              )}
            </div>
          </div>
        )}
        {(person.movie_credits.cast.length > 0 ||
          person.movie_credits.crew.length > 0) && (
          <MoviesSection
            title={`Movies`}
            type={MovieType.MOVIE}
            movies={
              person.movie_credits[movieCreditsType] as (Movie & TVShow)[]
            }
            navbar={
              <SectionNavbar>
                {person.movie_credits.cast.length > 0 && (
                  <NavElement
                    innerText="Cast"
                    selected={movieCreditsType == CreditsEnum.CAST}
                    onClick={() => setMovieCreditsType(CreditsEnum.CAST)}
                  />
                )}
                {person.movie_credits.crew.length > 0 && (
                  <NavElement
                    innerText="Crew"
                    selected={movieCreditsType == CreditsEnum.CREW}
                    onClick={() => setMovieCreditsType(CreditsEnum.CREW)}
                  />
                )}
              </SectionNavbar>
            }
          />
        )}

        {(person.tv_credits.cast.length > 0 ||
          person.tv_credits.crew.length > 0) && (
          <MoviesSection
            title="TVshows"
            type={MovieType.TV}
            movies={person.tv_credits[tvCreditsType] as (Movie & TVShow)[]}
            navbar={
              <SectionNavbar>
                {person.tv_credits.cast.length > 0 && (
                  <NavElement
                    innerText="Cast"
                    selected={tvCreditsType == CreditsEnum.CAST}
                    onClick={() => setTvCreditsType(CreditsEnum.CAST)}
                  />
                )}
                {person.tv_credits.crew.length > 0 && (
                  <NavElement
                    innerText="Crew"
                    selected={tvCreditsType == CreditsEnum.CREW}
                    onClick={() => setTvCreditsType(CreditsEnum.CREW)}
                  />
                )}
              </SectionNavbar>
            }
          />
        )}
      </div>
    </div>
  );
};

export default PersonPage;
