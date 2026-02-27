import { useEffect, useState } from "react";
import logo from "@assets/Logo.svg";
import Login from "@components/Auth/Login";
import Register from "@components/Auth/Register";
import HamburgerMenu from "@components/HamburgerMenu";
import { Link } from "react-router-dom";
import { Menu, UserCircle } from "lucide-react";
import { useApp } from "../../context/AppContext";
import { supabase } from "@api/supabaseClient";

const dataMenu = [
  { id: 1, name: "Home", path: "home" },
  { id: 2, name: "Service", path: "service" },
  { id: 3, name: "Vision", path: "vision" },
  { id: 4, name: "Process", path: "process" },
  { id: 5, name: "Testimonials", path: "testimonials" },
];

const Header = () => {
  const [isShowHamburgerMenu, setIsShowHamburgerMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const {
    user,
    setUser,
    setIsShowPopup,
    isShowPopup,
    isShowPopupRegister,
    setIsShowPopupRegister,
  } = useApp();

  /* =========================
     HANDLE BODY SCROLL LOCK
  ========================== */
  useEffect(() => {
    if (isShowPopup || isShowHamburgerMenu || isShowPopupRegister) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isShowPopup, isShowHamburgerMenu, isShowPopupRegister]);

  /* =========================
     LOAD USER FROM LOCAL
  ========================== */
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(savedUser);
    }
  }, [setUser]);

  /* =========================
     SHADOW WHEN SCROLL
  ========================== */
  useEffect(() => {
    const handleScrollEffect = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScrollEffect);
    return () => window.removeEventListener("scroll", handleScrollEffect);
  }, []);

  /* =========================
     FUNCTIONS
  ========================== */

  const handleShowPopup = () => {
    setIsShowPopup(true);
    setIsShowHamburgerMenu(false);
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const yOffset = -80;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.clear();
    setUser(null);
  };

  return (
    <>
      {/* =========================
          NAVBAR
      ========================== */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg border-b border-gray-200"
            : "bg-white/70 backdrop-blur-md"
        }`}
      >
        <div className="h-16 flex items-center justify-between container">
          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="h-8 object-contain"
              loading="lazy"
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-8 text-[15px] font-medium text-gray-700">
            {dataMenu.map((item) => (
              <li
                key={item.id}
                onClick={() => handleScroll(item.path)}
                className="relative cursor-pointer group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            {/* USER */}
            {user == null ? (
              <div
                className="hidden md:flex items-center gap-2 cursor-pointer hover:opacity-80 transition"
                onClick={handleShowPopup}
              >
                <UserCircle className="w-6 h-6 text-gray-800" />
                <p className="text-sm font-medium">Sign In</p>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-2 relative group cursor-pointer">
                <UserCircle className="w-6 h-6 text-gray-800" />
                <p className="text-sm font-medium">Welcome {user}</p>

                {/* DROPDOWN */}
                <div className="absolute top-10 right-0 bg-white shadow-xl border border-gray-200 rounded-xl py-2 w-32 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}

            {/* MOBILE MENU */}
            <button
              className="md:hidden"
              onClick={() => setIsShowHamburgerMenu(true)}
            >
              <Menu className="h-6 w-6 text-gray-800" />
            </button>
          </div>
        </div>
      </nav>

      {/* =========================
          POPUPS
      ========================== */}
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

      {isShowHamburgerMenu && (
        <HamburgerMenu
          setIsShowHamburgerMenu={setIsShowHamburgerMenu}
          isOpen={isShowHamburgerMenu}
        />
      )}
    </>
  );
};

export default Header;
