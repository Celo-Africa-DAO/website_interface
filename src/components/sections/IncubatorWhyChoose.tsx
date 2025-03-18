import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const IncubatorWhyChoose = () => {
  return (
    <div className="w-full h-full relative bg-[#E7E3D4] flex flex-col gap-[50px] md:gap-[130px] pt-[120px]">
      <Image
        src="/inc-whychoose.svg"
        className="absolute z-0 w-full -top-32 md:-top-48 left-0"
        height={1488}
        width={1742}
        alt="incubator why choose bg"
      />
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between px-6 md:px-[100px] lg:px-[200px] gap-10">
        <div className="flex-1">
          <h4 className="text-[32px] md:text-[52px] font-GT-Alpina font-light">
            Why Choose <span className="italic font-GT-Alpina">Our Incubator</span>
          </h4>

          <p className="font-Inter text-[15px] md:text-[20px] max-w-xl text-gray-800 mt-4">
            Our program is designed to nurture innovation and drive growth for startups across Africa.
            We are sector-agnostic, welcoming projects from DeFi to AI agents, with a particular
            interest in applications utilizing local stablecoins such as cGHS, cKES, and cUSD.
            By participating, you'll join a vibrant community committed to revolutionizing the technological
            landscape of Africa.
          </p>

          <p className="text-[20px] md:text-[24px] font-semibold mt-8">
            Application Period:
            <span className="text-gray-800 font-normal"> March 15th - March 31st</span>
          </p>
          <p className="text-[20px] md:text-[24px] font-semibold">
            Program Commencement:
            <span className="text-gray-800 font-normal"> 16th April 2025</span>
          </p>
          <div className="mt-12">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdRgbeFNKulww_-8w-LsK7-3lAR72NUVCinvyr2MUHW9MfsIg/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#FCFF52] border-[#65594780] border-[1.5px] text-black px-10 py-3 font-semibold rounded-full hover:bg-yellow-500">
                Register Now
              </Button>
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end ">
          <Image
            alt="incubator why choose logo"
            width={400}
            height={400}
            src="/incubatorWhyChoose.png"
            className="max-w-full md:max-w-[400px] lg:max-w-[500px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default IncubatorWhyChoose;
