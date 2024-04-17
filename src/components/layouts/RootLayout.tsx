import React from "react";
import { ReactNode } from "react";
import Header from "../ui/Cad/Header";

interface LayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>;
    </div>
  );
};

export default RootLayout;
