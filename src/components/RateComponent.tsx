import { FaStar } from "react-icons/fa";

const RateComponent = ({
  vote_average,
  vote_count,
}: {
  vote_average: number;
  vote_count?: number;
}) => {
  return (
    <div className="flex items-center gap-1">
      <FaStar color="yellow" />
      <span>{vote_average?.toFixed(1)}</span>

      {vote_count && (
        <>
          <span>|</span>
          <span>{vote_count}</span>
        </>
      )}
    </div>
  );
};

export default RateComponent;
