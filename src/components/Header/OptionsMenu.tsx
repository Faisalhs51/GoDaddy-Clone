import Image from "next/image";
import { IoIosArrowBack, IoIosSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { MenuItems, MenuItemsImage } from "@/constants/MenuItems";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store/store";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

interface MenuItemType {
  item: string;
}

const OptionsMenu = () => {
  const menuItem = useSelector((state: any) => state.menu.menuItem);
  const dispatch = useDispatch<AppDispatch>();

  const handleCloseMenu = (e: HTMLElement) => {
    const div = e.closest("#optionsMenuSection");
    if (div) return;
    dispatch({ type: "menu/setMenu", payload: { menuShow: false } });
  };

  const handleBackBtn = () => {
    dispatch({
      type: "menu/setMenu",
      payload: { optionsMenuShow: false, menuShow: true },
    });
  };

  return (
    <>
      <section
        className="absolute z-[6] h-full w-full bg-[rgba(0,0,0,0.5)] backdrop-blur-sm"
        onClick={(e) => {
          handleCloseMenu(e.target as HTMLElement);
        }}
      >
        <button className="absolute right-4 top-4 md:left-[36%] md:right-0 lg:hidden">
          <IoCloseOutline className="text-3xl text-white" />
        </button>
        <div
          id="optionsMenuSection"
          className="relative flex h-full w-[85%] flex-col bg-[#f5f5f5] p-4 md:w-[35%] lg:h-fit lg:w-full lg:bg-white"
        >
          <div className="absolute left-0 top-0 z-[5] w-full bg-[#f5f5f5] lg:hidden">
            <button onClick={handleBackBtn}>
              <IoIosArrowBack className="m-4 text-2xl" />
            </button>
          </div>
          <div className="mt-12 flex flex-col overflow-y-scroll md:p-8 lg:h-fit lg:flex-row lg:justify-between lg:overflow-y-visible">
            <div className="block gap-6 lg:flex">
              {MenuItems[menuItem].map((item: any, idx: number) => (
                <MenuList menu={item} key={idx} />
              ))}
            </div>
            {MenuItemsImage[menuItem].isItem && (
              <motion.div
                initial={{ opacity: 0, translateX: "100%" }}
                animate={{ opacity: 1, translateX: "0%" }}
                className="group flex cursor-pointer flex-col duration-100"
              >
                <Image
                  src={MenuItemsImage[menuItem].thumbnail}
                  alt="menu item image"
                  width={281}
                  height={275}
                  className="rounded-sm transition-all duration-1000 group-hover:scale-105"
                />
                <strong className="my-5 text-lg font-black capitalize group-hover:underline md:text-base md:font-semibold lg:w-[281px] lg:text-xl lg:font-medium">
                  {MenuItemsImage[menuItem].title}
                </strong>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

const MenuList = ({ menu }: any) => {
  return (
    <>
      <div className="lg:h-fit">
        <motion.p
          initial={{ opacity: 0, translateX: "100%" }}
          animate={{ opacity: 1, translateX: "0%" }}
          className="text-sm font-black uppercase tracking-wider text-[#767676] duration-100 md:text-xs md:font-medium"
        >
          {menu.title}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, translateX: "100%" }}
          animate={{ opacity: 1, translateX: "0%" }}
          className={`my-7 flex flex-col flex-wrap gap-3 duration-100 lg:my-0 ${
            menu.title === "Domain names" ? "lg:h-[40vh]" : "lg:h-fit"
          }`}
        >
          {menu.list.map((item: string, idx: number) => (
            <MenuItem item={item} key={idx} />
          ))}
        </motion.div>
        {menu.extra && (
          <motion.div
            initial={{ opacity: 0, translateX: "100%" }}
            animate={{ opacity: 1, translateX: "0%" }}
            className="group mb-8 flex cursor-pointer items-center gap-3 px-2 py-4 duration-100 hover:bg-white lg:mb-0 lg:py-2 lg:hover:bg-[#f5f5f5]"
          >
            <div className="flex items-center rounded-xl bg-white p-2 text-2xl group-hover:bg-[#f5f5f5] lg:bg-[#f5f5f5] lg:group-hover:bg-white">
              <HiOutlineArrowNarrowRight />
            </div>
            <p className="text-lg font-black text-[#444444] hover:text-[#1976d2] md:text-sm md:font-bold">
              {menu.extra}
            </p>
          </motion.div>
        )}
      </div>
    </>
  );
};

const MenuItem = ({ item }: MenuItemType) => {
  return (
    <>
      <div className="flex cursor-pointer items-center gap-3 rounded-md px-2 py-4 hover:bg-white lg:w-max lg:py-2 lg:hover:bg-[#f5f5f5]">
        <div className="flex items-center rounded-xl bg-[#dbefef] p-2 text-2xl">
          <IoIosSearch />
        </div>
        <p className="text-lg font-black text-[#444444] hover:text-[#1976d2] md:text-sm md:font-bold">
          {item}
        </p>
      </div>
    </>
  );
};

export default OptionsMenu;
