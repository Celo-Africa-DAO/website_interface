import * as React from "react";
import Section from "@/components/layouts/Section";
import EventGrid from "./EventGrid"; // or "@/components/EventGrid"
import allEvents from "../data/celo_africa_dao_events.json"; // Adjust the path as necessary
import { Event } from "./EventGrid"; // Reuse the same type

export function ExploreAllEvents() {
  const events: Event[] = allEvents;

  return (
    <div className="bg-celo-AD-olive-green">
      <Section>
        <div className="mx-6 xl:mx-0">
          <h1 className="italic font-gt-alpina font-light text-4xl text-black mb-10">
            Explore Our Events
          </h1>

          <EventGrid events={events} />
        </div>
      </Section>
    </div>
  );
}
