import image1 from "@assets/Hero/image1.jpeg";
import image2 from "@assets/Hero/image2.jpg";
import rectangle from "@assets/Hero/rectangle.svg";
import Button from "@components/Button";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

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
    <div className="w-full mt-[80px]">
      {/* TOP */}
      <div className="flex justify-between gap-[80px] maxMd:flex-col">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="xl:flex-[3] lg:flex-1"
        >
          <h1 className="xl:text-[80px] lg:text-[55px] md:text-[45px] maxMd:text-[45px] font-semibold">
            Interior Design
          </h1>

          <p className="text-[18px] maxMd:text-[18px] max-w-[759px] mt-[20px] text-gray-500 font-medium">
            Step into a world where the art of Interior Design is meticulously
            crafted to bring together timeless elegance and cutting-edge modern
            innovation, allowing you to transform your living spaces into the
            epitome of luxury and sophistication.
          </p>
        </motion.div>

        <motion.div
          variants={slideLeft}
          initial="hidden"
          animate="show"
          className="xl:flex-[2] lg:flex-1 pr-[20px] pt-[20px] relative"
        >
          <img
            src={image1}
            alt="image1"
            className="h-auto object-cover w-full relative z-10"
          />
          <img
            src={rectangle}
            alt="rectangle"
            className="absolute top-0 right-0 z-1"
          />
        </motion.div>
      </div>

      {/* BOTTOM */}
      <div className="flex mt-[20px] lg:gap-[30px] xl:gap-[50px] w-full maxMd:flex-col-reverse">
        <div className="flex-1 flex-col flex gap-[30px] maxMd:flex-col-reverse">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
          >
            <Button
              path="/projects/office"
              className="text-[18px] inline-block px-[20px] py-[10px]"
            >
              Start Project
            </Button>
          </motion.div>

          {/* STATS */}
          <motion.div
            ref={ref}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="flex maxMd:mt-[50px] flex-wrap gap-[30px] maxMd:justify-between font-normal w-full"
          >
            {statsData.map((item, index) => (
              <div key={index}>
                <div className="xl:text-[60px] text-[50px] maxMd:text-[30px] font-medium text-black">
                  {inView && (
                    <CountUp end={item.value} duration={2} suffix="+" />
                  )}
                </div>
                <p className="xl:text-[22px] lg:text-[18px] maxMd:text-[15px] text-gray-500">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={slideRight}
          initial="hidden"
          animate="show"
          className="flex-1 relative w-full"
        >
          <img
            src={image2}
            alt="image2"
            className="pt-[20px] pl-[20px] h-full w-full z-10 object-cover relative"
          />
          <img
            src={rectangle}
            alt="rectangle"
            className="absolute top-0 left-0 z-1"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
