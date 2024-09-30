import { MutableRefObject, useRef } from "react";
import { useImgConfigsContext } from "../../hooks/useImgConfigsContext";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FullTvShow } from "../../types/types";
import ExpandedText from "../../components/ExpandedText";
import GenresSpans from "../../components/GenresSpans";
import KeywordsSpans from "../../components/KeywordsSpans";
import SpokenLangsSpans from "../../components/SpokenLangsSpans";

const TvDetails = ({ tvShow }: { tvShow: FullTvShow }) => {
  const { secure_base_url, poster_sizes } = useImgConfigsContext();

  const secRef = useRef() as MutableRefObject<HTMLDivElement>;

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      gsap.from(".details", {
        translateY: 80,
        opacity: 0,
        scrollTrigger: {
          trigger: ".bb",
          start: "top bottom",
          end: "bottom 80%",
          scrub: true,
        },
      });
    },
    { scope: secRef },
  );
  return (
    <div className="flex w-full flex-col" ref={secRef}>
      <h3 className="font-title text-2xl font-bold sm:text-4xl md:text-5xl">
        More Details
      </h3>
      <div className="grid min-h-full w-full flex-1 items-center md:grid-cols-2">
        <div className="details col-span-1 flex w-full flex-wrap gap-5 gap-x-20">
          {tvShow.original_name && (
            <div className="">
              <h4 className="font-bold text-white/40">Original Name:</h4>
              <p className="">
                <span className="font-name text-3xl">
                  {tvShow.original_name}
                </span>
                {tvShow.original_language && (
                  <span>({tvShow.original_language?.toUpperCase()})</span>
                )}
              </p>
            </div>
          )}
          {tvShow.status && (
            <div className="">
              <h4 className="font-bold text-white/40">Status:</h4>
              <p className="">{tvShow.status}</p>
            </div>
          )}
          {tvShow.first_air_date && (
            <div className="">
              <h4 className="font-bold text-white/40">First Air Date:</h4>
              <p className="">{tvShow.first_air_date}</p>
            </div>
          )}
          {tvShow.spoken_languages.length > 0 && (
            <SpokenLangsSpans langs={tvShow.spoken_languages} />
          )}
          {tvShow.overview && (
            <div className="">
              <h4 className="font-bold text-white/40">Overview:</h4>
              <ExpandedText
                text={tvShow.overview}
                length={300}
                className="scrollbar overflow-y-scroll"
              />
            </div>
          )}
          {tvShow.genres && tvShow.genres.length > 0 && (
            <GenresSpans genres={tvShow.genres} type="tvs" />
          )}
          {tvShow.keywords && tvShow.keywords.results.length > 0 && (
            <KeywordsSpans keywords={tvShow.keywords.results} type="tvs" />
          )}
        </div>
        <div className="relative col-span-1 min-h-[500px] w-full overflow-hidden bg-rad">
          <LazyLoadImage
            src={secure_base_url + poster_sizes[6] + tvShow.poster_path}
            placeholderSrc={
              secure_base_url + poster_sizes[0] + tvShow.poster_path
            }
            alt=""
            className="absolute -z-10 h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default TvDetails;
