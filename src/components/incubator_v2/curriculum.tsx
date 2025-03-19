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
  CardTitle,
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
      name: "Finding product-market",
      location: "Assit founders in honing their concepts to address genuine market needs.",
      date: "fit",
      url: "/program-square-icon.svg",
    },
    {
      id: 1,
      name: "Crypto Business",
      location: "Guide startups in creating sustainable and scalable business frameworks.",
      date: "Model",
      url: "/program-star-icon.svg",
    },
    {
      id: 2,
      name: "Build & integrate",
      location: "How do you go about to deploy on Celo mainnet?",
      date: "with Celo",
      url: "/program-zig-icon.svg",
    },
    {
      id: 3,
      name: "Building on Minipay",
      location: "Leveraging Opera's distribution channel to reach more users.",
      date: "",
      url: "/program-tech-icon.svg",
    },
    {
      id: 4,
      name: "Creating a winning",
      location: "Teach founders to present their business ideas compellingly.",
      date: "Pitch Deck",
      url: "/program-marketing-icon.svg",
    },
    {
      id: 5,
      name: "Scalling, BD & Fundraising",
      location: "Expanding to new markets, partners and know when ready to receive investment.",
      date: "readiness",
      url: "/program-legal-icon.svg",
    },
    {
      id: 6,
      name: "Customer acquisition",
      location: "Building a customer base and retention",
      date: "",
      url: "/program-investment-icon.svg",
    },
    {
      id: 7,
      name: "Legal and Regulatory",
      location: "Understanding legal structures and regulatory requirements.",
      date: "Framework",
      url: "/program-ux-icon.svg",
    },
    {
      id: 8,
      name: "Tokenomics Advisory",
      location: "Using ubestarter Token Launchpad to gain hands-on experience in deploying your token",
      date: "Framework",
      url: "/program-ux-icon.svg",
    },
    {
      id: 9,
      name: "Demo Day",
      location: "Founders presenting compelling ideas to potential investors.",
      date: "",
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
                      className={`flex w-12 text-center  justify-center rounded-full text-black border-celo-AD-slate-brown ${
                        trackindex === index ? "bg-Celo-AD-yellow text-black" : "bg-transparent"
                      }`}
                    >
                      {index + 1}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex w-full justify-center items-center pt-4">
              <Carousel className="w-full max-w-xs">
                <CarouselContent>
                  {events.map((element, index) => (
                    <CarouselItem
                      key={index}
                      className="flex flex-col justify-between basis-[100%]  p-0 m-0"
                    >
                      <div className="p-1">
                        <Card className="bg-transparent  ">
                          <CardTitle className="text-center font-bold text-lg ">
                            <div className="flex flex-col">
                            <p> {element.name}</p>
                            <p> {element.date}</p>
                            </div>                          
                           
                          </CardTitle>
                          <CardContent className="flex flex-col items-center p-4">
                           
                            <p className="text-center text-sm text-celo-AD-slate-brown">{element.location}</p>
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
