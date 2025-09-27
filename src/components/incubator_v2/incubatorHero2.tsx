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
          
        <div className="w-full max-w-4xl text-start text-[#0C0C0C] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="">
          <h1 className="font-GT-Alpina font-thin text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-start leading-tight">
            Meet the Innovators of the Celo Incubator Program- Cohort II
          </h1>
          <p className="text-[#565656] text-sm sm:text-lg md:text-xl max-w-3xl mb-8 text-start mt-4">
            Discover 13 groundbreaking projects from across Africa solving real-world problems using blockchain. Powered by Celo Africa DAO.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full pb-1">
            <Button 
              onClick={onExploreProjects}
              className="bg-[#FCFF52] hover:bg-[#FCFF52]/75 text-[#090808] px-6 py-3 sm:px-8 sm:py-4 rounded-[100px] text-sm sm:text-base font-semibold w-full sm:w-auto"
            >
              Explore All Projects
            </Button>
            <button 
              onClick={onViewTop5Projects}
              className="bg-transparent border border-[#0C0C0C] text-[#0C0C0C] px-6 py-3 sm:px-8 sm:py-4 border-none text-sm sm:text-base font-semibold transition-colors w-full sm:w-auto"
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