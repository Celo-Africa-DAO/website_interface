import React, { useState } from "react";
import PastEventCard from "../Card/PastEventCard";
import Section from "@/components/layouts/Section";

export interface PastEvent {
  name: string;
  location: string;
  date: string;
  
}

const PastEvent: React.FC = () => {
  const [isViewBtnHover, setIsViewBtnHover] = useState(false);
  const handleViewBtn = () => {
    setIsViewBtnHover(true);
  };
  const handleViewBtnDefault = () => {
    setIsViewBtnHover(false);
  };

  const pastevent: PastEvent[] = [
    
    {
      name: "Celo codeJam",
      location: "Uganda",
      date: "Sat, March 26th, 2024",
    },
    {
      name: "Celo Code Jam",
      location: "Kenya",
      date: "Sat, March 1st, 2024",
      
    },
    {
      name: "Celo codeJam",
      location: "Nigeria",
      date: "Sat, March 26th, 2024",
      
    },
    {
      name: "Celo Campus Connect",
      location: "Nigeria",
      date: "Sat, March 30th, 2024",
    },
    
    {
      name: "Celo Campus Connect",
      location: "Kenya",
      date: "Sat, March 30th, 2024",
    },
    {
      name: "Celo Campus Connect",
      location: "Uganda",
      date: "Sat, March 26th, 2024",
      
    },
 
  ];

  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const handleNextEvent = () => {
    setCurrentEventIndex((prevIndex) =>
      prevIndex === pastevent.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousEvent = () => {
    setCurrentEventIndex((prevIndex) =>
      prevIndex === 0 ? pastevent.length - 1 : prevIndex - 1
    );
  };

  const currentEvent = pastevent[currentEventIndex];

  return (
    <Section className="bg-[#FAFAFA] ">
      <PastEventCard pastevent={currentEvent} onNext={handleNextEvent} />
    </Section>
  );
};

export default PastEvent;

