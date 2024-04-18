import React from "react";
import { ReactNode } from "react";
import Header from "../ui/Cad/Header";
import Footer from "../Footer";
import DevelopmentSection from "../DevelopmentSection";

interface LayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>;
      <Footer/>
      <DevelopmentSection />
    </div>
  );
};

export default RootLayout;
