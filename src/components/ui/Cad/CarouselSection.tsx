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
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Section from "@/components/layouts/Section";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../button";

export function CarouselSection() {
  const events = [
    {
      id: 0,
      name: "About",
      location: "The celo Africa DAO is a community of builders and enthusiasts uniting to propel the adoption of Celo and blockchain technology across the Africa continent",
      date: "Learn More",
    },
    {
      id: 1,
      name: "Focus Areas",
      location: "The Celo Africa DAO prioritizes three main areas of focus: establishing an incubator program, attracting developer talent, and enhancing brand visibility throughout the continent",
      date: "Learn More",
    },
    {
      id: 2,
      name: "Incubator",
      location: "The Celo Africa DAO prioritizes three main areas of focus: establishing an incubator program, attracting developer talent, and enhancing brand visibility throughout the continent",
      date: "Learn More",
    },
    {
      id: 3,
      name: "Projects",
      location: "The Celo Africa DAO prioritizes three main areas of focus: establishing an incubator program, attracting developer talent, and enhancing brand visibility throughout the continent",
      date: "Learn More",
    },
    {
      id: 4,
      name: "Codejam",
      location: "Once a month, we organize developer meet-ups to cultivate a skilled pipeline for building on Celo. During these sessions, we engage in hands-on development to create practical on-chain use cases.",
      date: "Learn More",
    },
    {
      id: 5,
      name: "University Outreach",
      location: "The celo Africa DAO is a community of builders and enthusiasts uniting to propel the adoption of Celo and blockchain technology across the Africa continent",
      date: "Learn More",
    },
  ];

  return (
    <div className="bg-Celo-AD-primary">
      <Section >
        <div className="flex flex-col justify-start items-start text-4xl italic font-gt-alpina font-light   mb-10 text-black">
          <span className="text-2xl md:text-4xl">Together let&apos;s Build and prosper</span>
          <span className="text-2xl pl-10   md:text-4xl">with Celo Africa DAO</span>
        </div>
        <Carousel className="w-full ">
          <CarouselContent className="ml-0 flex space-x-0">
            {events.map((element) => (
              <CarouselItem key={element.id} className="h-72 flex-none basis-[100%] md:basis-[35%] lg:basis-[30%] p-0 m-0">
                <Card className="flex flex-col justify-between h-full p-0 m-0 rounded-none border-t-1 border-black bg-transparent ">
                  <CardHeader className="flex flex-col gap-2">
                    <CardTitle className="font-gt-alpina font-light">{element.name}</CardTitle>
                    <CardDescription className="leading-relaxed md:leading-normal">{element.location}</CardDescription>
                  </CardHeader>
                 
                  <CardFooter className="flex justify-between items-center">
                    <p>{element.date}</p> 
                    <Button className="bg-transparent flex gap-4 hover:bg-transparent" variant='outline'>
          <Image
            src={"img/black-arrow-icon.svg"}
            width={21}
            height={21}
            alt="black arrow icon"
          /></Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex gap-2 mt-10 justify-end text-black">
            <CarouselPrevious className="static h-10 w-10 bg-transparent border-gray-300 hover:bg-Celo-AD-yellow">
              <ChevronLeft className="h-4 w-4" />
            </CarouselPrevious>
            <CarouselNext className="static h-10 w-10 bg-transparent border-gray-300 hover:bg-Celo-AD-yellow">
              <ChevronRight className="h-4 w-4" />
            </CarouselNext>
          </div>
        </Carousel>
      </Section>
      <div className="flex items-end">
        <div className="h-28 w-24 bg-celo-AD-olive-green mr-24"></div>
        <div className="h-10 w-full bg-celo-AD-olive-green"></div>
        <div className="h-28 w-24 bg-celo-AD-olive-green mr-16"></div>
      </div>
    </div>
  );
}
