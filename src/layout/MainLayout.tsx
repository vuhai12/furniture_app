import React, { useEffect, useState, type ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="fixed top-0 bg-white w-[100%] z-[30] border-b-[1px] border-gray-200">
        <header className="mx-auto xl:max-w-[1200px] md:px-[100px]  maxMd:px-[20px]">
          <Header />
        </header>
      </div>
      <div className="mx-auto relative xl:max-w-[1200px] md:px-[100px]  maxMd:px-[20px] ">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
