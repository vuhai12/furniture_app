import image2 from "@assets/Section2/image2.jpg";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type SectionItem = {
  id: number;
  name: string;
  detail: string;
};

const dataSection2: SectionItem[] = [
  {
    id: 1,
    name: "Living Room Interior Design",
    detail:
      "A modern living room interior should feel warm, inviting, and practical. Soft neutral tones create a comfortable atmosphere, while natural light helps the space feel open.",
  },
  {
    id: 2,
    name: "Commercial Office Room Interior Design",
    detail:
      "A well-designed commercial office room should support productivity, collaboration, and employee comfort with optimized layout and ergonomic solutions.",
  },
  {
    id: 3,
    name: "Bedroom Interior Design",
    detail:
      "A thoughtfully designed bedroom should bring peace, comfort, and personal expression with calming colors and cozy materials.",
  },
];

const Section2 = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  const handleExpand = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-[60px] items-center container">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            loading="lazy"
            src={image2}
            alt="Interior"
            className="w-full h-[500px] md:h-[600px] object-cover rounded-[24px] shadow-xl"
          />
        </motion.div>

        {/* CONTENT */}
        <div className="flex flex-col gap-[30px]">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-[38px] md:text-[45px] font-semibold text-[#1F1F1F] leading-tight"
          >
            Designing Your Dream With Brilliance
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[#6B6B6B] text-[16px] md:text-[18px] leading-relaxed"
          >
            Elevate your spaces with bespoke interior designs that reflect your
            unique style and aspirations.
          </motion.p>

          {/* ACCORDION */}
          <div className="flex flex-col gap-[20px] mt-[20px]">
            {dataSection2.map((item) => {
              const isOpen = activeId === item.id;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-[16px] shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => handleExpand(item.id)}
                    className="w-full flex justify-between items-center px-[25px] py-[20px]"
                  >
                    <span className="text-[17px] md:text-[18px] font-semibold text-[#1F1F1F] text-left">
                      {item.name}
                    </span>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isOpen ? (
                        <MinusIcon className="w-5 h-5 text-[#6B6B6B]" />
                      ) : (
                        <PlusIcon className="w-5 h-5 text-[#6B6B6B]" />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div className="px-[25px] pb-[20px] text-[15px] md:text-[16px] text-[#6B6B6B] leading-relaxed">
                          {item.detail}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
