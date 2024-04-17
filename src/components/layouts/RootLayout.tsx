import React from "react";
import { ReactNode } from "react";
import Header from "../ui/Cad/Header";
import Explore from "../ui/Cad/Explore";

interface LayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <Explore />
      <main>{children}</main>;
    </div>
  );
};

export default RootLayout;
