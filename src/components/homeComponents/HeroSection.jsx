
import React, { useRef, useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { motion, useAnimation } from "framer-motion";

function HeroSection() {
  const sectionRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              controls.start("visible");
            } else {
              controls.start("hidden");
            }
          });
        },
        { threshold: 0.2 } 
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, [controls]);

  return (
      <motion.div
        ref={sectionRef}
        className="h-[550px] max:h-screen bg-cover -mt-20 mx-2 border-2 rounded-3xl"
        style={{
          backgroundImage: 'url("/assets/images/hero.jpg")',
        }}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, scale: 0.9, y: 50 },
          visible: { opacity: 1, scale: 1, y: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="h-full flex flex-col justify-between text-white mx-4 md:ml-12 py-4 mt-2">
          <div></div>
          <div className="mt-16">
            <motion.div
              className="flex border-2 border-transparent w-fit p-1 rounded-full bg-slate-200 bg-opacity-40"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { x: -100, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="w-10 h-10 border-2 rounded-[50%] overflow-hidden transform transition-transform duration-300 hover:scale-110">
                <img
                  src="/assets/images/profile.png"
                  className=" w-full h-full object-cover "
                  alt=""
                />
              </div>
              <div className="w-10 h-10 border-2 rounded-[50%] overflow-hidden -ml-3 transform transition-transform duration-300 hover:scale-110">
                <img
                  src="/assets/images/profile.png"
                  className=" w-full h-full object-cover "
                  alt=""
                />
              </div>
              <div className="w-10 h-10 border-2 rounded-[50%] overflow-hidden -ml-3 transform transition-transform duration-300 hover:scale-110">
                <img
                  src="/assets/images/profile.png"
                  className=" w-full h-full object-cover "
                  alt=""
                />
              </div>
            </motion.div>
            <motion.div
              className="w-[95%] xs:w-3/4 md:w-[49%] text-lg md:text-xl"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Join a growing community of{" "}
              <span className="text-yellow-500">
                baseball enthusiasts
              </span>{" "}
              who've sharpened their skills and boosted their confidence with our
              expert-led training. Be part of the success stories!
            </motion.div>
          </div>
          <motion.div
            className="w-[95%] xs:w-3/4 md:w-2/3 lg:1/2 my-12"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="text-3xl md:text-5xl ">
              Join a Passionate Community of Softball Enthusiasts!
              <motion.button
                className="inline-flex text-sm md:text-[16px] items-center gap-1 border-2 border-black bg-black transform transition-tranform duration-300 hover:border-yellow-600 hover:bg-yellow-600 px-2 py-1 rounded-full shadow-md ml-2 md:ml-4 align-middle"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join us
                <span className="border-2 border-white bg-white rounded-full text-white transform transition-tranform duration-300 hover:rotate-90">
                  <GoArrowUpRight
                    size={15}
                    className="text-black md:w-5 md:h-5"
                  />
                </span>
              </motion.button>
            </span>
          </motion.div>
        </div>
      </motion.div>
  );
}

export default HeroSection;
