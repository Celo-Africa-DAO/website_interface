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
    <div className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {members.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
};

export default TeamGrid;
