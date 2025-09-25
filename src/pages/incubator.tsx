import IncubationMentor from "@/components/sections/IncubationMentor";
import SponsorPrev from "@/components/sections/SponsorPrev";
import IncubatorPartner from "@/components/sections/IncubatorPartner";
import IncubatorProgram from "@/components/sections/IncubatorProgram";
import IncubatorHeroCohort2 from "@/components/sections/IncubatorHeroCohort2";
import IncubatorWhyChoose from "@/components/sections/IncubatorWhyChoose";
import IncubatorPath from "@/components/sections/IncubatorPath";
import IncubatorRoadMap from "@/components/sections/IncubatorRoadMap";

const IncubatorTwo = () => {
  return (
    <div className=" bg-Celo-AD-primary text-[#0C0C0C]">
      <IncubatorHeroCohort2 />
      <IncubatorWhyChoose />
      <IncubatorProgram />
      <IncubationMentor />
      <SponsorPrev />
      <IncubatorPartner />
    </div>
  );
};

export default IncubatorTwo;
