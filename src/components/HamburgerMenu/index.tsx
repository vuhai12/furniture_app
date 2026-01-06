import { UserCircle, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@assets/Logo - White.svg";
import Login from "@components/Auth/Login";
import Register from "@components/Auth/Register";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const dataMenu = [
  "Home",
  "Service",
  "Vision",
  "Mison",
  "Process",
  "Testimonials",
];

const HamburgerMenu = ({
  setIsShowHamburgerMenu,
}: {
  setIsShowHamburgerMenu: (isShowHamburgerMenu: boolean) => void;
}) => {
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [isShowPopupRegister, setIsShowPopupRegister] = useState(false);
  const handleShowPoup = () => {
    setIsShowPopup(true);
  };

  return (
    <div className="">
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={() => setIsShowHamburgerMenu(false)}
      ></div>
      <div className="w-[75%] overflow-auto p-[30px] bg-black flex flex-col fixed inset-0 text-gray-500 text-[18px] gap-[30px]">
        <div className="flex justify-between items-center">
          <Link to={"/"} className="w-[120px] cursor-pointer">
            <img src={logo} />
          </Link>
          <X
            className="w-5 h-5 text-white cursor-pointer"
            onClick={() => setIsShowHamburgerMenu(false)}
          />
        </div>

        <div className="flex flex-col gap-[30px] items-center justify-center">
          <div
            className="flex gap-[15px] cursor-pointer md:hidden"
            onClick={handleShowPoup}
          >
            <UserCircle className="w-6 h-6 text-gray-500" />
            <p className="text-[18px]">Sign In</p>
          </div>
          {dataMenu.map((item) => {
            return <p className="cursor-pointer text-[18px]">{item}</p>;
          })}
        </div>
        <div className="flex gap-[15px] justify-center">
          <Facebook className="w-4 h-4 text-gray-400" />
          <Twitter className="w-4 h-4 text-gray-400" />
          <Instagram className="w-4 h-4 text-gray-400" />
          <Linkedin className="w-4 h-4 text-gray-400" />
        </div>
        <div>
          <p className="text-gray-400 text-[10px] text-center">
            VivaDecor your premier destination for luxury and modern interior
            design
          </p>
        </div>
      </div>
      {isShowPopup && (
        <Login
          setIsShowPopupRegister={setIsShowPopupRegister}
          setIsShowPopup={setIsShowPopup}
        />
      )}
      {isShowPopupRegister && (
        <Register
          setIsShowPopupRegister={setIsShowPopupRegister}
          setIsShowPopup={setIsShowPopup}
        />
      )}
    </div>
  );
};

export default HamburgerMenu;
