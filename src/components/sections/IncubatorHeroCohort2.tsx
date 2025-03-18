import React from "react";
import { Button } from "../ui/button";
import { FiArrowRight } from "react-icons/fi";
import Section from "../layouts/Section";

const IncubatorHeroCohort2 = () => {
  return (
    <div className="relative h-screen w-full flex items-center mt-[45px]">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('/IncubatorBackground.png')", 
          transform: "scaleX(-1)"
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-5"></div>
      
      <Section>
        <div className="relative z-20 flex flex-col justify-center h-full text-white px-6 sm:px-10 lg:px-32 text-center sm:text-left">
          <h1 className="font-GT-Alpina text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-extralight leading-[100%]">
            Incubator Program
          </h1>
          <h2 className="font-GT-Alpina text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-extralight leading-[100%] italic mt-2">
            - Cohort II
          </h2>

          <p className="text-lg sm:text-xl max-w-xl mx-auto sm:mx-0 mt-6 text-gray-200">
            Our Pan-African Incubator Program is a dynamic 10-week initiative
            dedicated to empowering early-stage founders across the African continent.
          </p>

          <div className="flex flex-col sm:flex-row justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdRgbeFNKulww_-8w-LsK7-3lAR72NUVCinvyr2MUHW9MfsIg/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#FCFF52] text-black px-6 py-3 font-semibold rounded-full hover:bg-yellow-500">
                Register Now
              </Button>
            </a>
            <a
              href="https://docs.google.com/document/d/1siNoe31HdAb-zr5jKn2-cwDpWv3OQ9HjvOoGB4zJDHc/edit?tab=t.0#heading=h.5zn9g94k4v2c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#E7E3D4] text-black px-6 py-3 font-semibold rounded-full flex items-center space-x-2 hover:bg-gray-200">
                Sponsorship
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
