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
      "A modern living room interior should feel warm, inviting, and practical. Soft neutral tones create a comfortable atmosphere, while natural light helps the space feel open. A well-balanced combination of furniture, lighting, and decorative elements allows the room to serve different purposes such as relaxing, socializing, or watching TV.",
  },
  {
    id: 2,
    name: "Commercial Office Room Interior Design",
    detail:
      "A well-designed commercial office room should support productivity, collaboration, and employee comfort. The layout needs to optimize space while maintaining smooth movement between work areas. Modern ergonomic furniture, smart lighting, and acoustic solutions help create a balanced environment for focused work and teamwork",
  },
  {
    id: 3,
    name: "Bedroom Interior Design",
    detail:
      "A thoughtfully designed bedroom should bring a sense of peace, comfort, and personal expression. Soft lighting, calming colors, and well-chosen materials help create a relaxing atmosphere for quality rest. Functional storage, cozy textiles, and minimal clutter ensure the bedroom remains both practical and visually harmonious.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Section2 = () => {
  const [activeId, setActiveId] = useState<number[]>([]);

  const handleExpand = (id: number) => {
    if (activeId.includes(id)) {
      setActiveId(activeId.filter((item) => item !== id));
    } else {
      setActiveId([...activeId, id]);
    }
  };

  return (
    <div className="flex justify-between maxMd:flex-col gap-[80px]">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex-1 maxMd:hidden"
      >
        <img src={image2} className="w-full h-[600px] object-cover" />
      </motion.div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex-1 flex flex-col gap-[30px]"
      >
        <motion.h1
          variants={itemVariant}
          className="text-[45px] font-semibold maxMd:text-[30px] text-black"
        >
          Designing Your Dream With Brilliance
        </motion.h1>

        <motion.p
          variants={itemVariant}
          className="text-gray-500 md:text-[18px] font-medium leading-[1.645]"
        >
          Elevate your spaces with bespoke interior designs that reflect your
          unique style and aspirations.
        </motion.p>

        {/* Accordion */}
        <motion.div variants={container} className="flex flex-col gap-[30px]">
          {dataSection2.map((item) => {
            const isOpen = activeId.includes(item.id);

            return (
              <motion.div
                key={item.id}
                variants={itemVariant}
                whileHover={{ scale: 1.01 }}
                onClick={() => handleExpand(item.id)}
                className="cursor-pointer flex flex-col gap-[20px]"
              >
                <div className="border-b border-gray-400 py-[20px] flex justify-between items-center">
                  <p className="text-[18px] font-semibold text-black">
                    {item.name}
                  </p>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isOpen ? (
                      <MinusIcon className="h-6 w-6 text-gray-500" />
                    ) : (
                      <PlusIcon className="h-6 w-6 text-gray-500" />
                    )}
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[18px] text-gray-500">{item.detail}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Section2;
