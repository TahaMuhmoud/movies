import { LazyLoadImage } from "react-lazy-load-image-component";
import DraggableBox from "../../components/DraggableBox";
import { useImgConfigsContext } from "../../hooks/useImgConfigsContext";
import { PersonDetails } from "../../types/types";

const PersonImages = ({ person }: { person: PersonDetails }) => {
  const { secure_base_url, profile_sizes } = useImgConfigsContext();
  return (
    <DraggableBox className="scrollbar-hide scrollbar-hide flex w-full gap-3 overflow-x-scroll">
      {person.images.profiles.map((profile, i) => (
        <div
          key={i}
          className="group relative min-w-20 max-w-20 overflow-hidden rounded-full border-2 border-white/30 grayscale hover:grayscale-0 sm:min-w-24 sm:max-w-24"
        >
          <div className="absolute inset-0 bg-rad hover:bg-none"></div>
          <LazyLoadImage
            src={secure_base_url + profile_sizes[2] + profile.file_path}
            placeholderSrc={
              secure_base_url + profile_sizes[0] + profile.file_path
            }
            alt=""
            className="min-w-20 object-top sm:min-w-24"
          />
        </div>
      ))}
    </DraggableBox>
  );
};

export default PersonImages;
