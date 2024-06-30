'use client';

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";

const projects = [
  {
    num: '01',
    title: 'PKA Web Development',
    description: "Develop a scalable full-stack web application designed for students to access career opportunities and information regarding Purdue, and to interact within a social networking platform.",
    href: 'https://purdueka.org/'

  } ,
  {
    num: '02',
    title: 'Personal Portfolio Web Development',
    description: "Develop a web application to display personal and career improvement.",
    href: 'https://github.com/jungeun202/portfolio'

  } ,
  
]

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
        initial= {{opacity:0}} 
        animate={{
            opacity:1,
            transition:{delay:0.6, duration:0.4, ease: "easeIn"},
        }}
        className="grid grid-cols-1    "
        >
          {projects.map((project, index) => {
            return (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hove transition-all duration-500">
                  {project.num}
                </div>
                <Link href={project.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="tect-primary text-3xl"/>
                </Link> 
              </div>
              <h2 className="text-[42px] font-bold leading-none text-gray-700 group-hover:text-accent transition-all duration-500">{project.title}</h2>
              <p className="text-gray-700">{project.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
            );
          })}

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
