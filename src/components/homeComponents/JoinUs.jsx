
import React from 'react';
import Section from './Section';
import { GoArrowUpRight } from 'react-icons/go';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CiBaseball } from 'react-icons/ci';

function JoinUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 }); 

  
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } },
  };

  const contentVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
  };

  const textVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.5 } },
  };

  return (
    <motion.div
      className="min-h-fit h-screen bg-cover m-2 border-2 rounded-3xl p-2 py-8"
      style={{
        backgroundImage: 'url("/assets/images/join.png")',
      }}
      ref={ref} 
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'} 
      variants={containerVariant}
    >
      <motion.div variants={contentVariant}>
        <Section no={'05'} section={'Join us'} />
      </motion.div>

      <motion.div
        className="flex justify-center items-center h-full"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'} 
        variants={contentVariant}
      >
        <motion.div
          className="bg-white  w-[80%] md:w-[55%] lg:w-[40%] px-4 py-6 md:p-8 rounded-3xl flex flex-col justify-between items-center"
          variants={textVariant}
        >
          <h1 className="text-xl xs:text-2xl sm:text-3xl text-center w-[90%] md:w-[80%]">
            Join the team today and start 
            <span className="inline-flex max-w-fit items-center gap-1 border-2 border-yellow-500 mx-2 bg-yellow-500 px-2 py-1 rounded-full shadow-md transform transition-transform duration-300 hover:scale-125 hover:-rotate-12">
              <CiBaseball size={20} className="animate-bounce"/>
            </span>
            your journey toward excellence!
          </h1>
          <p className="justify-center w-[90%] text-center mt-12 text-sm text-gray-500">
            <a
              href="/"
              className="inline-flex items-center underline text-black hover:text-yellow-500"
            >
              Join our team{' '}
              <span className="text-yellow-500 mr-1">
                <GoArrowUpRight size={18} />
              </span>{' '}
            </a>
            to grow your skills, connect with a supportive community, and
            achieve your goals, start your journey to excellence today!
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default JoinUs;
