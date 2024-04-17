import React, { useState } from "react";
import EventCard from "../Card/EventCard";
import Section from "@/components/layouts/Section";

export interface Event {
    name: string;
    location: string;
    date: string;
    imageUrl: string;
  }

interface UpcomingEventProps {
  events: Event[];
}

export default function UpcomingEvent() {
    const events = [
        {
          name: "Celo Campus Connect",
          location: "Kenya",
          date: "Sat, March 16th, 2024",
          imageUrl: "/img/celokenya.svg",
        },
        {
            name: "Celo  codeJam",
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
        // Add more event objects as needed
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
    <Section className="bg-Celo-AD-primary">
        <EventCard
      event={currentEvent}
      onNext={handleNextEvent}
      
    />
    </Section>
    
  );
}