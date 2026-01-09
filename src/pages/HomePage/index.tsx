import Hero from "@components/Hero";
import MainLayout from "../../layout/MainLayout";
import Section1 from "@components/Section1";
import Section2 from "@components/Section2";
import Section3 from "@components/Section3";
import Section4 from "@components/Section4";
import Section5 from "@components/Section5";
import ScrollButton from "@components/ScrollButton";
import gsap from "gsap";
import { useEffect, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

const HomePage = () => {
  const [currentXSection1, setCurrentXSection1] = useState(0);
  const [currentXSection3, setCurrentXSection3] = useState(0);
  // const location = useLocation();
  const [allowPin, _] = useState(true);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sections = gsap.utils.toArray<HTMLElement>(".short");
    const parent = document.querySelector(".parent");

    sections.forEach((section: any, i: any) => {
      ScrollTrigger.create({
        trigger: section,
        start: (self: any) => {
          // if (i === 0) return "top-=100 top";
          if (i === 0) return "top-=0 top";
          const ofset = i == 1 ? 0 : i == 3 ? 200 : 0;
          return self.previous().end + sections[i - 1].clientHeight + ofset;
        },
        end: i == 1 ? "+=1550px" : i == 3 ? "+=900px" : "+=0",
        pin: window.innerWidth > 640 && allowPin ? parent : false,
        pinSpacing: true,
        id: section.id,
        // markers: {
        //   indent: 250 * i,
        //   startColor: "red",
        //   endColor: "red",
        // },
        onUpdate: (self) => {
          const totalPx = self.end - self.start;
          const currentPx =
            window.innerWidth > 640 && allowPin ? self.progress * totalPx : 0;
          if (i === 1) setCurrentXSection1(currentPx);
          if (i === 3) setCurrentXSection3(currentPx);
        },
        onLeave: (self) => {
          if (i === 1) setCurrentXSection1(self.end - self.start);
          if (i === 3) setCurrentXSection3(self.end - self.start);
        },
      });
    });
    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <MainLayout>
        <div className="xl:gap-[150px] mt-[100px] flex flex-col gap-[100px] parent">
          <div className="md:section md:short" id="home">
            <Hero />
          </div>
          <div className="md:short md:section" id="service">
            {/* <Section1 currentX={currentXSection1} /> */}
            <Section1 />
          </div>
          <div className="md:short md:section" id="vision">
            <Section2 />
          </div>
          <div className="md:short md:section" id="process">
            {/* <Section3 currentX={currentXSection3} /> */}
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
