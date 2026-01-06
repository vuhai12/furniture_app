import image4 from "@assets/Section4/image4.jpg";
import avatar1 from "@assets/Section4/avatar1.svg";
import avatar2 from "@assets/Section4/avatar2.svg";
import avatar3 from "@assets/Section4/avatar3.svg";
import avatar4 from "@assets/Section4/avatar4.svg";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import classNames from "classnames";

const dataSection4 = [
  {
    id: 1,
    text: "Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations.  Thank you for making my home beautiful!",
    avatar: avatar1,
    name: "Sophie Carter",
    address: "New York, USA",
  },
  {
    id: 2,
    text: "Exceptional service! From the initial consultation to the final reveal, your team demonstrated professionalism and a keen eye for design. Highly recommend!",
    avatar: avatar2,
    name: "James Bennett",
    address: "Toronto, Canada",
  },
  {
    id: 3,
    text: "Outstanding service from start to finish. The team was attentive, creative, and delivered results that exceeded expectations. Truly a pleasure to work with.",
    avatar: avatar3,
    name: "Maria Sheferd",
    address: "Amsterdam, Netherlands",
  },
  {
    id: 4,
    text: "An exceptional experience throughout the entire project. The team combined strong design sensibility with clear communication, delivering a result we’re truly proud of.",
    avatar: avatar4,
    name: "Mark Jones",
    address: "Barcelona, Spain",
  },
];

const Section4 = () => {
  const [currentReview, setCurrentReview] = useState<number>(0);
  useEffect(() => {
    if (dataSection4.length === 0) return;
    const intervalId = setInterval(() => {
      setCurrentReview((pre) => (pre + 1) % dataSection4.length);
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const handleChangeReviews = (action: string) => {
    if (action == "Pre") {
      setCurrentReview((pre) => (pre + 1) % dataSection4.length);
    }
    if (action == "Next") {
      setCurrentReview(
        (pre) => (pre - 1 + dataSection4.length) % dataSection4.length
      );
    }
  };
  return (
    <>
      <div className="flex maxMd:flex-col-reverse gap-[100px] maxMd:gap-[30px] min-h-[600px]  relative w-full">
        <div className="flex flex-col gap-4 flex-1 ">
          <div className="flex-1 maxMd:hidden">
            <img
              src={image4}
              alt="image4"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="hidden gap-[38px] md:flex maxMd:gap-[30px] maxMd:justify-end">
            <ArrowLeftIcon
              onClick={() => handleChangeReviews("Pre")}
              className="h-[50px] maxMd:w-[45px] maxMd:h-[45px] w-[50px] p-3 bg-gray-200 text-[#464646] cursor-pointer"
            />
            <ArrowRightIcon
              onClick={() => handleChangeReviews("Next")}
              className="h-[50px] maxMd:w-[45px] maxMd:h-[45px] w-[50px] p-3 bg-gray-200 text-[#464646] cursor-pointer"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-[30px] md:gap-0">
          <h1 className="text-[40px] maxMd:text-[30px] maxMd:text-center font-semibold">
            What Our Customers Say About Us
          </h1>
          <div className="md:hidden gap-[38px] flex maxMd:gap-[30px] maxMd:justify-end">
            <ArrowLeftIcon
              onClick={() => handleChangeReviews("Pre")}
              className="h-[50px] maxMd:w-[45px] maxMd:h-[45px] w-[50px] p-3 bg-gray-200 text-[#464646] cursor-pointer"
            />
            <ArrowRightIcon
              onClick={() => handleChangeReviews("Next")}
              className="h-[50px] maxMd:w-[45px] maxMd:h-[45px] w-[50px] p-3 bg-gray-200 text-[#464646] cursor-pointer"
            />
          </div>
          <div className="maxMd:static absolute bottom-0 maxMd:pl-0 top-[25%]  pl-[30px] left-[180px] right-0 overflow-hidden">
            <div
              style={{
                transform: ` translateX(calc(-${currentReview} * (25% + 10px)))`,
                transition: "transform 0.5s ease",
              }}
              className={classNames(
                "flex w-[calc(400%+40px)] md:w-[calc(200%+40px)] h-full gap-[40px]"
              )}
            >
              {dataSection4.map((item, index) => {
                return (
                  <div
                    className={classNames(
                      "bg-[#1F1F1F] flex-1 text-[18px] flex flex-col gap-[30px] justify-center p-[50px]"
                    )}
                    key={index}
                  >
                    <p className="text-white  font-medium break-all line-clamp-3 md:line-clamp-5">
                      {item.text}
                    </p>
                    <div className="flex gap-[24px] items-center md:flex-row flex-col">
                      <div className="w-[72px] h-[72px]">
                        <img
                          src={item.avatar}
                          alt="avatar1"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-white break-all">
                          {item.name}
                        </p>
                        <p className="font-medium text-[#929292] mt-[14px] break-all">
                          {item.address}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
