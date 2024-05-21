import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TeamCarousel } from "./TeamCarousel";

const Team = () => {
  const multiSig = [
    {
      id: 1,
      name: "Daniel Kimotho",
      position: "Ecosystem Lead at CELO ",
      image: "/img/KDaniel.png",
      twitter: "https://twitter.com/0xdanielK",
      linkedIn: "https://www.linkedin.com/in/daniel-kimotho-2a43324a",
    },
    {
      id: 2,
      name: "Umar Sebyala",
      position: "Local Event Lead",
      image: "/img/UmarSe.png",
      twitter: "https://www.x.com/umar_sebyala",
      linkedIn: "https://www.linkedin.com/in/umarsebyalabukenya",
    },
    {
      id: 3,
      name: "Chuta chime",
      position: "Ecosystem Lead ",
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
  ];

  const coreContributors = [
    {
      id: 1,
      name: "Charles Mabwa",
      position: "Kenya Comm. Manager ",
      image: "/img/CharlesM.png",
      twitter: "https://twitter.com/mabwacharles",
      linkedIn: "https://www.linkedin.com/in/charles-mabwa/",
    },
    {
      id: 2,
      name: "Oluwaseyi Abolaji",
      position: "Nigeria Comm. Manager",
      image: "/img/AOluwaseyi.png",
      twitter: "https://twitter.com/Oluwaseyi_7",
      linkedIn: "https://www.linkedin.com/in/oluwaseyi-abolaji/",
    },
    {
      id: 3,
      name: "Hove Blessing",
      position: "S.Africa Comm. Manager",
      image: "/img/HoveB.png",
      twitter: "https://www.x.com/blssngx",
      linkedIn: "https://www.linkedin.com/in/blessing-hove",
    },
    {
      id: 5,
      name: "A Brian",
      position: "Uganda University Lead",
      image: "/img/celo-logo2.webp",
      twitter: "member1",
      linkedIn: "123456789",
    },
    {
      id: 6,
      name: "Adam Saheed",
      position: "Nigeria University Lead",
      image: "/img/celo-logo2.webp",
      twitter: "member2",
      linkedIn: "987654321",
    },
    {
      id: 7,
      name: "Ronald Nzioki",
      position: "Kenya University Lead",
      image: "/img/RonaldN.png",
      twitter: "member3",
      linkedIn: "654321987",
    },
    {
      id: 8,
      name: "Jordan Muthemba",
      position: "Kenya Technical Amb.",
      image: "/img/JordMuthe.png",
      twitter: "https://twitter.com/type_jordan",
      linkedIn: "https://www.linkedin.com/in/jordan-muthemba/",
    },
    {
      id: 9,
      name: "Mukunde Brisa",
      position: "Uganda Technical Amb.",
      image: "/img/MuBrisa.png",
      twitter: "https://twitter.com/saint_brisa",
      linkedIn: "https://www.linkedin.com/in/mukundebrisa/",
    },
    {
      id: 10,
      name: "Naheem Oloyede",
      position: "Nigeria Intermediate Amb.",
      image: "/img/NaheemO.png",
      twitter: "https://twitter.com/OloyedeNaheem",
      linkedIn: "https://www.linkedin.com/in/naheem-oloyede/",
    },
    {
      id: 11,
      name: "Soliu Ahmad",
      position: "Nigeria Intermediate Amb.",
      image: "/img/SoliuAh.png",
      twitter: "https://twitter.com/Ahmadsoliu1",
      linkedIn:
        "https://www.linkedin.com/in/soliu-ahmad-31b049240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      id: 12,
      name: "Khadija Musa",
      position: "Nigeria Intermediate Amb.",
      image: "/img/celo-logo2.webp",
      twitter: "member4",
      linkedIn: "321654987",
    },
    {
      id: 13,
      name: "MUhindo Galien",
      position: "Uganda Intermediate Amb.",
      image: "/img/MUhindo.png",
      twitter: "https://twitter.com/GalienMuhindo",
      linkedIn: "https://www.linkedin.com/in/muhindo-galien/",
    },
    {
      id: 14,
      name: "Ronex Ondimu",
      position: "Kenya Intermediate Amb.",
      image: "/img/ROndimu.png",
      twitter: "https://twitter.com/ronexondimu",
      linkedIn: "https://www.linkedin.com/in/ronex-ondimu/",
    },
    {
      id: 15,
      name: "Tajudeen Jimoh",
      position: "Content Creator",
      image: "/img/Jimoh-Tajudeen.png",
      twitter: "https://twitter.com/Jimohtj",
      linkedIn: "https://ng.linkedin.com/in/jimoh-tajudeen-640060246",
    },
    {
      id: 16,
      name: "Godwin Bassey",
      position: "UI/UX Designer",
      image: "/img/GodwinB.png",
      twitter: "https://twitter.com/TheTrueGodwin",
      linkedIn: "https://www.linkedin.com/in/godwin-bassey-278448262/",
    },
  ];

  const partners = [
    {
      id: 1,
      // name: "Aliu Musa",
      position: "Ecosystem Partner ",
      image: "/img/mento-labs-logo.svg",
      url: "https://www.mentolabs.xyz/",
    },
    {
      id: 2,
      // name: "Daniel Kimoto",
      position: "Ecosystem Partner ",
      image: "/img/HaloFi.svg",
      url: "https://www.halofi.me/",
    },
    {
      id: 3,
      // name: "Chuta chime",
      position: "Ecosystem Partner ",
      image: "/img/fonbnk.webp",
      url: "https://fonbnk.com/",
    },
    {
      id: 4,
      // name: "Umar Aliu",
      position: "Ecosystem Lead at CELO ",
      image: "/img/minipay-logo.webp",
      url: "https://www.opera.com/products/minipay",
    },
  ];

  return (
    <div
      id="team"
      className="flex flex-col  gap-8 bg-Celo-AD-Primary px-5 sm:px-14 md:px-20 lg:px-24 pb-10 sm:pb-16  overflow-hidden "
    >
      <div>
        <h2 className='font-gt-alpina-trial  text-[1.2rem] sm:text-6xl text-[#000000]'>
          Our  <span className='font-[250]'><i>team</i></span> & <span className='font-[250]'><i>Partners</i></span>
        </h2>
      </div>
      <Tabs defaultValue="multisig">
        <TabsList className="bg-transparent mb-8">
          <TabsTrigger
            className=" flex flex-col text-base rounded-none px-4 md:px-8"
            value="multisig"
          >
            Multisig Holders
          </TabsTrigger>
          <TabsTrigger
            className=" flex flex-col text-base  rounded-none px-4 md:px-8"
            value="contributor"
          >
            Core Contributors
          </TabsTrigger>
          <TabsTrigger
            className=" flex flex-col text-base rounded-none px-4 md:px-8"
            value="partners"
          >
            Ecosystem Partners
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
            <TeamCarousel tab={"partners"} members={partners} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Team;
