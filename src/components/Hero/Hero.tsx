"use client";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const Hero = () => {
  const optionsMenuShow = useSelector(
    (state: any) => state.menu.optionsMenuShow,
  );
  return (
    <section
      className={`flex w-full flex-col ${optionsMenuShow ? "lg:pt-16" : ""}`}
    >
      <div className="flex w-full p-4 md:px-8 lg:px-14">
        <input
          type="text"
          placeholder="Find your perfect domain"
          className="w-[85%] border border-r-0 border-black bg-[#e8eaeb] p-3 pl-10 focus:border-4 focus:!border-blue-400 md:pr-7 lg:h-16 lg:w-[45%] lg:text-lg"
        />
        <button className="border border-l-0 border-black bg-[#09757a] p-4 hover:bg-[#004249] md:p-2 lg:w-[15%]">
          <IoIosSearch className="text-2xl text-white md:hidden" />
          <span className="hidden font-semibold text-white md:block">
            Search Domains
          </span>
        </button>
        <div className="hidden w-[40%] items-center justify-between gap-4 pl-8 lg:flex">
          <Link href={"#"} className="flex gap-2">
            <Image
              src={"/Images/Svgs/app.svg"}
              width={35}
              height={35}
              alt="app"
            />
            <p className="mt-1 text-xs">&#8377; 829.00*</p>
          </Link>
          <Link href={"#"} className="flex gap-2">
            <Image
              src={"/Images/Svgs/in.svg"}
              width={20}
              height={20}
              alt="app"
            />
            <p className="mt-1 text-xs">&#8377; 1.00</p>
          </Link>
          <Link href={"#"} className="flex gap-2">
            <Image
              src={"/Images/Svgs/inc.svg"}
              width={35}
              height={35}
              alt="app"
            />
            <p className="mt-1 text-xs">&#8377; 83.332.50*</p>
          </Link>
          <Link href={"#"} className="flex gap-2">
            <Image
              src={"/Images/Svgs/co.svg"}
              width={20}
              height={20}
              alt="app"
            />
            <p className="mt-1 text-xs">&#8377; 499.00</p>
          </Link>
        </div>
      </div>
      <div className="flex w-full flex-col lg:flex-row">
        <div className=" h-[80vh] w-full px-4 md:h-[50vh] md:w-full md:px-8 lg:h-[65vh] lg:w-[72%] lg:pl-14 lg:pr-4">
          <div className="relative flex h-full w-full flex-col items-center justify-start gap-4 rounded bg-hero-image-portrait bg-cover bg-center text-white md:items-start md:bg-hero-image-landscape md:pl-5 lg:p-6 lg:pl-10">
            <p className="pt-6 font-semibold">Domain Names</p>
            <p className="p-2 text-center font-serif text-2xl font-bold md:px-0 md:text-left md:text-4xl lg:w-[35%]">
              Get a .com for &#8377; 99.00* /1st yr.
            </p>
            <p>Grab the world&apos;s most popular domain.</p>
            <button className="md:px-auto group rounded-md bg-white px-12 py-3 font-semibold text-black transition-all">
              Get It Now
              <HiOutlineArrowNarrowRight className="ml-2 hidden text-2xl transition-all group-hover:inline-block" />
            </button>
            <p className="p-4 text-center text-xs md:px-0">
              3-year purchase required. Additional year(s) &#8377; 1,299.00*
            </p>
            <p className="absolute bottom-7 right-4 hidden text-right text-xs font-semibold text-white md:block lg:bottom-10 lg:right-10">
              Inderjit Singh
              <br />
              Last Eleven
            </p>
          </div>
        </div>
        <div className="m-4 flex h-[50vh] flex-col items-center justify-between gap-6 rounded-md bg-[#d8efef] p-6 md:mx-8 md:h-[40vh] md:flex-row md:items-start lg:m-0 lg:mr-14 lg:h-[65vh] lg:w-[25%] lg:flex-col">
          <div className="flex h-full w-full flex-col items-center justify-between gap-3 p-2 md:w-[65%] md:items-start lg:w-full lg:gap-0">
            <p className="font-bold">Web Hosting</p>
            <h2 className="px-2 text-center font-serif text-2xl font-bold md:px-0 md:text-left md:text-3xl lg:text-4xl">
              Secured Hosting from &#8377; 199.00 /mo.
            </h2>
            <ul className="flex flex-col items-center font-medium md:items-start md:px-5 lg:text-sm">
              <li className="list-disc">Improved page loads and SEO</li>
              <li className="list-disc">24/7 network security</li>
              <li className="list-disc">30-day money back guarantee</li>
            </ul>
          </div>
          <button className="group m-auto h-16 w-[55%] rounded-md bg-black font-semibold text-white md:w-[20%] lg:m-0 lg:w-[65%]">
            Learn More
            <HiOutlineArrowNarrowRight className="ml-2 hidden text-2xl transition-all group-hover:inline-block" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
