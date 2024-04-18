import React, { useState } from "react";
import EventCard from "../Card/EventCard";
import Section from "@/components/layouts/Section";
import CorouselCard from "../Card/CorouselCard";

export interface Events {
    name: string;
    location: string;
    date: string;
   
  }

interface UpcomingEventProps {
  events: Events[];
}

export default function Corousel() {
    const events = [
        {
          name: "About",
          location: "The celo Africa DAO is a community of builders and enthusiats uniting to propel the adoption of Celo and blockchain technology across the Africa continent ",
          date: "learn about who we are and our innovative movement",
          
        },
        {
            name: "Focus Areas",
            location: "The Celo Africa DAO prioritizes three main areas of focus: establishing an incubator program, attracting developer talent, and enhancing brand visibility throughout the continent",
            date: "learn about who we are and our innovative movement",
            
           
          },
          {
            name: "Codejam",
            location: "Once a month, we organize developer meet-ups to cultivate a skilled pipeline for building on Celo. During these sessions, we engage in hands-on development to create practical on-chain use cases. ",
            date: "learn about who we are and our innovative movement",
            
           
          },
         
          
          
          {
              name: "University Outreach",
              location: "The celo Africa DAO is a community of builders and enthusiats uniting to propel the adoption of Celo and blockchain technology across the Africa continent ",
              date: "learn about who we are and our innovative movement",
          
             
            },
        // Add more event objects as needed
      ];
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  

  return (
    <div className="bg-Celo-AD-primary pr-0">
      <div className=" p-0 md:p-20 h-full w-full">
      
        <CorouselCard
      events={events}
      // onNext={handleNextEvent}
      
    />
        
     

      </div>
      <div className="flex  items-end">
        <div className="h-28 w-20  bg-Celo-AD-gray mr-8">

        </div>
        <div className="h-10 w-full  bg-Celo-AD-gray">
       </div>
       <div className="h-28 w-14    bg-Celo-AD-gray  mr-16">

</div>

      </div>
      
        
    </div>
    
  );
}