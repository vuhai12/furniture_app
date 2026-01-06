import { useEffect, useState } from "react";
import logo from "@assets/Logo.svg";
import Login from "@components/Auth/Login";
import Register from "@components/Auth/Register";
import HamburgerMenu from "@components/HamburgerMenu";
import { Link } from "react-router-dom";
import { Menu, UserCircle } from "lucide-react";
import { useApp } from "../../context/AppContext";
import { supabase } from "@api/supabaseClient";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const dataMenu = [
  {
    id: 1,
    name: "Home",
    path: "home",
  },
  {
    id: 1,
    name: "Service",
    path: "service",
  },
  {
    id: 1,
    name: "Vision",
    path: "vision",
  },
  {
    id: 1,
    name: "Process",
    path: "process",
  },
  {
    id: 1,
    name: "Testimonials",
    path: "testimonials",
  },
];
const Header = () => {
  const [isShowHamburgerMenu, setIsShowHamburgerMenu] = useState(false);
  const {
    user,
    setUser,
    setIsShowPopup,
    isShowPopup,
    isShowPopupRegister,
    setIsShowPopupRegister,
  } = useApp();
  const handleShowPoup = () => {
    setIsShowPopup(true);
    setIsShowHamburgerMenu(false);
  };

  const handleShowHamburgerMenu = () => {
    setIsShowHamburgerMenu(true);
  };
  useEffect(() => {
    if (isShowPopup || isShowHamburgerMenu || isShowPopupRegister) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isShowPopup, isShowHamburgerMenu]);

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, []);

  gsap.registerPlugin(ScrollToPlugin);
  const handleScroll = (id: string) => {
    const trigger = ScrollTrigger.getById(id);

    if (trigger) {
      gsap.to(trigger, {
        scroll: trigger.start,
        duration: 0.8,
        ease: "power2.out",
      });
      return;
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("role");
    setUser(null);
  };

  return (
    <>
      <nav className="flex justify-between h-[60px] items-center py-[50px] ">
        <div>
          <Link to={"/"}>
            <img src={logo} />
          </Link>
        </div>
        <ul className="flex gap-[30px] text-[16px] maxMd:hidden">
          {dataMenu.map((item) => {
            return (
              <li
                onClick={() => handleScroll(item.path)}
                className="cursor-pointer"
              >
                <p>{item.name}</p>
              </li>
            );
          })}
        </ul>
        {user == null ? (
          <div
            className="maxMd:hidden flex gap-[10px] cursor-pointer"
            onClick={handleShowPoup}
          >
            <UserCircle className="w-6 h-6 text-black" />
            <p className="text-[16px]">Sign In</p>
          </div>
        ) : (
          <div
            className="maxMd:hidden flex gap-[10px] cursor-pointer group relative"
            onClick={handleLogout}
          >
            <UserCircle className="w-6 h-6 text-black" />
            <p className="text-black text-[16px]">{`Wellcome ${user}`}</p>
            <div className="absolute top-[25px] right-[0px] py-[10px] px-[30px] rounded-[10px] hidden group-hover:block bg-gray-200 text-black">
              <p className="text-[16px]">Sign Out</p>
            </div>
          </div>
        )}

        <div className="hidden maxMd:block" onClick={handleShowHamburgerMenu}>
          <Menu className="h-6 w-6 text-black cursor-pointer" />
        </div>
      </nav>

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
        <HamburgerMenu setIsShowHamburgerMenu={setIsShowHamburgerMenu} />
      )}
    </>
  );
};

export default Header;
