
import React from 'react';
import Section from './Section';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { PiDropboxLogoLight } from 'react-icons/pi';


const card_data=[
  {
    "id": 1,
    "company": "Lesch.",
    "testimonial": "The coaching here transformed my game. I’m more confident at the plate!",
    "name": "Kristin Watson",
    "position": "Lesch - Jakubowski",
    "address": "577 Glover Lights, Reichertland, British Indian",
    "image": "/assets/images/profile.png"
  },
  {
    "id": 2,
    "company": "O'Reilly LLC.",
    "testimonial": "My kid loves the Rookie Ready sessions. It’s incredible to see them learn!",
    "name": "Cody Fisher",
    "position": "O'Reilly LLC",
    "address": "1089 Caesar Place, New Kyle, Tajikistan",
    "image": "/assets/images/profile2.png"
  }
]

function Testimonial() {
  return (
    <div className="mx-4 sm:mx-8 mb-8">
      <div className="my-4">
        <Section no={'03'} section={'Testimonial'} />
      </div>
      <div className="flex flex-col md:flex-row  md:justify-between">
        {/* Left Section */}
        <div className="flex flex-col justify-between md:w-1/5 p-2 mb-6 lg:mb-0">
          <div className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] rounded-3xl overflow-hidden object-cover mx-auto lg:mx-0">
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
        </div>

        {/* Right Section */}
        <div className="flex flex-col xs:flex-row gap-4 xs:w-full md:gap-4 md:w-3/5">
          {
            card_data.map((card)=>{
              return(
                <Testcards 
                company={card.company}
                testimonial={card.testimonial}
                name={card.name}
                position= {card.position}
                address= {card.address}
                image= {card.image}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Testimonial;





export const Testcards = ({company, testimonial,name, position, image, address}) => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 border-2 p-4 sm:p-6 rounded-3xl bg-[#F1F1F1] border-[#F1F1F1]  transition transform hover:scale-105 hover:shadow-xl  duration-300 ease-in-out">
      {/* Card Header */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center border-2 p-2 rounded-3xl">
        <PiDropboxLogoLight size={20} />
          <p className="text-sm">Lesech.</p>
        </div>
        <div className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] rounded-full overflow-hidden object-cover">
          <img
            src="/assets/images/profile.png"
            className="w-full h-full"
            alt="Profile"
          />
        </div>
      </div>

      {/* Testimonial Content */}
      <div className="text-lg sm:text-xl">
        <div className="text-yellow-500 text-3xl sm:text-4xl">❝</div>
        <p className="mt-2 text-xl md:text-2xl">
          The coaching here transformed my game. I’m more confident at the plate!
        </p>
      </div>

      {/* Card Footer */}
      <div className="text-xs sm:text-sm">
        <p className="font-semibold">Kristin Watson</p>
        <p className="text-gray-600">Lesch - Jakubowski</p>
        <p className="text-gray-600">577 Glover Lights, Reichertland, British Indian</p>
      </div>
    </div>
  );
};
