import React from "react";
import { motion } from "framer-motion";
import { Skill } from "@/typings";

type Props = {
  skill: Skill;
};

function Skill({ skill }: Props) {
  return (
    <motion.div
      className=" relative flex"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <img
        src={skill.image}
        alt="skill"
        className="rounded-full border border-gray-500 object-cover w-[96px] h-[96px] 
        xl:h-32 xl:w-32 "
      />
    </motion.div>
  );
}

export default Skill;
