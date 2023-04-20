import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/utils/experience";

function WorkExperience() {
  return (
    <motion.div
      className="h-screen flex flex-col relative overflow-hidden 
      text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div
        className="w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory p-10
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {experiences?.map((experience) => (
          <ExperienceCard key={experience?.jobTitle} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
