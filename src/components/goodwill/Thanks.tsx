// import Image from "next/image";

// import React from 'react'

// const Thanks = () => {
//   return (
//     <div className=' bg-[#E7E3D4] text-[#0C0C0C] pt-10 md:pt-20'>
//         <section className="bg-beige-100 py-8 grid grid-cols-1 md:grid-cols-2">
//         <div className="px-8 md:px-16 flex flex-col justify-center">
//           <h1 className="text-3xl font-light mb-1">
//             Thank you
//             <br />
//             <span className="italic font-medium">Aliu Musa</span>
//           </h1>
//           <p className="text-sm mb-6">A decentralized autonomous organization dedicated</p>
          
//           <div className="flex space-x-4">
//             <button className="bg-yellow-300 text-sm py-2 px-6 rounded-full flex items-center">
//               Next product NFT
//               <span className="ml-2 bg-white rounded-full p-1">→</span>
//             </button>
//             <button className="text-sm underline">Explore announcement</button>
//           </div>
//         </div>
//         <div className="p-4 md:p-0">
//           <Image 
//             src="/aliu-musa.jpg" 
//             alt="Aliu Musa wearing a 'Prosperity for everyone' t-shirt" 
//             width={400} 
//             height={450}
//             className="w-full h-auto"
//           />
//         </div>
//       </section>
//     </div>
    
//   )
// }

// export default Thanks

// components/HeroSection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Thanks: React.FC = () => {
  return (
    <div className="relative">
      {/* Top navbar */}
      <div className="bg-[#E7E3D4] py-3 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold">DƐLƆ</span>
          <span className="text-sm ml-1">AfricaDAO</span>
        </div>
        <button className="text-sm flex items-center">
          Menu
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="ml-2"
          >
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
        </button>
      </div>

      <div className="grid bg-[#e9e5d6] grid-cols-1 grid-rows-3 md:grid-cols-5">
        {/* Left column: Text and buttons */}
        <div className=" row-span-2 row-end-3 col-start-2 col-end-4 px-8 py-16 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-serif font-light mb-1">
            Thank you
            <br />
            <span className="italic">Aliu Musa</span>
          </h1>
          
          <p className="text-sm mb-12">
            A decentralized autonomous organization dedicated
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-yellow-300 text-sm py-2 px-6 rounded-full flex items-center">
              Mint Goodwill NFT
              <span className="ml-2 bg-white rounded-full p-1 flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </button>
            
            <button className="text-sm flex items-center">
              Explore achievement
              <span className="ml-2 rounded-full border border-black w-5 h-5 flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </span>
            </button>
          </div>
        </div>
        
        {/* Right column: Image */}
        <div className="bg-[#e9e5d6] relative z-20 mt-32 row-start-1 row-end-4 col-start-4 col-end-6 min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
          <Image
            src="/Aliu-DAO.png" // Make sure this image exists in your public folder
            alt="Aliu Musa wearing a 'Prosperity for everyone' t-shirt"
            fill
            priority
            className="object-cover "
            // sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      
      {/* Purple bottom section */}
      {/* <div className="bg-[#1a0b2e] h-16"></div> */}
    </div>
  );
};

export default Thanks;