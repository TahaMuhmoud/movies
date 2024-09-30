import { LazyLoadImage } from "react-lazy-load-image-component";
import { useImgConfigsContext } from "../hooks/useImgConfigsContext";
import { ReactNode } from "react";
import { CN } from "../utils/helpers";

const LandingSectionWithBackdrop = ({
  backdropImg,
  posterImg,
  children,
  className,
}: {
  posterImg: string;
  className?: string;
  backdropImg: string;
  children?: ReactNode;
}) => {
  const { backdrop_sizes, secure_base_url, poster_sizes } =
    useImgConfigsContext();
  return (
    <div
      className={CN(
        `min-h-screen w-full overflow-x-hidden p-5 pt-20`,
        className || "",
      )}
    >
      <LazyLoadImage
        src={
          posterImg
            ? secure_base_url + poster_sizes[6] + posterImg
            : secure_base_url + backdrop_sizes[3] + backdropImg
        }
        placeholderSrc={
          posterImg
            ? secure_base_url + poster_sizes[0] + posterImg
            : secure_base_url + backdrop_sizes[0] + backdropImg
        }
        alt="Image Alt"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center sm:hidden"
      />
      <LazyLoadImage
        src={
          backdropImg
            ? secure_base_url + backdrop_sizes[3] + backdropImg
            : secure_base_url + poster_sizes[6] + posterImg
        }
        placeholderSrc={
          backdropImg
            ? secure_base_url + backdrop_sizes[0] + backdropImg
            : secure_base_url + poster_sizes[0] + posterImg
        }
        alt="Image Alt"
        className="absolute inset-0 -z-10 hidden h-full w-full object-cover object-center sm:block"
      />
      <div className="absolute inset-0 -z-10 h-full w-full bg-rad"></div>
      {children}
    </div>
  );
};

export default LandingSectionWithBackdrop;
