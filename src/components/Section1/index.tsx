import interiorDesignIcon from "@assets/Section1/interiorDesignIcon.svg";
import lightingDesignIcon from "@assets/Section1/lightingDesignIcon.svg";
import outdoorDesignIcon from "@assets/Section1/outdoorDesignIcon.svg";

import { motion } from "framer-motion";

const servicesData = [
  {
    image: interiorDesignIcon,
    title: "Lighting Design",
    description:
      "Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere",
  },
  {
    image: lightingDesignIcon,
    title: "Interior Design",
    description:
      "From concept to completion, we oversee every detail to bring your vision to life efficiently",
  },
  {
    image: outdoorDesignIcon,
    title: "Outdoor Design",
    description:
      "Celebrate the changing seasons with our seasonal outdoor decor services",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const Section1 = () => {
  return (
    <div className="w-full max-w-none mx-auto">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex gap-2 items-center"
      >
        <hr className="w-[60px] h-[5px] bg-[#1F1F1F]" />
        <h2 className="text-[45px] maxMd:text-[30px] font-semibold ml-[34px]">
          Our Services
        </h2>
      </motion.div>

      {/* Services */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr] gap-[50px] px-[20px] mt-[60px]"
      >
        {servicesData.map((itemData, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -8, scale: 1.02 }}
            className="flex gap-[20px] sm:flex-row flex-col cursor-pointer"
          >
            <div className="flex-1">
              <img src={itemData.image} className="object-contain" />
            </div>

            <div className="flex-col flex gap-[30px] flex-[5]">
              <h3 className="text-[25px] font-semibold break-all text-black">
                {itemData.title}
              </h3>
              <p className="text-[15px] font-medium break-all text-gray-500">
                {itemData.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Section1;
