// import React, { useState } from "react";
// import EventCard from "../Card/EventCard";
// import Section from "@/components/layouts/Section";

// export interface Event {
//     name: string;
//     location: string;
//     date: string;
//     imageUrl: string;
//   }

// interface UpcomingEventProps {
//   events: Event[];
// }

// export default function UpcomingEvent() {
//     const events = [
//         {
//           name: "Celo Campus Connect",
//           location: "Kenya",
//           date: "Sat, March 26th, 2024",
//           imageUrl: "/img/celokenya.svg",
//         },
//         {
//             name: "Celo  codeJam",
//             location: "Uganda",
//             date: "Sat, March 26th, 2024",
//             imageUrl: "/img/celokenya.svg",
//           },
//           {
//             name: "University OutReach",
//             location: "Kenya",
//             date: "Sat, March 1st, 2024",
//             imageUrl: "/img/celokenya.svg",
//           },
//           {
//               name: "Celo Campus Connect",
//               location: "Kenya",
//               date: "Sat, March 30th, 2024",
//               imageUrl: "/img/celokenya.svg",
//             },
//         // Add more event objects as needed
//       ];
//   const [currentEventIndex, setCurrentEventIndex] = useState(0);

//   const handleNextEvent = () => {
//     setCurrentEventIndex((prevIndex) =>
//       prevIndex === events.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePreviousEvent = () => {
//     setCurrentEventIndex((prevIndex) =>
//       prevIndex === 0 ? events.length - 1 : prevIndex - 1
//     );
//   };

//   const currentEvent = events[currentEventIndex];

//   return (
//     <Section className="bg-Celo-AD-primary">
//         <EventCard
//       event={currentEvent}
//       onNext={handleNextEvent}
      
//     />
//     </Section>
    
//   );
// }

export interface Event {
    name: string;
    location: string;
    date: string;
    imageUrl: string;
  }

// import * as React from "react";


// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/event-carousel";
// import CarouselCard from "../Card/CorouselCard";
// import Section from "@/components/layouts/Section";
//  import EventCard from "../Card/EventCard";
//  import Image from "next/image";

// export function UpComingEvent() {
//       const events = [
//         {
//           id: 1,
//           name: "Celo Campus Connect",
//           location: "Kenya",
//           date: "Sat, March 26th, 2024",
//           imageUrl: "/img/celokenya.svg",
//         },
//         {
//           id: 2,
//             name: "Celo  codeJam",
//             location: "Uganda",
//             date: "Sat, March 26th, 2024",
//             imageUrl: "/img/celokenya.svg",
//           },
//           {
//             id: 3,
//             name: "University OutReach",
//             location: "Kenya",
//             date: "Sat, March 1st, 2024",
//             imageUrl: "/img/celokenya.svg",
//           },
//           {
//             id: 4,
//               name: "Celo Campus Connect",
//               location: "Kenya",
//               date: "Sat, March 30th, 2024",
//               imageUrl: "/img/celokenya.svg",
//             },
//         // Add more event objects as needed
//       ];
//   return (
//     <div className="bg-Celo-AD-primary   ">
     
      

//     <Section>
//     <div className="flex flex-col items-start text-4xl">
//         <h1 className="italic font-gt-alpina font-light pl-2 md:pl-0">Upcoming Events</h1>
//       </div>
//     <Carousel className="w-full  ">
//       <CarouselContent className="ml-0">
//         {events.map((element) => (
//           <CarouselItem key={element.id} className="border  border-black border-l-0  border-r-0 pl-4 lg:pl-8    basis-[100%] md:basis-[100%] lg:basis-[100%]">
//             {/* <div className="flex  h-full justify-between items-center">
//             <CarouselPrevious className="static h-10 w-10 bg-transparent border-gray-300 hidden md:block lg:block" /> */}
//             <EventCard events={element}/>
//             {/* <CarouselNext className="static h-10 w-10 bg-transparent border-gray-300 hidden md:block lg:block" />
//             </div> */}
           
//           </CarouselItem>
//         ))}
//       </CarouselContent>
      
//     </Carousel>
//     <div className="w-full flex justify-center items-center pb-10 pt-5">
//         <div className="flex justify-center items-center gap-2 font-bold">
//           More events <Image src={'img/black-arrow-icon.svg'} width={21} height={21} alt='black arrow icon' />
//         </div>
//       </div>
//     </Section>

    
   
//     </div>
//   );
// }



import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/event-carousel";
import EventCard from "../Card/EventCard";
import Section from "@/components/layouts/Section";
import Image from "next/image";

export function UpComingEvent() {
  const events = [
    {
      id: 1,
      name: "Celo Campus Connect",
      location: "Kenya",
      date: "Sat, March 26th, 2024",
      imageUrl: "/img/celokenya.svg",
    },
    {
      id: 2,
      name: "Celo codeJam",
      location: "Uganda",
      date: "Sat, March 26th, 2024",
      imageUrl: "/img/celokenya.svg",
    },
    {
      id: 3,
      name: "University OutReach",
      location: "Kenya",
      date: "Sat, March 1st, 2024",
      imageUrl: "/img/celokenya.svg",
    },
    {
      id: 4,
      name: "Celo Campus Connect",
      location: "Kenya",
      date: "Sat, March 30th, 2024",
      imageUrl: "/img/celokenya.svg",
    },
    // Add more event objects as needed
  ];

  return (
    <div className="bg-Celo-AD-primary">
      <Section>
        <div className="flex flex-col items-start text-4xl">
          <h1 className="italic font-gt-alpina font-light pl-2 md:pl-0">
            Upcoming Events
          </h1>
        </div>
        <Carousel className="w-full">
          <CarouselContent className="ml-0">
          {events.map((element) =>(
              <CarouselItem
              key={element.id}
                
                className="border border-black border-l-0 border-r-0 pl-4 lg:pl-8 basis-[100%] md:basis-[100%] lg:basis-[100%]"
              >
                <EventCard events={events} />
              </CarouselItem>
              ))}
          
          </CarouselContent>
        </Carousel>
        <div className="w-full flex justify-center items-center pb-10 pt-5">
          <div className="flex justify-center items-center gap-2 font-bold">
            More events{" "}
            <Image
              src={"img/black-arrow-icon.svg"}
              width={21}
              height={21}
              alt="black arrow icon"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
