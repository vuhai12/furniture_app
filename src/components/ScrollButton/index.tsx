import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const updateHeight = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", updateHeight);
    return () => window.removeEventListener("scroll", updateHeight);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleClick}
      className={`
        fixed bottom-6 right-6 md:bottom-10 md:right-10
        z-50
        w-12 h-12 md:w-14 md:h-14
        flex items-center justify-center
        rounded-full
        bg-black text-white
        shadow-lg
        transition-all duration-300
        hover:scale-110 hover:bg-gray-800
        active:scale-95
        ${showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <ArrowUpIcon className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  );
};

export default ScrollButton;
