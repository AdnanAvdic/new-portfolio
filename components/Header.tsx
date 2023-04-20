import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Header({}: Props) {
  return (
    <header className=" sticky top-0 z-20 overflow-x-hidden">
      <div className="flex flex-row items-center justify-between max-w-7xl mx-auto p-5">
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className=" flex flex-row items-center"
        >
          <SocialIcon
            url="https://linkedin.com/in/adnan-avdić"
            fgColor="gray"
            bgColor="transparent"
            className="border border-transparent hover:border-[#F7AB0A] rounded-full ease-in-out transform transition"
          />
          <SocialIcon
            url="https://vercel.com/adnanavdic"
            fgColor="gray"
            bgColor="transparent"
            className="border border-transparent hover:border-[#F7AB0A] rounded-full ease-in-out transform transition"
          />
          <SocialIcon
            url="https://instagram.com/avd_adnan"
            fgColor="gray"
            bgColor="transparent"
            className="border border-transparent hover:border-[#F7AB0A] rounded-full ease-in-out transform transition"
          />
          <SocialIcon
            url="https://github.com/AdnanAvdic"
            fgColor="gray"
            bgColor="transparent"
            className="border border-transparent hover:border-[#F7AB0A] rounded-full ease-in-out transform transition"
          />
        </motion.div>

        <motion.div
          onClick={() => (window.location.href = "#contact")}
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-row items-center cursor-pointer border border-transparent hover:border-[#F7AB0A] rounded-full ease-in-out transform transition"
        >
          <SocialIcon
            className="cursor-pointer"
            fgColor="gray"
            bgColor="transparent"
            network="email"
          />

          <p className="text-gray-400 text-sm uppercase hidden md:inline-flex pr-3 ">
            Get in touch
          </p>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
