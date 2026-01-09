// import image1 from "@assets/Section3/image1.jpg";
// import image2 from "@assets/Section3/image2.jpg";
// import image3 from "@assets/Section3/image3.jpg";

// import classNames from "classnames";
// import { PlusIcon } from "@heroicons/react/24/solid";
// import { useState } from "react";

// const dataSection3 = [
//   {
//     id: 1,
//     title: "Start Project",
//     des: "Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience — one that reflects your style, elevates your brand, and transforms ideas into impactful visuals. Let’s collaborate to shape something exceptional, crafted uniquely for you.",
//     image: image1,
//   },
//   {
//     id: 2,
//     title: "Craft",
//     des: "Collaborate closely to achieve design excellence refining your vision and crafting brilliance into every aspect of your space",
//     image: image2,
//   },
//   {
//     id: 3,
//     title: "Execute",
//     des: "Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space",
//     image: image3,
//   },
// ];
// const Section3 = ({ currentX }: { currentX: number }) => {
//   const totalScrollY = 300 * 3;
//   const totalIndex = 3;
//   let slideIndex = Math.floor((currentX * totalIndex) / totalScrollY);
//   slideIndex = Math.max(0, Math.min(slideIndex, totalIndex - 1));

//   // const [stepActive, setStepActive] = useState<number[]>([]);

//   // const handleOpenStep = (id: number) => {
//   //   if (stepActive.includes(id)) {
//   //     setStepActive(stepActive.filter((item) => item !== id));
//   //   } else {
//   //     setStepActive([...stepActive, id]);
//   //   }
//   // };

//   return (
//     <>
//       <div className="">
//         <h1 className="text-[45px] maxMd:text-[30px] font-semibold text-center max-w-[800px] mx-auto">
//           Designing Your Dream in Three Simple Steps
//         </h1>
//         {/* <div className="flex flex-col gap-[30px] md:hidden mt-[30px] cursor-pointer">
//           {dataSection3.map((item, _) => {
//             return (
//               <div className="flex flex-col gap-[20px]">
//                 <div
//                   onClick={() => handleOpenStep(item.id)}
//                   className="flex justify-between items-center p-[10px] border-b-[1px] border-gray-500 py-[20px] "
//                 >
//                   <p className="text-[18px] font-semibold">
//                     {item.id}. {item.title}
//                   </p>
//                   <PlusIcon className={classNames("h-6 w-6 text-gray-600 ")} />
//                 </div>
//                 {stepActive.includes(item.id) && (
//                   <div>
//                     <p>{item.des}</p>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div> */}
//         <div className="flex gap-[80px] mt-[30px]">
//           <div className="w-[100px] flex flex-col justify-between items-center gap-[20px]">
//             <p className="w-[40px] h-[40px] rounded-[50%] bg-black flex items-center justify-center text-white text-[16px]">
//               1
//             </p>
//             <div className="w-[1px] flex-1 bg-black relative ">
//               <div
//                 // style={{
//                 //   transform: `translateY(${
//                 //     slideIndex * 100
//                 //   }%) translateX(-50%)`,
//                 // }}
//                 className={classNames(
//                   `absolute top-0 w-[6px] bg-black left-1/2  h-1/3
//                   }`
//                 )}
//               />
//             </div>
//             <p className="w-[40px] h-[40px] rounded-[50%] bg-black flex items-center justify-center text-white text-[16px]">
//               3
//             </p>
//           </div>
//           <div className="flex-1">
//             <h2 className="text-[35px] font-bold break-all text-black">
//               {dataSection3[slideIndex].title}
//             </h2>
//             <p className="text-[18px] mt-[20px] text-gray-500">
//               {dataSection3[slideIndex].des}
//             </p>
//           </div>
//           <div
//             className="flex-1 bg-no-repeat bg-cover bg-center rounded-[10px] h-[300px]"
//             style={{
//               backgroundImage: `url(${dataSection3[slideIndex].image})`,
//             }}
//           ></div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Section3;
