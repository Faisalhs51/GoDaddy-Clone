"use client";

import { useEffect, useState } from "react";
import { BsChatRightText } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 5000);
  }, []);

  return (
    <>
      {show && (
        <div className="md:shadow-sticky md:bg-contact-gradient fixed bottom-8 right-8 z-10 w-fit bg-transparent md:block md:w-44 md:rounded-full md:p-0.5">
          <button className="hidden w-full items-center justify-evenly rounded-full bg-white px-4 py-2 font-semibold md:flex">
            <BsChatRightText className="text-xl" /> Contact Us
          </button>

          <button className="font-semibold md:hidden">
            <IoLogoWhatsapp className="text-5xl text-[#43c453]" />
          </button>
        </div>
      )}
    </>
  );
};

export default Contact;
