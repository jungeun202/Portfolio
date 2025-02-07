"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { SiMysql, SiNestjs, SiNextdotjs, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaTable } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
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
      { icon: <FaTable />, name: "Tableau" },
      { icon: <FaFire />, name: "Apache Spark" }
    ],
    timeline: "August 2023 - Present",
    location: "West Lafayette, IN",
  },
  {
    num: "02",
    category: "FullStack Engineer Intern",
    title: "Stealth AI Startup",
    description: (
      <>
        soon
      </>
    ),
    skills: [
      // { icon: <SiMysql />, name: "MySQL" },
      // { icon: <FaTable />, name: "Tableau" },
      // { icon: <FaFire />, name: "Apache Spark" }
    ],
    timeline: "January 2025 - Present",
    location: "Remote",
  },
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);
  const experience = experiences[selectedExperience];
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
        {/* Use Grid Layout */}
        <div
          className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center"
          style={{ alignItems: "center" }}
        >
         {/* Left Column */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {experience.num}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-2 mt-8">
              <button
                onClick={() => setSelectedExperience((prev) => (prev === 0 ? experiences.length - 1 : prev - 1))}
                className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
              >
                ◀
              </button>

              <button
                onClick={() => setSelectedExperience((prev) => (prev === experiences.length - 1 ? 0 : prev + 1))}
                className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
              >
                ▶
              </button>
            </div>
          </div>

            <h1 className="text-6xl font-bold text-800">{experience.title}</h1>
            <h2 className="text-[42px] font-bold leading-none text-700 capitalize">
              {experience.category}
            </h2>
            <div className="text-900">{experience.description}</div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="text-xl font-semibold">Skills:</div>
              <div className="text-l text-accent flex flex-wrap gap-2">
                {experience.skills.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-m text-gray-600">
              <p>{experience.timeline}</p>
              <p>{experience.location}</p>
            </div>
          </div>
        </div>

        {/* Tableau Embed Section */}
        {experience.num === "01" && (
        <div className="mt-12 flex justify-center">
          <div
            className="tableauPlaceholder"
            id="viz1711395325602"
            style={{
              position: "relative",
              width: "1000px",
              height: "827px",
              overflow: "hidden",
              display: "block",
            }}
          >
            <noscript>
              <a href="#">
                <img
                  alt="Agrifood Economy Index"
                  src="https://public.tableau.com/static/images/di/dial_survey_new/Dashboard5/1_rss.png"
                  style={{ border: "none" }}
                />
              </a>
            </noscript>
            <iframe
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Data Visualization"
              allowTransparency="true"
              allowFullScreen="true"
              className="tableauViz"
              style={{
                display: "block",
                width: "1000px",
                height: "827px",
                margin: "0px",
                padding: "0px",
                border: "none",
              }}
              src="https://public.tableau.com/views/dial_survey_new/Dashboard5?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Fpublic.tableau.com%2F&:embed_code_version=3&:tabs=no&:toolbar=yes&:animate_transition=yes&:display_static_image=no&:display_spinner=no&:display_overlay=yes&:display_count=yes&:language=en-US&:loadOrderID=0"
            ></iframe>
          </div>
        </div>
        )}
        </div>
    </motion.section>
  );
};

export default Experience;
