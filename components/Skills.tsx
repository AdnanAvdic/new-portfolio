import React from "react";
import { motion } from "framer-motion";
import Skill from "@/components/Skill";
import { skills } from "@/utils/skills";

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col text-center md:text-left items-center
        xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto pt-24"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Skills learned in my career
      </h3>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-5 ">
        {skills.map((skill) => (
          <Skill key={skill.title} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
