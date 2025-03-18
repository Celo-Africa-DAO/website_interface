import React from "react";
import IncubatorHeroCohort2  from "../components/sections/IncubatorHeroCohort2";   
import IncubatorWhyChoose from "@/components/sections/IncubatorWhyChoose";
import IncubatorPath from "@/components/sections/IncubatorPath";
import IncubatorRoadMap from "@/components/sections/IncubatorRoadMap";

const IncubatorPage = () => {
  return (
    <div className=" bg-Celo-AD-primary text-[#0C0C0C]">
          <IncubatorHeroCohort2 />
          <IncubatorWhyChoose />
          <IncubatorPath />
          <IncubatorRoadMap />
    </div>
  );
};

export default IncubatorPage;
