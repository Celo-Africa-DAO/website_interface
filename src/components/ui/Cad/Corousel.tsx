import React, { useState } from "react";
import CarouselCard from "../Card/CorouselCard";
import Image from "next/image";

export interface Events {
  name: string;
  location: string;
  date: string;
}

interface CarouselProps {
  events: Events[];
}

export default function Carousel() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const events = [
    {
      name: "About",
      location: "The celo Africa DAO is a community of builders and enthusiats uniting to propel the adoption of Celo and blockchain technology across the Africa continent ",
      date: "learn about who we are and our innovative movement",
      
    },
    {
        name: "Focus Areas",
        location: "The Celo Africa DAO prioritizes three main areas of focus: establishing an incubator program, attracting developer talent, and enhancing brand visibility throughout the continent",
        date: "learn about who we are and our innovative movement",
        
       
      },
      {
        name: "Codejam",
        location: "Once a month, we organize developer meet-ups to cultivate a skilled pipeline for building on Celo. During these sessions, we engage in hands-on development to create practical on-chain use cases. ",
        date: "learn about who we are and our innovative movement",
        
       
      },
     
      
      
      {
          name: "University Outreach",
          location: "The celo Africa DAO is a community of builders and enthusiats uniting to propel the adoption of Celo and blockchain technology across the Africa continent ",
          date: "learn about who we are and our innovative movement",
      
         
        },
    // Add more event objects as needed
  ];

  const handleNextEvent = () => {
    setCurrentEventIndex((prevIndex) =>
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevEvent = () => {
    
    setCurrentEventIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  // Function to get the next three events based on the current index
  const getNextThreeEvents = () => {
    const startIndex = currentEventIndex;
    const endIndex = (currentEventIndex + 3) % events.length;
    return [events[startIndex], events[(startIndex + 1) % events.length], events[endIndex]];
  };

  return (
    <div id="about" className="bg-Celo-AD-primary pt-20">
     <div className="flex flex-col justify-start items-start text-4xl italic font-gt-alpina font-light pl-10 md:pl-36 pb-10">
        <span className="text-2xl md:text-4xl">Together let's Build and prosper </span>
        <span className="text-2xl pl-10 md:text-4xl">with Celo Africa DAO </span>
      </div>
      <div className=" h-full w-full flex justify-center items-center">
        
        

        {getNextThreeEvents().map((event, index) => (
          <div className="hidden md:block">
           
             <CarouselCard key={index} event={event}     />
          </div>
                   
        ))}
         <div className="block md:hidden"><CarouselCard  event={events[currentEventIndex]} /></div>
      
      
      

        
      
        
      </div>  
      <div className="flex justify-end pr-40 items-center  pt-10 font-bold">
          <Image onClick={handlePrevEvent} src={'img/scrollback.svg'} width={66} height={66} alt='black arrow icon' />
          <Image onClick={handleNextEvent} src={'img/scroll.svg'} width={66} height={66} alt='black arrow icon' />
        </div>  
        <div className="flex  items-end">
        <div className="h-28 w-20  bg-Celo-AD-gray mr-8">

        </div>
        <div className="h-10 w-full  bg-Celo-AD-gray">
       </div>
       <div className="h-28 w-14    bg-Celo-AD-gray  mr-16">

</div>

      </div> 
    
    </div>
  );
}
