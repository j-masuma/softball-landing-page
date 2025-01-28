
import React, { useState, useEffect, useRef } from 'react';
import Section from './Section';
import { GoArrowUpRight, GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { motion, useInView } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

function Programs() {
  const [bgImageIndex, setBgImageIndex] = useState(0);
  const bgImages = [
    '/assets/images/hero-image.png',
    '/assets/images/hero-image2.png',
    '/assets/images/bg-image3.png',
  ];

  // Reference for in-view animations
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: '0px 0px -50px 0px' });

  useEffect(() => {
    const interval = setInterval(() => {
      setBgImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bgImages.length]);

  return (
    <div className="mx-4" ref={containerRef}>
      {isInView && (
        <>
          <motion.div
            className="xs:flex flex-col xs:flex-row xs:justify-between gap-2 mb-8 mt-8"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="w-full ">
              <Section no={'02'} section={'Program'} />
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl w-full pl-4 mt-2">
              Courses Designed for All Levels
            </h1>
          </motion.div>

          <div className="md:flex gap-2 mt-4">
            <motion.div
              className="h-auto md:h-[500px] w-full md:w-1/2 m-2 border-2 rounded-3xl overflow-hidden"
              style={{
                backgroundImage: `url(${bgImages[bgImageIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 1s ease-in-out',
              }}
              initial="hidden"
              animate="visible"
              variants={fadeInLeft}
            >
              <div className="flex flex-col justify-between text-white h-full">
                <div className="flex px-6 py-8 gap-2">
                  <button className="border-2 border-gray-300 text-gray-300 px-2 py-1 sm:px-4 sm:py-2 rounded-full shadow-md">
                    Beginner
                  </button>
                  <button className="border-2 border-gray-300 text-gray-300 px-2 py-1 sm:px-4 sm:py-2 rounded-full shadow-md">
                    Basics
                  </button>
                </div>
                <div className="flex justify-between items-center px-6 mb-6 md:mb-8">
                  <h1 className="text-xl xs:text-3xl md:text-5xl">
                    Rookie <br /> Ready
                  </h1>
                  <button className="items-center border-2 border-white bg-white p-3 md:p-6 rounded-full shadow-md align-middle text-black hover:border-black hover:bg-black hover:text-gray-200 transition duration-500">
                    <GoArrowUpRight className="w-[15px] h-[15px] xs:w-[20px] xs:h-[20px] md:w-[30px] md:h-[30px]" />
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
            >
              <div className="flex flex-col xs:flex-row justify-center align-middle gap-2">
                <motion.div
                  className="xs:w-1/2 border-2 rounded-3xl m-2 py-4 px-4 xs:px-2 md:p-4"
                  variants={fadeInUp}
                >
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex gap-2">
                      <div className="w-1/2">
                        <div className="flex justify-center border-2 rounded-[50%] items-center p-2 sm:p-4 w-10 h-10 sm:w-12 sm:h-12 text-2xl">
                          +
                        </div>
                      </div>
                      <div
                        className="w-full md:w-1/2 border-2 border-transparent rounded-3xl overflow-hidden bg-cover"
                        style={{ height: '125px' }}
                      >
                        <img
                          src="/assets/images/program2.png"
                          alt="HeroImage"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h1 className="text-2xl lg:text-3xl">Slugger Squad</h1>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="xs:w-1/2 h-auto m-2 border-2 rounded-3xl overflow-hidden"
                  style={{
                    backgroundImage: 'url("/assets/images/program1.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  variants={fadeInRight}
                >
                  <div className="flex flex-col justify-between h-full py-4 px-4 xs:px-2 md:p-4">
                    <div className="flex gap-2">
                      <div className="w-1/2">
                        <div className="flex justify-center border-2 border-gray-300 rounded-[50%] items-center p-2 sm:p-4 w-10 h-10 sm:w-12 sm:h-12 text-2xl text-gray-300">
                          +
                        </div>
                      </div>
                    </div>
                    <div>
                      <h1 className="text-2xl lg:text-3xl text-gray-200">MVP Grind</h1>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="flex gap-1 justify-end m-2">
                <button className="border-2 p-2 md:p-4 rounded-full hover:border-black hover:bg-black hover:text-gray-200 transition duration-500">
                  <GoChevronLeft size={25} />
                </button>
                <button className="border-2 p-2 md:p-4 rounded-full hover:border-black hover:bg-black hover:text-gray-200 transition duration-500">
                  <GoChevronRight size={25} />
                </button>
              </div>
              <div className="flex justify-center text-center md:justify-end mt-12">
                <p className="w-[80%] md:w-1/2 text-gray-400">
                Discover the ideal program tailored to your unique goals, skill level, and aspirations, ensuring the perfect fit for your baseball journey.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="px-8 my-8 text-black"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <hr className="border-[1.25px] border-gray-400" />
          </motion.div>
        </>
      )}
    </div>
  );
}

export default Programs;
