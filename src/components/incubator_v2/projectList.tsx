import React, { useState, forwardRef, useEffect } from 'react';
import Section from '@/components/layouts/Section';
import Image from 'next/image';
import { MdKeyboardArrowDown } from 'react-icons/md';

interface ProjectListProps {
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
}

const ProjectList = forwardRef<HTMLDivElement, ProjectListProps>(({ selectedCategory, onCategoryChange }, ref) => {
  const [sortCategory, setSortCategory] = useState(selectedCategory || 'All Projects');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Sync local state with prop
  useEffect(() => {
    if (selectedCategory) {
      setSortCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const projects = [
    {
      id: 1,
      name: "QuestPanda",
      description: " QuestPanda is a Create-to-Earn platform that rewards creators with on-chain incentives for producing and sharing video conten",
      category: " Collaterized lending",
      logo: "/logos/quest2.png",
      website: "https://questpanda.xyz/"
    },
    {
      id: 2,
      name: "Sovseas",
      description: "T Decentralized platform on Celo where  communities support projects through campaigns powered by demographic voting ,and multi-token governace ",
      category: "Governance",
      logo: "/logos/sov.png",
      website: "http://sovseas.xyz/"
    },
    {
      id: 3,
      name: "Vortex",
      description: " Its a Web3 gaming community platform that integrates Web2 and Web3 gamers with on-chain rewards",
      category: "Gaming",
      logo: "/logos/votex.png",
      website: "https://vortex-client-rosy.vercel.app/"
    },
    {
      id: 4,
      name: "Syarpa",
      description: " Syarpa serves as a financial platform that bridges crypto and fiat, providing a seamless on/off-ramp for individuals and businesses to execute low-cost, cross-border payments.",
      category: "Investment",
      logo: "/logos/sapyra.png",
      website: "https://www.syarpa.com/"
    },
    {
      id: 5,
      name: "Africycle",
      description: " A Web3 platform creating on-chain incentives for environmental action, allowing users to earn cUSD stablecoins for every unit of waste they collect and recycle",
      category: "ReFi",
      logo: "/logos/Africycle.png",
      website: "https://africycle.vercel.app/"
    },
    {
      id: 6,
      name: "Nerospace",
      description: "Nerospace is a decentralized freelancing platform that uses blockchain to create a secure and transparent marketplace for freelancers and businesses.",
      category: "Marketplace",
      logo: "/logos/Nerospace.png",
      website: "https://nerospace-one.vercel.app/"
    },
    {
      id: 7,
      name: "Strimz",
      description: "Strimz is a DeFi solution designed to automate crypto payroll and subscription payments",
      category: "Payments",
      logo: "/logos/strim211.png",
      website: "https://www.strimz.xyz/"
    },
    {
      id: 8,
      name: "Zella Africa",
      description: "Zella.Africa gives you access to an easy and secure way of turning your digital assets into fiat instantly",
      category: "Payments",
      logo: "/logos/zella.png",
      website: "https://zella.africa/"
    },
    {
      id: 9,
      name: "Exion",
      description: "Buy, send and spend your stablecoins on day to day utilities and transactions all from your wallet.",
      category: "Payments",
      logo: "/logos/Exion.png",
      website: "https://www.exion.finance/"
    },
    {
      id: 10,
      name: "cKash",
      description: " cKash is an app that simplifies global transactions with a secure, user-friendly experience for seamless crypto and fiat payments.",
      category: "Payments",
      logo: "/logos/ckash.png",
      website: "https://ckash.app/"
    },
    {
      id: 11,
      name: "3 Wheeler Bike Club",
      description: " A community finance platform powering Africa's 3 wheeler economy",
      category: "RWA",
      logo: "/logos/3wch.png",
      website: "https://3wb.club/"
    }
  ];

  const categories = ['All Projects', 'Payments', 'Marketplace', "Governance", " Collaterized lending", 'Gaming', 'Investment', 'ReFi'];

  // Top 5 projects as specified
  const top5ProjectNames = ['Strimz', '3 Wheeler Bike Club', 'QuestPanda', 'Syarpa', 'Sovseas'];

  const filteredProjects = sortCategory === 'All Projects' 
    ? projects 
    : sortCategory === 'Top 5 Projects'
    ? projects.filter(project => top5ProjectNames.includes(project.name))
    : projects.filter(project => project.category === sortCategory);

  return (
    <div ref={ref} className="bg-Celo-AD-primary py-20">

        <Section>
        <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center mb-40 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-Celo-AD-gray rounded-lg flex items-center justify-center hidden">
              <div className="w-8 h-8 bg-Celo-AD-slate-green rounded "></div>
            </div>
            <h2 className="font-gt-alpina-trial text-3xl md:text-4xl font-bold text-[#0C0C0C]">
              Incubator Projects
            </h2>
          </div>
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-transparent text-[#0C0C0C] border border-Celo-AD-gray px-6 py-3 rounded-3xl text-sm font-medium flex items-center gap-2 bg-white"
            >
              Sort by Category
              <MdKeyboardArrowDown size={16} />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-Celo-AD-gray z-50">
                <div className="py-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSortCategory(category);
                        onCategoryChange?.(category);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-[#0C0C0C] hover:bg-Celo-AD-gray/30 transition-colors font-medium ${
                        sortCategory === category ? 'bg-Celo-AD-yellow text-[#090808]' : ''
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-0">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex items-center p-6 border-t border-b border-[#0C0C0C] border-opacity-20 transition-colors ${
                project.website 
                  ? 'hover:bg-Celo-AD-gray/10 cursor-pointer' 
                  : 'cursor-default'
              }`}
              onClick={() => {
                if (project.website) {
                  window.open(project.website, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <div className="w-12 h-12 mr-4 flex-shrink-0">
                <Image 
                  src={project.logo} 
                  alt={project.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 px-20">
                <h3 className="font-gt-alpina-trial text-thin font-light text-[#0C0C0C] mb-2">
                  {project.name}
                </h3>
                <p className="text-[#565656] text-sm mb-3 w-1xl">
                  {project.description}
                </p>
                <span className="inline-block bg-Celo-AD-gray text-[#0C0C0C] px-3 py-1 rounded-full text-xs font-medium">
                  {project.category}
                </span>
              </div>
              <div className="ml-4">
                {project.website ? (
                  <Image 
                    src="/arrow.png" 
                    alt="Arrow" 
                    width={20} 
                    height={20} 
                    className="opacity-60 hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <div className="w-5 h-5 opacity-30">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 10a1 1 0 011.414 0L10 6.414l3.586 3.586a1 1 0 11-1.414 1.414L10 8.414l-3.586 3.586A1 1 0 015 10z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
        </Section>
      
    </div>
  );
});

ProjectList.displayName = 'ProjectList';

export default ProjectList;