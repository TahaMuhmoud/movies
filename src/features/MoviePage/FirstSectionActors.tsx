import { Cast } from "../../types/types";
import { useImgConfigsContext } from "../../hooks/useImgConfigsContext";
import DraggableBox from "../../components/DraggableBox";
import { useNavigate } from "react-router-dom";

const FirstSectionActors = ({ cast }: { cast: Cast[] }) => {
  const nav = useNavigate();
  const { secure_base_url, profile_sizes } = useImgConfigsContext();
  return (
    <div className="flex flex-col gap-2">
      <div className="font-title text-2xl font-black">Actors</div>

      <DraggableBox className="scrollbar-hide flex gap-2 overflow-x-auto pr-10">
        {cast.slice(0, 9).map((person, i) => (
          <div
            key={i}
            className="relative flex min-w-[50px] max-w-[50px] flex-col items-center overflow-hidden"
          >
            <div
              className="absolute h-full w-full cursor-pointer"
              onClick={() => nav(`/person/${person.id}`)}
            ></div>
            <div className="aspect-square w-full overflow-hidden rounded-full bg-black">
              <img
                src={
                  person.profile_path
                    ? secure_base_url + profile_sizes[1] + person.profile_path
                    : `https://avatar.iran.liara.run/public/${person.gender == 2 ? "boy" : "girl"}`
                }
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            <div className="line-clamp-2 text-center text-sm">
              {person.name}
            </div>
          </div>
        ))}
        <div className="relative flex min-w-[50px] flex-col items-center overflow-hidden">
          <a
            href={"#credits"}
            className="flex aspect-square w-full flex-col justify-center overflow-hidden rounded-full bg-white/40"
          >
            <span className="text-center text-xs">View</span>
            <span className="text-center text-xs">All</span>
          </a>
          <div className="line-clamp-2 text-center text-sm"></div>
        </div>
      </DraggableBox>
    </div>
  );
};

export default FirstSectionActors;
