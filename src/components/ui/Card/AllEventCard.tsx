import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  IoMdArrowForward,
  IoMdArrowBack,
  IoIosArrowRoundForward,
} from "react-icons/io";
import { Event } from "../Cad/AllUpcomingEvents";
import imaged from "../../../../public/celo.jpg";
import { IoChevronForwardCircle } from "react-icons/io5";

interface AllEventCardProps {
  event: Event;
  events: Event[];
}

const AllEventCard: React.FC<AllEventCardProps> = ({ event: currentEvent }) => {
  return (
    <div className="flex flex-col  justify-between  h-full p-6 text-black">
      {/* {events.map((currentEvent) => ( */}
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center">
        <div className="flex flex-col items-center mt-2 md:mt-0">
          <span className="text-2xl font-gt-alpina font-light text-black">
            {currentEvent.name}
          </span>
          <span className="font-bold self-start hidden md:block lg:block">
            {currentEvent.location}
          </span>
          <span className="self-start hidden md:block">
            {currentEvent.date}
          </span>
          <span className="self-start hidden md:block">
            <div className="flex mt-5 cursor-pointer  text-sm justify-center items-center gap-2 font-bold">
              More info
              <Image
                src={"img/black-arrow-icon.svg"}
                width={21}
                height={21}
                alt="black arrow icon"
              />
            </div>{" "}
          </span>
        </div>

        <Image
          src={currentEvent.imageUrl}
          className="w-full lg:w-1/4 max-md:mt-5"
          width={500}
          height={500}
          alt=""
        />
      </div>
      {/* ))} */}
    </div>
  );
};

export default AllEventCard;
