import { BsChatRightText } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";

const ContactMenu = () => {
  return (
    <>
      <section className="absolute left-0 top-0 z-[6] h-fit w-full bg-white">
        <motion.div
          initial={{ opacity: 0, translateY: "-100%" }}
          animate={{ opacity: 1, translateY: "0%" }}
          transition={{ duration: 0.5 }}
          className="mb-8 mt-16 flex w-full justify-between px-14 py-3"
        >
          <div className="flex w-[50%] flex-col">
            <h3 className="mb-3 text-lg font-semibold">Call Us</h3>
            <p>Call Our Award Winning Support</p>
            <strong className="mb-3 w-fit cursor-pointer font-semibold hover:underline">
              040-67607600
            </strong>
            <p>Global Directory</p>
            <strong className="w-fit cursor-pointer font-semibold hover:underline">
              Phone numbers and hours
            </strong>
          </div>
          <div className="flex w-[50%] flex-col justify-between">
            <h3 className="mb-3 text-lg font-semibold">Chat Now</h3>
            <p>
              Chat with our sales & support team for quick answers on product
              features, pricing
              <br /> and more.
            </p>
            <div className="mb-6 mt-3 flex gap-2">
              <button className="flex items-center gap-1 bg-black px-6 py-2 font-semibold text-white">
                <BsChatRightText className="text-lg" />
                Start Chatting
              </button>
              <button className="flex items-center gap-1 px-6 py-2 font-semibold shadow-sticky">
                <IoLogoWhatsapp className="text-xl" />
                WhatsApp
              </button>
            </div>
            <p>Hours: 24x7 Chat</p>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default ContactMenu;
