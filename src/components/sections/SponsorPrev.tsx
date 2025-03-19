

"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { MdChevronRight } from "react-icons/md";
import KnowMore from "../../components/KnowMore";

const SponsorPrev = () => {
  const handleMentor = () => {
    window.open("https://shorturl.at/ckopx", "_blank");
  };

  const cohorts = [
    {
      name: "PeerPesa",
      description: "Connecting Africa Through P2P Trading using CUSD!",
      logo: "/logos/PeerPesa.png",
      website: "https://peerpesa.co/",
      twitter: "https://twitter.com/peerpesa",
      
    },
    {
      name: "Pretium finance",
      description:
        "We're revolutionizing African cross-border payments and integrating cryptocurrencies into the economic value chain.",
      logo: "/logos/pretium.png",
      website: "https://pretium.africa",
      twitter: "https://twitter.com/pretiumfinance",
    },
    {
      name: "Minicrash",
      description: "Provably fair blockchain game where anyone can be the house",
      logo: "/logos/minicrash.png",
      website: "https://mini-crash.com",
      twitter: "https://twitter.com/minicrashgame",
    },
  ];

  return (
    <div>

    
    <section className="max-w-6xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div
          className="relative rounded-lg mb-8 sm:mb-16 md:mb-24 w-full"
          style={{
            backgroundImage: "url(./Sponsor.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black bg-opacity-40 px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-24 md:py-32 text-white rounded-lg">
            <div className="max-w-lg">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-GT-Alpina font-thin mb-2">
                Sponsorship
                <br />
                <span className="italic pl-4 sm:pl-10 md:pl-14">Opportunities</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base mb-6 sm:mb-8">
                Explore our deck and partner with us towards turning visionary
                ideas into impactful realities.
              </p>
              <Button onClick={handleMentor} className="bg-[#E7E3D4] text-[#090808] border p-1 w-fit mt-6 sm:mt-8 md:mt-10 hover:bg-Celo-AD-yellow text-xs sm:text-sm md:text-base">
                <span className="px-2 sm:px-4">Become a mentor</span>
                <span className="bg-[#090808] p-1 rounded-full ml-1">
                  <MdChevronRight className="text-white" size={20} />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Previous Cohort Section */}
      <div className="pl-4 sm:pl-8 md:pl-16 lg:pl-32">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12">
          <div>
            <p className="text-xs sm:text-sm text-gray-600">Top Three Project</p>
            <h2 className="text-2xl sm:text-3xl font-GT-Alpina  font-thin">
              Previous
              <br />
              <span className="italic pl-6 sm:pl-16">Cohort</span>
            </h2>
          </div>

          <div className="mt-4 sm:mt-0 pr-0 sm:pr-6 md:pr-12 lg:pr-20">
            <Button className="rounded-full bg-transparent border border-gray-800 text-gray-800 hover:bg-gray-100 px-4 sm:px-6 py-1 sm:py-2 flex items-center text-xs sm:text-sm">
              <KnowMore />
              <span className="ml-2 w-3 h-3 sm:w-4 sm:h-4 bg-gray-800 rounded-full flex items-center justify-center">
                <MdChevronRight className="text-white" size={16} />
              </span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cohorts.map((cohort) => (
            <div
              key={cohort.name}
              className="group relative bg-[#FFFFFF] border border-[#77736F] p-4 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:bg-transparent"
            >
              <div className="relative z-10">
                <h3 className="font-medium text-base sm:text-lg mb-1 sm:mb-2 group-hover:text-black mt-5">
                  {cohort.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-900 mt-6">
                  {cohort.description}
                </p>
              </div>

              <div className="relative z-10 flex justify-between items-center mt-8 sm:mt-14">
                <div className="text-xs text-gray-400">DeFi</div>
                <div className="flex space-x-2">
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => window.open(cohort.website, "_blank")}
                  >
                    <span className="sr-only">Website</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </button>
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => window.open(cohort.twitter, "_blank")}
                  >
                    <span className="sr-only">Twitter</span>
                    <Image 
                      src="/Vector.svg"  // Correct path for public folder
                      alt="Twitter"
                      width={15}  
                      height={15} 
                    />
                  </button>
                </div>
              </div>

              {/* Logo positioned at the top left on hover */}
              <div className="absolute top-0 left-0 p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                 <Image src={cohort.logo} alt={`${cohort.name} logo`} width={40} height={40} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <div className=" flex justify-start items-start">
                <div className="h-32 w-32 bg-white">

                </div>

            </div>
    </div>
  );
};

export default SponsorPrev;