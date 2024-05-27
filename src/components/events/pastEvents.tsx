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

export function PastEvents() {
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
        <div className="flex flex-col items-start text-4xl text-black mb-10">
          <h1 className="italic font-gt-alpina font-light pl-2 md:pl-0">
            Past Event videos
          </h1>
        </div>
        <Carousel className="w-full">
          <CarouselContent className="ml-0">
            {events.map((element) => (
              <CarouselItem
                key={element.id}
                className="border border-black border-l-0   border-b border-r-0 pl-4 lg:pl-8 basis-[100%] md:basis-[100%] lg:basis-[100%] h-56"
              >
                <Card className="bg-transparent border-none flex justify-between items-center h-full">
                 

                  <CardHeader className="flex flex-col font-gt-alpina ">
                   
                    <h1 className=" font-light text-xl">
                      {element.name}
                    </h1>
                    <h1 className="font-bold text-sm">
                      {element.location}
                    </h1>
                    <CardDescription>{element.date}</CardDescription>
                   <h1 className="pt-8">
                   <Button
              className="bg-transparent flex gap-4 hover:bg-transparent border-none  font-bold"
              
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
                   </h1>
                  </CardHeader>
                  <CardContent className="w-1/4 h-full relative">
                    <Image
                      src={element.imageUrl}
                      fill
                      className="w-1/4 h-3/4"
                      alt=""
                    />
                  </CardContent>

                 
                </Card>
                {/* <EventCard events={events} /> */}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Carousel className="w-full">
          <CarouselContent className="ml-0">
            {events.map((element) => (
              <CarouselItem
                key={element.id}
                className="border border-black border-l-0   border-b border-r-0 pl-4 lg:pl-8 basis-[100%] md:basis-[100%] lg:basis-[100%] h-56"
              >
                <Card className="bg-transparent border-none flex justify-between items-center h-full">
                 

                  <CardHeader className="flex flex-col font-gt-alpina ">
                   
                    <h1 className=" font-light text-xl">
                      {element.name}
                    </h1>
                    <h1 className="font-bold text-sm">
                      {element.location}
                    </h1>
                    <CardDescription>{element.date}</CardDescription>
                   <h1 className="pt-8">
                   <Button
              className="bg-transparent flex gap-4 hover:bg-transparent border-none  font-bold"
              
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
                   </h1>
                  </CardHeader>
                  <CardContent className="w-1/4 h-full relative">
                    <Image
                      src={element.imageUrl}
                      fill
                      className="w-1/4 h-3/4"
                      alt=""
                    />
                  </CardContent>

                 
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
              More  videos
              <Image
                src={"img/black-arrow-icon.svg"}
                width={21}
                height={21}
                alt="black arrow icon"
              />
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
