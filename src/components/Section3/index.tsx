import image3 from "@assets/Section3/image3.jpg";
import icon1 from "@assets/Section3/icon1.svg";
import classNames from "classnames";
import { motion } from "framer-motion";

type StepItem = {
  id: number;
  title: string;
  des: string;
  icon: string;
};

const dataSection3: StepItem[] = [
  {
    id: 1,
    title: "Start Project",
    des: "Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience — one that reflects your style, elevates your brand, and transforms ideas into impactful visuals.",
    icon: icon1,
  },
  {
    id: 2,
    title: "Craft",
    des: "Through continuous communication and creative exploration, we ensure that brilliance is infused into every aspect of your space — from concept to execution — resulting in a design that is both functional and inspiring.",
    icon: icon1,
  },
  {
    id: 3,
    title: "Execute",
    des: "Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space",
    icon: icon1,
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const Section3 = () => {
  return (
    <div>
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-[45px] maxMd:text-[30px] font-semibold text-center max-w-[800px] mx-auto"
      >
        Designing Your Dream in Three Simple Steps
      </motion.h1>

      <div className="flex gap-[80px] mt-[30px] md:flex-row flex-col-reverse">
        {/* Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-[20px] flex-[2]"
        >
          {dataSection3.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariant}
              whileHover={{ scale: 1.02 }}
              className="flex flex-row gap-[20px]"
            >
              <div className="flex-1 flex flex-col items-center">
                <motion.img
                  src={item.icon}
                  className="object-cover w-[50px]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                />

                <div
                  className={classNames(
                    "h-full w-[1px] bg-gray-400 mt-[10px]",
                    item.id === 3 && "hidden",
                  )}
                />
              </div>

              <div className="flex-[6] flex flex-col gap-[20px]">
                <p className="text-[20px] font-semibold">{item.title}</p>
                <p className="text-[15px] text-gray-600">{item.des}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <img src={image3} className="object-cover h-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default Section3;
