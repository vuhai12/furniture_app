import { useEffect, useState } from "react";
import logo from "@assets/Logo - White.svg";
import {
  UserCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Login from "@components/Auth/Login";
import Register from "@components/Auth/Register";
import classNames from "classnames";
import { getCategoriesServices } from "@services/categories.services";
import { useApp } from "../../context/AppContext";

const SideBarMenu = () => {
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [isShowPopupRegister, setIsShowPopupRegister] = useState(false);

  const { setListCategories, listCategories } = useApp();

  const getCategories = async () => {
    const data = await getCategoriesServices();
    setListCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-[280px] bg-[#0f0f0f] border-r border-gray-800 flex flex-col">
      {/* Header */}
      <div className="px-6 pt-8 pb-6 border-b border-gray-800 flex flex-col items-center gap-6">
        <Link to="/" className="block">
          <img src={logo} className="w-[150px]" alt="logo" />
        </Link>

        {/* Search */}
        <div className="relative w-full md:hidden">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            placeholder="Search..."
            className="w-full py-2.5 pl-10 pr-4 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:border-white focus:outline-none text-sm text-white placeholder-gray-500 transition"
          />
        </div>

        {/* Sign In */}
        <div
          onClick={() => setIsShowPopup(true)}
          className="md:hidden flex items-center gap-3 cursor-pointer text-gray-400 hover:text-white transition"
        >
          <UserCircle className="w-6 h-6" />
          <span className="text-sm tracking-wide">Sign In</span>
        </div>
      </div>

      {/* Categories */}
      <div className="flex-1 overflow-y-auto modern-scroll px-4 py-6 space-y-2">
        {listCategories.length > 0 &&
          listCategories.map((item) => (
            <NavLink key={item.slug} to={`/projects/${item.slug}`}>
              {({ isActive }) => (
                <div
                  className={classNames(
                    "group relative px-4 py-3 rounded-lg cursor-pointer transition-all duration-200",
                    "hover:bg-[#1a1a1a]",
                    isActive && "bg-[#1a1a1a]",
                  )}
                >
                  <p
                    className={classNames(
                      "text-sm tracking-wider transition-all",
                      isActive
                        ? "text-white font-semibold"
                        : "text-gray-400 group-hover:text-white",
                    )}
                  >
                    {item.name.toUpperCase()}
                  </p>

                  {/* Active bar */}
                  {isActive && (
                    <div className="absolute left-0 top-2 bottom-2 w-[3px] bg-white rounded-r shadow-[0_0_8px_rgba(255,255,255,0.7)]"></div>
                  )}
                </div>
              )}
            </NavLink>
          ))}
      </div>

      {/* Footer */}
      <div className="px-6 py-6 border-t border-gray-800 space-y-5">
        <div className="flex justify-center gap-5 text-gray-500">
          <Facebook className="w-4 h-4 hover:text-white transition cursor-pointer" />
          <Twitter className="w-4 h-4 hover:text-white transition cursor-pointer" />
          <Instagram className="w-4 h-4 hover:text-white transition cursor-pointer" />
          <Linkedin className="w-4 h-4 hover:text-white transition cursor-pointer" />
        </div>

        <p className="text-[11px] text-gray-500 text-center leading-relaxed tracking-wide">
          VivaDecor – Luxury & Modern Interior Design
        </p>
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
    </aside>
  );
};

export default SideBarMenu;
