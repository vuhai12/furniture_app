import image2 from "@assets/Section2/image2.jpg";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import classNames from "classnames";

const dataSection2 = [
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

const Section2 = () => {
  const [activeId, setActiveId] = useState<number[]>([]);
  const handleExpand = (id: number) => {
    if (activeId.includes(id)) {
      setActiveId(activeId.filter((item) => item != id));
    } else {
      setActiveId([...activeId, id]);
    }
  };
  return (
    <>
      <div className="flex justify-between maxMd:flex-col gap-[80px]">
        <div className="flex-1 maxMd:hidden">
          <img src={image2} className="w-full h-[600px] object-cover" />
        </div>
        <div className="flex-1 flex flex-col gap-[30px]">
          <h1 className="text-[45px] font-semibold maxMd:text-[30px] text-black">
            Designing Your Dream With Brilliance
          </h1>
          <p className="text-gray-500 md:text-[18px] font-medium leading-[1.645]">
            Elevate your spaces with bespoke interior designs that reflect your
            unique style and aspirations, crafted with precision and brilliance
            for an unforgettable living experience
          </p>
          <div className="flex flex-col gap-[30px]">
            {dataSection2.map((item, _) => {
              return (
                <div
                  onClick={() => handleExpand(item.id)}
                  key={item.id}
                  className="cursor-pointer flex flex-col gap-[30px]"
                >
                  <div className="border-b-[1px] border-b-gray-400 py-[20px] flex justify-between items-center ">
                    <p className="text-[18px] font-semibold text-black">
                      {item.name}
                    </p>
                    <PlusIcon
                      className={classNames(
                        "h-6 w-6 text-gray-500 ",
                        activeId.includes(item.id) ? "hidden" : "block"
                      )}
                    />
                    <MinusIcon
                      className={classNames(
                        "h-6 w-6 text-gray-500 ",
                        activeId.includes(item.id) ? "block" : "hidden"
                      )}
                    />
                  </div>
                  {activeId.includes(item.id) && (
                    <p className="text-[18px] text-gray-500">{item.detail}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
