import React from "react";
import Image from "next/image";
import { IoLogoYoutube } from "react-icons/io";
import { PastEvent } from "../Cad/PastEvent";
import { IoChevronForwardCircle } from "react-icons/io5";
import Link from "next/link";

interface PastEventCardProps {
  pastevent: PastEvent;
  onNext: () => void;
}

const PastEventCard: React.FC<PastEventCardProps> = ({ pastevent, onNext }) => (
  <div className="px-10 md:px-6">
    <h1 className="text-black font-extralight pt-16 font-gt-alpina italic text-[36px] md:text-[36px] leading-[45px] md:leading-[80px]">
      Past Event Video
    </h1>
    <div className="w-full h-1/4 flex md:flex-row flex-col justify-between items-center border-t-2 p-14 border-b-2 border-gray-500 mt-4">
      <div className="flex flex-col ">
        <span className="text-2xl font-gt-alpina font-light text-black max-md:mt-7 mb-[16px] leading-[24px]">
          {pastevent.name}
        </span>
        <p className="font-bold self-start mb-[5px] text-black hidden md:block text-[16px]">
          {pastevent.location}
        </p>
        <h3 className="self-start hidden md:block text-black">
          {pastevent.date}
        </h3>
      </div>
      <span className="flex md:justify-normal self-end md:self-auto h-[120px] lg:w-[300px] w-[250px] bg-[#e9ecef]">
        <IoLogoYoutube
          className="w-[50px] h-[50px] my-10 ml-32"
          color="red"
          onClick={onNext}
        />
      </span>
    </div>
    <div className="w-full h-1/4 flex md:flex-row flex-col justify-between md:p-[60px, 0px, 60px, 0px] items-center p-14 border-b-2 border-gray-500 mt-4">
      <div className="flex flex-col ">
        <span className="text-2xl font-gt-alpina font-light text-black max-md:mt-7 mb-[20px] leading-[24px]">
          {pastevent.name}
        </span>
        <p className="font-bold self-start mb-[5px] hidden md:block text-[16px] text-black">
          {pastevent.location}
        </p>
        <h3 className="self-start hidden md:block text-black">
          {pastevent.date}
        </h3>
      </div>
      <span className="flex md:justify-normal self-end md:self-auto h-[120px] lg:w-[300px] w-[250px] bg-[#e9ecef]">
        <IoLogoYoutube
          className="w-[50px] h-[50px] my-10 ml-32"
          color="red"
          onClick={onNext}
        />
      </span>
    </div>
    <div className="w-full flex justify-center items-center pb-10 pt-5">
      <div className="flex justify-center items-center gap-2 font-bold text-black mt-5">
        More videos<IoChevronForwardCircle />
      </div>
    </div>
  </div>
);

export default PastEventCard;
