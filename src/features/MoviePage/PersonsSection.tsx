import { useState } from "react";
import { Person } from "../../types/types";
import { useImgConfigsContext } from "../../hooks/useImgConfigsContext";
import { MdChangeCircle } from "react-icons/md";
import DraggableBox from "../../components/DraggableBox";
import { useNavigate } from "react-router-dom";
const PAGE_SIZE = 10;
const PersonsSection = ({ persons }: { persons: Person[] }) => {
  const { secure_base_url, profile_sizes } = useImgConfigsContext();
  const [page, setPage] = useState<number>(1);
  const nav = useNavigate();
  return (
    <div className="flex h-full w-full flex-col gap-5">
      <DraggableBox className="scrollbar-hide scrollbar-hide flex gap-3 overflow-x-scroll">
        {persons
          .slice(
            (page - 1) * PAGE_SIZE,
            PAGE_SIZE * page > persons.length
              ? persons.length
              : page * PAGE_SIZE,
          )
          .map((person, i) => (
            <div key={i} className={`relative flex flex-col items-center`}>
              <div
                className="absolute inset-0 bg-transparent"
                onClick={() => nav(`/person/${person.id}`)}
              ></div>
              <img
                src={
                  person.profile_path
                    ? secure_base_url + profile_sizes[3] + person.profile_path
                    : `https://avatar.iran.liara.run/public/${person.gender == 2 ? "boy" : "girl"}`
                }
                alt=""
                className="aspect-square min-w-32 max-w-32 rounded-full object-cover"
              />
              <div className="text-center">{person.original_name}</div>
              <div className="text-center text-primary">
                {person.known_for_department}
              </div>
            </div>
          ))}
      </DraggableBox>
      {persons.length / PAGE_SIZE > 1 && (
        <div className="flex justify-end">
          <button
            title="change"
            type="button"
            className="rounded-xl bg-primary p-2"
            onClick={() => {
              setPage((p) => {
                if (p < Math.ceil(persons.length / 10)) {
                  return p + 1;
                } else return 1;
              });
            }}
          >
            <MdChangeCircle size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default PersonsSection;
