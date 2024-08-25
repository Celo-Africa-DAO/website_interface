// import React, { useState } from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { PathCarousel } from "./PathCarousel";
// import PathGrid from "./PathGrid";
// import Section from "../layouts/Section";

// const Path = () => {
 
//   const project = [
//     {
//       id: 1,
//       image: "/img/peerpesalogo.svg",
//       url: "",
//       name: "PeerPesa",
//       text: "Connecting Africa Through P2P Trading using cUSD.",
//     },
//     {
//       id: 2,
//       image: "/img/carusimage.svg",
//       url: "",
//       name: "Carus Recycling",
//       text: "A decentralized recycling platform that rewards in cUSD.",
//     },
//     {
//       id: 3,
//       image: "/img/creativelistlogo.svg",
//       url: "",
//       name: "Creative List",
//       text: "CreativeList is an online marketplace that helps freelance creatives in Kenya get access to reliable opportunities to sell their expertise and portfolios.",
//     },
//     {
//       id: 4,
//       image: "/img/nexuspayimage.svg",
//       url: "",
//       name: "NexusPay",
//       text: "A blockchain-based financial platform that simplifies and stabilizes money transactions in Africa using mobile numbers and stablecoins, making financial services accessible and efficient both online and offline.",
//     },
//     {
//       id: 5,
//       image: "/img/brainiac.svg",
//       url: "",
//       name: "BrainiacWiz",
//       text: "is a decentralized quiz game built on the Ethereum blockchain, allowing players to test their knowledge across various topics in a secure and transparent environment while winning great prices.",
//     },
//     {
//       id: 6,
//       image: "/img/esusuimage.svg",
//       url: "",
//       name: "Esusu",
//       text: "Harnessing the power of community savings.",
//     },
//     {
//       id: 7,
//       image: "/img/celogiftimage.svg",
//       url: "",
//       name: "Celo Gifty",
//       text: "A blockchain-powered solution integrated with MiniPay, enabling seamless purchase and secure gifting of digital gift cards.",
//     },

//     {
//       id: 8,
//       image: "/img/zsalesimage.svg",
//       url: "",
//       name: "Zsales",
//       text: "Multichain IDO/IGO/Presales Crypto Launchpad & DEX.",
//     },

//     {
//       id: 9,
//       image: "/img/paylinkimage.svg",
//       url: "",
//       name: "Paylink",
//       text: "PayLink leverages Celo blockchain technology to revolutionize cross-border payments by providing a decentralized, efficient, and transparent solution with lower fees and faster processing times.",
//     },

//     {
//       id: 10,
//       image: "/img/earthfi.svg",
//       url: "https://explorer.gitcoin.co/#/collections/bafkreictm77sawjxaunll2itm45vykykgbripng6nvkoznyn57pj5v2nmy",
//       name: "Earthfi",
//       text: "Earthfi Leveraging Web3 technology to transform plastic waste into valuable resources, promoting a regenerative economy and centralizing global plastic recycling on Celo's blockchain infrastructure.",
//     },

//     {
//       id: 11,
//       image: "/img/minicrash.svg",
//       url: "",
//       name: "Minicrash",
//       text: "A provably fair blockchain game where anyone can be the house.",
//     },

//     {
//       id: 12,
//       image: "/img/pretiumfinance.svg",
//       url: "",
//       name: "Pretium Finance",
//       text: "Revolutionizing African cross-border payments and integrating cryptocurrencies into the economic value chain.",
//     },

//     {
//       id: 14,
//       image: "/img/ajirapayimage.svg",
//       url: "",
//       name: "AjiraPay",
//       text: "Enabling access to stablecoins with mobile money across Sub-Saharan Africa.",
//     },

//     {
//       id: 2,
//       image: "",
//       url: "",
//       name: "Treasures",
//       text: "Confidentiality as a service platform, allowing Africans to securely store valuable documents such as land titles, death wills, and retrieve them when needed.",
//     },
 
  
//   ];

//   const mentor = [
//     {
//       id: 1,
//       image: "/img/dunca.svg",
//       name: "Duncan Muchangi",
//       position: "Head of BD, Fonbuk",
//     },
//     {
//       id: 2,
//       image: "/img/trevor.svg",
//       name: "Trevor Kimani",
//       position: "CEO and Co-founder AlphabloQ",
//     },
//     {
//       id: 3,
//       image: "/img/s.a.svg",
//       name: "S. A. Kakai",
//       position: "Crypto Regulation Expert",
//     },
//     {
//       id: 4,
//       image: "/img/joviaimage.svg",
//       name: "Jovan Mwesgiwa",
//       position: "Founder, Oneramp",
//     },
//     {
//       id: 5,
//       image: "/img/eliash.svg",
//       name: "Eliash Ezron",
//       position: "Co-founder, Shukuru",
//     },
//     {
//       id: 6,
//       image: "/img/james.svg",
//       name: "James Mugambi",
//       position: "COO and Co-founder, Hurupay",
//     },
//     {
//       id: 7,
//       image: "/img/adelapoimage.svg",
//       name: "Adelapo Adeagbo",
//       position: "CEO and Co-founder, Bitgifty",
//     },
//     {
//       id: 8,
//       image: "/img/joshuaimage.svg",
//       name: "Joshua c. Tebepina",
//       position: "Co-founder Bingteller",
//     },
//   ];

//   return (
//     <Section className="bg-[#E7E3D4] lg:pl-[312px]">
//       <div
//         id="team"
//         className="flex flex-col gap-8 bg-Celo-AD-Primary pb-10 sm:pb-16 overflow-hidden mx-6 xl:mx-0"
//       >
//         <div>
//           <h1 className="text-[52px] font-GT-Alpina leading-[65px] w-[1106px] h-[65px] italic font-normal text-4xl md:text-5xl text-[#000000]">
//             Path to Prosperity
//           </h1>
//         </div>
//         <Tabs defaultValue="project">
//           <TabsList className="bg-transparent space-x-4 mb-8">
//             <TabsTrigger
//               className={`data-[state=active]:bg-[#FCFF52] text-[20px] font-normal inter text-[#000000] px-[30px] py-[10px] border-[1.5px] border-gray-400 rounded-[50px]`}
//               value="project"
//             >
//               Project
//             </TabsTrigger>
//             <TabsTrigger
//               className={`data-[state=active]:bg-[#FCFF52] text-[20px] font-semibold	 text-[#000000] px-[30px] py-[10px] border-[2.5px] border-gray-300 rounded-[50px]`}
//               value="mentors"
//             >
//               Mentors
//             </TabsTrigger>
//           </TabsList>

//           <TabsContent value="project">
//             <p className="mb-12 text-lg w-[1096px] h-[102px] opacity-80 text-gray-700">
//               We are thrilled to present a series of groundbreaking projects
//               that have recently graduated from our esteemed<br></br> crypto incubator
//               program. This cohort of visionary startups is pushing the
//               boundaries of blockchain technology,<br></br> offering innovative solutions
//               across various sectors.
//             </p>
//             <div>
//               <PathCarousel projects={project} tab="project" />
//             </div>
//           </TabsContent>

//           <TabsContent value="mentors">
//             <p className="mb-12 text-lg w-[1096px] h-[102px] leading-25 opacity-80 text-gray-700">
//               We were privileged to have 8 dedicated and diverse mentors in our
//               incubator program, each playing a significant<br></br> role in the Web3
//               African ecosystem. Their diverse expertise and hands-on
//               involvement have been instrumental in<br></br> guiding and nurturing the
//               next generation of Web3 pioneers in Africa.
//             </p>
//             <div>
//               <PathGrid members={mentor} />
//             </div>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </Section>
//   );
// };

// export default Path;

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PathCarousel } from "./PathCarousel";
import PathGrid from "./PathGrid";
import Section from "../layouts/Section";

const Path = () => {
  const project = [
    {
            id: 1,
            image: "/img/peerpesalogo.svg",
            url: "https://peerpesa.co/",
            name: "PeerPesa",
            text: "Connecting Africa Through P2P Trading using cUSD.",
          },
          {
            id: 2,
            image: "/img/carusimage.svg",
            url: "http://www.carusrecycling.com/",
            name: "Carus Recycling",
            text: "A decentralized recycling platform that rewards in cUSD.",
          },
          {
            id: 3,
            image: "/img/creativelistlogo.svg",
            url: "https://www.creativelistafrica.com/",
            name: "Creative List",
            text: "CreativeList is an online marketplace that helps freelance creatives in Kenya get access to reliable opportunities to sell their expertise and portfolios.",
          },
          {
            id: 4,
            image: "/img/nexuspayimage.svg",
            url: "http://app.nexuspayapp.xyz/",
            name: "NexusPay",
            text: "A blockchain-based financial platform that simplifies and stabilizes money transactions in Africa using mobile numbers and stablecoins, making financial services accessible and efficient both online and offline.",
          },
          {
            id: 5,
            image: "/img/brainiac.svg",
            url: "https://brainiacwiz.web.app/",
            name: "BrainiacWiz",
            text: "is a decentralized quiz game built on the Ethereum blockchain, allowing players to test their knowledge across various topics in a secure and transparent environment while winning great prices.",
          },
          {
            id: 6,
            image: "/img/esusuimage.svg",
            url: "http://esusu-one.vercel.app",
            name: "Esusu",
            text: "Harnessing the power of community savings.",
          },
          {
            id: 7,
            image: "/img/celogiftimage.svg",
            url: "https://celo-gift-card-react-app.vercel.app/",
            name: "Celo Gifty",
            text: "A blockchain-powered solution integrated with MiniPay, enabling seamless purchase and secure gifting of digital gift cards.",
          },
      
          {
            id: 8,
            image: "/img/zsalesimage.svg",
            url: "http://zsales.xyz/",
            name: "Zsales",
            text: "Multichain IDO/IGO/Presales Crypto Launchpad & DEX.",
          },
      
          {
            id: 9,
            image: "/img/paylinkimage.svg",
            url: "https://paylink-ivory.vercel.app/",
            name: "Paylink",
            text: "PayLink leverages Celo blockchain technology to revolutionize cross-border payments by providing a decentralized, efficient, and transparent solution with lower fees and faster processing times.",
          },
      
          {
            id: 10,
            image: "/img/earthfi.svg",
            url: "https://explorer.gitcoin.co/#/collections/bafkreictm77sawjxaunll2itm45vykykgbripng6nvkoznyn57pj5v2nmy",
            name: "Earthfi",
            text: "Earthfi Leveraging Web3 technology to transform plastic waste into valuable resources, promoting a regenerative economy and centralizing global plastic recycling on Celo's blockchain infrastructure.",
          },
      
          {
            id: 11,
            image: "/img/minicrash.svg",
            url: "https://mini-crash.com/",
            name: "Minicrash",
            text: "A provably fair blockchain game where anyone can be the house.",
          },
      
          {
            id: 12,
            image: "/img/pretiumfinance.svg",
            url: "https://pretium.africa/",
            name: "Pretium Finance",
            text: "Revolutionizing African cross-border payments and integrating cryptocurrencies into the economic value chain.",
          },
      
          {
            id: 14,
            image: "/img/ajirapayimage.svg",
            url: "https://www.loom.com/share/c16f223baf1749599922661259e74265?sid=2b55f733-ee7e-4df3-a1df-7a46345411d2",
            name: "AjiraPay",
            text: "Enabling access to stablecoins with mobile money across Sub-Saharan Africa.",
          },
      
          {
            id: 2,
            image: "",
            url: "https://www.loom.com/share/2866ad34e3ed4e8fba506a674c454641",
            name: "Treasures",
            text: "Confidentiality as a service platform, allowing Africans to securely store valuable documents such as land titles, death wills, and retrieve them when needed.",
          },
  ];

  const mentor = [
       {
            id: 1,
            image: "/img/dunca.svg",
            name: "Duncan Muchangi",
            position: "Head of BD, Fonbuk",
          },
          {
            id: 2,
            image: "/img/trevor.svg",
            name: "Trevor Kimani",
            position: "CEO and Co-founder AlphabloQ",
          },
          {
            id: 3,
            image: "/img/s.a.svg",
            name: "S. A. Kakai",
            position: "Crypto Regulation Expert",
          },
          {
            id: 4,
            image: "/img/joviaimage.svg",
            name: "Jovan Mwesgiwa",
            position: "Founder, Oneramp",
          },
          {
            id: 5,
            image: "/img/eliash.svg",
            name: "Eliash Ezron",
            position: "Co-founder, Shukuru",
          },
          {
            id: 6,
            image: "/img/james.svg",
            name: "James Mugambi",
            position: "COO and Co-founder, Hurupay",
          },
          {
            id: 7,
            image: "/img/adelapoimage.svg",
            name: "Adelapo Adeagbo",
            position: "CEO and Co-founder, Bitgifty",
          },
          {
            id: 8,
            image: "/img/joshuaimage.svg",
            name: "Joshua c. Tebepina",
            position: "Co-founder Bingteller",
          },
  ];

  return (
    <Section className="bg-[#E7E3D4] lg:pl-[312px]">
      <div
        id="team"
        className="flex flex-col gap-8 bg-Celo-AD-Primary pb-10 sm:pb-16 overflow-hidden mx-6 xl:mx-0"
      >
        <div>
          <h1 className="text-[32px] md:text-[52px] font-GT-Alpina leading-[65px] w-full md:w-[1106px] h-[65px] italic font-normal text-[#000000]">
            Path to Prosperity
          </h1>
        </div>
        <Tabs defaultValue="project">
          <TabsList className="bg-transparent space-x-4 mb-8">
            <TabsTrigger
              className={`data-[state=active]:bg-[#FCFF52] text-[16px] md:text-[20px] font-normal inter text-[#000000] px-[20px] md:px-[30px] py-[10px] border-[1.5px] border-gray-400 rounded-[50px]`}
              value="project"
            >
              Project
            </TabsTrigger>
            <TabsTrigger
              className={`data-[state=active]:bg-[#FCFF52] text-[16px] md:text-[20px] font-semibold text-[#000000] px-[20px] md:px-[30px] py-[10px] border-[1.5px] border-gray-300 rounded-[50px]`}
              value="mentors"
            >
              Mentors
            </TabsTrigger>
          </TabsList>

          <TabsContent value="project">
            <p className="mb-12 text-base md:text-lg w-full md:w-[1096px] h-auto md:h-[102px] opacity-80 text-gray-700">
              We are thrilled to present a series of groundbreaking projects
              that have recently graduated from our esteemed crypto incubator
              program. This cohort of visionary startups is pushing the
              boundaries of blockchain technology, offering innovative
              solutions across various sectors.
            </p>
            <div>
              <PathCarousel projects={project} tab="project" />
            </div>
          </TabsContent>

          <TabsContent value="mentors">
            <p className="mb-12 text-base md:text-lg w-full md:w-[1096px] h-auto md:h-[102px] leading-25 opacity-80 text-gray-700">
              We were privileged to have 8 dedicated and diverse mentors in our
              incubator program, each playing a significant role in the Web3
              African ecosystem. Their diverse expertise and hands-on
              involvement have been instrumental in guiding and nurturing the
              next generation of Web3 pioneers in Africa.
            </p>
            <div>
              <PathGrid members={mentor} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Section>
  );
};

export default Path;

