import React from 'react'
import Section from './Section'
import { GoArrowUpRight } from 'react-icons/go'

function JoinUs() {
  return (
    <div 
    className='min-h-fit h-screen bg-cover m-2 boder-2 rounded-3xl p-2 py-8'
    style={{
        backgroundImage:'url("/assets/images/hero.jpg")',
    }}
    >
        <div>
            <Section no={'03'} section={'Join us'}/>
        </div>
        
        <div className=' flex justify-center items-center h-full'>
            <div className='bg-white w-[80%] md:w-[55%] lg:w-[40%] px-4 py-6 md:p-8 rounded-3xl flex flex-col justify-between items-center'>
                <h1 className='text-xl xs:text-2xl sm:text-3xl text-center w-[90%] md:w-[80%]'>
                    Join the team today and start your journey toward excellence!
                </h1>
                <p className=' justify-center w-[90%] text-center mt-12 text-sm text-gray-500'>
                    <a href="/" className='inline-flex items-center underline text-black hover:text-yellow-800'>Join our team <span className='text-yellow-500 mr-1'><GoArrowUpRight size={18}/> </span> </a>
                    {/* <GoArrowUpRight size={20}/> */}
                    to grow your skills, connect with a supportive community, and achieve your goals, start your journey to excellence today!
                </p>
            </div>
        </div>

    </div>
  )
}

export default JoinUs