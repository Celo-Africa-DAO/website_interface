


import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselCard from "../Card/CarouselCard";
import Section from "@/components/layouts/Section";

export function CarouselSection() {
  const events = [
        {
          id:0,
          name: "About",
          location: "The celo Africa DAO is a community of builders and enthusiats uniting to propel the adoption of Celo and blockchain technology across the Africa continent ",
          date: "learn about who we are and our innovative movement",
          
        },
        {
          id:1,
            name: "Focus Areas",
            location: "The Celo Africa DAO prioritizes three main areas of focus: establishing an incubator program, attracting developer talent, and enhancing brand visibility throughout the continent",
            date: "learn about who we are and our innovative movement",
          },
          {
            id:1,
              name: "Incubator",
              location: "The Celo Africa DAO prioritizes three main areas of focus: establishing an incubator program, attracting developer talent, and enhancing brand visibility throughout the continent",
              date: "learn about who we are and our innovative movement",
            },
            {
              id:1,
                name: "Pojects",
                location: "The Celo Africa DAO prioritizes three main areas of focus: establishing an incubator program, attracting developer talent, and enhancing brand visibility throughout the continent",
                date: "learn about who we are and our innovative movement",
              },
             
          {
            id:2,
            name: "Codejam",
            location: "Once a month, we organize developer meet-ups to cultivate a skilled pipeline for building on Celo. During these sessions, we engage in hands-on development to create practical on-chain use cases. ",
            date: "learn about who we are and our innovative movement",
            
           
          },
         
          
          
          {
            id:3,
              name: "University Outreach",
              location: "The celo Africa DAO is a community of builders and enthusiats uniting to propel the adoption of Celo and blockchain technology across the Africa continent ",
              date: "learn about who we are and our innovative movement",
             
            },
        // Add more event objects as needed
      ];
  return (
    <div className="bg-Celo-AD-primary">

    <Section >
    <div className="flex flex-col justify-start items-start text-4xl italic font-gt-alpina font-light pl-10 md:pl-36 mb-10 text-black">
       <span className="text-2xl md:text-4xl">Together let&apos;s Build and prosper </span>
       <span className="text-2xl pl-10 md:text-4xl">with Celo Africa DAO </span>
      </div>
    <Carousel className="w-full  ">
      <CarouselContent className="ml-0">
        {events.map((element) => (
          <CarouselItem key={element.id} className="border border-black pl-4 lg:pl-8    basis-[100%] md:basis-[35%] lg:basis-[25%]">
           <CarouselCard event={element}/>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex gap-2 mt-10 justify-end text-black">
        <CarouselPrevious className="static h-10 w-10 bg-transparent border-gray-300 hover:bg-Celo-AD-yellow" />
        <CarouselNext className="static h-10 w-10 bg-transparent border-gray-300 hover:bg-Celo-AD-yellow" />
      </div>
    </Carousel>
    </Section>
    <div className="flex  items-end">
        <div className="h-28 w-24  bg-celo-AD-olive-green mr-24">

        </div>
        <div className="h-10 w-full  bg-celo-AD-olive-green">
       </div>
       <div className="h-28 w-24    bg-celo-AD-olive-green  mr-16">

 </div>

       </div> 
   
    </div>
  );
}
