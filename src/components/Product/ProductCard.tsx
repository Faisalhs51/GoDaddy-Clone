"use client";
import { ProductType } from "@/constants/Product";
import Image from "next/image";

const ProductCard = ({
  idx,
  thumbnail,
  title,
  heading,
  description,
  hasList,
  list,
  buttonContent,
  showPlay,
}: ProductType) => {
  return (
    <div className="w-full px-8 py-4 md:flex md:items-center md:justify-between md:px-10">
      <div className={"md:w-[50%] " + (idx % 2 === 0 ? "order-1" : "order-2")}>
        <Image
          src={thumbnail}
          // width={313} height={249}
          alt={"feat"}
          fill
          className="!static !h-fit"
        />
      </div>
      <div
        className={
          "md:w-[50%] md:px-10 " + (idx % 2 === 0 ? "order-2" : "order-1")
        }
      >
        <p className="mx-4 font-semibold">{title}</p>
        <h2 className="m-4 font-serif text-2xl font-bold  md:text-3xl">
          {heading}
        </h2>
        <p className="ml-4 mr-2 md:text-sm">{description}</p>
        {hasList && (
          <ul className="my-4 ml-8 list-disc text-lg font-medium md:ml-4">
            {list.map((item, index) => (
              <li className="ml-4 mr-2 md:mt-2" key={index}>
                {item}
              </li>
            ))}
          </ul>
        )}
        <button className="m-4 rounded border-2 border-black px-4 py-2 font-medium transition-all hover:scale-105 md:text-sm md:font-semibold">
          {buttonContent}{" "}
        </button>
        {showPlay && (
          <div className="group mx-4 my-2 flex items-center transition-all md:my-4 md:inline-flex md:items-center">
            <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-black group-hover:scale-105">
              <svg
                className="h-6 w-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.25 10L7.75 6.40816V13.5918L14.25 10Z"
                />
              </svg>
            </div>
            <p className="font-extrabold group-hover:underline md:text-sm md:font-semibold">
              Play Video
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
