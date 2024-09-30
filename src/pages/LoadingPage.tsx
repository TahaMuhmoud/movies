import { BounceLoader } from "react-spinners";

const LoadingPage = () => {
  return (
    <div className="min-w-screen grid min-h-screen place-items-center">
      <BounceLoader size={50} color="rgb(149, 1, 255)" />
    </div>
  );
};

export default LoadingPage;
