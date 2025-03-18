


import Image from "next/image";
import React from "react";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { LuSquareStack } from "react-icons/lu";

const IncubatorFocus = () => {
  return (
    <div className="w-full h-full relative bg-white flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-[70px] xl:gap-[142px] pt-6 sm:pt-8 md:pt-10 lg:pt-[45px]">
      <Image
        src="/inc-focus.svg"
        className="absolute z-0 w-full -top-16 sm:-top-20 md:-top-32 lg:-top-48 left-0"
        height={1488}
        width={1742}
        alt="incubator focus bg"
      />

      <div className="flex flex-col z-10 px-4 sm:px-6 md:px-8 lg:pl-16 xl:pl-[300px] gap-6 sm:gap-8 md:gap-10 lg:gap-[60px]">
        <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-GT-Alpina font-light">
          Focus Areas of the Incubator Program
        </h4>
        
        <div className="flex flex-col md:flex-row w-full max-w-full overflow-x-auto pb-4 md:pb-0 md:overflow-x-hidden gap-4 sm:gap-5 md:gap-0">
          {/* First Card */}
          <div className="min-w-[280px] w-full md:w-1/3 lg:w-[430px] p-4 sm:p-5 md:p-6 lg:p-[40px] flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-[52px] border-[0.5px] bg-white">
            <Image 
              src={'/support-for-early.svg'} 
              width={46} 
              height={46} 
              alt="support for early stage icon" 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-[46px] md:h-[46px]" 
            />
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[20px]">
              <p className="font-GT-Alpina italic text-lg sm:text-xl md:text-2xl lg:text-[32px]">
                Support for Early-Stage Founders:
              </p>
              <ul className="list-disc pl-5 text-sm sm:text-base md:text-lg lg:text-[20px] font-body font-normal text-[#655947] break-words">
                <li className="mb-2">
                  Provide resources, mentorship, and guidance to early-stage
                  founders building on Minipay.
                </li>
                <li>
                  Facilitate workshops, training sessions, and hands-on support
                  to help founders develop and scale their projects effectively.
                </li>
              </ul>
            </div>
          </div>

          {/* Second Card */}
          <div className="min-w-[280px] w-full md:w-1/3 lg:w-[430px] p-4 sm:p-5 md:p-6 lg:p-[40px] flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-[52px] border-[0.5px] bg-white">
            <Image 
              src={'/investors-and-accelerator.svg'} 
              width={46} 
              height={46} 
              alt="Investors and Accelerator Programs" 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-[46px] md:h-[46px]" 
            />
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[20px]">
              <p className="font-GT-Alpina italic text-lg sm:text-xl md:text-2xl lg:text-[32px]">
                Investors and Accelerator Programs:
              </p>
              <ul className="list-disc pl-5 text-sm sm:text-base md:text-lg lg:text-[20px] font-body font-normal text-[#655947] break-words">
                <li className="mb-2">
                  Develop a comprehensive discovery platform to connect
                  investors and accelerator programs with promising African
                  projects.
                </li>
                <li>
                  Showcase innovative startups and projects, offering detailed
                  information and insights to attract investment and support.
                </li>
              </ul>
            </div>
          </div>

          {/* Third Card */}
          <div className="min-w-[280px] w-full md:w-1/3 lg:w-[430px] p-4 sm:p-5 md:p-6 lg:p-[40px] flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-[52px] border-[0.5px] bg-white">
            <Image 
              src={'/ecosystem-dev.svg'} 
              width={46} 
              height={46} 
              alt="Ecosystem Development" 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-[46px] md:h-[46px]" 
            />
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[20px]">
              <p className="font-GT-Alpina italic text-lg sm:text-xl md:text-2xl lg:text-[32px]">
                Ecosystem Development:
              </p>
              <ul className="list-disc pl-5 text-sm sm:text-base md:text-lg lg:text-[20px] font-body font-normal text-[#655947] break-words">
                <li className="mb-2">
                  Create a vibrant ecosystem that nurtures innovation and
                  collaboration among founders, investors, and industry experts.
                </li>
                <li>
                  Organize networking events, hackathons, and pitch sessions to
                  facilitate meaningful connections and partnerships.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center z-10 px-3 sm:px-4 md:px-6 lg:px-8">
        <Image 
          alt="Incubator Steps" 
          width={1000} 
          height={1000} 
          src="/incubatorSteps.png"
          className="w-full max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1000px]"
        />
      </div>
    </div>
  );
};

export default IncubatorFocus;