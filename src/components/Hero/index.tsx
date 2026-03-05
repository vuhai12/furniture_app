import image1 from "@assets/Hero/image1.jpeg";
import image2 from "@assets/Hero/image2.jpg";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const statsData = [
  { label: "Project Complete", value: 400 },
  { label: "Satisfied Clients", value: 600 },
  { label: "Unique Styles", value: 100 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const slideRight = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="w-full container overflow-hidden">
      {/* TOP */}
      <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
        {/* TEXT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex-1"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold leading-tight">
            Interior <br className="hidden sm:block" />
            Design
          </h1>

          <p className="mt-6 text-base sm:text-lg max-w-xl text-gray-500 leading-relaxed">
            Step into a world where the art of Interior Design is meticulously
            crafted to bring together timeless elegance and cutting-edge modern
            innovation.
          </p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <Link
              to="/projects/spa"
              className="px-6 py-3 bg-black text-white font-semibold text-base rounded-full shadow-lg hover:scale-105 transition"
            >
              Start Project
            </Link>
          </motion.div>
        </motion.div>

        {/* IMAGE RIGHT */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          animate="show"
          className="flex-1 relative"
        >
          <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
            <img
              loading="lazy"
              src={image1}
              alt="image1"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>
        </motion.div>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 xl:gap-20 mt-16">
        {/* IMAGE LEFT */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          animate="show"
          className="flex-1 relative"
        >
          <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
            <img
              loading="lazy"
              src={image2}
              alt="image2"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>
        </motion.div>

        {/* STATS */}
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-8 text-center lg:text-left"
        >
          {statsData.map((item, index) => (
            <div key={index}>
              <div className="text-3xl sm:text-4xl xl:text-5xl font-semibold">
                {inView && <CountUp end={item.value} duration={2} suffix="+" />}
              </div>
              <p className="mt-2 text-sm sm:text-base text-gray-500">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
