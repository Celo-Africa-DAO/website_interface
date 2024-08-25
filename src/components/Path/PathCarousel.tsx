import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PathCard from "./PathCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

interface Project {
    id: number;
    name?: string;
    position?: string;
    image: string;
    url?: string;
    text?: string;
}
interface ProjectsProps {
  projects: Project[];
  tab?: string;
}

export function PathCarousel({ projects, tab }: ProjectsProps) {
  const twoDProjects = projects.reduce((acc: Project[][], obj, index) => {
    if (index % 2 === 0) {
      acc = [...acc, [obj]] ;
    } else {
      acc[acc.length - 1]  = [...acc[acc.length - 1], obj];
    }
    return acc;
  }, []);

  // console.log(twoDProjects)

  return (
    <Carousel className="">
      <CarouselContent project={true}>

        {twoDProjects.map((_projects: Project[], index)=> (
          <CarouselItem
            project={true}
            key={index}
            className="basis-[100%] xsm:basis-[70%] sm:basis-[45%] md:basis-[30%] lg:basis-[25%] mb-4"
          >
            {_projects.map((project) => (
              <div className="flex flex-col">
                <ProjectCard project={project} />
              </div>
            ))}
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex gap-2 mt-10 justify-end">
        <CarouselPrevious className="static h-10 w-10 bg-transparent border-gray-300 hover:bg-Celo-AD-yellow">
          <ChevronLeft size={28} className="text-black" />
        </CarouselPrevious>
        <CarouselNext className="static h-10 w-10 bg-transparent border-gray-300 hover:bg-Celo-AD-yellow">
          <ChevronRight size={28} className="text-black" />
        </CarouselNext>
      </div>
    </Carousel>
  );
}
