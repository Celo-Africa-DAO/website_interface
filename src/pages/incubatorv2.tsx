import React, { useRef, useState } from "react";
import IncubatorProgram from "@/components/sections/IncubatorProgram";
import IncubatorPartner from "@/components/sections/IncubatorPartner";
import IncubatorHero2 from "@/components/incubator_v2/incubatorHero2";
import Prize from "@/components/incubator_v2/prize";
import ProjectList from "@/components/incubator_v2/projectList";
import NextCohort from "@/components/incubator_v2/nextCohort";
import IncubatorComm from "@/components/sections/IncubatorComm";




const IncubatorV2 = () => {
  const projectListRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState('All Projects');

  const scrollToProjects = () => {
    setSelectedCategory('All Projects');
    projectListRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const scrollToTop5Projects = () => {
    setSelectedCategory('Top 5 Projects');
    projectListRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };
  return (
    <div className="bg-Celo-AD-primary text-[#0C0C0C]">
        <IncubatorHero2 
          onExploreProjects={scrollToProjects} 
          onViewTop5Projects={scrollToTop5Projects}
        />
        <Prize />
        <ProjectList ref={projectListRef} selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
        <NextCohort />
      
      <IncubatorComm />

    </div>
  );
};

export default IncubatorV2;