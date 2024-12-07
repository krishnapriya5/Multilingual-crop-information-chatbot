"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
// import LTTSLogo from "../../assets/images/ltts_logo.svg";
import { FaUserCircle } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  // const [openLogin, setOpenLogin] = useState(false);
  // const [openSignup, setOpenSignup] = useState(false);

  const handleOpenLoginWithMenu = () => {
    handleClickOpenLogin();
    handleCloseMenu();
  };
  // const handleCloseLogin = () => {
  //   setOpenLogin(false);
  // };

  const handleOpenSignupWithMenu = () => {
    handleClickOpenSignup();
    handleCloseMenu();
  };
  // const handleCloseSignup = () => {
  //   setOpenSignup(false);
  // };

  const handleLogout = () => {
    logoutUser();
    handleCloseMenu();
    handleCloseSettings();
  };

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Clean up the effect when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);

  return (
    <div>
      <div className="z-50 font-Inter text-[#232321] bg-[#e2e2e2] flex justify-between items-center w-full lg:px-3 xl:px-8 2xl:px-12 lg:py-5">
        {/* <div> */}
        <Link
          target="_blank"
          href="https://www.ltts.com/"
          className=" font-bold text-stone-800 text-2xl"
        >
          {/* <img
            src={LTTSLogo}
            className=" w-full lg:w-[60%] xl:w-auto "
            alt="LTTS"
          /> */}
          AgIn
        </Link>
        {/* </div> */}

        <div className=" lg:text-sm xl:text-base hidden lg:flex items-center justify-center gap-[10px] lg:gap-3 xl:gap-4 font-medium text-stone-800">
          <Link className="" href={"#"}>
            Home
          </Link>
          <Link className="" href={"#"}>
            Profile
          </Link>
          <Link className="" href={"#"}>
            history
          </Link>
        </div>
        <div className=" flex items-center gap-2 lg:hidden">
        <div className="">
          <button className=" bg-[#004B87] font-medium text-sm py-1.5 px-5 rounded-full text-white">
            Login
          </button>
        </div>
          <CiMenuBurger
            onClick={() => setOpenMenu(!openMenu)}
            className=" text-2xl sm:text-3xl cursor-pointer"
          />
        </div>
      </div>
      <div
        className={` absolute lg:hidden text-stone-700 bg-white top-16 z-40 bottom-0 h-full w-full transition-all duration-500 ease-in ${
          openMenu ? "left-0 " : " -left-[1070px]"
        }`}
      >
        <div className=" text-2xl font-semibold flex flex-col gap-4 lg:hidden items-center justify-center pb-36 h-full">
          <Link onClick={handleCloseMenu} href="/" className="button-link">
            Home
          </Link>
          <Link className="" href={"#"}>
            Profile
          </Link>
          <Link className="" href={"#"}>
            history
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
