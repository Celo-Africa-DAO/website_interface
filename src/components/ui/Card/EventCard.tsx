import React from "react";
import Image from "next/image";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import { Event } from "../Cad/UpCommingEvent";
import imaged from "../../../../public/celo.jpg"
import { IoChevronForwardCircle } from "react-icons/io5";

interface EventCardProps {
  event: Event;
  onNext: () => void;

}

const EventCard: React.FC<EventCardProps> = ({ event, onNext }) => (
  <div className="w-full h-full flex flex-col justify-between items-start pt-20 pb-10">
    <div className="flex flex-col items-center text-4xl ">
      <h1 className=" italic   font-gt-alpina  font-light ">Upcoming Events</h1>
    </div>
    <div className="w-full h-1/4 flex md:flex-row flex-col   justify-between items-center border-t-2 p-14 border-b-2 border-gray-500 mt-4">
      <Image
        src={event.imageUrl}
        className="w-full lg:w-1/4"
        width={500}
        height={500}
        alt=""

      />
      <div className="flex flex-col items-center">
        <span className="text-2xl font-gt-alpina font-light text-black">
          {event.name}
        </span>
        <span className="font-bold self-start">{event.location}</span>
        <span className="self-start ">{event.date}</span>
      </div>
      <span className="flex  md:justify-normal self-end   md:self-auto">
        <IoMdArrowForward
          className="h-10 w-10"
          color="#000000"
          onClick={onNext}
        />
       
      </span>
    </div>
    <div className="w-full flex justify-center items-center pb-10 pt-5">
      <div className="flex justify-center items-center gap-2 font-bold">
        More events <IoChevronForwardCircle />
      </div>
    </div>
  </div>
);

export default EventCard;