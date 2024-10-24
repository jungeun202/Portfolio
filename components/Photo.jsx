"use client";
import { easeIn, easeInOut, motion } from "framer-motion";
import Image from 'next/image';

const Photo = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: easeIn },
        }}
        className="relative flex items-center justify-center"
      >
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{
            opacity: 1,
            transition: { delay: 1.4, duration: 0.4, ease: easeInOut },
          }}
          className="w-[460px] h-[460px] xl:w-[460px] xl:h-[460px] relative "
        >
          <Image 
            src="/assets/headshot.png" 
            priority 
            quality={100} 
            width={460} 
            height={460} 
            alt="Headshot" 
            className="object-contain rounded-full"
          />
        </motion.div>
        {/* Circle */}
        {/* <motion.svg
          className="absolute transform -translate-x-[10px] -translate-y-[5px]"
          width="500"  
          height="500" 
          viewBox="0 0 500 500"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="260"
            cy="260"
            r="250" 
            stroke="#005A9C"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              strokeDasharray: "15 120 25 25",
            }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg> */}
      </motion.div>
    </div>
  );
};

export default Photo;
