// import image1 from "@assets/Section1/image1.jpg";
// import image2 from "@assets/Section1/image2.png";
// import image3 from "@assets/Section1/image3.jpg";
// import interiorDesignIcon from "@assets/Section1/interiorDesignIcon.svg";
// import lightingDesignIcon from "@assets/Section1/lightingDesignIcon.svg";
// import outdoorDesignIcon from "@assets/Section1/outdoorDesignIcon.svg";
// import { useEffect, useState } from "react";

// const servicesData = [
//   {
//     image: interiorDesignIcon,
//     title: "Lighting Design",
//     description:
//       "Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere",
//   },
//   {
//     image: lightingDesignIcon,
//     title: "Interior Design",
//     description:
//       "From concept to completion, we oversee every detail to bring your vision to life efficiently",
//   },
//   {
//     image: outdoorDesignIcon,
//     title: "Outdoor Design",
//     description:
//       "Celebrate the changing seasons with our seasonal outdoor decor services",
//   },
// ];

// const Section1 = ({ currentX }: { currentX: number }) => {
//   const [currentWidth, setCurrentWidth] = useState<number>(0);
//   useEffect(() => {
//     const updateWidth = () => {
//       setCurrentWidth(document.documentElement.clientWidth);
//     };
//     updateWidth();
//     window.addEventListener("resize", updateWidth);
//     return () => window.removeEventListener("resize", updateWidth);
//   }, []);
//   return (
//     <>
//       <div className="w-full max-w-none  mx-auto ">
//         <div className="flex gap-2 items-center ">
//           <hr className="w-[60px] h-[5px] bg-[#1F1F1F]" />
//           <h2 className="text-[45px] maxMd:text-[30px] font-semibold ml-[34px]">
//             Our Services
//           </h2>
//         </div>
//         <div
//           // className="overflow-hidden"
//           style={
//             {
//               // width: `${currentWidth}px`,
//               // marginLeft: `calc(50% - ${currentWidth / 2}px)`,
//             }
//           }
//         >
//           <div
//             className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr] gap-[50px] px-[20px]  mt-[60px] "
//             // style={{
//             //   transform: `translateX(-${currentX}px)`,
//             //   width: `${currentWidth}px`,
//             //   marginLeft: `calc(50% - ${currentWidth / 2}px)`,
//             // }}
//           >
//             {servicesData.map((item, index) => {
//               return (
//                 <div
//                   className="flex gap-[20px] sm:flex-row flex-col"
//                   key={index}
//                 >
//                   <div className="flex-1">
//                     <img src={item.image} className="object-contain" />
//                   </div>
//                   <div className="flex-col flex gap-[30px] flex-[5]">
//                     <h3 className="text-[25px] font-semibold break-all text-black">
//                       {item.title}
//                     </h3>
//                     <p className="text-[15px] font-medium break-all text-gray-500">
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Section1;
