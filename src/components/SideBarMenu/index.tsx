import { useEffect, useState } from "react";
import logo from "@assets/Logo - White.svg";
import { UserCircle } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { X } from "lucide-react";
import Login from "@components/Auth/Login";
import Register from "@components/Auth/Register";
import classNames from "classnames";
import { getCategoriesServices } from "@services/categories.services";
import { useApp } from "../../context/AppContext";

const SideBarMenu = ({
  isShowSidebar,
  setIsShowSidebar,
}: {
  isShowSidebar: boolean;
  setIsShowSidebar: (isShowSidebar: boolean) => void;
}) => {
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [isShowPopupRegister, setIsShowPopupRegister] = useState(false);
  const handleShowPoup = () => {
    setIsShowPopup(true);
  };
  const { setListCategories, listCategories } = useApp();

  const getCategories = async () => {
    const data = await getCategoriesServices();
    setListCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="overflow-auto p-[20px] flex  flex-col gap-[20px] text-gray-400 bg-black text-[14px] w-[75%] fixed sm:w-[250px] inset-0">
      {isShowSidebar && (
        <X
          className="w-4 h-4 text-white absolute top-[10px] right-[10px] cursor-pointer"
          onClick={() => setIsShowSidebar(false)}
        />
      )}
      <div className="flex flex-col gap-[20px]  items-center justify-center">
        <Link to={"/"} className="w-[120px] cursor-pointer">
          <img src={logo} />
        </Link>
        <div className="relative items-center flex md:hidden">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-[8px]" />
          <input
            placeholder="Search"
            className="text-[14px] py-[8px] w-full pl-[30px] border-gray-400 border-[1px] rounded-[10px]"
          />
        </div>
        <div
          className="flex gap-[10px] cursor-pointer md:hidden"
          onClick={handleShowPoup}
        >
          <UserCircle className="w-6 h-6 text-white" />
          <p className="text-[16px]">Sign In</p>
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        {listCategories.length > 0 &&
          listCategories?.map((item) => {
            return (
              <NavLink to={`/projects/${item.slug}`}>
                {({ isActive }) => {
                  return (
                    <div className="relative p-[10px] ml-[-20px] cursor-pointer flex gap-[8px] items-center justify-center">
                      <p
                        className={classNames(
                          isActive
                            ? "text-white font-semibold"
                            : "text-gray-400"
                        )}
                      >
                        {item.name.toUpperCase()}
                      </p>
                      {isActive && (
                        <div className="absolute left-0 w-[5px] h-full bg-white text-white"></div>
                      )}
                    </div>
                  );
                }}
              </NavLink>
            );
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

export default SideBarMenu;
