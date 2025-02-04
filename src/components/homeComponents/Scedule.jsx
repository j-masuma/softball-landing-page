import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { GoArrowUpRight } from "react-icons/go";

const data = [
  {
    title: "Home Run Derby",
    description:
      "This event is all about power hitting, where players aim to hit the most home runs and claim the slugger crown.",
    img: "/assets/images/bg-image3.png",
    id: "01",
  },
  {
    title: "Diamond Showdown",
    description:
      "This event is all about power hitting, where players aim to hit the most home runs and claim the slugger crown.",
    img: "/assets/images/bg-image3.png",
    id: "02",
  },
  {
    title: "Fastpitch Frenzy",
    description:
      "This event is all about power hitting, where players aim to hit the most home runs and claim the slugger crown.",
    img: "/assets/images/bg-image3.png",
    id: "03",
  },
  {
    title: "All-Star Weekend",
    description:
      "This event is all about power hitting, where players aim to hit the most home runs and claim the slugger crown.",
    img: "/assets/images/bg-image3.png",
    id: "04",
  },
];

const Schedule = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="mx-4 md:mx-8 py-8 overflow-x-hidden">
      <div>
        <Section no={"03"} section={"Schedule"} />
      </div>
      <motion.div
        className="flex flex-col justify-center items-center md:flex-row md:justify-between gap-12 md:gap-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Left Content */}
        <div className="flex items-center md:items-start justify-between flex-col gap-8 md:w-[50%]">
          <h2 className="text-3xl md:text-4xl mt-4 text-center md:text-left">
            <span className="text-yellow-500">Game On:</span> <br /> Upcoming
            Match Schedule
          </h2>
          <p className="text-gray-600 mt-4 text-center md:text-left">
            Don’t miss a single inning! Check out our upcoming matches to stay
            updated on game times, locations, and opponents.
          </p>
          <motion.div
            className="rounded-3xl object-cover overflow-hidden h-[150px] xs:w-[90%] xs:h-[200px] md:h-[250px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <img src="/assets/images/join.png" className="w-full h-full" alt="" />
          </motion.div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-between w-[90%] xs:w-[70%] md:w-[50%]">
          <div>
            {data.map((item, index) => (
              <motion.div
                key={index}
                className="overflow-hidden"
                initial={{ opacity: 0, translateX: 50 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <hr className="my-2 text-gray-200" />
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center border-none px-4 py-4 text-left focus:outline-none"
                >
                  <span className="text-lg xs:text-xl sm:text-2xl">
                    <span className="text-sm text-gray-500">{item.id}.</span>{" "}
                    {item.title}
                  </span>
                  <svg
                    className={`w-8 h-8 bg-gray-100 rounded-[50%] p-2 transform transition-transform ${
                      activeIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeIndex === index && (
                  <div className="px-4 py-2 flex justify-between gap-2 text-gray-700 bg-white">
                    <div className="w-2/3 flex flex-col gap-2 justify-between">
                      {item.description}
                      <button className="inline-flex rounded-3xl w-fit border-[1px] border-black text-sm p-2 transform transition-transform duration-300 hover:bg-black hover:shadow-lg hover:text-white">
                        View Details
                      </button>
                    </div>
                    <div className="w-1/3 object-cover overflow-hidden rounded-3xl m-0 my-8 xs:m-6 mt-0">
                      <img src={item.img} className="w-full h-full" alt="" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
            <hr className="my-2 text-gray-200" />
          </div>
          <div className="flex justify-end mr-4">
            <button className="inline-flex my-2 w-fit text-sm md:text-[16px] items-center gap-1 border-2 text-white border-black bg-black transform transition-transform duration-300 hover:border-yellow-600 hover:bg-yellow-600 hover:scale-105 px-2 py-1 rounded-full shadow-md ml-2 md:ml-4 align-middle">
              Join us
              <span className="border-2 border-white bg-white rounded-full text-white">
                <GoArrowUpRight
                  size={15}
                  className="text-black md:w-5 md:h-5"
                />
              </span>
            </button>
          </div>
        </div>
      </motion.div>
      <div className="px-4 my-8 text-black">
        <hr className="border-y-[0.75px] border-gray-500" />
      </div>
    </section>
  );
};

export default Schedule;
