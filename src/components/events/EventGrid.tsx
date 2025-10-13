import React, { useState } from "react";
import { Card, CardHeader, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import VideoThumbnail from "../ui/VideoThumbnail";

export interface Event {
  id: number;
  name: string;
  location: string;
  date: string;
  imageUrl: string;
  type: string; // "image" or "video"
  videoUrl?: string; // Only for videos
}

interface Props {
  events: Event[];
}

const sortFunctions = {
  name: (a: Event, b: Event) => a.name.localeCompare(b.name),
  date: (a: Event, b: Event) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  location: (a: Event, b: Event) => a.location.localeCompare(b.location),
};

const EventGrid: React.FC<Props> = ({ events }) => {
  const [sortBy, setSortBy] = useState<"date" | "name" | "location">("date");

  const sortedEvents = [...events].sort(sortFunctions[sortBy]);

  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedEvents.map((event) => (
          <div key={event.id}>
            {event.type === "video" && event.videoUrl ? (
              <VideoThumbnail
                title={event.name}
                location={event.location}
                date={event.date}
                onClick={() => {
                  // Handle video click - could open modal or navigate to video page
                  console.log('Video clicked:', event.videoUrl);
                }}
              />
            ) : (
              <Card className="border border-gray-200 hover:shadow-md transition-all bg-white">
                <CardHeader className="font-gt-alpina pb-4">
                  <h3 className="text-lg font-bold text-black mb-2">{event.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{event.location}</p>
                  <CardDescription className="text-sm text-gray-600">{event.date}</CardDescription>
                </CardHeader>
                <CardContent className="p-0 px-6 pb-6">
                  <Image
                    src={event.imageUrl}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg bg-black"
                    alt={event.name}
                  />
                </CardContent>
              </Card>
            )}
          </div>
        ))}
      </div>
  );
};

export default EventGrid;
