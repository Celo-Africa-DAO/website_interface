"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdChevronRight, MdFilterList } from 'react-icons/md';
import Section from '../components/layouts/Section';

const PastCohorts = () => {
  // Merged projects data organized by cohorts
  const cohortsData = [
    {
      cohort: "Cohort 1",
      year: "2024",
      projects: [
        {
          id: 1,
          name: "PeerPesa",
          description: "Connecting Africa Through P2P Trading using cUSD.",
          category: "Payments",
          logo: "/logos/PeerPesa.png",
          website: "https://peerpesa.co/",
          twitter: "https://x.com/peer_pesa"
        },
        {
          id: 2,
          name: "Carus Recycling",
          description: "A decentralized recycling platform that rewards in cUSD.",
          category: "ReFi",
          logo: "/logos/Carus.png",
          website: "https://www.waystrecycling.com/",
          twitter: "https://x.com/recycleonwayst"
        },
        {
          id: 3,
          name: "Creative List",
          description: "CreativeList is an online marketplace that helps freelance creatives in Kenya get access to reliable opportunities to sell their expertise and portfolios.",
          category: "Marketplace",
          logo: "/img/creativelistlogo.svg",
          website: "https://www.creativelistafrica.com/"
        },
        {
          id: 4,
          name: "NexusPay",
          description: "A blockchain-based financial platform that simplifies and stabilizes money transactions in Africa using mobile numbers and stablecoins.",
          category: "Payments",
          logo: "/img/nexuspayimage.svg",
          website: "http://app.nexuspayapp.xyz/"
        },
        {
          id: 5,
          name: "BrainiacWiz",
          description: "A decentralized quiz game built on the Ethereum blockchain, allowing players to test their knowledge across various topics.",
          category: "Gaming",
          logo: "/img/brainiac.svg",
          website: "https://brainiacwiz.web.app/"
        },
        {
          id: 6,
          name: "Esusu",
          description: "Harnessing the power of community savings.",
          category: "DeFi",
          logo: "/img/esusuimage.svg",
          website: "http://esusu-one.vercel.app"
        },
        {
          id: 7,
          name: "Celo Gifty",
          description: "A blockchain-powered solution integrated with MiniPay, enabling seamless purchase and secure gifting of digital gift cards.",
          category: "Payments",
          logo: "/img/celogiftimage.svg",
          website: "https://celo-gift-card-react-app.vercel.app/"
        },
      
        {
          id: 8,
          name: "Pretium Finance",
          description: "Revolutionizing African cross-border payments and integrating cryptocurrencies into the economic value chain.",
          category: "Payments",
          logo: "/logos/pretium1.png",
          website: "https://pretium.africa/",
          twitter: "https://x.com/pretiumapp?s=11&t=GcgWBsAbcIe78S7wMmleBg"
        },
        {
          id: 9,
          name: "AjiraPay",
          description: "Enabling access to stablecoins with mobile money across Sub-Saharan Africa.",
          category: "Payments",
          logo: "/img/ajirapayimage.svg",
          website: "https://www.loom.com/share/c16f223baf1749599922661259e74265?sid=2b55f733-ee7e-4df3-a1df-7a46345411d2"
        },
        {
          id: 11,
          name: "Treasures",
          description: "Confidentiality as a service platform, allowing Africans to securely store valuable documents such as land titles and death wills.",
          category: "Infrastructure",
          logo: "/img/treasures.svg",
          website: "https://www.loom.com/share/2866ad34e3ed4e8fba506a674c454641"
        }
      ]
    },
    {
      cohort: "Cohort 2",
      year: "2025",
      projects: [
        {
          id: 1,
          name: "QuestPanda",
          description: "A Create-to-Earn platform that rewards creators with on-chain incentives for producing and sharing video content.",
          category: "Social",
          logo: "/logos/questpanda.png",
          website: "https://www.questpanda.xyz/",
          twitter: "https://x.com/questpanda_xyz"
        },
        {
          id: 2,
          name: "Sovseas",
          description: "Decentralized platform where communities support projects through campaigns powered by demographic voting.",
          category: "Governance",
          logo: "/logos/sov.png",
          website: "https://sovseas.xyz/",
          twitter: "https://x.com/sovseas"
        },
        {
          id: 3,
          name: "Vortex",
          description: "A Web3 gaming community platform that integrates Web2 and Web3 gamers with on-chain rewards.",
          category: "Gaming",
          logo: "/logos/votex.png",
          website: "https://vortex-client-rosy.vercel.app/"
        },
        {
          id: 4,
          name: "Syarpa",
          description: "Financial platform that bridges crypto and fiat for seamless cross-border payments.",
          category: "Payments",
          logo: "/logos/sapyra.png",
          website: "https://www.syarpa.com/",
          twitter: "https://x.com/getsyarpa?s=21"
        },
        {
          id: 5,
          name: "Africycle",
          description: "Web3 platform creating on-chain incentives for environmental action through waste collection and recycling.",
          category: "ReFi",
          logo: "/logos/Africycle.png",
          website: "https://africycle.vercel.app/"
        },
        {
          id: 6,
          name: "Nerospace",
          description: "Decentralized freelancing platform using blockchain to create a secure marketplace for freelancers and businesses.",
          category: "Marketplace",
          logo: "/logos/Nerospace.png",
          website: "https://nerospace-one.vercel.app/"
        },
        {
          id: 7,
          name: "Strimz",
          description: "DeFi solution designed to automate crypto payroll and subscription payments.",
          category: "Payments",
          logo: "/logos/strim211.png",
          website: "https://www.strimz.xyz/",
          twitter: "https://x.com/Strimz_HQ"
        },
        {
          id: 8,
          name: "Zella Africa",
          description: "Easy and secure platform for converting digital assets into fiat instantly.",
          category: "Payments",
          logo: "/logos/zella.png",
          website: "https://zella.africa/"
        },
        {
          id: 9,
          name: "Exion",
          description: "Buy, send and spend your stablecoins on day-to-day utilities and transactions.",
          category: "Payments",
          logo: "/logos/Exion.png",
          website: "https://www.exion.finance/"
        },
        {
          id: 10,
          name: "cKash",
          description: "App that simplifies global transactions with secure, user-friendly crypto and fiat payments.",
          category: "Payments",
          logo: "/logos/ckash.png",
          website: "https://ckash.app/"
        },
        {
          id: 11,
          name: "3-Wheelers",
          description: "A community finance platform powering Africa's 3 wheeler economy.",
          category: "RWA",
          logo: "/logos/3wch.png",
          website: "https://3wb.club/",
          twitter: "https://x.com/3wbClub"
        }
      ]
    }
  ];

  // State for filters
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedCohort, setSelectedCohort] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Extract unique categories from all projects
  const categories = useMemo(() => {
    const allCategories = new Set<string>();
    cohortsData.forEach(cohort => {
      cohort.projects.forEach(project => {
        allCategories.add(project.category);
      });
    });
    return Array.from(allCategories).sort();
  }, []);

  // Filter projects based on selected filters
  const filteredProjects = useMemo(() => {
    return cohortsData
      .filter(cohort => {
        if (selectedYear !== "all" && cohort.year !== selectedYear) return false;
        if (selectedCohort !== "all" && cohort.cohort !== selectedCohort) return false;
        return true;
      })
      .map(cohort => ({
        ...cohort,
        projects: cohort.projects.filter(project => {
          const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
          const matchesSearch = searchTerm === "" || 
            project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase());
          
          return matchesCategory && matchesSearch;
        })
      }))
      .filter(cohort => cohort.projects.length > 0);
  }, [selectedYear, selectedCohort, selectedCategory, searchTerm]);

  // Count total filtered projects
  const totalProjects = useMemo(() => {
    return filteredProjects.reduce((sum, cohort) => sum + cohort.projects.length, 0);
  }, [filteredProjects]);

  return (
    <div className="min-h-screen bg-Celo-AD-primary">
      {/* Hero Section */}
      <div className="bg-[#E73D4] text-[#0C0C0C] pt-10 md:pt-20">
        <Section>
          <div className="mx-6 xl:mx- font-gt-alpina-trial">
            <div className="flex flex-col sm:flex-row justify-center md:justify-between">
              <div className="flex flex-col justify-center w-full md:w-3/5 text-center md:text-left">
                <div className="flex flex-col justify-center font-GT-Alpina text-[2.2rem] sm:text-6xl text-[#0C0C0C]">
                  <i className="-my-5 md:my-0">Past Cohorts</i>
                  <p className="ml-[10px] xs:ml-16 sm:ml-20 text-[2.2rem] sm:text-6xl">
                    {" "}
                    - Success Stories
                  </p>
                </div>

                <div className="md:hidden flex my-12 sm:mb-12 md:mb-0 text-center justify-center">
                  <Image
                    src="/CeloAfrica Roadmap.png"
                    alt="Celo_Africa_DAO"
                    className="w-100 h-80"
                    width={300}
                    height={100}
                  />
                </div>
                <p className="text-[#565656] font-Inter pb-8 md:py-8 w-full sm:w-5/6 font-sans text-base sm:text-lg">
                  Explore the innovative projects from our incubator alumni who are building the future of Web3 in Africa
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 mt-8 max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-[#0C0C0C]">
                      {cohortsData.length}
                    </div>
                    <div className="text-sm text-[#565656] mt-2">Cohorts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-[#0C0C0C]">
                      {cohortsData.reduce((sum, c) => sum + c.projects.length, 0)}
                    </div>
                    <div className="text-sm text-[#565656] mt-2">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-[#0C0C0C]">
                      {categories.length}
                    </div>
                    <div className="text-sm text-[#565656] mt-2">Categories</div>
                  </div>
                </div>
              </div>
              <div className="w-2/5 hidden md:block mb-8 sm:mb-12 md:mb-0">
                <Image
                  src="/CeloAfrica Roadmap.png"
                  alt="Celo_Africa_DAO"
                  width={300}
                  height={100}
                  className="cad"
                />
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Filters Section */}
      <section className="sticky top-0 z-40 bg-celo-AD-white border-b border-Celo-AD-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="w-full lg:w-96">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-Celo-AD-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-Celo-AD-dark-green transition-all"
              />
            </div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 items-center">
              {/* Year Filter */}
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 border border-Celo-AD-gray rounded-lg bg-white text-celo-AD-choclate focus:outline-none focus:ring-2 focus:ring-Celo-AD-dark-green"
              >
                <option value="all">All Years</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
              
              {/* Cohort Filter */}
              <select
                value={selectedCohort}
                onChange={(e) => setSelectedCohort(e.target.value)}
                className="px-4 py-2 border border-Celo-AD-gray rounded-lg bg-white text-celo-AD-choclate focus:outline-none focus:ring-2 focus:ring-Celo-AD-dark-green"
              >
                <option value="all">All Cohorts</option>
                <option value="Cohort 1">Cohort 1</option>
                <option value="Cohort 2">Cohort 2</option>
              </select>
              
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-Celo-AD-gray rounded-lg bg-white text-celo-AD-choclate focus:outline-none focus:ring-2 focus:ring-Celo-AD-dark-green"
              >
                <option value="all">All Categories</option>
                {categories.map((cat,i) => (
                  <option key={cat+""+i} value={cat}>{cat}</option>
                ))}
              </select>
              
              {/* Results Count */}
              <div className="px-4 py-2 bg-Celo-AD-gray rounded-lg text-celo-AD-slate-brown">
                {totalProjects} Projects
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-celo-AD-slate-brown text-lg">
              No projects found matching your criteria
            </div>
            <button
              onClick={() => {
                setSelectedYear("all");
                setSelectedCohort("all");
                setSelectedCategory("all");
                setSearchTerm("");
              }}
              className="mt-4 text-Celo-AD-dark-green hover:text-Celo-AD-slate-green transition-colors"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          filteredProjects.map((cohortData) => (
            <div key={cohortData.cohort} className="mb-12">
              {/* Cohort Header */}
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-2xl font-GT-Alpina font-thin text-celo-AD-choclate">
                  {cohortData.cohort}
                </h2>
                <span className="px-3 py-1 bg-Celo-AD-yellow text-celo-AD-choclate rounded-full text-sm font-semibold">
                  {cohortData.year}
                </span>
                <span className="text-celo-AD-slate-brown">
                  ({cohortData.projects.length} projects)
                </span>
              </div>
              
              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cohortData.projects.map((project) => (
                  <div
                    key={`${cohortData.cohort}-${project.id}`}
                    className="group bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-Celo-AD-gray"
                  >
                    <div className="flex flex-col h-full">
                      {/* Header with Logo */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-Celo-AD-cream flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300">
                          {project.logo ? (
                            <Image 
                              src={project.logo} 
                              alt={`${project.name} logo`} 
                              width={48} 
                              height={48} 
                              className="w-full h-full object-contain "
                            />
                          ) : (
                            <div className="w-full h-full bg-Celo-AD-gray rounded flex items-center justify-center">
                              <span className="text-celo-AD-slate-brown text-xs">Logo</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex-grow">
                          <h3 className="font-semibold text-celo-AD-choclate text-lg mb-1">
                            {project.name}
                          </h3>
                          <span className="inline-block px-2 py-1 bg-celo-AD-olive-green rounded-full text-xs text-celo-AD-slate-brown">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-sm text-celo-AD-slate-brown leading-relaxed mb-4 flex-grow">
                        {project.description}
                      </p>
                      
                      {/* Links */}
                      <div className="flex gap-3 pt-4 border-t border-Celo-AD-gray">
                        {project.website && (
                          <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs text-celo-AD-dark-green hover:text-Celo-AD-slate-green transition-colors"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10"/>
                              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                            </svg>
                            Website
                          </a>
                        )}
                        {project.twitter && (
                          <a
                            href={project.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs text-celo-AD-dark-green hover:text-Celo-AD-slate-green transition-colors"
                          >
                            <Image src="/Vector.svg" alt="Twitter" width={14} height={14} />
                            Twitter
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-celo-AD-choclate py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-GT-Alpina font-thin text-celo-AD-white mb-4">
            Join Our Next Cohort
          </h2>
          <p className="text-Celo-AD-gray mb-8">
            Be part of the next generation of innovators building on Celo
          </p>
          <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSffpxsP1KZnvd3mx41wQYNCoTQ9_Jphql3TwnZ3RluwXXnI2A/viewform?usp=header">
            <button className="bg-Celo-AD-yellow text-celo-AD-choclate px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 inline-flex items-center gap-2">
              Apply Now
              <MdChevronRight size={20} />
            </button>
          </a>
        </div>
      </section>
      </div>
    </div>
  );
};

export default PastCohorts;