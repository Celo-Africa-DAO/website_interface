import React from "react";
import Link from "next/link";
import { MdChevronRight } from "react-icons/md";
import Section from "@/components/layouts/Section";
import EventGrid from "@/components/events/EventGrid";
import { Button } from "../ui/button";
import allEvents from "../data/celo_africa_dao_events.json";

const HomeEventsGrid = () => {
  // Use top 9 events only
  const topEvents = allEvents.slice(0, 9).map((event) => ({
    ...event,
    type: event.type === "Video" ? "video" : "upcoming", // Fix types for the grid component
  }));

  return (
    <div className="bg-celo-AD-olive-green">
      <Section>
        <div className="mx-6 xl:mx-0">
          <div className="flex flex-col items-start text-4xl text-black mb-10">
            <h1 className="font-GT-Alpina text-xl sm:text-3xl md:text-4xl lg:text-5xl font-thin leading-tight">
              Explore
            </h1>
            <h1 className="font-GT-Alpina ml-16 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-thin leading-tight">
              Our Events
            </h1>
            <h2 className="font-GT-Alpina text-xl sm:text-3xl md:text-4xl lg:text-5xl font-thin italic mt-1">
              - Past & Upcoming
            </h2>

            <p className="text-sm sm:text-base md:text-lg max-w-lg mt-4 text-[#565656]">
              From meetups to code jams and hackathons, we host developer-first,
              founder-focused experiences across Africa. Join the movement
              shaping the future of Web3.
            </p>
          </div>

          <div className="flex justify-between items-center mb-6"></div>

          <EventGrid events={topEvents} />
          <div className="flex flex-row justify-center mt-10 gap-6">
<Link href="/events">
  <Button className="bg-[#FCFF52] hover:bg-[#FCFF52]/75 text-black px-4 py-2 rounded-full w-fit mt-4 text-sm sm:text-base font-semibold flex items-center pl-6 pr-2">
    <span className="mr-4">View All Events</span>
    <span className="bg-black p-2 rounded-full aspect-square">
      <MdChevronRight className="text-white" size={28} />
    </span>
  </Button>
</Link>

          </div>
        </div>
      </Section>
    </div>
  );
};

export default HomeEventsGrid;
