import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MemberCard from "./MemberCard";

interface MembersProps {
   members: {
        id: number,
        name: string,
        position: string,
        image: string,
        twitter: string,
        linkedIn: string,
      }[]
}

export function TeamCarousel({members}: MembersProps) {
  return (
    <Carousel className="w-full ">
      <CarouselContent className="-ml-1">
        {members.map((member) => (
          <CarouselItem key={member.id} className="pl-4 lg:pl-8 basis-[45%] md:basis-[30%] lg:basis-[25%]">
           <MemberCard member={member}/>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex gap-2 mt-10 justify-end">
        <CarouselPrevious className="static h-10 w-10 bg-transparent border-gray-300 hover:bg-Celo-AD-yellow" />
        <CarouselNext className="static h-10 w-10 bg-transparent border-gray-300 hover:bg-Celo-AD-yellow" />
      </div>
    </Carousel>
  );
}