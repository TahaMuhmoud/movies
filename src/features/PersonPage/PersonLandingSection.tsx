import { LazyLoadImage } from "react-lazy-load-image-component";
import { PersonDetails } from "../../types/types";
import { useImgConfigsContext } from "../../hooks/useImgConfigsContext";

import { MutableRefObject, useRef, useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IoLocationSharp } from "react-icons/io5";
import PersonImages from "./PersonImages";
import TranslationsSelect from "./TranslationsSelect";
import MainName from "../../components/MainName";
import DotSpan from "../../components/DotSpan";
const PersonLandingSection = ({ person }: { person: PersonDetails }) => {
  const { secure_base_url, profile_sizes } = useImgConfigsContext();
  const [translatedBiography, setTranslatedBiography] = useState<{
    biography: string;
  }>();
  const secRef = useRef() as MutableRefObject<HTMLDivElement>;

  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.from(secRef.current, {
      opacity: 0,
      duration: 2,
    });
  });
  return (
    <div
      className="min-w-screen grid gap-10 overflow-x-hidden pt-20 md:grid-cols-2"
      ref={secRef}
    >
      <div className="col-span-1 flex w-full flex-col-reverse justify-end gap-5 overflow-hidden p-5 md:flex-row md:justify-normal">
        <div className="flex items-center justify-center gap-5 md:flex-col md:pl-5">
          <div className="h-px w-1/4 bg-white sm:h-1/4 sm:w-px"></div>
          <BsTwitterX size={20} />
          <FaFacebook size={20} />
          <div className="h-px w-1/4 bg-white sm:h-1/4 sm:w-px"></div>
        </div>
        <div className="flex w-full flex-col gap-5 overflow-x-hidden sm:justify-end">
          <div className="flex justify-end">
            <TranslationsSelect
              translations={person.translations.translations}
              onChange={(item) => {
                const data =
                  Object.entries(item?.data || {}).filter(
                    (entry) =>
                      entry[1] !== null &&
                      entry[1] !== undefined &&
                      entry[1] !== "" &&
                      entry[1] !== 0,
                  ) || undefined;
                setTranslatedBiography(
                  Object.fromEntries(data) as { biography: string },
                );
              }}
            />
          </div>
          <div className="flex items-end justify-start">
            <MainName name={person.name} />
            <span className="text-lg">({person.known_for_department})</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-white/70">
            {person.birthday && <DotSpan text={person.birthday} />}
            {person.place_of_birth && (
              <div className="flex items-center gap-2">
                <IoLocationSharp className="fill-primary" />
                <span className="">{person.place_of_birth}</span>
              </div>
            )}
          </div>
          <p className="line-clamp-5 text-sm sm:font-bold">
            {translatedBiography?.biography || person.biography}
          </p>
          {person.images.profiles.length > 0 && (
            <div className="my-7 w-full">
              <PersonImages person={person} />
            </div>
          )}
        </div>
      </div>
      <div className="relative col-span-1 grid w-full place-items-center">
        <div className="relative aspect-square w-full max-w-[500px]">
          <div className="absolute inset-0 bg-rad"></div>
          <LazyLoadImage
            src={
              person.profile_path
                ? secure_base_url + profile_sizes[3] + person.profile_path
                : "/avatar.svg"
            }
            placeholderSrc={
              person.profile_path
                ? secure_base_url + profile_sizes[0] + person.profile_path
                : "/avatar.svg"
            }
            alt="person"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonLandingSection;

{
  /*
  <div className="flex items-end justify-start">
            <h2 className="line-clamp-3 w-full break-words font-name text-5xl font-black text-white sm:text-6xl md:text-7xl lg:text-8xl">
              {person.name}
            </h2>
            <span className="text-lg">({person.known_for_department})</span>
          </div>{" "}
          <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-white/70">
            {person.birthday && (
              <div className="flex items-center gap-2">
                <VscDebugBreakpointLog className="fill-primary" />
                <span className="">{person.birthday}</span>
              </div>
            )}
            {person.place_of_birth && (
              <div className="flex items-center gap-2">
                <IoLocationSharp className="fill-primary" />
                <span className="">{person.place_of_birth}</span>
              </div>
            )}
          </div>
          <p className="line-clamp-5 text-sm sm:font-bold">
            {translatedBiography?.biography || person.biography}
          </p>
          <div className="flex w-full flex-col gap-2">
            <div className="font-title text-2xl font-black">Trailers</div>
            <DraggableBox className="scrollbar-hide flex w-full gap-2 overflow-x-auto">
              {person.images.profiles.map((img, i) => (
                <div
                  key={i}
                  className="group relative min-w-20 max-w-20 overflow-hidden rounded-full border-2 border-white/30 sm:min-w-24 sm:max-w-24"
                >
                  <div className="absolute inset-0 bg-rad hover:bg-none"></div>
                  <img
                    src={secure_base_url + profile_sizes[2] + img.file_path}
                    alt=""
                    className="min-w-20 sm:min-w-24"
                  />
                </div>
              ))}
            </DraggableBox>
          </div>
        </div>
*/
}
