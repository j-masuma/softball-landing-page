import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

function HeroSection() {
  return (
    <div 
    className='h-screen bg-cover -mt-20 m-2 boder-2 rounded-3xl'
    style={{
        backgroundImage:'url("/assets/images/hero.jpg")',
    }}
    >
        <div className='h-full flex flex-col justify-between text-white mx-4 py-4'>
              <div></div>
              <div>
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
                <div className='w-1/3'>
                  Join a growing community of <span className='text-yellow-500'>baseball enthusiasts</span> who've sharpend their skills and boosted their confidence with our expert-led training. Be part of the success stories! </div>
              
              </div>
              <div className='w-1/2'>
                  <span className='text-5xl '>
                    Join a Passionate Community of Softball Enthusiasts!
                    
                    <button className="inline-flex text-[16px] items-center gap-1 border-2 border-gray-800 bg-gray-800 px-2 py-1 rounded-full shadow-md ml-4 align-middle">
                      Join us
                      <span className="border-2 border-white bg-white rounded-full p-1 text-white">
                        <GoArrowUpRight size={20} className="text-black" />
                      </span>
                    </button>



                  </span>
                  
              </div>

        </div>
    </div>
  )
}

export default HeroSection