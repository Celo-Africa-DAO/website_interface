import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const IncubatorWhyChoose = () => {
  return (
    <div className="w-full h-full relative bg-[#E7E3D4] flex flex-col gap-[40px] md:gap-[100px] pt-[90px]">
      {/* Background Bleed-In Effect */}
      <Image
        src="/inc-whychoose.svg"
        className="absolute z-0 w-full -top-20 sm:-top-28 md:-top-36 lg:-top-44 left-0"
        height={1488}
        width={1742}
        alt="incubator why choose bg"
      />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between px-6 md:px-[80px] lg:px-[160px] gap-8">
        <div className="flex-1">
          <div className="text-[20px] md:text-[32px] font-GT-Alpina">
          <h4 className=" font-light">
            Why Choose
          </h4>
          <span className="ml-20 italic ">Our Incubator</span>
          </div>
          

          <p className="font-Inter text-[12px] md:text-[16px] max-w-xl text-gray-800 mt-3">
            Our program is designed to nurture innovation and drive growth for startups across Africa.
            We are sector-agnostic, welcoming projects from DeFi to AI agents, with a particular
            interest in applications utilizing local stablecoins such as cGHS, cKES, and cUSD.
            By participating, you&apos;ll join a vibrant community committed to revolutionizing the technological
            landscape of Africa.
          </p>

          <p className="text-[14px] md:text-[18px] font-semibold mt-6">
            Application Period:
            <span className="text-gray-800 font-normal"> March 15th - March 31st</span>
          </p>
          <p className="text-[14px] md:text-[18px] font-semibold">
            Program Commencement:
            <span className="text-gray-800 font-normal"> 16th April 2025</span>
          </p>

          <div className="mt-10">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdRgbeFNKulww_-8w-LsK7-3lAR72NUVCinvyr2MUHW9MfsIg/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#FCFF52] border-[#65594780] border-[1.5px] text-black px-8 py-2 font-medium rounded-full hover:bg-yellow-500 text-xs">
                Register Now
              </Button>
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            alt="incubator why choose logo"
            width={350}
            height={350}
            src="/incubatorWhyChoose.png"
            className="max-w-full md:max-w-[350px] lg:max-w-[450px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default IncubatorWhyChoose;
