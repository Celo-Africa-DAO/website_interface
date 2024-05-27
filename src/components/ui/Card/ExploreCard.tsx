import React from "react";
import Image from "next/image";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import { Explore } from "../Cad/";
import imaged from "../../../../public/celo.jpg";
import { IoChevronForwardCircle } from "react-icons/io5";
import Link from "next/link";

interface ExploreCardProps {
  explore: Explore;
  onNext: () => void;
}


const ExploreCard: React.FC<ExploreCardProps> = ({ explore, onNext }) => (
  <div className="lg:p-20 px-[12px]">
    <h1 className="md:mb-[60px] mb-[45px] font-extralight pt-16 font-gt-alpina italic text-[36px] md:text-[36px] leading-[45px] md:leading-[80px]">Explore our recent Event</h1>
    <div className="w-full h-1/4 flex md:flex-row flex-col justify-between items-center border-t-2 p-14 border-b-2 border-gray-500 mt-4">
      <Image
        src={explore.imageUrl}
        className="w-full lg:w-1/4 md:w-60 sm:w-60"
        width={500}
        height={500}
        alt="Celo Campus Connect"
      />
      <div className="flex flex-col ">
        <span className="text-2xl font-gt-alpina font-light text-black max-md:mt-7 mb-[16px] leading-[24px]">
          {explore.name}
        </span>

        <p className="font-bold self-start mb-[5px] hidden md:block text-[20px]">{explore.location}</p>
        <h3 className="self-start hidden md:block ">{explore.date}</h3>
      </div>
      <span className="flex md:justify-normal self-end md:self-auto">
        <IoMdArrowForward
          className="h-10 w-10 hidden md:block"
          color="#000000"
          onClick={onNext}
        />
      </span>
    </div>
    <div className="w-full h-1/4 flex md:flex-row flex-col justify-between md:p-[60px, 0px, 60px, 0px] items-center p-14 border-b-2 border-gray-500 mt-4">
      <Image
        src={explore.imageUrl}
        className="w-full lg:w-1/4 md:w-60 sm:w-60"
        width={500}
        height={500}
        alt="Celo campus connect"
      />
      <div className="flex flex-col ">
        <span className="text-2xl font-gt-alpina font-light text-black max-md:mt-7 mb-[16px] leading-[24px]">
          {explore.name}
        </span>

        <p className="font-bold self-start mb-[5px] hidden md:block text-[20px]">{explore.location}</p>
        <h3 className="self-start hidden md:block ">{explore.date}</h3>
      </div>
      <span className="flex md:justify-normal self-end md:self-auto">
        <IoMdArrowForward
          className="h-10 w-10 hidden md:block"
          color="#000000"
          onClick={onNext}
        />
      </span>
    </div>
    <div className="w-full flex justify-center items-center pb-10 pt-5">
      <Link href={'/all-events'} className="flex justify-center items-center gap-2 font-bold">
        View all events <IoChevronForwardCircle />
      </Link>
      </div>
  </div>
);

export default ExploreCard;
