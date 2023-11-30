import { IoIosSearch } from "react-icons/io";

const Hero = () => {
  return (
    <section className="flex w-full flex-col">
      <div className="w-full p-4 flex">
        <input
          type="text"
          placeholder="Find your perfect domain"
          className="w-[85%] p-3 pl-10 border border-black bg-[#e8eaeb] border-r-0"
        />
        <button className="p-4 bg-[#09757a] border-black border border-l-0">
          <IoIosSearch className="text-2xl text-white" />
        </button>
      </div>
      <div className="bg-hero-image-portrait flex flex-col w-full h-full text-white">
        <p>Domain Names</p>
        <p>Get a .com for &#8377;99.00* /1st yr.</p>
        <p>Grab the world&apos;s most popular domain.</p>
      </div>
    </section>
  );
};
export default Hero;
