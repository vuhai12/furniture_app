import { useEffect, useState } from "react";
import logo from "@assets/Footer/logo.svg";
import facebook from "@assets/Footer/facebook.svg";
import twitter from "@assets/Footer/twitter.svg";
import instar from "@assets/Footer/instar.svg";
import linked from "@assets/Footer/linked.svg";

const dataFooter = [
  {
    title: "Our Service",
    item1: "Interior design",
    item2: "Outdoor design",
    item3: "Lightning design",
    item4: "Office design",
  },
  {
    title: "About Us",
    item1: "Reviews",
    item2: "Careers",
    item3: "Pricing",
    item4: "Press inquires",
  },
  {
    title: "Contact Us",
    item1: "info@vivadecor.com",
    item2: "Design Avenue Cityville, CA 90210 United States",
  },
];

const Footer = () => {
  const [innerWidth, setInnerWidth] = useState(0);
  useEffect(() => {
    const resizeUpdate = () => {
      setInnerWidth(document.documentElement.clientWidth);
    };
    resizeUpdate();
    window.addEventListener("resize", resizeUpdate);
    return () => {
      window.removeEventListener("resize", resizeUpdate);
    };
  }, []);
  return (
    <>
      <div
        className="bg-[#1F1F1F]  "
        style={{
          width: `${innerWidth}px`,
          marginLeft: `calc(50% - ${innerWidth / 2}px)`,
        }}
      >
        <div className="flex maxMd:flex-col justify-between py-[100px] mx-auto xl:max-w-[1200px] md:px-[100px] maxMd:px-[20px]">
          <div className="flex flex-col gap-[50px] maxMd:gap-[30px]">
            <img
              src={logo}
              alt="logo"
              className="w-[177px] h-[48px] object-cover "
            />
            <p className="max-w-[322px] text-[18px] font-medium text-[#D1D1D1]">
              VivaDecor your premier destination for luxury and modern interior
              design
            </p>
            <ul className="flex gap-[26px]">
              <li className="w-[36px] h-[36px] bg-[#313131] flex items-center justify-center">
                <img src={facebook} alt="facebook" />
              </li>
              <li className="w-[36px] h-[36px] bg-[#313131] flex items-center justify-center">
                <img src={twitter} alt="twitter" />
              </li>
              <li className="w-[36px] h-[36px] bg-[#313131] flex items-center justify-center">
                <img src={instar} alt="instar" />
              </li>
              <li className="w-[36px] h-[36px] bg-[#313131] flex items-center justify-center">
                <img src={linked} alt="linked" />
              </li>
            </ul>
          </div>
          <div className="flex justify-between maxMd:justify-start maxMd:mt-[30px]  maxMd:gap-[30px] gap-20 maxMd:flex-col">
            {dataFooter.map((item, index) => {
              return (
                <>
                  <div
                    className="flex flex-col gap-6 max-w-[257px]"
                    key={index}
                  >
                    <h5 className="text-[18px] font-semibold text-white break-all">
                      {item.title}
                    </h5>
                    <p className="text-[#D1D1D1] text-[16px] font-medium break-all">
                      {item.item1}
                    </p>
                    <p className="text-[#D1D1D1] text-[16px] font-medium break-all">
                      {item.item2}
                    </p>
                    <p className="text-[#D1D1D1] text-[16px] font-medium break-all">
                      {item?.item3}
                    </p>
                    <p className="text-[#D1D1D1] text-[16px] font-medium break-all">
                      {item?.item4}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
