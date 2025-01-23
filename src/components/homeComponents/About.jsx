

import React from 'react';
import Section from './Section';
import { GoArrowUpRight } from 'react-icons/go';
import { RxRocket } from 'react-icons/rx';
import { CiBaseball } from 'react-icons/ci';
import { GiCrossedAxes } from 'react-icons/gi';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 }); // Watches for visibility
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  const containerVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div ref={ref} className="mx-4 my-16 min-h-fit">
      <motion.div 
        className="flex justify-between items-center" 
        initial="hidden" 
        animate={controls} 
        variants={containerVariant}
      >
        <Section no={'01'} section={'About'} />
        <motion.button
          className="flex items-center text-sm hover:text-yellow-500"
          variants={itemVariant}
        >
          Learn more
          <GoArrowUpRight size={15} className="" />
        </motion.button>
      </motion.div>
      
      <motion.div 
        className="flex flex-col items-center"
        initial="hidden"
        animate={controls}
        variants={containerVariant}
      >
        <motion.div
          className="flex justify-center items-center w-[90%] md:w-2/3"
          variants={itemVariant}
        >
          <div className="h-36 w-36 overflow-hidden rounded-3xl -rotate-45 border-2 border-transparent opacity-55">
            <img src="/assets/images/airpods.png" alt="" />
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center text-center text-2xl xs:text-3xl md:text-4xl text-gray-800 -mt-12"
          variants={itemVariant}
        >
          <span className="w-90% md:w-[75%] lg:60%">
            We provide exceptional baseball
            <span className="inline-flex w-[50px] h-[50px] mx-1 rounded-full overflow-hidden bg-cover items-center">
              <img src="/assets/images/profile.png" alt="HeroImage" className="w-full h-full object-cover" />
            </span>
            training at over
            <span className="inline-flex max-w-fit items-center gap-1 border-2 border-yellow-500 mx-2 bg-yellow-500 px-2 py-1 rounded-full shadow-md text-sm -rotate-12">
              <span className="border-2 border-white bg-white rounded-[50%] p-1">
                <RxRocket />
              </span>
              100+
            </span>
            locations, catering to players of all skill levels. From cutting-edge facilities in
            <span className="inline-flex max-w-fit items-center gap-1 border-2 border-yellow-500 mx-2 bg-yellow-500 px-2 py-1 rounded-full shadow-md">
              <CiBaseball size={20} />
            </span>
            bustling cities to picturesque fields in serene setting to create the
            <span className="text-yellow-500"> perfect environment for honing your skills and enjoying the game you love.</span>
          </span>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-4 my-8"
          variants={itemVariant}
        >
          <div className="flex items-center">
            <div className="h-0.5 bg-gradient-to-l from-yellow-500 to-transparent w-16 xs:w-28"></div>
            <div className="w-2 h-2 xs:w-4 xs:h-4 bg-yellow-500 rounded-full"></div>
          </div>
          <div className="items-center justify-center p-2 border-2 border-gray-300 rounded-full mx-3">
            <div className="items-center justify-center p-2 border-2 border-gray-400 rounded-full">
              <div className="items-center justify-center px-1 py-4 border-2 border-gray-600 rounded-full">
                <GiCrossedAxes size={32} className="text-black" />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 xs:w-4 xs:h-4 bg-yellow-500 rounded-full"></div>
            <div className="h-0.5 bg-gradient-to-r from-yellow-500 to-transparent w-16 xs:w-28"></div>
          </div>
        </motion.div>

        <motion.div className="px-8 text-black" variants={itemVariant}>
          <hr className="border-[1.25px] border-gray-400 " />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
