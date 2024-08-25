// import React from "react";

// const IncubatorPath = () => {
//   return (
//     <div className="pl-[312px] p-[82px] bg-[#E7E3D4]">
//       <h1 className="text-[32px] md:text-[52px] italic leading-[65px] font-GT-Alpina font-light">Path to Prosperity</h1>
//       <div className="mt-[64px] space-x-4">
//         <button className="bg-[#FCFF52] text-[#000000] px-[30px] py-[10px] border-[1.5px] border-gray-400 rounded-[50px]">
//           Projects
//         </button>
//         <button className="bg-[#E7E3D4] text-[#2E2525] px-[30px] py-[10px] border-[2.5px] border-gray-300 rounded-[50px]">
//           Mentors
//         </button>
//       </div>
//       <p className="mt-[24px] w-[1096px] h-[102px] opacity-80">
//         We are thrilled to present a series of groundbreaking projects that have
//         recently graduated from our esteemed<br></br> crypto incubator program. This
//         cohort of visionary startups is pushing the boundaries of blockchain
//         technology,<br></br> offering innovative solutions across various sectors.
//       </p>
//     </div>
//   );
// };

// export default IncubatorPath;


import React from "react";
import { useRouter } from "next/router";
import Path from '../Path/Path'

const IncubatorPath = () => {
  const router = useRouter();

  const handleProjectsClick = () => {
    router.push("/projects"); 
  };

  const handleMentorsClick = () => {
    router.push("/mentors"); 
  };

  return (
    <>
   
    {/* <div className="pl-[312px] p-[82px] bg-[#E7E3D4]">
      <h1 className="text-[32px] md:text-[52px] italic leading-[65px] font-GT-Alpina font-light">
        Path to Prosperity
      </h1>
      <div className="mt-[64px] space-x-4">
        <button
          onClick={handleProjectsClick}
          className="bg-[#FCFF52] text-[#000000] px-[30px] py-[10px] border-[1.5px] border-gray-400 rounded-[50px]"
        >
          Projects
        </button>
        <button
          onClick={handleMentorsClick}
          className="bg-[#E7E3D4] text-[#2E2525] px-[30px] py-[10px] border-[2.5px] border-gray-300 rounded-[50px]"
        >
          Mentors
        </button>
      </div> */}

      <div>
     <Path />
      </div>
      {/* <p className="mt-[24px] w-[1096px] h-[102px] opacity-80">
        We are thrilled to present a series of groundbreaking projects that have
        recently graduated from our esteemed
        <br />
        crypto incubator program. This cohort of visionary startups is pushing
        the boundaries of blockchain technology,
        <br />
        offering innovative solutions across various sectors.
      </p> */}
    {/* </div> */}
    </>
    
  );
};

export default IncubatorPath;
