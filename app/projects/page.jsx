'use client';

import { BsArrowDownRight } from "react-icons/bs";
import { FaReact, FaJs, FaOpencart } from "react-icons/fa"; 
import { SiNestjs, SiNextdotjs, SiTypescript, SiTailwindcss, SiMysql, SiPytorch } from "react-icons/si"; 
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    num: '01',
    title: 'Guess That Jam',
    description: (
      <>
        Developed a scalable full-stack web game where players guess the title of a song from short audio clips, using song data retrieved from an open GitHub source.
      </>
    ),
    href: 'https://github.com/jungeun202/Game-Demo',
    skills: [
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <FaReact />, name: "React" },
      { icon: <SiTypescript />, name: "TypeScript" },
    ],
    video: '/assets//demo.mov',
    timeline: 'Jan 2025 - Present',
  },
  {
    num: '02',
    title: 'Domain-Adaptive Learning for Visual Action Recognition with Temporal Modeling',
    description: (
      <>
        Reimplemented the Recurrent Vision Transformer (RViT) architecture for a cross-modality task by tailoring the architecture for image training and video prediction, demonstrating its versatility in action label inference.
      </>
    ),
    href: 'https://github.com/jungeun202/CS593',
    skills: [
      { icon: <SiPytorch />, name: "PyTorch" },
      { icon: <FaOpencart />, name: "OpenCV" },
    ],
    image: '/assets/proj3.png',
    timeline: 'Aug 2024 - Dec 2024',
  },
  {
    num: '03',
    title: 'PKA Web Development',
    description: (
      <>
        Developed a scalable full-stack web application designed for students to access career opportunities and information regarding Purdue, and to interact within a social networking platform.
      </>
    ),
    href: 'https://purdueka.org/',
    skills: [
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiNestjs />, name: "NestJS" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <FaReact />, name: "React" },
      { icon: <SiTypescript />, name: "TypeScript" },
    ],
    image: '/assets/Purdue_KSA.PNG',
    timeline: 'Jan 2024 - Aug 2024',
  },
  {
    num: '04',
    title: 'Personal Portfolio Web Development',
    description: (
      <>
        Develop a web application to display personal and career improvement.
      </>
    ),
    href: 'https://github.com/jungeun202/portfolio',
    skills: [
      { icon: <SiNestjs />, name: "NestJS" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <FaReact />, name: "React" },
    ],
    image: '/assets/homepage.png',
    timeline: 'May 2024 - Present',
  },
  {
    num: '05',
    title: 'Kaggle Competitions - LLM Classification Finetuning',
    description: (
      <>
        Predict user preferences in head-to-head battles between LLM-powered chatbots.
      </>
    ),
    href: 'https://github.com/jungeun202/kaggle',
    skills: [
      { icon: <SiPytorch />, name: "PyTorch" },
      // { icon: <FaOpencart />, name: "OpenCV" },
    ],
    image: '',
    timeline: 'Dec 2024 - Present',
  },
];

const Projects = () => {

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.6, duration: 0.4, ease: "easeIn" },
        }}
        className="grid grid-cols-1 xl:grid-cols-1 gap-[60px]"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center"
          >
            {/* Text Section */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hove transition-all duration-500">
                  {project.num}
                </div>
                <h2 className="text-[28px] font-bold leading-none text-gray-700">
                  {project.title}
                </h2>
              </div>
              <p className="text-gray-600">{project.description}</p>
              <div className="flex items-center gap-4 text-gray-700">
                {project.skills.map((skill, i) => (
                  <div key={i} className="relative group">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-500">{project.timeline}</div>
              <Link href={project.href} className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="tect-primary text-2xl"/>
                </Link>
            </div>

            {/* Media Section */}
            <div className="w-full h-auto rounded-lg shadow-lg flex justify-center">
              {project.video ? (
                <video controls className="w-full h-auto">
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto"
                />
              ) : (
                <div className="text-center text-gray-500">
                  No media available
                </div>
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
  );
};

export default Projects;
