import SideBarMenu from "@components/SideBarMenu";
import { ReactNode, useState } from "react";
import { UserCircle } from "lucide-react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import { Menu } from "lucide-react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import logo from "@assets/Logo.svg";
import { useApp } from "../../context/AppContext";
import Login from "@components/Auth/Login";
import Register from "@components/Auth/Register";
import { supabase } from "@api/supabaseClient";

const ProjectLayout = ({ children }: { children: ReactNode }) => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const {
    user,
    setUser,
    setIsShowPopup,
    isShowPopup,
    isShowPopupRegister,
    setIsShowPopupRegister,
  } = useApp();
  const handleShowSidebar = () => {
    setIsShowSidebar(true);
  };

  const handleShowPoup = () => {
    setIsShowPopup(true);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();

    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("role");
    setUser(null);
  };

  const { keyword, setKeyword } = useApp();

  return (
    <div className="flex gap-[50px] xl:max-w-[1200px] mx-auto md:px-[50px] lg:pl-0 lg:pr-[50px]  maxMd:px-[20px]">
      <div
        className={classNames(
          "lg:block lg:w-[250px]",
          isShowSidebar == true ? "block fixed z-[100]" : "hidden"
        )}
      >
        <SideBarMenu
          setIsShowSidebar={setIsShowSidebar}
          isShowSidebar={isShowSidebar}
        />
      </div>

      <div className="lg:flex-[1] flex flex-col overflow-auto">
        <div className="flex justify-between py-[20px] items-center">
          <Link to={"/"} className="w-[120px] cursor-pointer md:hidden">
            <img src={logo} />
          </Link>
          <Menu
            className="w-6 h-6 text-black lg:hidden cursor-pointer"
            onClick={handleShowSidebar}
          />

          <div className="relative items-center hidden md:flex">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-[20px]" />
            <input
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Search"
              className="text-[14px] px-[50px] py-[10px] border-gray-400 border-[1px] rounded-[10px]"
            />
          </div>

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
              <div className="absolute top-[25px] z-[99] right-[0px] py-[10px] px-[30px] rounded-[10px] hidden group-hover:block bg-gray-200 text-black">
                <p className="text-[16px]">Sign Out</p>
              </div>
            </div>
          )}
        </div>

        <div>{children}</div>
        {isShowSidebar && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsShowSidebar(false)}
          />
        )}
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
    </div>
  );
};

export default ProjectLayout;
