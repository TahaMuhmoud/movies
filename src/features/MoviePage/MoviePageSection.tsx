import { ChildrenProp } from "../../types/types";

const MoviePageSection = ({ children, id }: { id: string } & ChildrenProp) => {
  return (
    <div id={id} className="min-h-screen w-full">
      {children}
    </div>
  );
};

export default MoviePageSection;
