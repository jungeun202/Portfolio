"use client";

import {motion} from 'framer-motion';
import React, {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import { BsArrowUpRight} from 'react-icons/bs';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const experiences = [
  {
    num : '01',
    category: "Data Analyst Intern",
    // title: "Data Analyst Intern",
    description:   (    
      <>
      Since the summer of 2023, I have been working with <span className="text-highlight text-lg">DIAL Ventures</span> in West Lafayette, IN, a venture studio created in partnership between High Alpha Innovation and Purdue University.
      <br />
      DIAL Ventures focuses on driving digital innovation in the upstream food and agriculture sector, 
      and my role centers on applying data-driven perspectives to these transformative efforts. 
      <br />
      One of my key contributions has been automating and streamlining the categorization, storage, and retrieval of six base industry sentiment surveys using <span className="font-style: italic text-lg">Qualtrics</span> and 
      <span className="font-style: italic text-lg"> MySQL</span>, which resulted in a 30% reduction in processing time.  
      <br />
      Additionally, I designed and implemented a dynamic <span className="font-style: italic text-lg">Tableau</span> dashboard
      that provides over 300 agricultural business executives with valuable insights into future crop demands across various Agrifood segments.
      </> 
    ),
    stack: [
      {name: "Tableau"}, {name: "MySQL"}, {name: "Python"}
    ],
    image: "/assets/tableauDashboard.png",
    live:"https://public.tableau.com/views/dial_survey_new/Dashboard5?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  },
  {
    num : '02',
    category: "Undergraduate Researcher",
    // title: "Undergraduate Researcher",
    description: (
      <>
      During the summer of 2024, I joined the <span className="text-highlight text-lg">LRNING Lab</span> at Hanyang University in Seoul, South Korea, under the supervision of Professor Sungyoo Lee. 
      <br/>
      In this role, I conducted experiments with <span className="font-style: italic text-lg">transformer models</span>, including LUNA and Vanilla, to address <span className="font-style: italic text-lg">NLP tasks</span> such as translation datasets. 
      <br/>
      I also optimized model architectures and hyperparameters, successfully reducing the training loss from 7.29 to 0.24, and performed a comparative analysis of model performance using BLEU scores. 
      <br/>
      Additionally, I analyzed and documented emerging trends in <span className="font-style: italic text-lg">large language models</span>, focusing on in-context learning, transformer optimization, and hierarchical language structures.
      </>
    ),
    stack: [
      {name: "PyTorch"}, {name: "Deep Learning"}
    ],
    image: "",
    live:"https://github.com/jungeun202/Transformer",
  },
  {
    num : '03',
    category: "Summer Undergraduate Research Fellowship (SURF)",
    // title: "Undergraduate Researcher",
    description: (
      <>
      From the summer of 2023 until August 2024, I worked at the <span className="text-highlight text-lg">Digital Agriculture Discovery (DAD) Lab</span> at Purdue University in West Lafayette, IN, under the supervision of Professor Dharmendra Saraswat. 
      <br/>
      In this role, I engineered an interactive <span className="font-style: italic text-lg">AI chatbot</span> for a weed control system that provides farmers with precise and effective treatment instructions.
      <br/>
      I also fine-tuned a <span className="font-style: italic text-lg">deep learning model (BERT)</span> to interpret farmers' inquiries and route them to the appropriate backend <span className="font-style: italic text-lg">APIs</span>.
      <br/>
      Furthermore, I developed a pipeline to extract and embed data from a 500+ page PDF for semantic search, achieving an <span className="font-style: italic text-lg">information retrieval</span> accuracy of 75%
      </>
    ),
    stack: [
      {name: "Python"}, {name: "React"}, {name: "API"}
    ],
    image: "/assets/surf_poster.png",
    live:"",
  }
]
const Experience = () => {
  const [experience, setExperience] = useState(experiences[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setExperience(experiences[currentIndex]);
  };


  return (
    <motion.section initial= {{opacity:0}} animate={{opacity:1, transition:{delay:0.2, duration:0.3, ease:'easeIn'}}} className="min-h-[80yh] flex flex-col justify-center py-12 xl:px-0 " >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">

          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none"> 
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline"> {experience.num} </div>
            {/* experience category */}
            <h2 className="text-[42px] font-bold leading-none text-900 group-hover:text-accent transition-all duration-500 capitalize"> {experience.category}</h2>
            {/* experience description */}
            <p className="text-900">{experience.description}</p>
            {/* stack */}
            <ul className="flex gap-4">
              {experience.stack.map((item,index) => {
                return(
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {/* remove the last comma */}
                    {index !== experience.stack.length-1 && ","}
                  </li>
                )
              })}
            </ul>
            {/* border */}
            <div className="border border-900"></div>
            {/* buttons */}
            <div className="flex items-center gap-4">
              {/* Live experience button */}
            <Link href={experience.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px h-[70px] rounded-full bh-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-whhite text-3xl group-hover:text-accent"/>
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
          <div className="w-full xl:w-[50%]"> 
            <Swiper spaceBetween={30} slidePerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {experiences.map((experience, index) => {
                return (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center">
                  {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                  {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={experience.image}
                        fill
                        className="object-contain"
                        alt=""
                      />
                    </div>
                  {/* overlay */}
                  </div>
                </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>

        </div>
      </div>
    </motion.section>
  )
};

export default Experience;
