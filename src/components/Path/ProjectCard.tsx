

import Image from 'next/image';
import React from 'react';
import { FaCircleChevronRight } from 'react-icons/fa6';

const ProjectCard = ({ project }: any) => {
  return (
    <div className="m-2">
      <div className="w-full md:max-w-[532px] h-auto md:h-[319px] border-[0.5px] border-gray-600">
        <div className='flex justify-between p-6'>
            <Image className='w-[100px] md:w-[159px] h-[30px] md:h-[50px]' width={159} height={50} src={project.image} alt={project.name} />

            <div className='text-black'>
                <a href={project.url} target='_blank' className='flex gap-2 justify-center items-center hover:opacity-55'>Know more <FaCircleChevronRight /></a>
            </div>
        </div>

        <div className="w-full md:max-w-[480px] h-auto pl-[20px] md:pl-[30px] p-4">
          <h3 className="text-[24px] md:text-[32px] leading-6 md:leading-8 font-normal inter text-gray-800 mb-2">{project.name}</h3>
          {project.position && <p className="text-gray-600 mb-10">{project.position}</p>}
          {project.text && <p className="text-sm md:text-[20px] leading-[25px] font-normal inter w-full md:max-w-[480px] h-auto md:h-[156px] text-[#655947]">{project.text}</p>}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;