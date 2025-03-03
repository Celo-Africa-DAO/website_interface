import Image from "next/image";
import React from "react";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { LuSquareStack } from "react-icons/lu";

const IncubatorFocus = () => {
  return (
    <div className="w-full h-full relative bg-white flex flex-col md:gap-[142px] gap-[70px] pt-[45px]">
      <Image
        src="/inc-focus.svg"
        className="absolute z-0 w-full -top-32 md:-top-48 left-0 "
        height={1488}
        width={1742}
        alt="incubator focus bg"
      />

      <div className="flex flex-col z-10 pl-[20px] md:pl-[300px] gap-[60px]">
        <h4 className="text-[32px] md:text-[52px] font-GT-Alpina font-light">
          Focus Areas of the Incubator Program
        </h4>
        <div className="flex flex-col md:flex-row w-full md:w-[1340px] h-auto md:h-[511px] gap-[20px] md:gap-[0] overflow-x-hidden">

          <div className="w-full md:w-[430px] p-[20px] md:p-[40px] flex flex-col gap-[32px] md:gap-[52px] border-[0.5px]">
          <Image src={'/support-for-early.svg'} width={46} height={46} alt="support for early stage icon" className="w-[36px] h-[36px] md:w-[46px] md:h-[46px]" />
          <div className="flex flex-col gap-[20px]">
              <p className="font-GT-Alpina italic text-[24px] md:text-[32px]">
                Support for Early-Stage Founders:
              </p>
              <ul className="list-disc text-[16px] md:text-[20px] font-body font-normal text-[#655947] break-words">
                <li>
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

          <div className="w-full md:w-[430px] p-[20px] md:p-[40px] flex flex-col gap-[32px] md:gap-[52px] border-[0.5px]">
            <Image src={'/investors-and-accelerator.svg'} width={46} height={46} alt="Investors and Accelerator Programs" className="w-[36px] h-[36px] md:w-[46px] md:h-[46px]" />
            <div className="flex flex-col gap-[20px]">
              <p className="font-GT-Alpina italic text-[24px] md:text-[32px]">
                Investors and Accelerator Programs:
              </p>
              <ul className="list-disc text-[16px] md:text-[20px] font-body font-normal text-[#655947] break-words">
                <li>
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

          <div className="w-full md:w-[430px] p-[20px] md:p-[40px] flex flex-col gap-[32px] md:gap-[52px] border-[0.5px]">
          <Image src={'/ecosystem-dev.svg'} width={46} height={46} alt="Ecosystem Development" className="w-[36px] h-[36px] md:w-[46px] md:h-[46px]" />
          <div className="flex flex-col gap-[20px]">
              <p className="font-GT-Alpina italic text-[24px] md:text-[32px]">
                Ecosystem Development:
              </p>
              <ul className="list-disc text-[16px] md:text-[20px] font-body font-normal text-[#655947] break-words">
                <li>
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

      <div className="w-full flex items-center justify-center z-10 px-3 ">
        <Image alt="" width={1000} height={1000} src="/incubatorSteps.png" />
      </div>
    </div>
  );
};

export default IncubatorFocus;
