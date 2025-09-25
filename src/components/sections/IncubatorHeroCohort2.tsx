import React from "react";
import { Button } from "../ui/button";
import { FiArrowRight } from "react-icons/fi";
import Section from "../layouts/Section";

const IncubatorHeroCohort2 = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center mt-5 sm:mt-8 md:mt-12 z-0">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/IncubatorBackground.png')" }}
      ></div>
      <div className="absolute inset-0 bg-opacity-50"></div>

      <Section>
        <div className="relative z-10 flex flex-col justify-center w-full max-w-screen-lg mx-auto text-white px-8 sm:px-14 md:px-20 lg:px-28 mt-[-60px] sm:mt-[-80px] md:mt-[-100px] ml-6 sm:ml-8 md:ml-12">
          <h1 className="font-GT-Alpina text-xl sm:text-3xl md:text-4xl lg:text-5xl font-thin leading-tight">
            Incubator
          </h1>
          <h1 className="font-GT-Alpina ml-16 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-thin leading-tight">
             Program
          </h1>
          <h2 className="font-GT-Alpina text-xl sm:text-3xl md:text-4xl lg:text-5xl font-thin italic mt-1">
            - Cohort III
          </h2>

          <p className="text-sm sm:text-base md:text-lg max-w-lg mt-4 text-gray-200">
            Our Pan-African Incubator Program is a dynamic 10-week initiative
            dedicated to empowering early-stage founders across the African continent.
          </p>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSffpxsP1KZnvd3mx41wQYNCoTQ9_Jphql3TwnZ3RluwXXnI2A/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="bg-[#FCFF52] text-black px-4 py-2 font-medium rounded-full hover:bg-yellow-500 w-full sm:w-auto text-sm">
                Register Now
              </Button>
            </a>
            <a
              href="/startups"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="bg-[#E7E3D4] text-black px-4 py-2 font-medium rounded-full flex items-center justify-center space-x-2 hover:bg-gray-200 w-full sm:w-auto text-sm">
                <span>Startups</span>
                <FiArrowRight className="text-black" />
              </Button>
            </a>
          </div>
        </div>
      </Section>
     
    </div>
  );
};

export default IncubatorHeroCohort2;
