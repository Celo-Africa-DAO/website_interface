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
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Section from "@/components/layouts/Section";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "../ui/badge";

export default function Curriculum() {
  const [trackindex, setTrackIndex] = React.useState<number>(0);

  const handleNext = () => {
    setTrackIndex((prev) => (prev < events.length - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setTrackIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const events = [
    {
      id: 0,
      name: "Comprehensive Funding",
      location: "Up to $9k for the prize pool from the DAO and partners",
      date: "Learn More",
      url: "/program-square-icon.svg",
    },
    {
      id: 1,
      name: "Tokenomics and Liquidity Guidance",
      location: "Strategic advice on token design, incentive structures, distribution mechanisms, and listing strategies to build sustainable token economies.",
      date: "Learn More",
      url: "/program-star-icon.svg",
    },
    {
      id: 2,
      name: "Robust Mentor Network",
      location: "A thriving network of distinguished mentors, including operators, entrepreneurs, and investors",
      date: "Learn More",
      url: "/program-zig-icon.svg",
    },
    {
      id: 3,
      name: "Technical Workshops",
      location: "Live and recorded workshops covering blockchain development, security, and best practices.",
      date: "Learn More",
      url: "/program-tech-icon.svg",
    },
    {
      id: 4,
      name: "Marketing & Growth Support",
      location: "Assistance in growth hacking, community building, and outreach strategies.",
      date: "Learn More",
      url: "/program-marketing-icon.svg",
    },
    {
      id: 5,
      name: "Legal & Compliance Guidance",
      location: "Expert advice on regulatory compliance, legal structuring, and industry best practices.",
      date: "Learn More",
      url: "/program-legal-icon.svg",
    },
    {
      id: 6,
      name: "Investment & Partnership Opportunities",
      location: "Exclusive access to potential investors, partners, and industry leaders.",
      date: "Learn More",
      url: "/program-investment-icon.svg",
    },
    {
      id: 7,
      name: "Product & UX Design Support",
      location: "Expert guidance on user experience, interface design, and product iteration strategies.",
      date: "Learn More",
      url: "/program-ux-icon.svg",
    },
  ];

  return (
    <div className="bg-Celo-AD-primary">
      <Section>
        <div className="flex justify-center items-start mx-0 md:mx-32 xl:mx-0">
          <div className="flex flex-col bg-celo-AD-olive-green w-full">
            <div className="flex flex-col gap-4 items-center mt-10">
              <h1 className="font-GT-Alpina text-3xl text-black font-bold">
                Curriculum Overview
              </h1>
            
              <div className="hidden md:flex flex-row justify-evenly items-center w-5/6 ">
                {events.map((_, index) => (
                  <div key={index} className="flex flex-row justify-around  gap-2 items-center">
                    <Badge
                      className={`flex w-16 text-center  justify-center rounded-full text-black border-celo-AD-slate-brown ${
                        trackindex === index ? "bg-Celo-AD-yellow text-black" : "bg-transparent"
                      }`}
                    >
                      {index + 1}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex w-full justify-center items-center">
              <Carousel className="w-full max-w-xs">
                <CarouselContent>
                  {events.map((element, index) => (
                    <CarouselItem
                      key={index}
                      className="flex flex-col justify-between basis-[100%]  p-0 m-0"
                    >
                      <div className="p-1">
                        <Card className="bg-transparent ">
                          <CardHeader className="text-center font-bold text-lg">
                            {element.name}
                          </CardHeader>
                          <CardContent className="flex flex-col items-center p-4">
                           
                            <p className="text-center text-sm">{element.location}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex gap-2 mt-0 justify-end text-black">
                <CarouselPrevious
                  className="static md:absolute h-12 w-12 bg-celo-AD-olive-green border-gray-400 hover:bg-gray-100"
                  
                >
                  <ChevronLeft onClick={handlePrev} size={28}  className="text-black" />
                </CarouselPrevious>
                <CarouselNext
                  className="static md:absolute h-12 w-12 bg-celo-AD-olive-green border-gray-400 hover:bg-gray-100"
                  
                >
                  <ChevronRight onClick={handleNext} size={28} className="text-black" />
                </CarouselNext>
                            </div>
               
              </Carousel>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
