import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

function HeroSection() {
  return (
    <div 
    className='h-[550px] max:h-screen bg-cover -mt-20 mx-2 boder-2 rounded-3xl'
    style={{
        backgroundImage:'url("/assets/images/hero.jpg")',
    }}
    >
        <div className='h-full flex flex-col justify-between text-white mx-4 md:ml-12 py-4 mt-2'>
              <div className=''></div>
              <div className='mt-16'>
                <div className='flex border-2 border-transparent w-fit p-1 rounded-full bg-slate-200 bg-opacity-40 '>
                    <div className='w-10 h-10 border-2 rounded-[50%] overflow-hidden'>
                      <img src="/assets/images/profile.png" className=' w-full h-full object-cover ' alt=""/>
                    </div>
                    <div className='w-10 h-10 border-2 rounded-[50%] overflow-hidden -ml-3'>
                      <img src="/assets/images/profile.png" className=' w-full h-full object-cover ' alt=""/>
                    </div>
                    <div className='w-10 h-10 border-2 rounded-[50%] overflow-hidden -ml-3'>
                      <img src="/assets/images/profile.png" className=' w-full h-full object-cover ' alt=""/>
                    </div>
                </div>
                <div className='w-[95%] xs:w-3/4 md:w-[49%] text-lg md:text-xl'>
                  Join a growing community of <span className='text-yellow-500'>baseball enthusiasts</span> who've sharpend their skills and boosted their confidence with our expert-led training. Be part of the success stories! </div>
              
              </div>
              <div className='w-[95%] xs:w-3/4 md:w-2/3 lg:1/2 my-12'>
                  <span className='text-3xl md:text-5xl '>
                    Join a Passionate Community of Softball Enthusiasts!
                    
                    <button className="inline-flex text-sm md:text-[16px] items-center gap-1 border-2 border-gray-800 bg-gray-800 hover:border-gray-700 hover:bg-gray-700 px-2 py-1 rounded-full shadow-md ml-2 md:ml-4 align-middle">
                      Join us
                      <span className="border-2 border-white bg-white rounded-full text-white">
                        <GoArrowUpRight size={15} className="text-black md:w-5 md:h-5" />
                      </span>
                    </button>



                  </span>
                  
              </div>

        </div>
    </div>
  )
}

export default HeroSection