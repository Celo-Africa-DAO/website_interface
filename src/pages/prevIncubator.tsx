import React from "react";
import IncubatorHero  from "../components/sections/IncubatorHero";   
import IncubatorFocus from "@/components/sections/IncubatorFocus";
import IncubatorPath from "@/components/sections/IncubatorPath";
import IncubatorRoadMap from "@/components/sections/IncubatorRoadMap";

const IncubatorPage = () => {
  return (
    <div className=" bg-Celo-AD-primary text-[#0C0C0C] overflow-hidden">
          <IncubatorHero />
          <IncubatorFocus />
          <IncubatorPath />
          <IncubatorRoadMap />
    </div>
  );
};

export default IncubatorPage;
