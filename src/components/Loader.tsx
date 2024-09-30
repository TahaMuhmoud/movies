import { BounceLoader } from "react-spinners";
function Loader({ size = 30 }: { size?: number }) {
  return (
    <div className="grid h-full w-full place-items-center">
      <BounceLoader size={size} color="rgb(149, 1, 255)" />
    </div>
  );
}

export default Loader;
