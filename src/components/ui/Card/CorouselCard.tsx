import React from "react";
import Image from "next/image";

export interface Events {
  name: string;
  location: string;
  date: string;
}

interface CarouselCardProps {
  event: Events;
 
}

const CarouselCard: React.FC<CarouselCardProps> = ({ event }) => {
  return (
    <div className="border flex flex-col justify-evenly border-black  shadow-md p-6" style={{ width: "400px", height: "300px" }}>
      <h2 className="text-2xl font-bold mb-4">{event.name}</h2>
      <p className="text-gray-600 ">{event.location}</p>
      <div className="flex w-full justify-between items-center text-sm"><p className="text-gray-600 ">{event.date}</p>
      <Image src={'img/black-arrow-icon.svg'} width={21} height={21} alt='black arrow icon' /></div>
      
    </div>
  );
};

export default CarouselCard;
