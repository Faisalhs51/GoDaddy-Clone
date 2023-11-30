import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCallOutline } from "react-icons/io5";
import { MdHelpOutline } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <header className=" bg-black text-white flex w-full justify-between items-centerx py-2 px-4 h-14 lg:h-16 md:px-10 gap-4">
        <div className="flex items-center">
          <button className="lg:hidden">
            <GiHamburgerMenu className="text-white bg-black text-xl md:text-2xl" />
          </button>
          <Link href="/" className="flex">
            <Image
              src="/images/godaddy-logo.png"
              alt="Godaddy Logo"
              className="w-auto h-full pl-4"
              width={30}
              height={30}
            />
            <span className="text-xl font-bold pl-2 hidden md:block text-[#1bdadb]">
              GoDaddy
            </span>
          </Link>
        </div>
        <div className="lg:flex md:hidden items-center justify-between w-[60%] font-bold text-lg hidden">
          <Link href="#" className="p-2 rounded-lg hover:bg-gray-500">
            Domains
          </Link>
          <Link href="#" className="p-2 rounded-lg hover:bg-gray-500">
            Websites and Hosting
          </Link>
          <Link href="#" className="p-2 rounded-lg hover:bg-gray-500">
            Security
          </Link>
          <Link href="#" className="p-2 rounded-lg hover:bg-gray-500">
            Email and Marketing
          </Link>
          <Link href="#" className="p-2 rounded-lg hover:bg-gray-500">
            Pricing
          </Link>
        </div>
        <div className="lg:flex md:hidden items-center justify-between w-[25%] text-sm hidden">
          <Link href="#" className="p-2 rounded-lg hover:bg-gray-500">
            040-67607600
          </Link>
          <Link href="#" className="p-2 rounded-lg hover:bg-gray-500">
            Help
          </Link>
          <Link href="#" className="p-2 rounded-lg hover:bg-gray-500">
            Sign In
          </Link>
        </div>
        <div className="flex items-center w-[40%] md:w-[15%] justify-between lg:w-fit">
          <Link href="#">
            <IoCallOutline className="text-white bg-black text-xl lg:hidden" />
          </Link>
          <Link href="#">
            <MdHelpOutline className="text-white bg-black text-xl lg:hidden" />
          </Link>
          <Link href="#">
            <GoPerson className="text-white bg-black text-xl lg:hidden" />
          </Link>
          <Link href="#">
            <FiShoppingCart className="text-white bg-black text-xl" />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
