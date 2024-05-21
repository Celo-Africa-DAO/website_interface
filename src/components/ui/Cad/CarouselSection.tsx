


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
      id: 0,
      name: "About",
      location: "The celo Africa DAO is a community of builders and enthusiats uniting to propel the adoption of Celo and blockchain technology across the Africa continent ",
      date: "learn about who we are and our innovative movement",

    },
    {
      id: 1,
      name: "Focus Areas",
      location: "The Celo Africa DAO prioritizes three main areas of focus: establishing an incubator program, attracting developer talent, and enhancing brand visibility throughout the continent",
      date: "learn about who we are and our innovative movement",
    },
    {
      id: 1,
      name: "Incubator",
      location: "The Celo Africa DAO prioritizes three main areas of focus: establishing an incubator program, attracting developer talent, and enhancing brand visibility throughout the continent",
      date: "learn about who we are and our innovative movement",
    },
    {
      id: 1,
      name: "Pojects",
      location: "The Celo Africa DAO prioritizes three main areas of focus: establishing an incubator program, attracting developer talent, and enhancing brand visibility throughout the continent",
      date: "learn about who we are and our innovative movement",
    },

    {
      id: 2,
      name: "Codejam",
      location: "Once a month, we organize developer meet-ups to cultivate a skilled pipeline for building on Celo. During these sessions, we engage in hands-on development to create practical on-chain use cases. ",
      date: "learn about who we are and our innovative movement",


    },



    {
      id: 3,
      name: "University Outreach",
      location: "The celo Africa DAO is a community of builders and enthusiats uniting to propel the adoption of Celo and blockchain technology across the Africa continent ",
      date: "learn about who we are and our innovative movement",


    },
    // Add more event objects as needed
  ];
  return (
    <div className="bg-Celo-AD-primary text-[#0C0C0C] pt-20">
      <Section >
        <div className="flex flex-row  items-center justify-center gap-6 pb-20">
          <img className="w-1/5" src="./skew-left.png" alt="" />
          <div className="w-3/5 text-center text-[#0C0C0C] text-[32px] md:text-[64px] font-gt-alpina-trial font-[250]">
            <p className="italic -my-8">Together</p>
            <p className="-my-8">
              let’s build and prosper
            </p>
            <span className="italic -my-8">with celo africa dao</span>
          </div>
          <img className="w-1/5" src="./skew right.png" alt="" />
        </div>
        
        <Carousel className="w-full  ">
          <CarouselContent className="ml-0">
            {events.map((element) => (
              <CarouselItem key={element.id} className="border border-black pl-4 lg:pl-8    basis-[100%] md:basis-[35%] lg:basis-[25%]">
                <CarouselCard event={element} />
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
        <div className="h-28 w-24  bg-Celo-AD-gray mr-24">

        </div>
        <div className="h-10 w-full  bg-Celo-AD-gray">
        </div>
        <div className="h-28 w-24    bg-Celo-AD-gray  mr-16">

        </div>

      </div>

    </div>
  );
}
