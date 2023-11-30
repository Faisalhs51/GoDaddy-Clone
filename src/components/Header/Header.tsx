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
      <header className=" flex h-14 w-full items-center justify-between gap-4 bg-black px-4 py-2 text-white md:px-10 lg:h-16">
        <div className="flex items-center">
          <button className="lg:hidden">
            <GiHamburgerMenu className="bg-black text-xl text-white md:text-2xl" />
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
        <div className="hidden w-[60%] items-center justify-between text-lg font-bold md:hidden lg:flex">
          <Link href="#" className="rounded-lg p-2 hover:bg-gray-500">
            Domains
          </Link>
          <Link href="#" className="rounded-lg p-2 hover:bg-gray-500">
            Websites and Hosting
          </Link>
          <Link href="#" className="rounded-lg p-2 hover:bg-gray-500">
            Security
          </Link>
          <Link href="#" className="rounded-lg p-2 hover:bg-gray-500">
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
            <IoCallOutline className="bg-black text-xl text-white lg:hidden" />
          </Link>
          <Link href="#">
            <MdHelpOutline className="bg-black text-xl text-white lg:hidden" />
          </Link>
          <Link href="#">
            <GoPerson className="bg-black text-xl text-white lg:hidden" />
          </Link>
          <Link href="#">
            <FiShoppingCart className="bg-black text-xl text-white" />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
