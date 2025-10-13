"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "../layouts/Section";

const stages = [
  {
    title: "Onboarding",
    benefits: ["Social", "Mentorship", "Resources"],
  },
  {
    title: "Codejam Monthly workshop",
    benefits: ["Coding", "Collaboration", "Tutorials"],
  },
  {
    title: "HackersDAO",
    benefits: ["Hackathons", "Bounties", "Showcase"],
  },
  {
    title: "Incubator",
    benefits: ["Support", "Guidance", "Growth"],
  },
  {
    title: "Proof of Ship",
    benefits: ["Recognition", "Visibility", "Incentives"],
  },
  {
    title: "Proof of Impact",
    benefits: ["Impact", "Amplification", "Rewards"],
  },
  {
    title: "Accelerator",
    benefits: ["Scaling", "Funding", "Partnerships"],
  },
  {
    title: "Prezenti Grant",
    benefits: ["Funding", "Sustainability", "Expansion"],
  },
  {
    title: "And More...",
    benefits: ["Community", "Training", "Opportunities"],
  },
];

export default function DevJourney() {
  const [showAllStages, setShowAllStages] = useState(false);
  
  const visibleStages = showAllStages ? stages : stages.slice(0, 2);

  const toggleStages = () => {
    setShowAllStages(!showAllStages);
  };

  return (
    <div
      id="dev-journey"
      className="bg-Celo-AD-primary"
    >
      <Section>
        <div className="mx-6 xl:mx-0">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl text-[#0C0C0C] font-[100] font-gt-alpina-trial mb-6">
              <span className="italic font-normal">Developer</span> Road Map
            </h2>
            <p className="text-lg text-[#565656] font-Inter max-w-3xl mx-auto">
            Join the Celo Africa DAO Developer Community to grow stepby step from onboarding to scaling while gaining skills, mentorship, funding, visibility, and global opportunities, and making real impact across Africa.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8">
            {visibleStages.map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="relative flex flex-col items-center w-full"
              >
                {/* Main Node */}
                <div className="bg-Celo-AD-yellow text-[#0C0C0C] font-semibold px-6 py-3 rounded-lg shadow-lg font-Inter">
                  {stage.title}
                </div>

                {/* Diamond */}
                <div className="w-24 h-24 bg-Celo-AD-white rotate-45 mt-4 mb-4 flex items-center justify-center border-2 border-Celo-AD-slate-green shadow-md">
                  <p className="-rotate-45 font-bold text-[#0C0C0C] font-Inter text-sm">
                    {stage.title.split(" ")[0]}
                  </p>
                </div>

                {/* Benefits Nodes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 w-full max-w-4xl">
                  {stage.benefits.map((benefit, i) => (
                    <div
                      key={i}
                      className="bg-Celo-AD-gray border border-Celo-AD-slate-green text-[#0C0C0C] rounded-lg px-4 py-3 text-sm shadow font-Inter text-center"
                    >
                      {benefit}
                    </div>
                  ))}
                </div>

                {/* Arrow to next stage */}
                {idx !== visibleStages.length - 1 && (
                  <div className="mt-6 mb-2 h-8 w-1 bg-Celo-AD-slate-green"></div>
                )}
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <button
              onClick={toggleStages}
              className="bg-Celo-AD-yellow text-[#0C0C0C] px-8 py-3 rounded-full font-semibold hover:bg-Celo-AD-yellow/80 transition-colors duration-200 shadow-lg"
            >
              {showAllStages ? 'Show Less' : 'View More'}
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}