// import React, { useRef, useEffect } from "react";
// import Image from "next/image";
// import { IoMdArrowForward, IoMdArrowBack, IoIosArrowRoundForward } from "react-icons/io";
// import { Event } from "../Cad/UpComingEvent";
// import imaged from "../../../../public/celo.jpg"
// import { IoChevronForwardCircle } from "react-icons/io5";

// interface EventCardProps {
//   event: Event;
  
// }

// const EventCard: React.FC<EventCardProps> = ({ event }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
  

//   useEffect(() => {
//     const handleScroll = () => {
//       const container = containerRef.current;
//       if (container) {
//         const { scrollTop, scrollHeight, clientHeight } = container;
//         if (scrollHeight - scrollTop === clientHeight) {
//           //onNext(); // Trigger onNext when scrolled to the bottom
//         }
//       }
//     };

//     const container = containerRef.current;
//     if (container) {
//       container.addEventListener("scroll", handleScroll);
//     }

//     return () => {
//       if (container) {
//         container.removeEventListener("scroll", handleScroll);
//       }
//     };
//   }, []);

//   return (
   
      
//     <div className="flex  flex-col md:flex-row lg:flex-row  justify-between h-full p-6">
//         <Image
//           src={event.imageUrl}
//           className="w-full lg:w-1/4"
//           width={500}
//           height={500}
//           alt=""
//         />
//         <div className="flex flex-col items-center mt-2 md:mt-0">
//           <span className="text-2xl font-gt-alpina font-light text-black">
//             {event.name}
//           </span>
//           <span className="font-bold self-start hidden md:block lg:block">{event.location}</span>
//           <span className="self-start hidden md:block">{event.date}</span>
//         </div>
        
//       </div>
     
    
//   );
// };

// export default EventCard;

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { IoMdArrowForward, IoMdArrowBack, IoIosArrowRoundForward } from "react-icons/io";
import { Event } from "../Cad/UpComingEvent";
import imaged from "../../../../public/celo.jpg"
import { IoChevronForwardCircle } from "react-icons/io5";

interface EventCardProps {
  events: Event[];
}

const EventCard: React.FC<EventCardProps> = ({ events }) => {
  const containerRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        const { scrollTop, scrollHeight, clientHeight } = container;
        if (scrollHeight - scrollTop === clientHeight) {
          handleNextEvent(); // Trigger handleNextEvent when scrolled to the bottom
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const currentEvent = events[currentEventIndex];

  return (
    <div className="flex flex-col  justify-between  h-full p-6" ref={containerRef}>
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center">
        <Image
          src={currentEvent.imageUrl}
          className="w-full lg:w-1/4"
          width={500}
          height={500}
          alt=""
        />
        <div className="flex flex-col items-center mt-2 md:mt-0">
          <span className="text-2xl font-gt-alpina font-light text-black">
            {currentEvent.name}
          </span>
          <span className="font-bold self-start hidden md:block lg:block">{currentEvent.location}</span>
          <span className="self-start hidden md:block">{currentEvent.date}</span>
        </div>
        <span className="flex  md:justify-normal self-end   md:self-auto">
        <div className='text-[30px] mt-[20px] w-[35.94px] h-[29.69px] hidden md:block'><IoIosArrowRoundForward onClick={handleNextEvent} /></div>


      </span>
      </div>
    </div>
  );
};

export default EventCard;

