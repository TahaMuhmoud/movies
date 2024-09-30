import { MutableRefObject, useRef } from "react";
import { useImgConfigsContext } from "../../hooks/useImgConfigsContext";
import { FullMovie } from "../../types/types";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaXTwitter } from "react-icons/fa6";
import { SiImdb, SiWikidata } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SpokenLangsSpans from "../../components/SpokenLangsSpans";
import ExpandedText from "../../components/ExpandedText";
import GenresSpans from "../../components/GenresSpans";
import KeywordsSpans from "../../components/KeywordsSpans";

function SecondSection({ movie }: { movie: FullMovie }) {
  const { secure_base_url, poster_sizes } = useImgConfigsContext();

  // =====
  const secRef = useRef() as MutableRefObject<HTMLDivElement>;

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      gsap.from(".bb", {
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
    <div className="flex flex-col" ref={secRef}>
      <h3 className="font-title text-2xl font-bold sm:text-4xl md:text-5xl">
        More Details
      </h3>
      <div className="grid min-h-full flex-1 items-center md:grid-cols-2">
        <div className="bb col-span-1 flex w-full flex-wrap gap-5 gap-x-20">
          {movie.original_title && (
            <div className="">
              <h4 className="font-bold text-white/40">original title:</h4>
              <p className="">
                <span className="font-name text-3xl">
                  {movie.original_title}
                </span>
                <span>({movie.original_language?.toUpperCase()})</span>
              </p>
            </div>
          )}
          {movie.status && (
            <div className="">
              <h4 className="font-bold text-white/40">Status:</h4>
              <p className="">{movie.status}</p>
            </div>
          )}
          {movie.release_date && (
            <div className="">
              <h4 className="font-bold text-white/40">Release Date:</h4>
              <p className="">{movie.release_date}</p>
            </div>
          )}
          {movie.spoken_languages.length > 0 && (
            <SpokenLangsSpans langs={movie.spoken_languages} />
          )}
          {movie.overview && (
            <div className="">
              <h4 className="font-bold text-white/40">Overview:</h4>
              <ExpandedText text={movie.overview} length={300} />
            </div>
          )}
          {movie.genres && movie.genres.length > 0 && (
            <GenresSpans genres={movie.genres} type={"movies"} />
          )}
          {movie.keywords.keywords && movie.keywords.keywords.length > 0 && (
            <KeywordsSpans keywords={movie.keywords.keywords} type="movies" />
          )}
          <div className="">
            <h4 className="mb-2 font-bold text-white/40">Links:</h4>
            <p className="flex flex-wrap items-center gap-2">
              {movie.external_ids.twitter_id && (
                <a
                  title="XId"
                  href={`https://x.com/` + movie.external_ids.twitter_id}
                  target="_blank"
                  className=""
                >
                  <FaXTwitter />
                </a>
              )}
              {movie.external_ids.imdb_id && (
                <a
                  title="imdbId"
                  href={
                    "https://www.imdb.com/title/" + movie.external_ids.imdb_id
                  }
                  target="_blank"
                >
                  <SiImdb size={35} />
                </a>
              )}
              {movie.external_ids.instagram_id && (
                <a
                  title="instagramId"
                  href={
                    "https://www.instagram.com/" +
                    movie.external_ids.instagram_id
                  }
                  target="_blank"
                >
                  <FiInstagram size={35} />
                </a>
              )}
              {movie.external_ids.wikidata_id && (
                <a
                  title="wikidataId"
                  href={
                    "https://www.wikidata.org/wiki/" +
                    movie.external_ids.wikidata_id
                  }
                  target="_blank"
                >
                  <SiWikidata size={35} />
                </a>
              )}
            </p>
          </div>
        </div>
        <div className="relative col-span-1 min-h-[500px] w-full overflow-hidden bg-rad">
          <LazyLoadImage
            src={secure_base_url + poster_sizes[6] + movie.poster_path}
            placeholderSrc={
              secure_base_url + poster_sizes[0] + movie.poster_path
            }
            alt=""
            className="absolute -z-10 h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
