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
    <div className="flex flex-col justify-between h-full pt-6 text-black">
      <div className="mb-4 pr-1">
        <h2 className="text-2xl font-bold mb-4">{event.name}</h2>
        <p className="text-gray-600">{event.location}</p>
      </div>
      <div className="flex items-center justify-between text-sm pr-1">
        <p className="text-gray-600">{event.date}</p>
        <Image src={'img/black-arrow-icon.svg'} width={21} height={21} alt='black arrow icon' />
      </div>
    </div>
  );
};

export default CarouselCard;


// https://forum.celo.org/t/celo-africa-h1-2024-regional-dao/7382
