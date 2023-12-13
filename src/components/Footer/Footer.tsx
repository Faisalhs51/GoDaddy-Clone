"use client";
import {
  FaPlus,
  FaMinus,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import Link from "next/link";

import { useState } from "react";
import Image from "next/image";
import LangBox from "./LangBox";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store/store";

const Footer = () => {
  const [showDiv1, setShowDiv1] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);
  const [showDiv3, setShowDiv3] = useState(false);
  const [showDiv4, setShowDiv4] = useState(false);
  const [showDiv5, setShowDiv5] = useState(false);
  const [showDiv6, setShowDiv6] = useState(false);

  const langMenuShow = useSelector(
    (state: any) => state.footerMenu.langMenuShow,
  );

  const dispatch = useDispatch<AppDispatch>();
  const handleLangMenuShow = () => {
    dispatch({
      type: "footerMenu/setLangMenu",
      payload: { langMenuShow: !langMenuShow },
    });
  };

  return (
    <footer className="relative w-full">
      {langMenuShow && <LangBox />}
      <div className="h-fit bg-[#111111] p-4 text-white">
        <div className="flex flex-col gap-4 md:mt-7 md:w-full md:flex-row md:justify-between md:px-8">
          <div>
            <div className="flex w-full items-center justify-between">
              <h4 className="text-lg font-bold md:text-sm">About GoDaddy</h4>
              <div className="block md:hidden">
                <FaPlus
                  className={`text-xs text-white ${showDiv1 ? "hidden" : ""}`}
                  onClick={() => setShowDiv1(!showDiv1)}
                />
                <FaMinus
                  className={`text-xs text-white ${showDiv1 ? "" : "hidden"}`}
                  onClick={() => setShowDiv1(!showDiv1)}
                />
              </div>
            </div>
            <div
              className={`${
                showDiv1 ? "" : "hidden"
              } flex flex-col justify-evenly gap-3 py-3 text-sm font-medium text-[#bac0c3] md:mt-2 md:flex md:gap-5 md:text-xs`}
            >
              <Link href={"#"} className="w-fit hover:underline">
                About Us
              </Link>
              <Link className="w-fit hover:underline" href={"#"}>
                Annual Returns
              </Link>
              <Link className="w-fit hover:underline" href={"#"}>
                Careers
              </Link>
              <Link className="w-fit hover:underline" href={"#"}>
                Contact Us
              </Link>
              <Link className="w-fit hover:underline" href={"#"}>
                Corporate Social Responsibility
              </Link>
              <Link className="w-fit hover:underline" href={"#"}>
                GoDaddy Blog
              </Link>
              <Link className="w-fit hover:underline" href={"#"}>
                Investor Relations
              </Link>
              <Link className="w-fit hover:underline" href={"#"}>
                Legal
              </Link>
              <Link className="w-fit hover:underline" href={"#"}>
                Newsroom
              </Link>
              <Link className="w-fit hover:underline" href={"#"}>
                Trust Center
              </Link>
            </div>
          </div>
          <div>
            <div className="flex w-full items-center justify-between">
              <h4 className="text-lg font-bold md:text-sm">Support</h4>
              <div className="block md:hidden">
                <FaPlus
                  className={`text-xs text-white ${showDiv2 ? "hidden" : ""}`}
                  onClick={() => setShowDiv2(!showDiv2)}
                />
                <FaMinus
                  className={`text-xs text-white ${showDiv2 ? "" : "hidden"}`}
                  onClick={() => setShowDiv2(!showDiv2)}
                />
              </div>
            </div>
            <div
              className={`${
                showDiv2 ? "" : "hidden"
              } flex flex-col justify-evenly gap-3 py-3 text-sm font-medium text-[#bac0c3] md:mt-2 md:flex md:gap-5 md:text-xs`}
            >
              <Link className="w-fit hover:underline" href={"#"}>
                Product Support
              </Link>
              <Link className="w-fit hover:underline" href={"#"}>
                Community
              </Link>
              <Link className="w-fit hover:underline" href={"#"}>
                Report Abuse
              </Link>
              <Link className="w-fit hover:underline" href={"#"}>
                Resources
              </Link>
            </div>
          </div>
          <div>
            <div className="flex w-full items-center justify-between">
              <h4 className="text-lg font-bold md:text-sm">Resources</h4>
              <div className="block md:hidden">
                <FaPlus
                  className={`text-xs text-white ${showDiv3 ? "hidden" : ""}`}
                  onClick={() => setShowDiv3(!showDiv3)}
                />
                <FaMinus
                  className={`text-xs text-white ${showDiv3 ? "" : "hidden"}`}
                  onClick={() => setShowDiv3(!showDiv3)}
                />
              </div>
            </div>
            <div
              className={`${
                showDiv3 ? "" : "hidden"
              } flex flex-col justify-evenly gap-3 py-3 text-sm font-medium text-[#bac0c3] md:mt-2 md:flex md:gap-5 md:text-xs`}
            >
              <Link className="w-fit hover:underline" href={"#"}>
                Webmail
              </Link>
              <Link className="w-fit hover:underline" href={"#"}>
                WHOIS
              </Link>
              <Link className="w-fit hover:underline" href={"#"}>
                ICANN Confirmation
              </Link>
              <Link className="w-fit hover:underline" href={"#"}>
                Designers & Developers
              </Link>
              <Link className="w-fit hover:underline" href={"#"}>
                Product Catalog
              </Link>
              <Link className="w-fit hover:underline" href={"#"}>
                Customer Testimonials
              </Link>
              <Link className="w-fit hover:underline" href={"#"}>
                Business Name Generator
              </Link>
            </div>
          </div>
          <div>
            <div className="flex w-full items-center justify-between">
              <h4 className="text-lg font-bold md:text-sm">Partner Programs</h4>
              <div className="block md:hidden">
                <FaPlus
                  className={`text-xs text-white ${showDiv4 ? "hidden" : ""}`}
                  onClick={() => setShowDiv4(!showDiv4)}
                />
                <FaMinus
                  className={`text-xs text-white ${showDiv4 ? "" : "hidden"}`}
                  onClick={() => setShowDiv4(!showDiv4)}
                />
              </div>
            </div>
            <div
              className={`${
                showDiv4 ? "" : "hidden"
              } flex flex-col justify-evenly gap-3 py-3 text-sm font-medium text-[#bac0c3] md:mt-2 md:flex md:gap-5 md:text-xs`}
            >
              <Link className="w-fit hover:underline" href={"#"}>
                Affiliates
              </Link>
              <Link className="w-fit hover:underline" href={"#"}>
                Reseller Programs
              </Link>
              <Link className="w-fit hover:underline" href={"#"}>
                GoDaddy Pro
              </Link>
            </div>
          </div>
          <div>
            <div className="flex w-full items-center justify-between">
              <h4 className="text-lg font-bold md:text-sm">Account</h4>
              <div className="block md:hidden">
                <FaPlus
                  className={`text-xs text-white ${showDiv5 ? "hidden" : ""}`}
                  onClick={() => setShowDiv5(!showDiv5)}
                />
                <FaMinus
                  className={`text-xs text-white ${showDiv5 ? "" : "hidden"}`}
                  onClick={() => setShowDiv5(!showDiv5)}
                />
              </div>
            </div>
            <div
              className={`${
                showDiv5 ? "" : "hidden"
              } flex flex-col justify-evenly gap-3 py-3 text-sm font-medium text-[#bac0c3] md:mt-2 md:flex md:gap-5 md:text-xs`}
            >
              <Link className="w-fit hover:underline" href={"#"}>
                My Products
              </Link>
              <Link className="w-fit hover:underline" href={"#"}>
                Renewals & Billing
              </Link>
              <Link className="w-fit hover:underline" href={"#"}>
                Create Account
              </Link>
            </div>
          </div>
          <div>
            <div className="flex w-full items-center justify-between">
              <h4 className="text-lg font-bold md:text-sm">Shopping</h4>
              <div className="block md:hidden">
                <FaPlus
                  className={`text-xs text-white ${showDiv6 ? "hidden" : ""}`}
                  onClick={() => setShowDiv6(!showDiv6)}
                />
                <FaMinus
                  className={`text-xs text-white ${showDiv6 ? "" : "hidden"}`}
                  onClick={() => setShowDiv6(!showDiv6)}
                />
              </div>
            </div>
            <div
              className={`${
                showDiv6 ? "" : "hidden"
              } flex flex-col justify-evenly gap-3 py-3 text-sm font-medium text-[#bac0c3] md:mt-2 md:flex md:gap-5 md:text-xs`}
            >
              <Link className="w-fit hover:underline" href={"#"}>
                Buy a Domain
              </Link>
              <Link className="w-fit hover:underline" href={"#"}>
                Websites
              </Link>
              <Link className="w-fit hover:underline" href={"#"}>
                WordPress
              </Link>
              <Link className="w-fit hover:underline" href={"#"}>
                Hosting
              </Link>
              <Link className="w-fit hover:underline" href={"#"}>
                Web Security
              </Link>
              <Link className="w-fit hover:underline" href={"#"}>
                Email & Office
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-10 md:flex-row md:items-center md:px-8">
          <div className="flex items-end gap-2 md:w-[20%]">
            <Image
              src={"/Images/godaddy-logo.png"}
              alt="logo"
              // layout="responsive"
              width={40}
              height={30}
            />
            <span className="text-2xl font-bold">GoDaddy</span>
          </div>
          <hr className="my-4 md:hidden" />
          <div className="flex w-full justify-evenly md:w-[25%] md:gap-6">
            <button onClick={handleLangMenuShow}>
              <span className="font-semibold">India - English</span>{" "}
              <IoIosArrowUp className="inline-block text-xl" />
            </button>
            <button>
              <span className="font-semibold">INR &#8377;</span>{" "}
              <IoIosArrowUp className="inline-block text-xl" />
            </button>
          </div>
          <div className="mt-10 flex w-full items-center justify-evenly text-lg text-[#bac0c3] md:ml-auto md:mt-0 md:w-fit md:gap-5">
            <Link href={"#"}>
              <FaFacebook />
            </Link>
            <Link href={"#"}>
              <FaInstagram />
            </Link>
            <Link href={"#"}>
              <FaYoutube />
            </Link>
          </div>
          <hr className="my-4 md:hidden" />
        </div>
        <hr className="my-4 hidden md:block" />
        <div className="mb-3 flex flex-col md:mb-0 md:mt-5 md:flex-row md:items-start md:p-8">
          <div className="flex items-center gap-4 text-xs md:order-2 md:w-[25%] md:justify-end">
            <Link href={"#"} className="hover:underline">
              Legal
            </Link>
            <Link href={"#"} className="hover:underline">
              Privacy Policy
            </Link>
            <Link href={"#"} className="hover:underline">
              Cookies
            </Link>
          </div>
          <div className="mt-14 flex flex-col gap-6 text-center text-xs md:order-1 md:mt-0 md:w-[75%] md:text-left">
            <p className="md:font-medium">
              Copyright © 1999 - 2023 GoDaddy Operating Company, LLC. All
              Rights Reserved. The GoDaddy word mark is a registered trademark
              of GoDaddy Operating Company, LLC in the US and other countries.
              The “GO” logo is a registered trademark of GoDaddy.com, LLC in the
              US.
            </p>
            <p>
              Use of this Site is subject to express terms of use. By using this
              site, you signify that you agree to be bound by these Universal
              Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
