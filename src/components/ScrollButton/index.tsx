import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const updateHeight = () => {
      if (window.scrollY > 10) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", updateHeight);
    return () => {
      window.removeEventListener("scroll", updateHeight);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {showButton && (
        <button
          onClick={handleClick}
          className="fixed bottom-[50px] right-[50px] z-[90] p-[20px] bg-black rounded-[10px]"
        >
          <ArrowUpIcon className="w-5 h-5 text-white font-semibold" />
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
