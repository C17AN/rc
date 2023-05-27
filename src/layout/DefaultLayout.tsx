import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div className="bg-red-200" style={{ width: "100%" }}>
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;
