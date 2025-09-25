import React from "react";
import { Button } from "../ui/button";
import { FiArrowRight } from "react-icons/fi";
import Section from "../layouts/Section";
import Link from "next/link";

const EventsHero = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center mt-5 sm:mt-8 md:mt-12 z-0">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/IncubatorBackground.png')" }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <Section>
        <div className="relative z-10 flex flex-col justify-center w-full max-w-screen-lg mx-auto text-white px-8 sm:px-14 md:px-20 lg:px-28 mt-[-60px] sm:mt-[-80px] md:mt-[-100px] ml-6 sm:ml-8 md:ml-12">
          <h1 className="font-GT-Alpina text-xl sm:text-3xl md:text-4xl lg:text-5xl font-thin leading-tight">
            Explore
          </h1>
          <h1 className="font-GT-Alpina ml-16 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-thin leading-tight">
            Our Events
          </h1>
          <h2 className="font-GT-Alpina text-xl sm:text-3xl md:text-4xl lg:text-5xl font-thin italic mt-1">
            - Past & Upcoming
          </h2>

          <p className="text-sm sm:text-base md:text-lg max-w-lg mt-4 text-gray-200">
            From meetups to code jams and hackathons, we host developer-first,
            founder-focused experiences across Africa. Join the movement shaping the future of Web3.
          </p>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-6">
            <Link
              href="#upcoming-events"
              className="w-full sm:w-auto"
            >
              <Button className="bg-[#FCFF52] text-black px-4 py-2 font-medium rounded-full hover:bg-yellow-500 w-full sm:w-auto text-sm">
                View upcoming Events
              </Button>
            </Link>
            <Link
              href="https://airtable.com/appZ1gMuFVLK2TUNm/shrrcQfO7Stmq3kLd"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="bg-[#E7E3D4] text-black px-4 py-2 font-medium rounded-full flex items-center justify-center space-x-2 hover:bg-gray-200 w-full sm:w-auto text-sm">
                <span>Partner With Us</span>
                <FiArrowRight className="text-black" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default EventsHero;
