// import React from "react";

// const IncubatorRoadMap = () => {
//   const weeks = [
//     { week: "Week I", title: "Welcome Week" },
//     {
//       week: "Week II",
//       title: "- workshop",
//       description: "Finding Product Market Fit",
//     },
//     {
//       week: "Week III",
//       title: "- workshop",
//       description: "Crypto Business Model.",
//     },
//     {
//       week: "Week IV",
//       title: "- workshop",
//       description: "Choosing a Tech Stack",
//     },
//     {
//       week: "Week V",
//       title: "- workshop",
//       description: "Creating a Winning Pitch Deck",
//     },
//     {
//       week: "Week VI",
//       title: "- workshop",
//       description: "BD and Fundraising Readiness",
//     },
//     {
//       week: "Week VII",
//       title: "- workshop",
//       description: "Customer Acquisition",
//     },
//     {
//       week: "Week VIII",
//       title: "- workshop",
//       description: "Legal and Regulatory Framework",
//     },
//     { week: "Week IX", title: "Demo Day" },
//   ];

//   return (
//     <div>
//       <div className="flex flex-col z-10 gap-[30px] lg:pl-[380px]">
//         <h1 className="text-[52px] text-[#000000] leading-[65px] font-light w-full h-[65px] font-GT-Alpina">
//           Roadmap
//         </h1>
//         <p className="text-[20px] leading-25 mb-24 text-[#56544E] w-full h-[75px] opacity-80 font-normal inter">
//           The 9-week Incubator Program was well designed to transform innovative
//           ideas into successful projects. This <br /> combines expert mentorship,
//           practical workshops, and a collaborative environment to accelerate the <br />
//           entrepreneurial journey for growth and sustainability.
//         </p>

//         <div></div>
//         <div className="flex gap-16">
//           <img
//             src="./CeloAfrica Roadmap.png"
//             alt="Celo_Africa_DAO"
//             className="w-[529px] h-[543px] object-cover"
//           />

//           <div className="flex flex-col justify-between w-[387px] h-[546px] mb-[125.2px] overflow-hidden">
//             {weeks.map((week, index) => (
//               <div key={index}>
//                 {index >= 1 && index <= 7 ? (
//                   <div className="flex">
//                     <h2 className="text-[16px] leading-20 inter font-medium text-[#655947] mr-2">
//                       {week.week}
//                     </h2>
//                     <p className="text-[16px] leading-20 inter font-medium text-[#655947] text-[#65594780]">
//                       {week.title}
//                     </p>
//                   </div>
//                 ) : (
//                   <>
//                     <h2 className="text-[16px] leading-20 inter font-medium text-[#655947]">
//                       {week.week}
//                     </h2>
//                     <p className="text-[24px] w-[387px] h-[30px] leading-[30px] inter text-[#0A0909] font-normal">
//                       {week.title}
//                     </p>
//                   </>
//                 )}
//                 {week.description &&
//                   ((index >= 1 && index <= 7) || index === 8) && (
//                     <p className="text-[24px] inter font-normal leading-30 text-[#0A0909]">
//                       {week.description}
//                     </p>
//                   )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IncubatorRoadMap;

// Testing

import Image from "next/image";
import React from "react";

const IncubatorRoadMap = () => {
  const weeks = [
    { week: "Week I", title: "Welcome Week" },
    {
      week: "Week II",
      title: "- workshop",
      description: "Finding Product Market Fit",
    },
    {
      week: "Week III",
      title: "- workshop",
      description: "Crypto Business Model.",
    },
    {
      week: "Week IV",
      title: "- workshop",
      description: "Choosing a Tech Stack",
    },
    {
      week: "Week V",
      title: "- workshop",
      description: "Creating a Winning Pitch Deck",
    },
    {
      week: "Week VI",
      title: "- workshop",
      description: "BD and Fundraising Readiness",
    },
    {
      week: "Week VII",
      title: "- workshop",
      description: "Customer Acquisition",
    },
    {
      week: "Week VIII",
      title: "- workshop",
      description: "Legal and Regulatory Framework",
    },
    { week: "Week IX", title: "Demo Day" },
  ];

  return (
    <div className="pl-[20px]" >
      <div className="flex relative flex-col z-10 gap-[30px] lg:pl-[380px]">

      <Image
        src="/roadmapbg.svg"
        className="absolute -z-30 w-full -top-20 md:-top-32 left-0 "
        height={1488}
        width={1742}
        alt="roadmap bg"
      /> 
      {/* <div className="flex flex-col z-10 gap-[30px] lg:pl-[380px] p-4 lg:p-0 max-w-[1084px] w-full"> */}
        
        <h1 className="text-[52px] mb-[36px] text-[#000000] leading-[65px] font-light w-[1084px] h-[65px] font-GT-Alpina">
          Roadmap
        </h1>
        <p className="lg:text-[20px] sm:text-[16px] sm:opacity-80 lg:leading-25 sm:leading-20 lg:mb-24 mb-20 sm:inter sm:font-normal text-[#56544E] lg:w-[1084px] lg:h-[75px] sm:w-[404px] sm:h-[120px] opacity-80 font-normal inter">
          The 9-week Incubator Program was well designed to transform innovative
          ideas into successful projects. This <br /> combines expert mentorship,
          practical workshops, and a collaborative environment to accelerate the <br />
          entrepreneurial journey for growth and sustainability.
        </p>

        <div className="flex gap-16">
          <img
            src="./CeloAfrica Roadmap.png"
            alt="Celo_Africa_DAO"
            className="w-[529px] h-[543px] object-cover hidden sm:hidden lg:block"
          />

          <div className="flex flex-col justify-between w-[387px] h-[546px] mb-[125.2px] overflow-hidden">
            {weeks.map((week, index) => (
              <div key={index}>
                {index >= 1 && index <= 7 ? (
                  <div className="flex">
                    <h2 className="text-[16px] leading-20 inter font-medium text-[#655947] mr-2">
                      {week.week}
                    </h2>
                    <p className="text-[16px] leading-20 inter font-medium text-[#65594780]">
                      {week.title}
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-[16px] leading-20 inter font-medium text-[#655947]">
                      {week.week}
                    </h2>
                    <p className="text-[24px] w-[387px] h-[30px] leading-[30px] inter text-[#0A0909] font-normal">
                      {week.title}
                    </p>
                  </>
                )}
                {week.description &&
                  ((index >= 1 && index <= 7) || index === 8) && (
                    <p className="text-[24px] inter font-normal leading-30 text-[#0A0909]">
                      {week.description}
                    </p>
                  )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncubatorRoadMap;




