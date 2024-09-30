import { useState } from "react";
import NavElement from "../../components/NavElement";
import SectionNavbar from "../../components/SectionNavbar";
import { Cast, CreditsEnum, Crew } from "../../types/types";
import PersonsSection from "./PersonsSection";

const CreditsSection = ({ cast, crew }: { cast: Cast[]; crew: Crew[] }) => {
  const [creditType, setCreditType] = useState<CreditsEnum>(
    cast.length > 0 ? CreditsEnum.CAST : CreditsEnum.CREW,
  );
  return (
    <div id="credits">
      <h3 className="font-title text-2xl font-bold sm:text-4xl md:text-5xl">
        CAST & CREW
      </h3>
      <div className="flex min-h-full flex-1 flex-col gap-5">
        <SectionNavbar>
          {cast.length > 0 && (
            <NavElement
              innerText="Cast"
              selected={creditType == CreditsEnum.CAST}
              onClick={() => setCreditType(CreditsEnum.CAST)}
            />
          )}
          {crew.length > 0 && (
            <NavElement
              innerText="Crew"
              selected={creditType == CreditsEnum.CREW}
              onClick={() => setCreditType(CreditsEnum.CREW)}
            />
          )}
        </SectionNavbar>
        <PersonsSection
          persons={creditType == CreditsEnum.CAST ? cast : crew}
        />
      </div>
    </div>
  );
};

export default CreditsSection;
