import React, { useState } from "react";
import ExploreCard from "../Card/ExploreCard";
import Section from "@/components/layouts/Section";

export interface Explore {
    name: string;
    location: string;
    date: string;
    imageUrl: string;
  }

interface ExploreProps {
  events: Event[];
}
const Explore = () => {
    const [isViewBtnHover, setIsViewBtnHover] = useState(false)
    const handleViewBtn = () => {
        setIsViewBtnHover(true)
    }
    const handleViewBtnDefault = () => {
        setIsViewBtnHover(false)
    }
    return (
        <div id='event' className='bg-[#DEE2D8] lg:p-20 px-[12px] '>
            <h1 className='md:mb-[60px] mb-[45px] pl-[12px] pr-[92px] font-extralight md:pl-48 pt-16 font-gt-alpina italic text-[36px] md:text-[36px] leading-[45px] md:leading-[80px]'>Explore our recent Event</h1>
            <hr className='border-solid border border-gray-900 mb-7' />
            {events.map((event, index) => (
                <div key={index} className='border-t-1 p-14 border-b-2 border-gray-500 pl-[12px] pr-[12px] flex flex-col md:flex-row justify-around md:p-[60px, 0px, 60px, 0px] '>
                    <div>
                        {/* {event.img} */}
                        <Image src={'img/explore.svg'} className='w-full' width={400} height={200} alt='Celo campus connect' />
                    </div>
                    <div>
                        <h2 className='font-gt-alpina text-[24px] mb-[16px] leading-[24px] max-md:mt-7 font-extralight md:text-[32px] text-[#000000]'>{event.title}</h2>
                        <p className='text-[20px] mb-[5px] hidden md:block'>{event.location}</p>
                        <h3 className='text-[16px] hidden md:block'>{event.date}</h3>
                    </div>
                    <span className='text-[50px] mt-[20px] h-10 w-10 hidden md:block'>{event.icon}</span>
                </div>
            ))}
            <div className='flex items-center justify-center'>

export default function Explore() {
    const events = [
        {
          name: "Celo Campus Connect",
          location: "Kenya",
          date: "Sat, March 26th, 2024",
          imageUrl: "/img/celokenya.svg",
        },
        {
            name: "Celo codeJam",
            location: "Uganda",
            date: "Sat, March 26th, 2024",
            imageUrl: "/img/celokenya.svg",
        },
        {
            name: "University OutReach",
            location: "Kenya",
            date: "Sat, March 1st, 2024",
            imageUrl: "/img/celokenya.svg",
        },
        {
            name: "Celo Campus Connect",
            location: "Kenya",
            date: "Sat, March 30th, 2024",
            imageUrl: "/img/celokenya.svg",
        },
       
      ];
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

  const currentEvent = events[currentEventIndex];

  return (
    <Section className="bg-[#DEE2D8]">
        <ExploreCard
      explore={currentEvent}
      onNext={handleNextEvent}
      
    />
    </Section>
    
  );
}
