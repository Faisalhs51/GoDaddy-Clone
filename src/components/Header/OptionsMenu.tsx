import Image from "next/image";
import { IoIosArrowBack, IoIosSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { MenuItems, MenuItemsImage } from "@/constants/MenuItems";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store/store";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

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
        <button className="absolute right-4 top-4 md:left-[36%] md:right-0">
          <IoCloseOutline className="text-3xl text-white" />
        </button>
        <div
          id="optionsMenuSection"
          className="relative flex h-full w-[85%] flex-col bg-[#f5f5f5] p-4 md:w-[35%]"
        >
          <div className="absolute left-0 top-0 z-[5] w-full bg-[#f5f5f5]">
            <button onClick={handleBackBtn}>
              <IoIosArrowBack className="m-4 text-2xl" />
            </button>
          </div>
          <div className="mt-12 overflow-y-scroll md:p-8">
            <div>
              {MenuItems[menuItem].map((item: any, idx: number) => (
                <MenuList menu={item} key={idx} />
              ))}
            </div>
            {MenuItemsImage[menuItem].isItem && (
              <div className="group flex cursor-pointer flex-col">
                <Image
                  src={MenuItemsImage[menuItem].thumbnail}
                  alt="menu item image"
                  width={281}
                  height={275}
                  className="rounded-sm transition-all duration-500 group-hover:scale-105"
                />
                <strong className="my-5 text-lg font-black capitalize group-hover:underline md:text-base md:font-semibold">
                  {MenuItemsImage[menuItem].title}
                </strong>
              </div>
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
      <div>
        <p className="text-sm font-black uppercase tracking-wider text-[#767676] md:text-xs md:font-medium">
          {menu.title}
        </p>
        <div className="my-7 flex flex-col gap-7">
          {menu.list.map((item: string, idx: number) => (
            <MenuItem item={item} key={idx} />
          ))}
        </div>
        {menu.extra && (
          <div className="mb-8 flex items-center gap-3">
            <div className="flex items-center rounded-xl bg-white p-2 text-2xl">
              <HiOutlineArrowNarrowRight />
            </div>
            <p className="text-lg font-black text-[#444444] md:text-sm md:font-bold">
              {menu.extra}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

const MenuItem = ({ item }: MenuItemType) => {
  return (
    <>
      <div className="flex items-center gap-3">
        <div className="flex items-center rounded-xl bg-[#dbefef] p-2 text-2xl">
          <IoIosSearch />
        </div>
        <p className="text-lg font-black text-[#444444] md:text-sm md:font-bold">
          {item}
        </p>
      </div>
    </>
  );
};

export default OptionsMenu;
