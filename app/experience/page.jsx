"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";

import { BsArrowUpRight } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";

import { SiMysql, SiNestjs, SiNextdotjs, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const experiences = [
  {
    num: "01",
    category: "Data Analyst Intern",
    title: "DIAL Ventures",
    description: (
      <>
        DIAL Ventures is a venture studio created in partnership between High
        Alpha Innovation and Purdue University.
        <br />
        My role centers on applying data-driven perspectives to these
        transformative efforts.
      </>
    ),
    skills: [
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiNestjs />, name: "NestJS" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <FaReact />, name: "React" },
      { icon: <SiTypescript />, name: "TypeScript" },
    ],
    timeline: "August 2023 - Present",
    location: "West Lafayette, IN",
    image: "/assets/tableauDashboard.png",
    live: "https://public.tableau.com/views/dial_survey_new/Dashboard5?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  },
];

const Experience = () => {
  const [experience] = useState(experiences[0]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.3, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-row gap-6 items-start">
            {/* Number */}
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {experience.num}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-[30px]">
              <h1 className="text-6xl font-bold text-900">{experience.title}</h1>
              <h2 className="text-[42px] font-bold leading-none text-900 capitalize">
                {experience.category}
              </h2>
              <div className="text-900">{experience.description}</div>
              <div className="text-xl font-semibold">Skills:</div>
              <div className="text-l text-accent flex flex-wrap gap-2">
                {experience.skills.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
              <div className="text-m text-gray-600">
                <p>{experience.timeline}</p>
                <p>{experience.location}</p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Link href={experience.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Placeholder for Image */}
          <div className="w-full xl:w-[50%] flex items-center justify-center">
            {/* Uncomment and replace with actual image */}
            <Image
              src={experience.image}
              layout="responsive"
              width={500}
              height={300}
              className="object-contain"
              alt={experience.title}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
