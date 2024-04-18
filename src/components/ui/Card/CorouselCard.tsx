import React, { useState } from "react";
import Image from "next/image";
import { IoMdArrowForward, IoMdArrowBack, IoIosArrowRoundForward } from "react-icons/io";
import { Events } from "../Cad/Corousel";
import imaged from "../../../../public/celo.jpg";
import { IoChevronForwardCircle } from "react-icons/io5";

interface EventCardProps {
  events: Events[];
}

const CorouselCard: React.FC<EventCardProps> = ({ events }) => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const handleNextEvent = () => {
    setCurrentEventIndex((prevIndex) =>
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousEvent = () => {
    setCurrentEventIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full h-full flex flex-col justify-between items-start pt-20 ">
      <div className="flex flex-col items-center text-4xl italic font-gt-alpina font-light pl-2 md:pl-0">
        <span className="text-2xl md:text-4xl">Together let's Build and prosper </span>
        <span className="text-2xl md:text-4xl">with Celo Africa DAO </span>
      </div>
      <div className="w-full  flex flex-wrap justify-center mt-4 rflow-scroll">
        {events.map((event, index) => (
          <div
            key={index}
            className={`w-full md:w-1/4 p-4 border border-black ${
              index === currentEventIndex ? "block" : "hidden md:block"
            }`}
            style={{ height: "200px" }} // Inline style for height only
          >
            <div className="h-full flex flex-col justify-between items-start gap-2">
              <span className="text-lg font-gt-alpina font-light text-black">{event.name}</span>
              <span className="text-sm">{event.location}</span>
              <div className="flex w-full justify-between items-center">
              <span className="text-sm font-body">{event.date}</span>
               
                <Image src={'img/black-arrow-icon.svg'} width={21} height={21} alt='black arrow icon' />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-end items-center pb-10 pt-5 self-end mr-4">
        <div className="flex justify-center items-center gap-2 font-bold">
          <Image onClick={handlePreviousEvent} src={'img/scrollback.svg'} width={66} height={66} alt='black arrow icon' />
          <Image onClick={handleNextEvent} src={'img/scroll.svg'} width={66} height={66} alt='black arrow icon' />
        </div>
      </div>
    </div>
  );
};

export default CorouselCard;