import IncubationMentor from "@/components/sections/IncubationMentor";
import SponsorPrev from "@/components/sections/SponsorPrev";
import IncubatorPartner from "@/components/sections/IncubatorPartner";
import IncubatorProgram from "@/components/sections/IncubatorProgram";

const IncubatorTwo = () => {
    return (
      <div className=" bg-Celo-AD-primary text-[#0C0C0C]">
         <IncubatorProgram/>
            <IncubationMentor />
            <SponsorPrev />
           
            <IncubatorPartner/>
      </div>
    );
  };
  
  export default IncubatorTwo;