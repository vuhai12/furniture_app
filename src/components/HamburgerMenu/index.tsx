import {
  UserCircle,
  X,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@assets/Logo - White.svg";
import Login from "@components/Auth/Login";
import Register from "@components/Auth/Register";
import classNames from "classnames";

const dataMenu = [
  "Home",
  "Service",
  "Vision",
  "Mission",
  "Process",
  "Testimonials",
];

const HamburgerMenu = ({
  isOpen,
  setIsShowHamburgerMenu,
}: {
  isOpen: boolean;
  setIsShowHamburgerMenu: (value: boolean) => void;
}) => {
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [isShowPopupRegister, setIsShowPopupRegister] = useState(false);

  return (
    <>
      {/* Overlay */}
      <div
        className={classNames(
          "fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
        onClick={() => setIsShowHamburgerMenu(false)}
      />

      {/* Sidebar */}
      <div
        className={classNames(
          "fixed top-0 left-0 h-full bg-black text-white z-50 flex flex-col transition-transform duration-300 ease-in-out",
          "w-[85%] sm:w-[320px]",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <Link to="/" onClick={() => setIsShowHamburgerMenu(false)}>
            <img src={logo} className="w-[120px]" />
          </Link>
          <X
            className="w-5 h-5 cursor-pointer hover:text-gray-400 transition"
            onClick={() => setIsShowHamburgerMenu(false)}
          />
        </div>

        {/* Menu */}
        <div className="flex-1 flex flex-col justify-center gap-6 px-8">
          <div
            className="flex items-center gap-3 cursor-pointer md:hidden hover:text-white transition"
            onClick={() => setIsShowPopup(true)}
          >
            <UserCircle className="w-6 h-6" />
            <span className="text-lg">Sign In</span>
          </div>

          {dataMenu.map((item, index) => (
            <Link
              key={index}
              to="/"
              onClick={() => setIsShowHamburgerMenu(false)}
              className="text-gray-400 hover:text-white transition-all duration-200 text-lg font-medium relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-800">
          <div className="flex justify-center gap-5 mb-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <Icon
                key={index}
                className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition"
              />
            ))}
          </div>

          <p className="text-gray-500 text-xs text-center leading-relaxed">
            VivaDecor – your premier destination for luxury and modern interior
            design.
          </p>
        </div>
      </div>

      {/* Popups */}
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
    </>
  );
};

export default HamburgerMenu;
