import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TeamCarousel } from "./TeamCarousel";

const Team = () => {
  const multiSig = [
    {
      id: 1,
      name: "Daniel Kimotho",
      position: "Ecosystem Lead at CELO ",
      image: "/img/dan-kimotho.webp",
      twitter: "https://twitter.com/0xdanielK",
      linkedIn: "https://www.linkedin.com/in/daniel-kimotho-2a43324a",
    },
    {
      id: 2,
      name: "Umar Sebyala",
      position: "Local Event Lead",
      image: "/img/umar-sebyala.webp",
      twitter: "https://www.x.com/umar_sebyala",
      linkedIn: "https://www.linkedin.com/in/umarsebyalabukenya",
    },
    {
      id: 3,
      name: "Chuta chime",
      position: "Ecosystem Lead at CELO ",
      image: "/img/ali.svg",
      twitter: "member3",
      linkedIn: "654321987",
    },
    {
      id: 4,
      name: "Cyndie",
      position: "Ecosystem Devrel Lead",
      image: "/img/ali.svg",
      twitter: "member4",
      linkedIn: "321654987",
    },
  ];

  const coreContributors = [
    {
      id: 1,
      name: "Charles Mabwa",
      position: "Kenya Comm. Manager ",
      image: "/img/charles-mabwa.webp",
      twitter: "https://twitter.com/mabwacharles",
      linkedIn: "https://www.linkedin.com/in/charles-mabwa/",
    },
    {
      id: 2,
      name: "Oluwaseyi Abolaji",
      position: "Nigeria Comm. Manager",
      image: "/img/oluwaseyi-abolaji.webp",
      twitter: "https://twitter.com/Oluwaseyi_7",
      linkedIn: "https://www.linkedin.com/in/oluwaseyi-abolaji/",
    },
    {
      id: 3,
      name: "Hove Blessing",
      position: "S.Africa Comm. Manager",
      image: "/img/blessing-hove.webp",
      twitter: "https://www.x.com/blssngx",
      linkedIn: "https://www.linkedin.com/in/blessing-hove",
    },
    {
      id: 5,
      name: "A Brian",
      position: "Uganda University Lead",
      image: "/img/ali.svg",
      twitter: "member1",
      linkedIn: "123456789",
    },
    {
      id: 6,
      name: "Adam Saheed",
      position: "Nigeria University Lead",
      image: "/img/ali.svg",
      twitter: "member2",
      linkedIn: "987654321",
    },
    {
      id: 7,
      name: "Ronald Nzioki",
      position: "Kenya University Lead",
      image: "/img/ali.svg",
      twitter: "member3",
      linkedIn: "654321987",
    },
    {
      id: 8,
      name: "Jordan Muthemba",
      position: "Kenya Technical Amb.",
      image: "/img/jordan-muthemba.webp",
      twitter: "https://twitter.com/type_jordan",
      linkedIn: "https://www.linkedin.com/in/jordan-muthemba/",
    },
    {
      id: 9,
      name: "Mukunde Brisa",
      position: "Uganda Technical Amb.",
      image: "/img/brisa-mukunde.webp",
      twitter: "https://twitter.com/saint_brisa",
      linkedIn: "https://www.linkedin.com/in/mukundebrisa/",
    },
    {
      id: 10,
      name: "Naheem Oloyede",
      position: "Nigeria Intermediate Amb.",
      image: "/img/oloyede-naheem-aderayo.webp",
      twitter: "https://twitter.com/OloyedeNaheem",
      linkedIn: "https://www.linkedin.com/in/naheem-oloyede/",
    },
    {
      id: 11,
      name: "Soliu Ahmad",
      position: "Nigeria Intermediate Amb.",
      image: "/img/soliu-ahmad.webp",
      twitter: "https://twitter.com/Ahmadsoliu1",
      linkedIn:
        "https://www.linkedin.com/in/soliu-ahmad-31b049240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      id: 12,
      name: "Khadija Musa",
      position: "Nigeria Intermediate Amb.",
      image: "/img/ali.svg",
      twitter: "member4",
      linkedIn: "321654987",
    },
    {
      id: 13,
      name: "MUhindo Galien",
      position: "Uganda Intermediate Amb.",
      image: "/img/galien-codes.webp",
      twitter: "https://twitter.com/GalienMuhindo",
      linkedIn: "https://www.linkedin.com/in/muhindo-galien/",
    },
    {
      id: 14,
      name: "Ronex Ondimu",
      position: "Kenya Intermediate Amb.",
      image: "/img/ronex-ondimu.webp",
      twitter: "https://twitter.com/ronexondimu",
      linkedIn: "https://www.linkedin.com/in/ronex-ondimu/",
    },
  ];

  const partners = [
    {
      id: 1,
      name: "Aliu Musa",
      position: "Ecosystem Lead at CELO ",
      image: "/img/ali.svg",
      twitter: "member1",
      linkedIn: "123456789",
    },
    {
      id: 2,
      name: "Daniel Kimoto",
      position: "Ecosystem Lead at CELO ",
      image: "/img/ali.svg",
      twitter: "member2",
      linkedIn: "987654321",
    },
    {
      id: 3,
      name: "Chuta chime",
      position: "Ecosystem Lead at CELO ",
      image: "/img/ali.svg",
      twitter: "member3",
      linkedIn: "654321987",
    },
    {
      id: 4,
      name: "Umar Aliu",
      position: "Ecosystem Lead at CELO ",
      image: "/img/ali.svg",
      twitter: "member4",
      linkedIn: "321654987",
    },
  ];

  return (
    <div className="flex flex-col  gap-8 bg-[#FCF6F1] px-5 sm:px-14 md:px-20 lg:px-24 pb-10 sm:pb-16  overflow-hidden ">
      <div>
        <h3 className="text-[40px] md:text-[64px] font-gt-alpina-trial font-thin max-md:mt-8">
          Team and Partners
        </h3>
      </div>
      <Tabs defaultValue="multisig">
        <TabsList className="bg-transparent mb-8">
          <TabsTrigger
            className="border-l flex flex-col  border-gray-400 rounded-none px-4 md:px-8"
            value="multisig"
          >
            <span className="block">Multisig </span>
            <span className="block">Holders</span>
          </TabsTrigger>
          <TabsTrigger
            className="border-l flex flex-col  border-gray-400 rounded-none px-4 md:px-8"
            value="contributor"
          >
            <span className="block">Core </span>
            <span className="block">Contributors</span>
          </TabsTrigger>
          <TabsTrigger
            className="border-l flex flex-col  border-gray-400 rounded-none px-4 md:px-8"
            value="partners"
          >
            <span className="block">Ecosystem </span>
            <span className="block">Partners</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="multisig">
    
          <div>
            <TeamCarousel members={multiSig} />
          </div>
        </TabsContent>
        <TabsContent value="contributor">
          
          <div>
            <TeamCarousel members={coreContributors} />
          </div>
        </TabsContent>
        <TabsContent value="partners">
          <div>
            <TeamCarousel members={partners} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Team;
