import React, { useState } from "react";
import { Card, CardHeader, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
          <Card key={event.id} className="border border-gray-200 hover:shadow-md transition-all">
            <CardHeader className="font-gt-alpina">
              <h3 className="text-lg font-semibold">{event.name}</h3>
              <p className="text-sm font-light">{event.location}</p>
              <CardDescription className="text-xs">{event.date}</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              {event.type === "video" && event.videoUrl ? (
                <div className="aspect-video">
                  <iframe
                    src={event.videoUrl}
                    className="w-full h-full"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
              ) : (
                <Image
                  src={event.imageUrl}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                  alt={event.name}
                />
              )}
            </CardContent>
          </Card>
        ))}
      </div>
  );
};

export default EventGrid;
