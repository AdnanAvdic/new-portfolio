import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/utils/projects";
import Link from "next/link";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-xol text-left
     md:flex-row max-w-full justify-evenly mx-auto items-center z-0 overflow-hidden"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full h-screen flex overflow-x-scroll overflow-y-hidden snap-mandatory z-20 snap-x
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 p-10 "
      >
        {projects?.map((project, i) => (
          <Link key={project.id} href={project.linkToBuild}>
            <div
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 
            items-center justify-center p-10 md:p-44 h-screen "
            >
              <motion.img
                src={project.image}
                className="md:w-[600px] cursor-pointer "
                alt="projekti"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0 }}
              />

              <div className="space-y-7  px-0 md:px-10 max-w-6xl">
                <h4 className="text-2xl md:text-4x; font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]">
                    Project {i + 1} of {projects?.length}:{" "}
                  </span>
                  {project?.title}
                </h4>
                <div className="flex items-center justify-center space-x-2">
                  {project?.techUsed.map((tech) => (
                    <img
                      src={tech?.image}
                      alt="tech used"
                      className="w-8 h-8 md:w-12 md:h-12"
                      key={tech.title}
                    />
                  ))}
                </div>

                <p className="text-sm md:text-lg text-center md:text-left">
                  {project?.summary}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div
        className="w-full absolute top-[30%] bg-[#F7AB0A]/10 
      left-0 h-[500px] -skew-y-12"
      ></div>
    </motion.div>
  );
}

export default Projects;
