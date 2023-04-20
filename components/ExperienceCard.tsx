import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[300px] md:w-[600px] xl:w-[900px] snap-center 
    p-10 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer
    transition-opacity duration-200 overflow-auto mt-24"
    >
      <motion.img
        src={experience.companyImage}
        className="h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain border border-[#F7AB0A] p-2 "
        alt="experience image"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
      />

      <div className=" md:px-10">
        <h4 className="text-2xl md:text-4xl font-light">
          {experience.jobTitle}
        </h4>
        <p className="font-bold text-xl mt-4">{experience.company}</p>

        <p className="uppercase py-5 text-gray-300 text-sm font-bold md:text-md ">
          {experience.dateStarted} / {experience.dateEnded}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-sm md:text-lg ">
          {experience?.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
