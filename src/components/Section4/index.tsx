import image4 from "@assets/Section4/image4.jpg";
import avatar1 from "@assets/Section4/avatar1.svg";
import avatar2 from "@assets/Section4/avatar2.svg";
import avatar3 from "@assets/Section4/avatar3.svg";
import avatar4 from "@assets/Section4/avatar4.svg";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const dataSection4 = [
  {
    id: 1,
    text: "Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations. Thank you for making my home beautiful!",
    avatar: avatar1,
    name: "Sophie Carter",
    address: "New York, USA",
  },
  {
    id: 2,
    text: "Exceptional service! From the initial consultation to the final reveal, your team demonstrated professionalism and a keen eye for design.",
    avatar: avatar2,
    name: "James Bennett",
    address: "Toronto, Canada",
  },
  {
    id: 3,
    text: "Outstanding service from start to finish. The team was attentive, creative, and delivered results that exceeded expectations.",
    avatar: avatar3,
    name: "Maria Sheferd",
    address: "Amsterdam, Netherlands",
  },
  {
    id: 4,
    text: "An exceptional experience throughout the entire project. The team combined strong design sensibility with clear communication.",
    avatar: avatar4,
    name: "Mark Jones",
    address: "Barcelona, Spain",
  },
];

const Section4 = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % dataSection4.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? dataSection4.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % dataSection4.length);
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-[80px] items-center container">
        {/* IMAGE */}
        <div className="hidden lg:block">
          <img
            loading="lazy"
            src={image4}
            alt="testimonial"
            className="w-full h-[550px] object-cover rounded-[24px] shadow-xl"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-[40px]">
          <h2 className="text-[32px] md:text-[45px] font-semibold text-[#1F1F1F] leading-tight">
            What Our Customers Say About Us
          </h2>

          {/* REVIEW CARD */}
          <div className="relative min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={dataSection4[current].id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                className="bg-[#1F1F1F] text-white p-[40px] md:p-[50px] rounded-[20px] shadow-lg flex flex-col gap-[30px]"
              >
                <p className="text-[16px] md:text-[18px] leading-relaxed text-[#E5E5E5]">
                  {dataSection4[current].text}
                </p>

                <div className="flex items-center gap-[20px]">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                    <img
                      loading="lazy"
                      src={dataSection4[current].avatar}
                      alt="avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <p className="font-semibold text-white">
                      {dataSection4[current].name}
                    </p>
                    <p className="text-[#A0A0A0] text-[14px]">
                      {dataSection4[current].address}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* NAVIGATION */}
          <div className="flex gap-[20px]">
            <button
              onClick={handlePrev}
              className="w-[50px] h-[50px] rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#1F1F1F] hover:text-white transition"
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="w-[50px] h-[50px] rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#1F1F1F] hover:text-white transition"
            >
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
