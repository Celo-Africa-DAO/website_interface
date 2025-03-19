import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Section from "@/components/layouts/Section";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { MdChevronRight } from "react-icons/md";
import { Button } from "../ui/button";
import Curriculum from "./curriculum";

export default  function Program() {
  const events = [
    {
      id: 0,
      name: "Comprehensive Funding",
      location: "Up to $9k for the prize pool from the DAO and partners",
      date: "Learn More",
      url:"/program-square-icon.svg",
    },
    {
      id: 1,
      name: "Tokenomics and Liquidity Guidance:",
      location: "Strategic advice on token design, incentive structures, distribution mechanisms, and listing strategies to build sustainable token economies.",
      date: "Learn More",
      url:"/program-star-icon.svg",
    },
    {
      id: 2,
      name: "Robust Mentor Network",
      location: "A thriving network of distinguished mentors, including operators, entrepreneurs, and investors",
      date: "Learn More",
      url:"/program-zig-icon.svg",
    },
    
  ];

  return (
    <div className="bg-Celo-AD-primary mt-10">
      
        <div className='mx-6 xl:mx-0 '>
          <Carousel className="w-full ">
            <CarouselContent className="ml-0 flex space-x-0">
              {events.map((element) => (
                <CarouselItem key={element.id} className=" flex flex-col justify-between basis-[100%] md:basis-[35%]  p-0 m-0">
                  <Card className="flex flex-col justify-between h-3/4 p-0 m-0 rounded-none  bg-transparent ">
                   
                    <CardHeader className="flex flex-col gap-4">
                    <div className="flex w-full items-start justify-start">
                      <Image
                                src={element.url}
                               alt="icon"
                                className="md:w-[20px] cursor-pointer w-[20px]"
                              
                               width={20}
                               height={20}
                             />

                    </div>
                      <CardTitle className="font-GT-Alpina italic  font-thin text-2xl">{element.name}</CardTitle>
                      <CardDescription className="leading-relaxed md:leading-normal text-base pb-20">{element.location}</CardDescription>
                    </CardHeader>
                    
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex gap-2 mt-0 justify-end text-black">
              <CarouselPrevious className="static h-12 w-12 bg-transparent border-gray-300 hover:bg-celo-AD-olive-green">
                <ChevronLeft size={28} />
              </CarouselPrevious>
              <CarouselNext className="static h-12 w-12 bg-transparent border-gray-300 hover:bg-celo-AD-olive-green">
                <ChevronRight size={28} />
              </CarouselNext>
            </div>
          </Carousel>
          <Curriculum/>
        </div>
      
     
    </div>
  );
}
