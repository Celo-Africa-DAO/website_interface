

// "use client";

// import React from "react";
// import Image from "next/image";
// import { Button } from "../ui/button";
// import { MdChevronRight } from "react-icons/md";
// import KnowMore from "../../components/KnowMore";

// const SponsorPrev = () => {
//   const handleMentor = () => {
//     window.open("https://shorturl.at/ckopx", "_blank");
//   };

//   const cohort1 = [
//     {
//       name: "minicrash",
//       description: "Provably fair blockchain game where anyone can be the house",
//       logo: "/logos/minicrash.png",
//       website: "/",
//       twitter: "/",
//     },
//     {
//       name: "PeerPesa",
//       description: "Connecting Africa Through P2P Trading using cUSD!",
//       logo: "/logos/PeerPesa.png",
//       website: "https://peerpesa.co/",
//       twitter: "https://x.com/peer_pesa",
//     },
//     {
//       name: "Pretium",
//       description: "We’re revolutionizing African cross-border payments and integrating cryptocurrencies into the economic value chain.",
//       logo: "/logos/pretium1.png",
//       website: "https://pretium.africa/",
//       twitter: "https://x.com/pretiumapp?s=11&t=GcgWBsAbcIe78S7wMmleBg",
//     },
//     {
//       name: "Carus Recycling",
//       description: "A decentralised recycling platform that rewards in cUSD",
//       logo: "/logos/Carus.png",
//       website: "https://www.waystrecycling.com/",
//       twitter: "https://x.com/recycleonwayst",
//     },
//     // {
//     //   name: "Zsales",
//     //   description: "A blockchain-powered solution integrated with MiniPay, enabling seamless purchase and secure gifting of digital gift cards",
//     //   logo: "/logos/pretium.png",
//     //   website: "https://zsales.xyz/",
//     //   twitter: "/",
//     // },
    
//   ];

//   const cohort2 = [
//     {
//       name: "Strimz",
//       description: "Strimz is a DeFi solution designed to automate crypto payroll and subscription payments",
//       logo: "/logos/strim211.png",
//       website: "https://www.strimz.xyz/",
//       twitter: "https://x.com/Strimz_HQ",
//     },
//     {
//       name: "3-Wheelers",
//       description: "A community finance platform powering Africa's 3 wheeler economy.",
//       logo: "/logos/3wch.png",
//       website: "https://3wb.club/",
//       twitter: "https://x.com/3wbClub",
//     },
//     {
//       name: "QuestPanda",
//       description: " QuestPanda is a Create-to-Earn platform that rewards creators with on-chain incentives for producing and sharing video content",
//       logo: "/logos/questpanda.png",
//       website: "https://www.questpanda.xyz/",
//       twitter: "https://x.com/questpanda_xyz",
//     },
//     {
//       name: "Syarpa",
//       description: " Syarpa serves as a financial platform that bridges crypto and fiat, providing a seamless on/off-ramp for individuals and businesses to execute low-cost, cross-border payments.",
//       logo: "/logos/sapyra.png",
//       website: "https://www.syarpa.com/",
//       twitter: "https://x.com/getsyarpa?s=21",
//     },
//     {
//       name: "Sovseas",
//       description: " Decentralized platform on Celo where  communities support projects through campaigns powered by demographic voting ,and multi-token governace .",
//       logo: "/logos/sov.png",
//       website: "https://sovseas.xyz/",
//       twitter: "https://x.com/sovseas",
//     },
    
//   ];

//   return (
//     <div>
//     <section className="max-w-6xl mx-auto py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         <div
//           className="relative rounded-lg mb-6 sm:mb-8 md:mb-12 lg:mb-16 w-full min-h-[200px] sm:min-h-[300px] md:min-h-[400px]"
//           style={{
//             backgroundImage: "url(./Sponsor.png)",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className="bg-black bg-opacity-40 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 text-white rounded-lg h-full flex items-center">
//             <div className="max-w-lg">
//               <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-GT-Alpina font-thin mb-2 leading-tight">
//                 Sponsorship
//                 <br />
//                 <span className="italic pl-2 sm:pl-4 md:pl-6 lg:pl-8 xl:pl-10">Opportunities</span>
//               </h2>
//               <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 md:mb-8 leading-relaxed">
//                 Explore our deck and partner with us towards turning visionary
//                 ideas into impactful realities.
//               </p>
//               <Button onClick={handleMentor} className="bg-[#E7E3D4] text-[#090808] border p-1 w-fit mt-4 sm:mt-6 md:mt-8 hover:bg-Celo-AD-yellow text-xs sm:text-sm md:text-base transition-all duration-300">
//                 <span className="px-2 sm:px-3 md:px-4">Become a mentor</span>
//                 <span className="bg-[#090808] p-1 rounded-full ml-1">
//                   <MdChevronRight className="text-white" size={16} />
//                 </span>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Previous Cohort Section */}
//       <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
//         <div className="flex flex-row justify-between items-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
//           <div>
//             <h2 className="text-xl sm:text-2xl md:text-3xl font-GT-Alpina font-thin leading-tight">
//               Previous
//               <br />
//               <span className="italic pl-2 sm:pl-4 md:pl-6 lg:pl-8">Cohorts</span>
//             </h2>
//           </div>

//           <div>
//             <button className="rounded-full bg-transparent border border-gray-800 text-gray-800 hover:bg-gray-100 px-3 sm:px-4 md:px-6 py-1 sm:py-2 flex items-center text-xs sm:text-sm transition-all duration-300 lg:mb-4 mb-14">
//               <KnowMore />
//               {/* <span className="ml-2 w-3 h-3 sm:w-4 sm:h-4 bg-gray-800 rounded-full flex items-center justify-center">
//                 <MdChevronRight className="text-white" size={12} />
//               </span> */}
//             </button>
//           </div>
//         </div>

//         {/* Main Layout matching the image */}
//         <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center lg:justify-center">
//           {/* Left Side - Incubator Alumni (Vertically Centered) */}
//           <div className="lg:w-1/4 flex justify-center lg:justify-start lg:items-center lg:h-full lg:min-h-[250px]">
//             <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-GT-Alpina font-medium text-black text-center lg:text-left leading-tight lg:whitespace-nowrap">
//               Incubator Alumni
//             </h2>
//           </div>

//           {/* Right Side - Cohorts */}
//           <div className="lg:w-3/4 w-full">
//             {/* Cohort 2 */}
//             <div className="mb-8 sm:mb-10 lg:mb-12">
//               <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-6 text-black">Cohort 2</h3>
//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 justify-items-center">
//                 {cohort2.map((alumni) => (
//                   <div
//                     key={alumni.name}
//                     className="group relative cursor-pointer flex flex-col items-center"
//                   >
//                     {/* Icon Display */}
//                     <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 overflow-hidden p-1">
//                       <Image 
//                         src={alumni.logo} 
//                         alt={`${alumni.name} logo`} 
//                         width={64} 
//                         height={64} 
//                         className="w-full h-full object-contain"
//                       />
//                     </div>
                    
//                     {/* Name below icon */}
//                     <p className="text-xs sm:text-sm text-gray-600 text-center mt-2 group-hover:text-gray-800 leading-tight">
//                       {alumni.name}
//                     </p>

//                     {/* Hover Card */}
//                     <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
//                       <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 shadow-xl min-w-[200px] sm:min-w-[250px] max-w-[280px] sm:max-w-[300px] hover:pointer-events-auto">
//                         <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{alumni.name}</h4>
//                         <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed">{alumni.description}</p>
//                         <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
//                           <button
//                             className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors text-xs sm:text-sm"
//                             onClick={() => window.open(alumni.website, "_blank")}
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="14"
//                               height="14"
//                               viewBox="0 0 24 24"
//                               fill="none"
//                               stroke="currentColor"
//                               strokeWidth="2"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             >
//                               <circle cx="12" cy="12" r="10"></circle>
//                               <line x1="2" y1="12" x2="22" y2="12"></line>
//                               <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
//                             </svg>
//                             <span>Website</span>
//                           </button>
//                           <button
//                             className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors text-xs sm:text-sm"
//                             onClick={() => window.open(alumni.twitter, "_blank")}
//                           >
//                             <Image 
//                               src="/Vector.svg"
//                               alt="Twitter"
//                               width={14}  
//                               height={14} 
//                             />
//                             <span>Twitter</span>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Cohort 1 */}
//             <div>
//               <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-6 text-black">Cohort 1</h3>
//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 justify-items-center">
//                 {cohort1.map((alumni) => (
//                   <div
//                     key={alumni.name}
//                     className="group relative cursor-pointer flex flex-col items-center"
//                   >
//                     {/* Icon Display */}
//                     <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 overflow-hidden p-1">
//                       <Image 
//                         src={alumni.logo} 
//                         alt={`${alumni.name} logo`} 
//                         width={64} 
//                         height={64} 
//                         className="w-full h-full object-contain"
//                       />
//                     </div>
                    
//                     {/* Name below icon */}
//                     <p className="text-xs sm:text-sm text-gray-600 text-center mt-2 group-hover:text-gray-800 leading-tight">
//                       {alumni.name}
//                     </p>

//                     {/* Hover Card */}
//                     <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
//                       <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 shadow-xl min-w-[200px] sm:min-w-[250px] max-w-[280px] sm:max-w-[300px] hover:pointer-events-auto">
//                         <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{alumni.name}</h4>
//                         <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed">{alumni.description}</p>
//                         <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
//                           <button
//                             className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors text-xs sm:text-sm"
//                             onClick={() => window.open(alumni.website, "_blank")}
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="14"
//                               height="14"
//                               viewBox="0 0 24 24"
//                               fill="none"
//                               stroke="currentColor"
//                               strokeWidth="2"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             >
//                               <circle cx="12" cy="12" r="10"></circle>
//                               <line x1="2" y1="12" x2="22" y2="12"></line>
//                               <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
//                             </svg>
//                             <span>Website</span>
//                           </button>
//                           <button
//                             className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors text-xs sm:text-sm"
//                             onClick={() => window.open(alumni.twitter, "_blank")}
//                           >
//                             <Image 
//                               src="/Vector.svg"
//                               alt="Twitter"
//                               width={14}  
//                               height={14} 
//                             />
//                             <span>Twitter</span>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     </div>
//   );
// };

// export default SponsorPrev;



"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { MdChevronRight } from "react-icons/md";

const SponsorPrev = () => {
  const handleMentor = () => {
    window.open("https://shorturl.at/ckopx", "_blank");
  };

  const alumni = [
    // Cohort 2
    {
      name: "Strimz",
      description: "DeFi solution automating crypto payroll and subscription payments",
      logo: "/logos/strim211.png",
      website: "https://www.strimz.xyz/",
      twitter: "https://x.com/Strimz_HQ",
      cohort: 2
    },
    {
      name: "3-Wheelers",
      description: "Community finance platform powering Africa's 3 wheeler economy",
      logo: "/logos/3wch.png",
      website: "https://3wb.club/",
      twitter: "https://x.com/3wbClub",
      cohort: 2
    },
    {
      name: "QuestPanda",
      description: "Create-to-Earn platform rewarding video creators with on-chain incentives",
      logo: "/logos/questpanda.png",
      website: "https://www.questpanda.xyz/",
      twitter: "https://x.com/questpanda_xyz",
      cohort: 2
    },
    {
      name: "Syarpa",
      description: "Financial bridge between crypto and fiat for seamless cross-border payments",
      logo: "/logos/sapyra.png",
      website: "https://www.syarpa.com/",
      twitter: "https://x.com/getsyarpa?s=21",
      cohort: 2
    },
    {
      name: "Sovseas",
      description: "Decentralized platform for community-supported projects through demographic voting",
      logo: "/logos/sov.png",
      website: "https://sovseas.xyz/",
      twitter: "https://x.com/sovseas",
      cohort: 2
    },
    // Cohort 1

    {
      name: "PeerPesa",
      description: "Connecting Africa through P2P trading using cUSD",
      logo: "/logos/PeerPesa.png",
      website: "https://peerpesa.co/",
      twitter: "https://x.com/peer_pesa",
      cohort: 1
    },
    {
      name: "Pretium",
      description: "Revolutionizing African cross-border payments with cryptocurrency integration",
      logo: "/logos/pretium1.png",
      website: "https://pretium.africa/",
      twitter: "https://x.com/pretiumapp?s=11&t=GcgWBsAbcIe78S7wMmleBg",
      cohort: 1
    },
    {
      name: "Carus Recycling",
      description: "Decentralised recycling platform that rewards in cUSD",
      logo: "/logos/Carus.png",
      website: "https://www.waystrecycling.com/",
      twitter: "https://x.com/recycleonwayst",
      cohort: 1
    },
  ];

  return (
    <div className="bg-Celo-AD-primary">
      <section className="max-w-7xl mx-auto py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
        
        {/* Sponsorship Section */}
        <div className="max-w-4xl mx-auto">
        <div
          className="relative rounded-lg mb-6 sm:mb-8 md:mb-12 lg:mb-16 w-full min-h-[200px] sm:min-h-[300px] md:min-h-[400px]"
          style={{
            backgroundImage: "url(./Sponsor.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black bg-opacity-40 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 text-white rounded-lg h-full flex items-center">
            <div className="max-w-lg">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-GT-Alpina font-thin mb-2 leading-tight">
                Sponsorship
                <br />
                <span className="italic pl-2 sm:pl-4 md:pl-6 lg:pl-8 xl:pl-10">Opportunities</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                Explore our deck and partner with us towards turning visionary
                ideas into impactful realities.
              </p>
              <Button onClick={handleMentor} className="bg-[#E7E3D4] text-[#090808] border p-1 w-fit mt-4 sm:mt-6 md:mt-8 hover:bg-Celo-AD-yellow text-xs sm:text-sm md:text-base transition-all duration-300">
                <span className="px-2 sm:px-3 md:px-4">Become a mentor</span>
                <span className="bg-[#090808] p-1 rounded-full ml-1">
                  <MdChevronRight className="text-white" size={16} />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

        {/* Past Cohorts Section */}
        <div>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-GT-Alpina font-thin text-celo-AD-choclate">
                Past Cohorts
              </h2>
              <p className="text-celo-AD-slate-brown mt-2">
                Meet our incubator alumni building the future
              </p>
            </div>
          </div>

          {/* Alumni Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumni.map((company) => (
              <div
                key={company.name}
                className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-Celo-AD-gray"
              >
                <div className="flex items-start gap-4">
                  {/* Logo */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-Celo-AD-cream flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300">
                    <Image 
                      src={company.logo} 
                      alt={`${company.name} logo`} 
                      width={48} 
                      height={48} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-celo-AD-choclate text-lg">
                        {company.name}
                      </h3>
                      <span className="text-xs px-2 py-0.5 bg-Celo-AD-gray rounded-full text-celo-AD-slate-brown">
                        Cohort {company.cohort}
                      </span>
                    </div>
                    <p className="text-sm text-celo-AD-slate-brown leading-relaxed mb-3">
                      {company.description}
                    </p>
                    
                    {/* Links */}
                    <div className="flex gap-3">
                      {company.website !== "/" && (
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-celo-AD-dark-green hover:text-Celo-AD-slate-green transition-colors flex items-center gap-1"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                          </svg>
                          Website
                        </a>
                      )}
                      {company.twitter !== "/" && (
                        <a
                          href={company.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-celo-AD-dark-green hover:text-Celo-AD-slate-green transition-colors flex items-center gap-1"
                        >
                          <Image src="/Vector.svg" alt="Twitter" width={14} height={14} />
                          Twitter
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          
          </div>   
          <div className="flex justify-center mt-8 flex-col items-center gap-4">
            <p className="text-celo-AD-slate-brown">View all past cohorts of the Celo-Africa DAO Incubator Program</p>
              <Link href="/past-cohorts">
              <Button className="bg-[#FCFF52] text-black px-4 py-2 font-medium rounded-full hover:bg-yellow-500 w-full sm:w-auto text-sm">
Know More
              </Button>
              </Link>
            </div>      
        </div>
      </section>
    </div>
  );
};

export default SponsorPrev;