import { MutableRefObject, useRef, useState } from "react";
import { useImgConfigsContext } from "../../hooks/useImgConfigsContext";
import { Media } from "../../types/types";
import NavElement from "../../components/NavElement";
import SectionNavbar from "../../components/SectionNavbar";
import PostersSection from "./PostersSection";
enum MediaType {
  backdrops = "backdrops",
  logos = "logos",
  posters = "posters",
}
const MovieImages = ({ images }: { images: Media }) => {
  const { poster_sizes, backdrop_sizes, logo_sizes } = useImgConfigsContext();

  const [x, setX] = useState<{
    type: MediaType;
    size: string;
    className: string;
  }>({
    type: MediaType.posters,
    size: poster_sizes[3],
    className: "min-w-[200px] max-w-[200px]",
  });

  // ==========
  const secRef = useRef() as MutableRefObject<HTMLDivElement>;
  return (
    <div className="flex flex-col gap-5" ref={secRef}>
      <h3 className="font-title text-2xl font-bold sm:text-4xl md:text-5xl">
        Media
      </h3>
      <div className="bg-gren-400 flex min-h-full flex-1 flex-col gap-5">
        <SectionNavbar>
          {images.posters.length > 0 && (
            <NavElement
              innerText="Posters"
              selected={x.type == MediaType.posters}
              onClick={() =>
                setX({
                  type: MediaType.posters,
                  size: poster_sizes[3],
                  className: "min-w-[200px] max-w-[200px]",
                })
              }
            />
          )}
          {images.backdrops.length > 0 && (
            <NavElement
              innerText="Backdrops"
              selected={x.type == MediaType.backdrops}
              onClick={() =>
                setX({
                  type: MediaType.backdrops,
                  size: backdrop_sizes[3],
                  className: "min-w-[350px] max-w-[350px]",
                })
              }
            />
          )}
          {images.logos.length > 0 && (
            <NavElement
              innerText="Logos"
              selected={x.type == MediaType.logos}
              onClick={() =>
                setX({
                  type: MediaType.logos,
                  size: logo_sizes[5],
                  className: "min-w-[200px] max-w-[200px]",
                })
              }
            />
          )}
        </SectionNavbar>
        <PostersSection
          posters={images[`${x.type}`]}
          size={x.size}
          imgClassName={x.className}
        />
      </div>
    </div>
  );
};

export default MovieImages;
