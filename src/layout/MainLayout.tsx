import { type ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="fixed top-0 bg-white w-[100%] z-[30] border-b-[1px] border-gray-200">
        <Header />
      </div>
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
