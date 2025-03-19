
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
    <div
      id="roadmap"
      className="bg-cover bg-center py-10 md:py-20 bg-[#E7E3DA]"
      style={{
        backgroundImage: "url(./roadmapbg.svg)",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col z-10 gap-5 md:gap-8 justify-center items-center">
          <div className="w-full md:pl-4 lg:pl-10 xl:pl-56">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-3 text-[#000000] leading-tight font-light font-GT-Alpina">
              Roadmap
            </h1>
            <p className="text-sm md:text-base mb-10 md:mb-16 lg:mb-20 font-normal text-[#56544E] max-w-3xl">
              The 9-week Incubator Program was well designed to transform innovative
              ideas into successful projects. This combines expert mentorship,
              practical workshops, and a collaborative environment to accelerate the
              entrepreneurial journey for growth and sustainability.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 md:gap-10 lg:gap-16">
            <img
              src="./CeloAfrica Roadmap.png"
              alt="Celo_Africa_DAO"
              className="w-full max-w-md mx-auto lg:mx-0 lg:w-[529px] h-auto lg:h-[543px] object-cover hidden lg:block"
            />

            <div className="flex flex-col justify-between w-full max-w-md mx-auto lg:mx-0 lg:w-[387px] md:h-[546px] mb-8 md:mb-16 lg:mb-[125.2px] overflow-hidden">
              {weeks.map((week, index) => (
                <div key={index} className="mb-6 md:mb-0">
                  {index >= 1 && index <= 7 ? (
                    <div className="flex">
                      <h2 className="text-sm md:text-base leading-tight inter font-medium text-[#655947] mr-2">
                        {week.week}
                      </h2>
                      <p className="text-sm md:text-base leading-tight inter font-medium text-[#65594780]">
                        {week.title}
                      </p>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-sm md:text-base leading-tight inter font-medium text-[#655947]">
                        {week.week}
                      </h2>
                      <p className="text-lg md:text-2xl w-full leading-tight md:leading-[30px] inter text-[#0A0909] font-normal">
                        {week.title}
                      </p>
                    </>
                  )}
                  {week.description &&
                    ((index >= 1 && index <= 7) || index === 8) && (
                      <p className="text-lg md:text-2xl inter font-normal leading-tight md:leading-[30px] text-[#0A0909]">
                        {week.description}
                      </p>
                    )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncubatorRoadMap;