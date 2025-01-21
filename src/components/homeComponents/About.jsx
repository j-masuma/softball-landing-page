import React from 'react'
import Section from './Section'
import { GoArrowUpRight } from 'react-icons/go'
import { RxRocket } from 'react-icons/rx'
import { CiBaseball } from 'react-icons/ci'
import { GiCrossedAxes } from 'react-icons/gi'

function About() {
  return (
    <div className='mx-4 my-16 min-h-fit'>
        <div className='flex justify-between items-center'>
            <Section no={'01'} section={'About'}/>
            <button className='flex items-center text-sm'>
                Learn more
                <GoArrowUpRight size={15} className="text-black" />
            </button>
        </div>
        <div>
            <div className='flex justify-center items-center w-[90%] md:w-2/3'>
                <div className=' h-36 w-36 overflow-hidden rounded-3xl -rotate-45 border-2 border-transparent opacity-55'>
                    <img src="/assets/images/airpods.png"  alt="" />
                </div>
            </div>
            <div className='flex justify-center text-center text-2xl xs:text-3xl md:text-4xl text-gray-800 -mt-12 '>
                <span className='w-90% md:w-[75%] lg:60% '>
                    We provide exceptional baseball

                    <span className='inline-flex w-[50px] h-[50px]  rounded-full overflow-hidden bg-cover items-center'>
                        <img src="/assets/images/profile.png" alt="HeroImage" className="w-full h-full object-cover" />
                    </span>

                     training at over 
                    <span className='inline-flex max-w-fit items-center gap-1 border-2 border-yellow-500 mx-2 bg-yellow-500 px-2 py-1 rounded-full shadow-md text-sm -rotate-12'>
                        <span className='border-2  border-white bg-white rounded-[50%] p-1'>
                        <RxRocket />
                        </span>
                        100+
                    </span>
                    locations, catering to players of all skill levels. From cutting-edge facilities in 
                    <span className='inline-flex max-w-fit items-center gap-1 border-2 border-yellow-500 mx-2 bg-yellow-500 px-2 py-1 rounded-full shadow-md'>
                        
                     <CiBaseball size={20}/>
                        
                    </span>
                    bustling cities to picturesque fields in serene setting to create the 
                    <span className='text-yellow-500'> perfect environment for honing your skills and enjoying the game you love.</span>
                </span>
            </div>
        

            <div className="flex items-center justify-center gap-4 my-8">
                {/* Left Line */}
                <div className="flex items-center">
                    <div className="h-0.5 bg-gradient-to-l from-yellow-500 to-transparent w-28"></div>
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                </div>

                {/* Center Icon */}
                <div className="items-center justify-center p-2 border-2 border-gray-300 rounded-full mx-3">
                    <div className="items-center justify-center p-2 border-2 border-gray-400 rounded-full">
                        <div className=" items-center justify-center px-1 py-4 border-2 border-gray-600 rounded-full">
                            <GiCrossedAxes
                            size={32} className="text-black" />
                        </div>
                    </div>
                </div>

                {/* Right Line */}
                <div className="flex items-center">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    <div className="h-0.5 bg-gradient-to-r from-yellow-500 to-transparent w-28"></div>
                </div>
            
            </div>


            <div className='px-8 text-black'>
                <hr className='border-[1.25px] border-gray-400 '/>
            </div>
    
        </div>
    </div>
  )
}

export default About