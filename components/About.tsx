import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="h-screen flex flex-col relative text-center max-w-7xl
    md:text-left md:flex-row px-10 justify-evenly mx-auto items-center pt-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        src="hero-image.jpg"
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.0 }}
        className="-mb-32 lg:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-96 
        xl:w-[500px] xl:h-[600px]"
      />

      <motion.div
        className="space-y-10 px-0 md:px-10"
        initial={{
          x: 200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.0 }}
      >
        <h4 className="text-4xl font-semibold pt-16 ">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <p className="text-md lg:text-xl text-left">
          Hi, my name is Adnan Avdic and I am a self-taught web developer. I am
          24 years old and I have always had a passion for technology and
          building things from scratch. I have spent countless hours learning
          and practicing my skills and I am constantly amazed by the endless
          possibilities of the web.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default About;
