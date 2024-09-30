import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useImgConfigsContext } from "../../hooks/useImgConfigsContext";
import { useTrendingMovies } from "../../hooks/useTrendingMovies";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { BiPlay } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { RxDoubleArrowDown } from "react-icons/rx";
import { MovieType, Period } from "../../services/all";
import { Movie } from "../../types/types";
import { LazyLoadImage } from "react-lazy-load-image-component";

const LandingSection = () => {
  const nav = useNavigate();
  gsap.registerPlugin(useGSAP);
  const { data: trending } = useTrendingMovies({
    period: Period.DAY,
    type: MovieType.MOVIE,
  });

  const { secure_base_url, backdrop_sizes, poster_sizes } =
    useImgConfigsContext();
  const [indx, setIndx] = useState(0);
  const currMovie = trending?.results[indx] as Movie;
  const nextMovie = trending?.results[
    indx === trending?.results.length - 1 ? 0 : indx + 1
  ] as Movie;
  const toPrev = () => {
    setIndx((i) => {
      if (trending?.results && i === 0) return trending?.results.length - 1;
      return i - 1;
    });
  };
  const toNext = () => {
    setIndx((i) => {
      if (trending?.results && i === trending?.results.length - 1) return 0;
      return i + 1;
    });
  };

  const imgRef = useRef() as MutableRefObject<HTMLImageElement>;
  const imgRef2 = useRef() as MutableRefObject<HTMLImageElement>;
  const container = useRef() as MutableRefObject<HTMLDivElement>;

  useGSAP(
    () => {
      if (imgRef.current)
        gsap.from(imgRef.current, {
          rotate: 30,
          scale: 3,
          opacity: 0.5,
          duration: 1,
        });
      else if (imgRef2.current)
        gsap.from(imgRef2.current, {
          rotate: 30,
          scale: 3,
          opacity: 0.5,
          duration: 1,
        });
    },
    { scope: container, dependencies: [indx] },
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setIndx((i) => {
        if (trending?.results && i === trending?.results.length - 1) return 0;
        return i + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [trending?.results]);
  return (
    <div
      className="sticky top-0 min-h-screen w-full overflow-hidden"
      ref={container}
    >
      {trending?.results && currMovie && nextMovie && (
        <div className="relative grid h-screen w-full p-3 sm:p-5 md:grid-cols-2 md:p-10">
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-transparent via-black/80 to-black"></div>
          <div className="bg-red-00 absolute inset-0">
            <LazyLoadImage
              src={secure_base_url + poster_sizes[6] + currMovie.poster_path}
              placeholderSrc={
                secure_base_url + poster_sizes[0] + currMovie.poster_path
              }
              alt=""
              className="img absolute inset-0 right-0 top-0 h-full w-full object-cover sm:hidden"
            />
            <LazyLoadImage
              src={
                secure_base_url + backdrop_sizes[3] + currMovie.backdrop_path
              }
              placeholderSrc={
                secure_base_url + backdrop_sizes[0] + currMovie.backdrop_path
              }
              alt=""
              className="img absolute inset-0 right-0 top-0 -z-10 hidden h-full w-full origin-center object-cover sm:block"
            />
          </div>
          {/*  */}
          <div className="z-0 flex w-full flex-col justify-center overflow-x-hidden pt-10 md:justify-start">
            <div className="text-white/50">#TREND {indx + 1}</div>
            <h2 className="line-clamp-3 w-full break-words font-name text-6xl font-black text-white/40 md:text-7xl lg:text-9xl">
              {currMovie.title}
            </h2>
          </div>

          <div
            className="absolute left-1/2 top-1/2 grid aspect-square -translate-x-1/2 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white/10 p-3 hover:bg-white/40"
            onClick={() => nav(`/movie/${currMovie.id}`)}
          >
            <BiPlay size={45} />
          </div>
          <div className="flex w-full items-end justify-end">
            <div className="z-0 flex gap-2">
              <div className="flex flex-col justify-center">
                <div className="">N</div>
                <div className="">E</div>
                <div className="">X</div>
                <div className="">T</div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <div
                  className="aspect-video w-full overflow-hidden rounded-xl sm:w-[300px]"
                  onClick={toNext}
                >
                  <LazyLoadImage
                    src={
                      secure_base_url +
                      backdrop_sizes[3] +
                      nextMovie.backdrop_path
                    }
                    placeholderSrc={
                      secure_base_url +
                      backdrop_sizes[0] +
                      nextMovie.backdrop_path
                    }
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="flex items-end gap-5">
                  <BsArrowLeft onClick={toPrev} cursor={"pointer"} />
                  <span
                    className="cursor-pointer text-xl font-black text-white/50"
                    onClick={toPrev}
                  >
                    {indx > 0
                      ? indx - 1 < 10
                        ? "0" + (indx - 1)
                        : indx - 1
                      : trending?.results.length - 1}
                  </span>
                  <span className="text-4xl font-black">
                    {indx < 10 ? "0" + indx : indx}
                  </span>
                  <span
                    className="cursor-pointer text-xl font-black text-white/50"
                    onClick={toNext}
                  >
                    {indx < trending?.results.length - 1
                      ? indx + 1 < 10
                        ? "0" + (indx + 1)
                        : indx + 1
                      : "00"}
                  </span>
                  <BsArrowRight onClick={toNext} cursor={"pointer"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className="absolute bottom-10 left-1/2 z-20 hidden -translate-x-1/2 cursor-pointer bg-white/10 p-3 hover:bg-white/40 sm:block"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }}
      >
        <RxDoubleArrowDown className="animate-bounce" />
      </div>
    </div>
  );
};

export default LandingSection;
