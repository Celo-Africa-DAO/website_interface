import React, { useRef, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const ImpactSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const stats = [
    {
      number: 450,
      suffix: "k",
      prefix: "$",
      description: "Raised",
      subDescription: "For African Projects"
    },
    {
      number: 3,
      suffix: "M+",
      description: "Transactions Processed",
      subDescription: "On Celo Network"
    },
    {
      number: 5,
      suffix: "+",
      description: "Countries Reached",
      subDescription: "Across Africa"
    }
  ];

  return (
    <div ref={ref} className="w-full py-16 md:py-24 bg-Celo-AD-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-gt-alpina-trial font-light text-[#0C0C0C] mb-4">
            Our <span className="italic">Impact</span>
          </h2>
          <p className="text-[#565656] font-Inter text-base md:text-lg max-w-2xl mx-auto">
            Empowering innovation and growth across the African continent through blockchain technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative text-center cursor-pointer"
            >
              {/* Main stat number */}
              <div className="mb-4">
                <span className="text-4xl md:text-5xl lg:text-6xl font-gt-alpina-trial font-light text-Celo-AD-dark-green group-hover:text-Celo-AD-slate-green transition-colors duration-300">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.number}
                      duration={3}
                      prefix={stat.prefix || ""}
                      suffix={stat.suffix || ""}
                      separator=","
                    />
                  ) : (
                    `${stat.prefix || ""}0${stat.suffix || ""}`
                  )}
                </span>
              </div>

              {/* Description */}
              <div className="mb-2">
                <h3 className="text-lg md:text-xl font-Inter font-medium text-[#0C0C0C] group-hover:text-Celo-AD-dark-green transition-colors duration-300">
                  {stat.description}
                </h3>
              </div>

              {/* Sub description */}
              <div className="mb-4">
                <p className="text-sm md:text-base text-[#565656] font-Inter">
                  {stat.subDescription}
                </p>
              </div>

              {/* Animated underline */}
              <div className="relative">
                <div className="h-0.5 bg-Celo-AD-gray transition-all duration-300"></div>
                <div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-Celo-AD-slate-green transition-all duration-300 ease-out origin-center scale-x-0 group-hover:scale-x-100"
                  style={{ width: '60%' }}
                ></div>
              </div>

              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-Celo-AD-gray/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Additional decorative elements */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-[#565656] font-Inter text-sm">
            <div className="w-2 h-2 bg-Celo-AD-slate-green rounded-full"></div>
            <span>Building the future of Web3 in Africa</span>
            <div className="w-2 h-2 bg-Celo-AD-slate-green rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
