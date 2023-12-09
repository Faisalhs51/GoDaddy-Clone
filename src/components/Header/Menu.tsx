"use client";
import Image from "next/image";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdHelpOutline } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store/store";
import Link from "next/link";
import { motion } from "framer-motion";

const Menu = () => {
  const body = useRef(document.body);

  useEffect(() => {
    body.current.style.overflowY = "hidden";

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      body.current.style.overflowY = "auto";
    };
  }, []);

  const optionsMenuShow = useSelector(
    (state: any) => state.menu.optionsMenuShow,
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleMenuItem = (e: any) => {
    const div = e.target.closest("div");
    if (!div || div.id === "") return;
    dispatch({
      type: "menu/setMenu",
      payload: { menuItem: div.id, optionsMenuShow: true, menuShow: true },
    });
  };

  const handleCloseMenu = (e: HTMLElement) => {
    const div = e.closest("#menuSection");
    if (div) return;
    dispatch({ type: "menu/setMenu", payload: { menuShow: false } });
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`absolute z-[5] h-full w-full transition-all duration-500 lg:hidden ${
          optionsMenuShow
            ? "bg-transparent backdrop-blur-0"
            : "bg-[rgba(0,0,0,0.5)] backdrop-blur-sm"
        }`}
        onClick={(e) => {
          handleCloseMenu(e.target as HTMLElement);
        }}
      >
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute right-4 top-4 md:left-[36%] md:right-0"
        >
          <IoCloseOutline className="text-3xl text-white" />
        </motion.button>
        <motion.div
          initial={{ translateX: "-100%", opacity: 0 }}
          animate={{ translateX: "0%", opacity: 1 }}
          id="menuSection"
          className="flex h-full w-[85%] flex-col bg-white p-4 duration-150 md:w-[35%]"
        >
          <Image
            src={"Images/Svgs/logo.svg"}
            alt="logo"
            width={175}
            height={175}
            className="cursor-pointer"
          />
          <div
            className="flex h-[70%] flex-col justify-evenly"
            onClick={(e) => handleMenuItem(e)}
          >
            <div
              className="group flex w-full cursor-pointer justify-between"
              id="0"
            >
              <p className="text-lg md:text-base">Domains</p>
              <HiOutlineArrowNarrowRight className="mr-4 text-2xl transition-all group-hover:mr-2" />
            </div>
            <div
              className="group flex w-full cursor-pointer justify-between"
              id="1"
            >
              <p className="text-lg md:text-base">Websites and Hosting</p>
              <HiOutlineArrowNarrowRight className="mr-4 text-2xl transition-all group-hover:mr-2" />
            </div>
            <div
              className="group flex w-full cursor-pointer justify-between"
              id="2"
            >
              <p className="text-lg md:text-base">Security</p>
              <HiOutlineArrowNarrowRight className="mr-4 text-2xl transition-all group-hover:mr-2" />
            </div>
            <div
              className="group flex w-full cursor-pointer justify-between"
              id="3"
            >
              <p className="text-lg md:text-base">Email and Marketing</p>
              <HiOutlineArrowNarrowRight className="mr-4 text-2xl transition-all group-hover:mr-2" />
            </div>
            <div>
              <Link href={"#"}>
                <p className="text-lg md:text-base">Pricing</p>
              </Link>
            </div>
          </div>
          <div className="mt-auto flex flex-col gap-4">
            <div className="flex cursor-pointer items-center">
              <MdHelpOutline className="text-xl md:text-2xl" />
              <p className="ml-2 font-semibold md:text-sm md:font-normal">
                Help Center
              </p>
            </div>
            <div className="flex cursor-pointer items-center">
              <GoPerson className="text-xl md:text-2xl" />
              <p className="ml-2 font-semibold md:text-sm md:font-normal">
                Account
              </p>
            </div>
            <div className="flex cursor-pointer items-center">
              <FiShoppingCart className="text-xl md:text-2xl" />
              <p className="ml-2 font-semibold md:text-sm md:font-normal">
                Basket
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Menu;
