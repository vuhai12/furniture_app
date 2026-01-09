import Hero from "@components/Hero";
import MainLayout from "../../layout/MainLayout";
import Section1 from "@components/Section1";
import Section2 from "@components/Section2";
import Section3 from "@components/Section3";
import Section4 from "@components/Section4";
import Section5 from "@components/Section5";
import ScrollButton from "@components/ScrollButton";

const HomePage = () => {
  return (
    <>
      <MainLayout>
        <div className="xl:gap-[150px] mt-[100px] flex flex-col gap-[100px] parent">
          <div className="md:section md:short" id="home">
            <Hero />
          </div>
          <div className="md:short md:section" id="service">
            <Section1 />
          </div>
          <div className="md:short md:section" id="vision">
            <Section2 />
          </div>
          <div className="md:short md:section" id="process">
            <Section3 />
          </div>
          <div className="md:section md:short" id="testimonials">
            <Section4 />
          </div>
          <div className="">
            <Section5 />
          </div>
        </div>
      </MainLayout>
      <ScrollButton />
    </>
  );
};

export default HomePage;
