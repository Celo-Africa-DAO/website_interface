// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { ChevronLeft, ChevronRight } from "lucide-react"

// interface PhotoMoment {
//   id: number
//   title: string
//   description: string
//   image: string
// }

// export default function PhotoMoment() {
//   const photoMoments: PhotoMoment[] = [
//     {
//       id: 1,
//       title: "Speaking at Celo Uganda campus Connect",
//       description: "We are thrilled to present a series of groundbreaking",
//       image: "/Ali.png",
//     },
//     {
//       id: 2,
//       title: "Speaking at Kenya celo Connect",
//       description: "We are thrilled to present a series of groundbreaking",
//       image: "/img/Abolaji.png",
//     },
//     {
//       id: 3,
//       title: "Nigeria Thrilled",
//       description: "Be yourself and a go on",
//       image: "/img/Charles.png",
//     },
//   ]

//   const [currentIndex, setCurrentIndex] = useState(0)

//   const goToPrevious = () => {
//     const isFirstSlide = currentIndex === 0
//     const newIndex = isFirstSlide ? photoMoments.length - 1 : currentIndex - 1
//     setCurrentIndex(newIndex)
//   }

//   const goToNext = () => {
//     const isLastSlide = currentIndex === photoMoments.length - 1
//     const newIndex = isLastSlide ? 0 : currentIndex + 1
//     setCurrentIndex(newIndex)
//   }

//   return (
//     <div className="w-full py-16  ">
//       <section className="">
//         <div className="  relative overflow-hidden">
//           <div className="relative right-[-200px]  bg-[#EBEBEB] w-[1407px] px-14 py-[90px]">
//             <div className="grid grid-cols-2 gap-x-16">
//               {/* Left Column */}
//               <div className="space-y-8">
//                 <div>
//                   <h2 className="text-4xl italic font-gt-alpina font-light text-[#6d604c] mb-4">Photo Moments</h2>
//                   <p className="text-gray-600 max-w-lg italic font-gt-alpina font-light">
//                     We are thrilled to present a series of groundbreaking projects that have recently graduated from our
//                     esteemed crypto incubator program.
//                   </p>
//                 </div>

//                 <div className="bg-[#6b6048] text-white p-6 rounded">
//                   <h3 className="text-xl font-medium mb-2">{photoMoments[currentIndex].title}</h3>
//                   <p className="text-sm">{photoMoments[currentIndex].description}</p>
//                 </div>

//                 <div className="flex space-x-4">
//                   <button
//                     onClick={goToPrevious}
//                     className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
//                     aria-label="Previous photo"
//                   >
//                     <ChevronLeft className="w-5 h-5" />
//                   </button>
//                   <button
//                     onClick={goToNext}
//                     className="w-12 h-12 rounded-full bg-[#b29e7d] text-white flex items-center justify-center hover:bg-[#9a876a] transition-colors"
//                     aria-label="Next photo"
//                   >
//                     <ChevronRight className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>

//               {/* Right Column */}
//               <div className="relative  border-2 border-gray-200 p-2 ">
//                 <div className="relative  ">
//                   <Image
//                     src={photoMoments[currentIndex].image || "/placeholder.svg"}
//                     alt={photoMoments[currentIndex].title}
//                     height={521.34}
//                     width={403.44}
//                     priority
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }



"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PhotoMoment {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function PhotoMoment() {
  const photoMoments: PhotoMoment[] = [
    {
      id: 1,
      title: "Speaking at Celo Uganda Campus Connect",
      description: "We are thrilled to present a series of groundbreaking projects.",
      image: "/Ali.png",
    },
    {
      id: 2,
      title: "Speaking at Kenya Celo Connect",
      description: "We are thrilled to present a series of groundbreaking projects.",
      image: "/img/Abolaji.png",
    },
    {
      id: 3,
      title: "Nigeria Thrilled",
      description: "Be yourself and go on.",
      image: "/img/Charles.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? photoMoments.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === photoMoments.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full py-16 px-4">
      <section className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-[#EBEBEB] rounded-lg p-8 md:p-14">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Column */}
            <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
              <div>
                <h2 className="text-3xl sm:text-4xl italic font-gt-alpina font-light text-[#6d604c] mb-4">
                  Photo Moments
                </h2>
                <p className="text-gray-600 max-w-lg italic font-gt-alpina font-light mx-auto md:mx-0">
                  We are thrilled to present a series of groundbreaking projects that have recently graduated from our
                  esteemed crypto incubator program.
                </p>
              </div>

              <div className="bg-[#6b6048] text-white p-6 rounded">
                <h3 className="text-lg sm:text-xl font-medium mb-2">{photoMoments[currentIndex].title}</h3>
                <p className="text-sm">{photoMoments[currentIndex].description}</p>
              </div>

              <div className="flex justify-center md:justify-start space-x-4">
                <button
                  onClick={goToPrevious}
                  className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="w-12 h-12 rounded-full bg-[#b29e7d] text-white flex items-center justify-center hover:bg-[#9a876a] transition-colors"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative border-2 border-gray-200 p-2 w-full max-w-[400px]">
                <Image
                  src={photoMoments[currentIndex].image || "/placeholder.svg"}
                  alt={photoMoments[currentIndex].title}
                  width={403}
                  height={521}
                  priority
                  className="object-cover w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
