
import React from 'react';
import Section from './Section';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { PiDropboxLogoLight } from 'react-icons/pi';
import { motion } from "framer-motion";

const card_data = [
  {
    id: 1,
    company: "Lesch.",
    testimonial: "The coaching here transformed my game. I’m more confident at the plate!",
    name: "Kristin Watson",
    position: "Lesch - Jakubowski",
    address: "577 Glover Lights, Reichertland, British Indian",
    image: "/assets/images/profile.png",
  },
  {
    id: 2,
    company: "O'Reilly LLC.",
    testimonial: "My kid loves the Rookie Ready sessions. It’s incredible to see them learn!",
    name: "Cody Fisher",
    position: "O'Reilly LLC",
    address: "1089 Caesar Place, New Kyle, Tajikistan",
    image: "/assets/images/profile.png",
  },
];

export default function Testimonial() {
  return (
    <div className="mx-4 sm:mx-8 mb-8 overflow-x-hidden overflow-y-hidden">
      <div className="my-4">
        <Section no={"04"} section={"Testimonial"} />
      </div>
      <motion.div
        className="flex flex-col md:flex-row md:justify-between gap-6 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Left Section */}
        <motion.div
          className="flex flex-col justify-between md:w-1/4 p-2 mb-6 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-[80px] sm:w-[150px] h-[80px] sm:h-[150px] rounded-3xl overflow-hidden object-cover mx-auto lg:mx-0 transform transition-transform duration-300 hover:scale-110">
            <img
              src="/assets/images/join.png"
              className="w-full h-full"
              alt="Community"
            />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6">
              From Our Baseball Community
            </h2>
            <div className="flex justify-center lg:justify-start space-x-2">
              <button className="border-2 p-2 rounded-full hover:border-black hover:bg-black hover:text-gray-200 transition duration-500">
                <GoChevronLeft size={20} />
              </button>
              <button className="border-2 p-2 rounded-full hover:border-black hover:bg-black hover:text-gray-200 transition duration-500">
                <GoChevronRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="flex justify-center md:justify-end gap-4 w-full md:w-3/4 px-2 py-4 md:p-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {card_data.map((card) => (
            <Testcards
              company={card.company}
              testimonial={card.testimonial}
              name={card.name}
              position={card.position}
              address={card.address}
              image={card.image}
              key={card.id}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export const Testcards = ({ company, testimonial, name, position, image, address }) => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 border-2 p-2 xs:p-4 sm:p-6 rounded-3xl bg-[#F1F1F1] border-[#F1F1F1] transition transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out max-w-[300px]">
      {/* Card Header */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center border-2 p-2 rounded-3xl">
          <PiDropboxLogoLight size={20} />
          <p className="text-sm">{company}</p>
        </div>
        <div className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] rounded-full overflow-hidden object-cover">
          <img src={image} className="w-full h-full" alt="Profile" />
        </div>
      </div>

      {/* Testimonial Content */}
      <div className="text-lg sm:text-xl">
        <div className="text-yellow-500 text-3xl sm:text-4xl">❝</div>
        <p className="mt-2 text-xl md:text-2xl">{testimonial}</p>
      </div>

      {/* Card Footer */}
      <div className="text-xs sm:text-sm">
        <p className="font-semibold">{name}</p>
        <p className="text-gray-600">{position}</p>
        <p className="text-gray-600">{address}</p>
      </div>
    </div>
  );
};
