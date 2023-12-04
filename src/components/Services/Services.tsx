import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Services = () => {
  return (
    <section>
      <div className="h-fit w-full ">
        <div className=" grid h-full grid-cols-2 p-4 text-center md:grid-cols-5 md:grid-rows-2">
          <div className="group cursor-pointer border px-10 py-5 font-semibold hover:bg-[#111111] hover:text-white md:order-1 md:text-sm md:font-normal">
            Professional Email ₹29.00/mo{" "}
            <HiOutlineArrowNarrowRight className="ml-2 hidden text-2xl transition-all group-hover:inline-block" />
          </div>
          <div className="group cursor-pointer border px-10 py-5 font-semibold hover:bg-[#111111] hover:text-white md:order-5 md:text-sm md:font-normal">
            .co.in ₹39.00/1st yr{" "}
            <HiOutlineArrowNarrowRight className="ml-2 hidden text-2xl transition-all group-hover:inline-block" />
          </div>
          <div className="group cursor-pointer border px-10 py-5 font-semibold hover:bg-[#111111] hover:text-white md:order-2 md:text-sm md:font-normal">
            .in ₹1.00/1st yr{" "}
            <HiOutlineArrowNarrowRight className="ml-2 hidden text-2xl transition-all group-hover:inline-block" />
          </div>
          <div className="group cursor-pointer border px-10 py-5 font-semibold hover:bg-[#111111] hover:text-white md:order-6 md:text-sm md:font-normal">
            Managed WordPress ₹279.00/mo{" "}
            <HiOutlineArrowNarrowRight className="ml-2 hidden text-2xl transition-all group-hover:inline-block" />
          </div>
          <div className="group cursor-pointer border px-10 py-5 font-semibold hover:bg-[#111111] hover:text-white md:order-3 md:text-sm md:font-normal">
            SSL Security ₹2,999.00/yr{" "}
            <HiOutlineArrowNarrowRight className="ml-2 hidden text-2xl transition-all group-hover:inline-block" />
          </div>
          <div className="group cursor-pointer border px-10 py-5 font-semibold hover:bg-[#111111] hover:text-white md:order-7 md:text-sm md:font-normal">
            Websites + Marketing Start For Free**{" "}
            <HiOutlineArrowNarrowRight className="ml-2 hidden text-2xl transition-all group-hover:inline-block" />
          </div>
          <div className="group cursor-pointer border px-10 py-5 font-semibold hover:bg-[#111111] hover:text-white md:order-4 md:text-sm md:font-normal">
            VPS ₹699.00/mo{" "}
            <HiOutlineArrowNarrowRight className="ml-2 hidden text-2xl transition-all group-hover:inline-block" />
          </div>
          <div className="group cursor-pointer border px-10 py-5 font-semibold hover:bg-[#111111] hover:text-white md:order-8 md:text-sm md:font-normal">
            GoDaddy Pro Sign Up For Free{" "}
            <HiOutlineArrowNarrowRight className="ml-2 hidden text-2xl transition-all group-hover:inline-block" />
          </div>
          <div className="col-span-2 cursor-pointer border px-10 py-5 hover:bg-[#111111] hover:text-white md:order-9 md:col-start-5 md:row-start-1 md:row-end-3 md:text-sm md:font-normal">
            <span className="md:55xl group float-left p-10 font-serif text-3xl font-bold">
              .ai
            </span>{" "}
            ₹4,999.17/1st yr, 2-yr term. .ai is the future.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
