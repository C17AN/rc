import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div className="flex flex-col overflow-hidden">
        <SearchBar />
        <span>{children}</span>
      </div>
    </div>
  );
};

export default DefaultLayout;
