import image3 from "@assets/Section3/image3.jpg";
import icon1 from "@assets/Section3/icon1.svg";
import classNames from "classnames";

const dataSection3 = [
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
const Section3 = () => {
  return (
    <>
      <div className="">
        <h1 className="text-[45px] maxMd:text-[30px] font-semibold text-center max-w-[800px] mx-auto">
          Designing Your Dream in Three Simple Steps
        </h1>

        <div className="flex gap-[80px] mt-[30px] md:flex-row flex-col-reverse">
          <div className="flex flex-col gap-[20px] flex-[2]">
            {dataSection3.map((item) => {
              return (
                <div className="flex flex-row gap-[20px]">
                  <div className="flex-1 flex flex-col items-center ">
                    <img src={item.icon} className="object-cover w-[50px]" />

                    <div
                      className={classNames(
                        "h-full w-[1px] bg-gray-400 mt-[10px]",
                        item.id == 3 && "hidden"
                      )}
                    />
                  </div>

                  <div className="flex-[6] flex flex-col gap-[20px]">
                    <p className="text-[20px] font-semibold">{item.title}</p>
                    <p className="text-[15px]">{item.des}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex-1">
            <img src={image3} className="object-cover h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
