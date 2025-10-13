import React, { useState } from "react";
import Link from "next/link";
import { MdChevronRight } from "react-icons/md";
import Section from "@/components/layouts/Section";
import { Button } from "../ui/button";
import allEvents from "../data/celo_africa_dao_events.json";
import Image from "next/image";

const HomeEventsGrid = () => {
  const [activeTab, setActiveTab] = useState("Nigeria");
  
  const countries = ["Nigeria", "Ghana", "Uganda", "South Africa", "Kenya", "X Space"];
  
  // Filter events based on active tab
  const filteredEvents = allEvents.filter(event => {
    if (activeTab === "X Space") {
      return event.type === "X Space";
    }
    return event.location === activeTab;
  }).slice(0, 3); // Show only 3 events as in the image

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

          {/* Country Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {countries.map((country) => (
              <button
                key={country}
                onClick={() => setActiveTab(country)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === country
                    ? "text-black"
                    : "bg-white text-black hover:bg-gray-50"
                }`}
                style={{
                  backgroundColor: activeTab === country ? '#FCF6F1' : 'white'
                }}
              >
                {country}
              </button>
            ))}
          </div>

          {/* Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {filteredEvents.map((event) => (
              <div key={event.id} className="border border-celo-AD-gray rounded-lg p-6 hover:shadow-lg transition-shadow" style={{backgroundColor: '#FCF6F1'}}>
                {/* Event Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded flex items-center justify-center overflow-hidden">
                    <Image
                      src="/img/celo2.jpg"
                      alt="Celo Africa DAO"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium text-celo-AD-slate-brown">CELO {event.location}</span>
                </div>

                {/* Event Title */}
                <h3 className="text-xl font-semibold mb-3 font-GT-Alpina text-black">
                  {event.name}
                </h3>

                {/* Event Details */}
                <div className="mb-4">
                  <p className="text-sm text-celo-AD-slate-brown mb-1">
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'short', 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })} 10:30am-3pm
                  </p>
                  <p className="text-sm text-celo-AD-slate-brown">
                    {event.location === "Nigeria" ? "University of Lagos, Lagos State" : 
                     event.location === "Kenya" ? "Chandaria Training Room, Kenyatta University" :
                     event.location === "Uganda" ? "Makerere University, Kampala" :
                     event.location === "South Africa" ? "University of Cape Town, Cape Town" :
                     event.location === "Ghana" ? "University of Ghana, Accra" :
                     "Online Event"}
                  </p>
                </div>

                {/* Event Tags */}
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 border border-celo-AD-gray rounded-full text-xs text-celo-AD-slate-brown" style={{backgroundColor: '#FCF6F1'}}>
                    {event.category}
                  </span>
                  <span className="px-3 py-1 border border-celo-AD-gray rounded-full text-xs text-celo-AD-slate-brown" style={{backgroundColor: '#FCF6F1'}}>
                    {event.type === "X Space" ? "Online" : "In-person"}
                  </span>
                </div>

                {/* Register Button */}
                <Button className="w-full bg-celo-AD-slate-brown hover:bg-celo-AD-dark-green text-white rounded-full py-2">
                  Done
                </Button>
              </div>
            ))}
          </div>

          <div className="flex flex-row justify-center mt-10 gap-6">
            <Link href="/events">
              <Button className="bg-Celo-AD-yellow hover:bg-Celo-AD-yellow/75 text-black px-4 py-2 rounded-full w-fit mt-4 text-sm sm:text-base font-semibold flex items-center pl-6 pr-2">
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
