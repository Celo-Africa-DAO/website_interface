

import OtherEvents from "@/components/sections/HeroEvents";
import { PastEvents } from "@/components/events/pastEvents";
import DevelopmentSection from "@/components/DevelopmentSection";

export default function Home() {
  return (
    <div>
      
      <>
        <OtherEvents />
        <PastEvents/>
        <DevelopmentSection/>
       
      </>
    </div>
  );
}