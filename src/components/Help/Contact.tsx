"use client";

import { useEffect, useState } from "react";
import { BsChatRightText } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {show && (
        <div className="fixed bottom-8 right-8 z-10 w-fit bg-transparent lg:block lg:w-44 lg:rounded-full lg:bg-contact-gradient lg:p-0.5 lg:shadow-sticky">
          <button className="hidden w-full items-center justify-evenly rounded-full bg-white px-4 py-2 font-semibold lg:flex">
            <BsChatRightText className="text-xl" /> Contact Us
          </button>

          <button className="font-semibold lg:hidden">
            <IoLogoWhatsapp className="text-5xl text-[#43c453]" />
          </button>
        </div>
      )}
    </>
  );
};

export default Contact;
