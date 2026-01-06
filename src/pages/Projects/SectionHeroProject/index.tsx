import { useEffect, useState } from "react";
import imageBg1 from "@assets/Office/bg1.jpeg";
import imageBg2 from "@assets/Office/bg2.jpeg";
import imageBg3 from "@assets/Office/bg3.avif";
import classNames from "classnames";

const dataSectionHero = [
  {
    id: 1,
    image: imageBg1,
    title: "Modern Living",
    des: "We create stylish and functional living spaces that combine modern aesthetics with everyday comfort, making every home truly inspiring.",
  },
  {
    id: 2,
    image: imageBg2,
    title: "Elegant Comfort",
    des: "Our designs blend beauty and comfort seamlessly, crafting interiors that are both visually stunning and welcoming to live in",
  },
  {
    id: 3,
    image: imageBg3,
    title: "Complete Solutions",
    des: "From initial concept to final execution, we deliver full-service interior solutions that turn your vision into a home that is luxurious and personal.",
  },
];

const SectionHeroProject = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((pre) => (pre + 1) % dataSectionHero.length);
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="h-[300px] rounded-[5px] relative overflow-hidden ">
      <div
        className="flex relative w-full h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {dataSectionHero.map((item) => {
          return (
            <div className="flex-shrink-0 h-full w-full relative">
              <img src={item.image} className="h-full object-cover w-[100%]" />

              <div className="absolute inset-0 bg-black bg-opacity-50" />
              <div className="max-w-[500px] absolute top-[60px] left-[50px] text-white flex flex-col gap-[15px]">
                <h3 className="text-[45px] font-semibold line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-[15px] line-clamp-2">{item.des}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-[20px] absolute bottom-[30px] left-1/2 -translate-x-1/2">
        {dataSectionHero.map((_, index) => {
          return (
            <div
              className={classNames(
                "h-[5px]  w-[50px]",
                index == currentSlide ? "bg-white" : "bg-gray-500"
              )}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionHeroProject;
