import React, { useState } from "react";
import ExploreCard from "../Card/ExploreCard";
import Section from "@/components/layouts/Section";

export interface Explore {
    name: string;
    location: string;
    date: string;
    imageUrl: string;
  }

interface ExploreProps {
  events: Event[];
}

export default function Explore() {
    const events = [
        {
          name: "Celo Campus Connect",
          location: "Kenya",
          date: "Sat, March 26th, 2024",
          imageUrl: "/img/celokenya.svg",
        },
        {
            name: "Celo codeJam",
            location: "Uganda",
            date: "Sat, March 26th, 2024",
            imageUrl: "/img/celokenya.svg",
        },
        {
            name: "University OutReach",
            location: "Kenya",
            date: "Sat, March 1st, 2024",
            imageUrl: "/img/celokenya.svg",
        },
        {
            name: "Celo Campus Connect",
            location: "Kenya",
            date: "Sat, March 30th, 2024",
            imageUrl: "/img/celokenya.svg",
        },
       
      ];
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const handleNextEvent = () => {
    setCurrentEventIndex((prevIndex) =>
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousEvent = () => {
    setCurrentEventIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  const currentEvent = events[currentEventIndex];

  return (
    <Section className="bg-[#DEE2D8]">
        <ExploreCard
      explore={currentEvent}
      onNext={handleNextEvent}
      
    />
    </Section>
    
  );
}
