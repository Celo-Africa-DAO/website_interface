import * as React from "react";
import { useRouter } from 'next/router';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import Section from "@/components/layouts/Section";
import Image from "next/image";

export interface Event {
  name: string;
  location: string;
  date: string;
  imageUrl: string;
}

export function UpComingEvent() {
  const router = useRouter();

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
      name: "Celo Code Jam",
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

  // router more events
  const handleMoreEvents = () => {
    router.push('/all-events');
  };

  return (
    <div className="bg-celo-AD-olive-green">
      <Section>
      <div className='mx-6 xl:mx-0'>
        <div className="flex flex-col items-start text-4xl text-black mb-10">
          <h1 className="italic font-gt-alpina font-light pl-2 md:pl-0">
            Explore Events
          </h1>
        </div>
        <Carousel className="w-full  ">
          <CarouselContent className="ml-0">
            {events.map((element) => (
              <CarouselItem
                key={element.id}
                className="  border border-black border-l-0    border-b-0 border-r-0  lg:pl-8 basis-[100%] md:basis-[100%] lg:basis-[100%]h-72 md:h-56"
              >
               <Card className="bg-transparent border-none flex flex-col md:flex-row justify-between items-center h-full">
  <CardContent className="w-full md:w-1/4 h-full flex flex-col md:flex-row gap-2 md:gap-0   ">
    <CardDescription className="font-gt-alpina  p-4 justify-between items-center block md:hidden font-bold text-sm">UPCOMING</CardDescription>
       
    <Image
      src={element.imageUrl}
      
      className=" w-full h-full  "
      alt=""
      width={0}
      height={0}
      sizes="100vw"
     
    />
   <div className="flex md:hidden flex-row justify-between items-center w-full">
  
  
 
    <div>
    {element.name}
    </div>
    <div>
    <CarouselNext className=" static mt-8 h-10 w-10 bg-transparent block md:hidden rounded-none border-none">
    <MoveRight className="h-8 w-8" />
  </CarouselNext>
    </div>

 
</div>
  
 
   
  </CardContent>
  

  <CardHeader className="flex-col hidden md:block">
    <CardTitle className="text-[#656947] text-xl">
      UPCOMING
    </CardTitle>
    <h1 className="font-gt-alpina block md:hidden font-light text-xl">
      {element.name}
    </h1>
    <h1 className="font-gt-alpina font-bold text-sm">
      {element.location}
    </h1>
    <CardDescription>{element.date}</CardDescription>
  </CardHeader>

  <CarouselNext className="static h-10 w-10 bg-transparent rounded-none border-none">
    <MoveRight className="h-8 w-8 hidden md:block" />
  </CarouselNext>
</Card>

                {/* <EventCard events={events} /> */}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Carousel className="w-full  ">
          <CarouselContent className="ml-0">
            {events.map((element) => (
              <CarouselItem
                key={element.id}
                className="  border border-black border-l-0     border-r-0  lg:pl-8 basis-[100%] md:basis-[100%] lg:basis-[100%]h-72 md:h-56"
              >
               <Card className="bg-transparent border-none flex flex-col md:flex-row justify-between items-center h-full">
  <CardContent className="w-full md:w-1/4 h-full flex flex-col md:flex-row gap-2 md:gap-0   ">
    <CardDescription className="font-gt-alpina  p-4 justify-between items-center block md:hidden  text-sm font-bold">PAST</CardDescription>
       
    <Image
      src={element.imageUrl}
      
      className=" w-full h-full  "
      alt=""
      width={0}
      height={0}
      sizes="100vw"
     
    />
   <div className="flex md:hidden flex-row justify-between items-center w-full">
  
  
 
    <div>
    {element.name}
    </div>
    <div>
    <CarouselNext className=" static mt-8 h-10 w-10 bg-transparent block md:hidden rounded-none border-none">
    <MoveRight className="h-8 w-8" />
  </CarouselNext>
    </div>

 
</div>
  
 
   
  </CardContent>
  

  <CardHeader className="flex-col hidden md:block">
    <CardTitle className="text-[#656947] text-xl">
      UPCOMING
    </CardTitle>
    <h1 className="font-gt-alpina block md:hidden font-light text-xl">
      {element.name}
    </h1>
    <h1 className="font-gt-alpina font-bold text-sm">
      {element.location}
    </h1>
    <CardDescription>{element.date}</CardDescription>
  </CardHeader>

  <CarouselNext className="static h-10 w-10 bg-transparent rounded-none border-none">
    <MoveRight className="h-8 w-8 hidden md:block" />
  </CarouselNext>
</Card>

                {/* <EventCard events={events} /> */}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="w-full flex justify-center items-center pb-10 pt-5 text-black">
          <div className="flex justify-center items-center gap-2 font-bold">
            <Button
              className="bg-transparent flex gap-4 hover:bg-transparent"
              onClick={handleMoreEvents}
              variant="outline"
            >
              More events
              <Image
                src={"img/black-arrow-icon.svg"}
                width={21}
                height={21}
                alt="black arrow icon"
              />
            </Button>
          </div>
        </div>
        </div>
      </Section>
    </div>
  );
}
