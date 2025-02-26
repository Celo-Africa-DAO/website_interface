// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const Thanks: React.FC = () => {
//   return (
//     <div className="bg-[#DBD9C6] flex  items-center justify-center">
//       <div className=" relative right-[-100px] row-span-2 row-end-3 col-start-2 col-end-4 px-8 py-16 flex flex-col justify-center">
//         <h1 className="text-7xl md:text-5xl italic font-gt-alpina font-medium mb-1">
//           Thank you
//           <br />
//           <span className="italic font-gt-alpina">Aliu Musa</span>
//         </h1>

//         <p className="text-sm mb-12 font-[inter]">
//           A decentralized autonomous organization <br /> dedicated
//         </p>

//         <div className="flex gap-8">
//           <button className="rounded-[100px] bg-Celo-AD-yellow hover:bg-Celo-AD-yellow/75 text-[#090808] hover:bg-Celo-AD-yellow sm:px-10 py-4">
//             Mint Goodwill NFT
//             {/*  */}
//           </button>

//           <button className="text-sm flex items-center">
//             Explore achievement
//             <span className="ml-2 rounded-full border border-black w-5 h-5 flex items-center justify-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="12"
//                 height="12"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <polyline points="9 18 15 12 9 6"></polyline>
//               </svg>
//             </span>
//           </button>
//         </div>
//       </div>

//       <div className="relative w-[600px] h-[700px] right-[-178px] bottom-[-239px] bg-[#e9e5d6]  z-20  ">
//         <Image
//           src="/Aliu-DAO.png" // Make sure this image exists in your public folder
//           alt="Aliu Musa wearing a 'Prosperity for everyone' t-shirt"
//           priority
//           fill
//           // sizes="(max-width: 768px) 100vw, 50vw"
//         />
//       </div>
//     </div>
//   );
// };

// export default Thanks;


 

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Thanks: React.FC = () => {
  return (
    <div className="bg-[#DBD9C6] flex flex-col md:flex-row items-center justify-center">
      <div className=" relative right-[-100px] px-8 py-16 flex flex-col justify-center">
        <h1 className="text-7xl md:text-5xl italic font-gt-alpina font-medium mb-1">
          Thank you
          <br />
          <span className="italic font-gt-alpina">Aliu Musa</span>
        </h1>

        <p className="text-sm mb-12 font-[inter]">
          A decentralized autonomous organization <br /> dedicated
        </p>

        <div className="flex gap-8">
          <button className="rounded-[100px] bg-Celo-AD-yellow hover:bg-Celo-AD-yellow/75 text-[#090808] hover:bg-Celo-AD-yellow sm:px-10 py-4">
            Mint Goodwill NFT
            {/*  */}
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

      <div className="md:relative w-[600px] h-[700px] md:right-[-178px] md:bottom-[-239px] bg-[#e9e5d6]  z-20  ">
        <Image
          src="/Aliu-DAO.png" // Make sure this image exists in your public folder
          alt="Aliu Musa wearing a 'Prosperity for everyone' t-shirt"
          priority
          // fill
          // style={{"position": "static"}}
          width={777}
          height={866.12}
          className="object-fill h-full"
          
          // sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
};

export default Thanks;
