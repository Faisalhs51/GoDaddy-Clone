"use client";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCallOutline } from "react-icons/io5";
import { MdHelpOutline } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import Menu from "./Menu";
import OptionsMenu from "./OptionsMenu";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store/store";

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const menuShow = useSelector((state: any) => state.menu.menuShow);
  const menuItem = useSelector((state: any) => state.menu.menuItem);
  const optionsMenuShow = useSelector(
    (state: any) => state.menu.optionsMenuShow,
  );

  const handleMenuShow = () => {
    dispatch({
      type: "menu/setMenu",
      payload: {
        menuShow: true,
      },
    });
  };

  const handleMenuItem = (e: any) => {
    const set = e.target.closest("a");
    if (!set || set.id === "") return;
    dispatch({
      type: "menu/setMenu",
      payload: {
        menuItem: menuItem == set.id ? null : set.id,
        optionsMenuShow: menuItem == set.id ? !optionsMenuShow : true,
        menuShow: menuItem == set.id ? !menuShow : true,
      },
    });
  };

  return (
    <>
      {menuShow && <Menu />}
      {optionsMenuShow && <OptionsMenu />}
      <header
        className={`flex h-14 w-full items-center justify-between gap-4 bg-[#2B2B2B] px-4 py-2 text-white md:px-10 lg:z-[10] lg:h-16 ${
          optionsMenuShow ? "lg:absolute" : ""
        }`}
      >
        <div className="flex items-center">
          <button className="lg:hidden" onClick={handleMenuShow}>
            <GiHamburgerMenu className="bg-[#2B2B2B] text-xl text-white md:text-2xl" />
          </button>
          <Link href="/" className="flex">
            <Image
              src="/Images/godaddy-logo.png"
              alt="Godaddy Logo"
              className="pl-4"
              width={50}
              height={30}
            />
            <span className="hidden pl-2 text-xl font-bold text-[#1bdadb] md:block">
              GoDaddy
            </span>
          </Link>
        </div>
        <div
          className="hidden w-[60%] items-center justify-between text-lg font-bold lg:flex"
          onClick={(e) => handleMenuItem(e)}
        >
          <Link href="#" className="rounded-lg p-2 hover:bg-gray-500" id="0">
            Domains
          </Link>
          <Link href="#" className="rounded-lg p-2 hover:bg-gray-500" id="1">
            Websites and Hosting
          </Link>
          <Link href="#" className="rounded-lg p-2 hover:bg-gray-500" id="2">
            Security
          </Link>
          <Link href="#" className="rounded-lg p-2 hover:bg-gray-500" id="3">
            Email and Marketing
          </Link>
          <Link href="#" className="rounded-lg p-2 hover:bg-gray-500">
            Pricing
          </Link>
        </div>
        <div className="hidden w-[25%] items-center justify-between text-sm md:hidden lg:flex">
          <Link href="#" className="rounded-lg p-2 hover:bg-gray-500">
            040-67607600
          </Link>
          <Link href="#" className="rounded-lg p-2 hover:bg-gray-500">
            Help
          </Link>
          <Link href="#" className="rounded-lg p-2 hover:bg-gray-500">
            Sign In
          </Link>
        </div>
        <div className="flex w-[40%] items-center justify-between md:w-[15%] lg:w-fit">
          <Link href="#">
            <IoCallOutline className="bg-[#2B2B2B] text-xl text-white lg:hidden" />
          </Link>
          <Link href="#">
            <MdHelpOutline className="bg-[#2B2B2B] text-xl text-white lg:hidden" />
          </Link>
          <Link href="#">
            <GoPerson className="bg-[#2B2B2B] text-xl text-white lg:hidden" />
          </Link>
          <Link href="#">
            <FiShoppingCart className="bg-[#2B2B2B] text-xl text-white" />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
