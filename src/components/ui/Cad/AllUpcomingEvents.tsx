import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/event-carousel";
import EventCard from "../Card/EventCard";
import Section from "@/components/layouts/Section";
import Image from "next/image";
import AllEventCard from "../Card/AllEventCard";

export interface Event {
  id: number;
  name: string;
  location: string;
  date: string;
  imageUrl: string;
}

export function AllUpcomingEvents() {
  const events = [
    {
      id: 1,
      name: "Celo Campus Connect",
      location: "Kenya",
      date: "Sat, March 26th, 2024",
      imageUrl: "/img/celokenya.svg",
    },

    {
      id: 3,
      name: "University OutReach",
      location: "Kenya",
      date: "Sat, March 1st, 2024",
      imageUrl: "/img/celokenya.svg",
    },

    // Add more event objects as needed
  ];

  return (
    <div className="bg-Celo-AD-primary">
      <Section>
        <div className="flex flex-col  mb-6 items-start text-4xl text-black">
          <h1 className="italic font-gt-alpina font-light pl-2 md:pl-0">
            Upcoming Events
          </h1>
        </div>
        <div className="w-full">
          <div className="ml-0">
            {events.map((element) => (
              <div
                key={element.id}
                className="border border-black border-l-0 border-r-0 pl-4 lg:pl-8 basis-[100%] md:basis-[100%] lg:basis-[100%]"
              >
                <AllEventCard event={element} events={events} />
              </div>
            ))}
          </div>
        </div>

      </Section>
    </div>
  );
}
