"use client";
import React, { useState } from "react";
import Section from "../layouts/Section";
import Image from "next/image";

const Team = () => {
  const [showTeamSection, setShowTeamSection] = useState(false);

  const coreContributors = [
    {
      id: 1,
      name: "Daniel Kimotho",
      position: "Ecosystem Lead at CELO",
      image: "/img/KDaniel.png",
      twitter: "https://twitter.com/0xdanielK",
      linkedIn: "https://www.linkedin.com/in/daniel-kimotho-2a43324a",
    },
    {
      id: 2,
      name: "Umar Sebyala",
      position: "Business and Community growth Lead",
      image: "/img/UmarSe.png",
      twitter: "https://www.x.com/umar_sebyala",
      linkedIn: "https://www.linkedin.com/in/umarsebyalabukenya",
    },
    {
      id: 3,
      name: "Chuta chime",
      position: "Ecosystem Lead",
      image: "/img/celo-logo2.webp",
      twitter: "member3",
      linkedIn: "654321987",
    },
    {
      id: 4,
      name: "Cynthia Kamau",
      position: "Ecosystem Devrel Lead",
      image: "/img/CyndieK.png",
      twitter: "member4",
      linkedIn: "321654987",
    },
    {
      id: 5,
      name: "Charles Mabwa",
      position: "Kenya Comm. Manager",
      image: "/img/CharlesM.png",
      twitter: "https://twitter.com/mabwacharles",
      linkedIn: "https://www.linkedin.com/in/charles-mabwa/",
    },
    {
      id: 6,
      name: "Oluwaseyi Abolaji",
      position: "Nigeria Comm. Manager",
      image: "/img/AOluwaseyi.png",
      twitter: "https://twitter.com/Oluwaseyi_7",
      linkedIn: "https://www.linkedin.com/in/oluwaseyi-abolaji/",
    },
    {
      id: 7,
      name: "Hove Blessing",
      position: "S.Africa Comm. Manager",
      image: "/img/HoveB.png",
      twitter: "https://www.x.com/blssngx",
      linkedIn: "https://www.linkedin.com/in/blessing-hove",
    },
    {
      id: 8,
      name: "A Brian",
      position: "Uganda University Lead",
      image: "/img/celo-logo2.webp",
      twitter: "member1",
      linkedIn: "123456789",
    },
    {
      id: 9,
      name: "Adam Saheed",
      position: "Nigeria University Lead",
      image: "/img/celo-logo2.webp",
      twitter: "member2",
      linkedIn: "987654321",
    },
    {
      id: 10,
      name: "Ronald Nzioki",
      position: "Incubator Program Manager",
      image: "/img/RonaldN.png",
      twitter: "member3",
      linkedIn: "654321987",
    },
    {
      id: 11,
      name: "Jordan Muthemba",
      position: "Kenya Technical Amb.",
      image: "/img/JordMuthe.png",
      twitter: "https://twitter.com/type_jordan",
      linkedIn: "https://www.linkedin.com/in/jordan-muthemba/",
    },
    {
      id: 12,
      name: "Mukunde Brisa",
      position: "Uganda Technical Amb.",
      image: "/img/MuBrisa.png",
      twitter: "https://twitter.com/saint_brisa",
      linkedIn: "https://www.linkedin.com/in/mukundebrisa/",
    },
    {
      id: 13,
      name: "Nick Hill",
      position: "SAfrica Ambassador",
      image: "/img/Nick-Hill-avatar.png",
      twitter: "https://twitter.com/NickHil64885213",
      linkedIn: "https://www.linkedin.com/in/nick-hill-12ab58b1/",
    },
    {
      id: 14,
      name: "Naheem Oloyede",
      position: "Nigeria Intermediate Amb.",
      image: "/img/NaheemO.png",
      twitter: "https://twitter.com/OloyedeNaheem",
      linkedIn: "https://www.linkedin.com/in/naheem-oloyede/",
    },
    {
      id: 15,
      name: "Khadija Musa",
      position: "Nigeria Intermediate Amb.",
      image: "/img/celo-logo2.webp",
      twitter: "member4",
      linkedIn: "321654987",
    },
    {
      id: 16,
      name: "MUhindo Galien",
      position: "Uganda Intermediate Amb.",
      image: "/img/MUhindo.png",
      twitter: "https://twitter.com/GalienMuhindo",
      linkedIn: "https://www.linkedin.com/in/muhindo-galien/",
    },
    {
      id: 17,
      name: "Ronex Ondimu",
      position: "Kenya Intermediate Amb.",
      image: "/img/ROndimu.png",
      twitter: "https://twitter.com/ronexondimu",
      linkedIn: "https://www.linkedin.com/in/ronex-ondimu/",
    },
    {
      id: 18,
      name: "Godwin Bassey",
      position: "UI/UX Designer",
      image: "/img/GodwinB.png",
      twitter: "https://twitter.com/TheTrueGodwin",
      linkedIn: "https://www.linkedin.com/in/godwin-bassey-278448262/",
    },
    {
      id: 19,
      name: "Annaelechukwu",
      position: "Community Manager",
      image: "/img/Anthony.png",
      twitter: "https://x.com/NdukaAnthonyA?t=LWJ76CPei34JTV4rthIvag&s=08",
      linkedIn: "https://www.linkedin.com/in/ndukaanthonya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      id: 20,
      name: "Ebenezer ",
      position: "Ghana Intermediate Amb",
      image: "/img/eben.png",
      twitter: "https://twitter.com/TheTrueGodwin",
      linkedIn: "https://x.com/eb3n619?s=11&t=GcgWBsAbcIe78S7wMmleBg",
    },
  ];

  const partners = [
    {
      id: 1,
      position: "Ecosystem Partner",
      image: "/img/mento-labs-logo.svg",
      url: "https://www.mentolabs.xyz/",
    },
    {
      id: 2,
      position: "Ecosystem Partner",
      image: "/img/HaloFi.svg",
      url: "https://www.halofi.me/",
    },
    {
      id: 3,
      position: "Ecosystem Partner",
      image: "/img/fonbnk.webp",
      url: "https://fonbnk.com/",
    },
    {
      id: 4,
      position: "Ecosystem Lead at CELO",
      image: "/img/minipay-logo.webp",
      url: "https://www.opera.com/products/minipay",
    },
  ];

  const toggleTeam = () => {
    if (!showTeamSection) {
      setShowTeamSection(true);
      // Scroll to team section after a brief delay to ensure it's rendered
      setTimeout(() => {
        const teamSection = document.getElementById('teamSection');
        if (teamSection) {
          teamSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      setShowTeamSection(false);
    }
  };

  return (
    <Section>
      <div
        id="team"
        className="flex flex-col gap-8 bg-Celo-AD-Primary pb-10 sm:pb-16 overflow-hidden mx-6 xl:mx-0"
      >
        {/* Hero Section */}
        <div className="bg-[#6b6856] rounded-2xl p-12 md:p-16 lg:p-20 flex flex-col lg:flex-row justify-between items-center max-w-6xl mx-auto relative overflow-visible mb-16">
          <div className="max-w-[550px] z-10 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] text-white leading-tight mb-6 font-light">
              The <span className="font-serif italic font-normal">Visionaries</span><br />
              Powering the <span className="font-serif italic font-normal">Movement</span>
            </h1>
            <p className="text-[#d4d0c8] text-lg leading-relaxed mb-10">
              Our team is a diverse network of builders, thinkers, and innovators dedicated to unlocking economic prosperity across Africa through decentralized innovation.
            </p>
            <button 
              onClick={toggleTeam}
              className="bg-[#e8e5dc] text-[#4a4a3a] px-10 py-4 rounded-full text-base font-medium hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              {showTeamSection ? 'Close Team' : 'View Team'}
            </button>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full max-w-4xl">
            {coreContributors.slice(0, 6).map((member, index) => (
              <div key={member.id} className="flex flex-col items-center">
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden ring-4 ring-white/20 shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                    priority={index < 4}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        {showTeamSection && (
          <div 
            id="teamSection" 
            className="max-w-6xl mx-auto px-5 py-16 animate-fadeIn"
          >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[48px] text-[#2c2c2c] font-light mb-4">
              Meet <span className="font-serif italic font-normal text-[#6b6856]">Our Team</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-5">
            {coreContributors.map((member) => (
              <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:transform hover:-translate-y-2 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="w-full h-40 overflow-hidden bg-gray-100 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="text-[15px] font-semibold text-[#2c2c2c] mb-1.5">
                    {member.name}
                  </div>
                  <div className="text-xs text-[#6b6856] mb-3 leading-tight min-h-[32px]">
                    {member.position}
                  </div>
                  <div className="flex gap-2 justify-center">
                    {member.twitter && member.twitter.startsWith('http') && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#6b6856] transition-colors"
                        title="Twitter"
                      >
                        <svg className="w-4 h-4 fill-[#4a4a3a] hover:fill-white transition-colors" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    )}
                    {member.linkedIn && member.linkedIn.startsWith('http') && (
                      <a
                        href={member.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#6b6856] transition-colors"
                        title="LinkedIn"
                      >
                        <svg className="w-4 h-4 fill-[#4a4a3a] hover:fill-white transition-colors" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        )}

        {/* Ecosystem Partners Section */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl max-w-4xl mx-auto text-center text-black font-GT-Alpina font-normal">
              Ecosystem Partners
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Verda Ventures */}
            <div className="flex items-center justify-center p-6 border border-gray-300 bg-white">
              <Image
                src="verda3.svg"
                alt="Verda Ventures"
                width={120}
                height={60}
                className="max-w-full h-auto"
              />
            </div>
            
            {/* Prezenti */}
            <div className="flex items-center justify-center p-6 border border-gray-300 bg-white">
              <Image
                src="/prezenti.svg"
                alt="Prezenti"
                width={120}
                height={60}
                className="max-w-full h-auto"
              />
            </div>
            
            {/* Verda Ventures */}
            <div className="flex items-center justify-center p-6 border border-gray-300 bg-white">
              <Image
                src="/celocamp.svg"
                alt="Celo Camp"
                width={120}
                height={60}
                className="max-w-full h-auto"
              />
            </div>
            
            {/* Verda Ventures */}
            <div className="flex items-center justify-center p-6 h-20 border border-gray-300 bg-white">
              <Image
                src="/img/mento-labs.svg"
                alt="mento labs"
                width={120}
                height={60}
                className="max-w-full h-auto"
              />
            </div>
            
            {/* MiniPay */}
            <div className="flex items-center justify-center p-6 h-20 border border-gray-300 bg-white">
              <Image
                src="/img/mini.webp"
                alt="minipay"
                width={180}
                height={40}
                className="max-w-[200px] max-h-[60px] object-contain"
              />
            </div>
            
            {/* Verda Ventures */}
            <div className="flex items-center justify-center p-6 h-20 border border-gray-300 bg-white">
              <Image
                src="/img/fonbnk.svg"
                alt="fonbnk"
                width={120}
                height={60}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Team;
