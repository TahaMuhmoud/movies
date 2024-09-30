import { useEffect, useState } from "react";
import { useImgConfigsContext } from "../../hooks/useImgConfigsContext";
import { Image } from "../../types/types";
import { MdChangeCircle } from "react-icons/md";
import { CN } from "../../utils/helpers";
import DraggableBox from "../../components/DraggableBox";
const PAGE_SIZE = 10;
function PostersSection({
  posters,
  size,
  imgClassName,
}: {
  posters: Image[];
  size: string;
  imgClassName: string;
}) {
  const { secure_base_url } = useImgConfigsContext();

  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setPage(1);
  }, [posters]);
  return (
    <div className="flex h-full w-full flex-col gap-5">
      <DraggableBox className="scrollbar-hide scrollbar-hide flex gap-3 overflow-x-scroll">
        {posters
          .slice(
            (page - 1) * PAGE_SIZE,
            PAGE_SIZE * page > posters.length
              ? posters.length
              : page * PAGE_SIZE,
          )
          .map((poster, i) => (
            <div key={i} className={CN(`relative min-w-fit`, imgClassName)}>
              <div className="absolute inset-0 bg-rad-2"></div>
              <img
                src={secure_base_url + size + poster.file_path}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ))}
      </DraggableBox>
      {posters.length / PAGE_SIZE > 1 && (
        <div className="flex justify-end">
          <button
            title="change"
            type="button"
            className="rounded-xl bg-primary p-2"
            onClick={() => {
              setPage((p) => {
                if (p < Math.ceil(posters.length / 10)) {
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
}

export default PostersSection;
