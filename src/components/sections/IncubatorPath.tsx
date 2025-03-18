import React from "react";
import { useRouter } from "next/router";
import Path from '../Path/Path'

const IncubatorPath = () => {
  const router = useRouter();

  const handleProjectsClick = () => {
    router.push("/projects"); 
  };

  const handleMentorsClick = () => {
    router.push("/mentors"); 
  };

  return (
    <>
   

      <div>
     <Path />
      </div>
      
    </>
    
  );
};

export default IncubatorPath;