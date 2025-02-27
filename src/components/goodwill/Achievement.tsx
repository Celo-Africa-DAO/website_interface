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
import Section from "@/components/layouts/Section";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { MdChevronRight } from "react-icons/md";

export function Achievement() {
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
    <div className="pt-40 z-0" style={{ backgroundImage: "url('/Black-image-Dao.png')" }}>
      <Section>
        <div className="mx-6 xl:mx-0">
          {/* Heading and Sub-heading */}
          <h2 className="text-3xl font-gt-alpina-trial font-normal text-white mb-4">Aliu Musa’s achievement </h2>
          <p className="text-sm text-gray-300 mb-8">Discover the ongoing initiatives and impactful projects led by Celo Africa DAO.</p>

          <Carousel className="w-full">
            <CarouselContent className="ml-0 flex space-x-0">
              {events.map((element) => (
                <CarouselItem key={element.id} className="flex flex-col justify-between basis-[100%] md:basis-[35%] p-0 m-0">
                  <Card className="flex flex-col justify-between h-[70vh] p-0 m-0 rounded-none bg-transparent">
                    <CardHeader className="flex flex-col gap-8">
                      <CardTitle className="font-gt-alpina-trial italic font-medium text-white">{element.name}</CardTitle>
                      <CardDescription className="leading-relaxed md:leading-normal text-white pb-20">{element.location}</CardDescription>
                    </CardHeader>

                    <CardFooter className="flex justify-between items-center pt-20">
                      <p>{element.date}</p>
                      <Button className="bg-transparent flex gap-4 hover:bg-transparent" variant="outline">
                        <span className="bg-[#090808] p-1 rounded-full">
                          <MdChevronRight className="text-white" size={28} />
                        </span>
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex gap-2 mt-10 justify-end text-black">
              <CarouselPrevious className="static h-12 w-12 bg-transparent border-gray-300 hover:bg-Celo-AD-yellow">
                <ChevronLeft size={28} />
              </CarouselPrevious>
              <CarouselNext className="static h-12 w-12 bg-transparent border-gray-300 hover:bg-Celo-AD-yellow">
                <ChevronRight size={28} />
              </CarouselNext>
            </div>
          </Carousel>
        </div>
      </Section>
      <div className="flex items-end">
        <div className="h-28 w-24 bg-[#FFFFFF] mr-24"></div>
        <div className="h-10 w-full bg-[#FFFFFF]"></div>
        <div className="h-28 w-24 bg-[#FFFFFF] mr-16"></div>
      </div>
    </div>
  );
}
