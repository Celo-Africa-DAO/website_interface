import EventHero from "@/components/events/EventHero";
import PartnerWithUsSection from "@/components/PartnerWithUsSection";
import { ExploreAllEvents } from "@/components/events/ExploreAllEvents";

const EventsPage = () => {
  return (
    <div className=" bg-Celo-AD-primary text-[#0C0C0C]">
      <EventHero />
      <ExploreAllEvents />
      <PartnerWithUsSection />
    </div>
  );
};

export default EventsPage;
