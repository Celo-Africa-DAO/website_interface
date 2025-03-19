import React from "react";
import { Button } from "../ui/button";
import { FiArrowRight } from "react-icons/fi";
import Section from "../layouts/Section";

const IncubatorHeroCohort2 = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center mt-5 sm:mt-8 md:mt-12 z-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/IncubatorBackground.png')", transform: "scaleX(-1)" }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <Section>
        <div className="relative z-10 flex flex-col justify-center w-full max-w-screen-lg mx-auto text-white px-8 sm:px-14 md:px-20 lg:px-28 mt-[-60px] sm:mt-[-80px] md:mt-[-100px] ml-6 sm:ml-8 md:ml-12">
          <h1 className="font-GT-Alpina text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight leading-tight">
            Incubator
          </h1>
          <h1 className="font-GT-Alpina ml-16 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight leading-tight">
             Program
          </h1>
          <h2 className="font-GT-Alpina text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight italic mt-1">
            - Cohort II
          </h2>

          <p className="text-sm sm:text-base md:text-lg max-w-lg mt-4 text-gray-200">
            Our Pan-African Incubator Program is a dynamic 10-week initiative
            dedicated to empowering early-stage founders across the African continent.
          </p>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdRgbeFNKulww_-8w-LsK7-3lAR72NUVCinvyr2MUHW9MfsIg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="bg-[#FCFF52] text-black px-4 py-2 font-medium rounded-full hover:bg-yellow-500 w-full sm:w-auto text-sm">
                Register Now
              </Button>
            </a>
            <a
              href="https://docs.google.com/document/d/1siNoe31HdAb-zr5jKn2-cwDpWv3OQ9HjvOoGB4zJDHc/edit?tab=t.0#heading=h.5zn9g94k4v2c"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="bg-[#E7E3D4] text-black px-4 py-2 font-medium rounded-full flex items-center justify-center space-x-2 hover:bg-gray-200 w-full sm:w-auto text-sm">
                <span>Sponsorship</span>
                <FiArrowRight className="text-black" />
              </Button>
            </a>
          </div>
        </div>
      </Section>
      <div className="flex justify-start items-start mt-auto">
        <div className="h-32 w-32 bg-white"></div>
      </div>
    </div>
  );
};

export default IncubatorHeroCohort2;
