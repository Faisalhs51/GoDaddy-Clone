import { IoCloseOutline } from "react-icons/io5";

const LangBox = () => {
  return (
    <div
      className={`z-2 t-0 r-0 absolute h-fit w-full bg-[#e8eaeb] px-20 py-8 text-black md:h-[65%] 
      `}
    >
      {/* <button onClick={showFunc(false)}>
        <IoCloseOutline className="absolute right-4 top-4 cursor-pointer text-xl" />
      </button> */}
      <h3 className="text-3xl font-medium">Choose your Country/Region</h3>
      <div className="flex h-full w-full flex-col justify-evenly gap-10 text-base md:flex-row">
        <ul className="flex h-full flex-col justify-evenly">
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Argentina <span className="text-sm font-normal">- Español</span>
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Australia - English
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            België - Nederlands
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Belgique - Français
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Brasil - Português
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Canada - English
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Canada - Français
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Chile - Español
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Colombia - Español
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Danmark - Dansk
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Deutschland - Deutsch
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            España - Español
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Estados Unidos - Español
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            France - Français
          </li>
        </ul>
        <ul className="flex h-full flex-col justify-evenly">
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Hong Kong - English
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            India - English
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            India - हिंदी
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Indonesia - Bahasa Indonesia
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Ireland - English
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Israel - English
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Italia - Italiano
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Malaysia - English
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            México - Español
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Nederland - Nederlands
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            New Zealand - English
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Norge - Bokmål
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Österreich - Deutsch
          </li>
        </ul>
        <ul className="flex h-full flex-col justify-evenly">
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Pakistan - English
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Perú - Español
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Philippines - English
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Polska - Polski
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Portugal - Português
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Schweiz - Deutsch
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Singapore - English
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            South Africa - English
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Suisse - Français
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Suomi - Suomi
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Sverige - Svenska
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Svizzera - Italiano
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Türkiye - Türkçe
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            United Arab Emirates - English
          </li>
        </ul>
        <ul className="flex h-full flex-col justify-evenly">
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            United Kingdom - English
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            United States - English
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Venezuela - Español
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Việt Nam - Tiếng Việt
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Ελλάδα - Ελληνικά
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            Україна - Українська
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            الإمارات العربية المتحدة - اللغة العربية
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            ไทย - ไทย
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            대한민국 - 한국어
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            台灣 - 繁體中文
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            新加坡 - 简体中文
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            日本 - 日本語
          </li>
          <li className="w-fit cursor-pointer text-sm font-semibold hover:text-[#00a4a6] active:border-b active:border-[#00a4a6]">
            香港 - 繁體中文
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LangBox;
