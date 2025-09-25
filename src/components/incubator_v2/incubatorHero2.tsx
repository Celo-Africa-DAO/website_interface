import React from 'react';
import Section from '@/components/layouts/Section'
import { Button } from '../ui/button';

interface IncubatorHero2Props {
  onExploreProjects?: () => void;
  onViewTop5Projects?: () => void;
}

const IncubatorHero2: React.FC<IncubatorHero2Props> = ({ onExploreProjects, onViewTop5Projects }) => {

  return (
    <div className="bg-Celo-AD-primary text-[#0C0C0C] pt-20">
        <Section>
          
        <div className="lg:w-[707px] md:w-[600px] w-[300px] text-start text-[#0C0C0C]">
        <div className="">
          <h1 className="font-GT-Alpina text-xl sm:text-3xl md:text-4xl lg:text-7xl text-start ">
            Meet the Innovators of the Celo Incubator Program- Cohort II
          </h1>
          <p className="text-[#565656] text-lg md:text-xl max-w-4xl mx-auto mb-8 text-start">
            Discover 13 groundbreaking projects from across Africa solving real-world problems using blockchain. Powered by Celo Africa DAO.
          </p>
          <div className="flex gap-4">
            <Button 
              onClick={onExploreProjects}
              className="bg-Celo-AD-yellow hover:bg-Celo-AD-yellow/75 text-[#090808] px-8 py-4 rounded-[100px] text-base font-semibold"
            >
              Explore All Projects
            </Button>
            <button 
              onClick={onViewTop5Projects}
              className="bg-transparent border border-[#0C0C0C] text-[#0C0C0C] px-8 py-4 border-none text-base font-semibold transition-colors"
            >
              View Top 5 Projects
            </button>
          </div>
        </div>
      </div>
        </Section>
      
    </div>
  );
};

export default IncubatorHero2;