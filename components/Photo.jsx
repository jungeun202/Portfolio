"use client";
import { easeIn, easeInOut, motion } from "framer-motion";
import Image from 'next/image';

const Photo = () => {
  return (
  <div className="w-full h-full relative">
    <motion.div 
    initial= {{opacity:0}} 
    animate={{
        opacity:1,
        transition:{delay:1, duration:0.4, ease:easeIn},
    }}
    >
        <motion.div 
        initial= {{opacity:0}} 
        animate={{
            opacity:1,
            transition:{delay:1.4, duration:0.4, ease: easeInOut},
        }}
        className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] ">
            <Image src="/assets/headshot.png" priority quality={100} fill alt="" className="object-contain rounded-lg"/>
        </motion.div>
    </motion.div>
    </div>
  );
};

export default Photo;
