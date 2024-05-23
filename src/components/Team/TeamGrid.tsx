import React from "react";
import MemberCard from "./MemberCard";
interface MembersProps {
  members: {
    id: number;
    name?: string;
    position: string;
    image: string;
    twitter?: string;
    linkedIn?: string;
    url?: string;
  }[];
  tab?: string;
}

const TeamGrid = ({ members }: MembersProps) => {
  return (
    <div className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {members.map((member) => (
        // <CarouselItem key={member.id} className="pl-4 lg:pl-8 basis-[100%]  xsm:basis-[70%] sm:basis-[45%] md:basis-[30%] lg:basis-[25%]">
        <MemberCard key={member.id} member={member} />
        // </CarouselItem>
      ))} 
    </div>
  );
};

export default TeamGrid;
