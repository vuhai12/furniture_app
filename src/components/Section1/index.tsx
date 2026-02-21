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
    <section className="w-full  bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 justify-center lg:justify-start"
        >
          <div className="w-12 h-[3px] bg-black" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Our Services
          </h2>
        </motion.div>

        {/* SERVICES GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* ICON */}
              <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-xl group-hover:bg-black transition duration-300">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-8 h-8 object-contain group-hover:invert transition duration-300"
                />
              </div>

              {/* CONTENT */}
              <h3 className="text-xl font-semibold mt-6 group-hover:text-black transition">
                {service.title}
              </h3>

              <p className="text-gray-500 mt-4 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* HOVER LINE */}
              <div className="mt-6 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Section1;
