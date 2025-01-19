import React from 'react'
import Section from './Section'
import { GoArrowUpRight } from 'react-icons/go'

function Programs() {
  return (
    <div className='mx-4'>
        <div className='flex gap-2'>
            <div className='w-1/2'>
                <Section no={'02'} section={'Program'} />
            </div>
            <h1 className='text-[48px] w-1/2'>
                Courses Designed for <br /> All Levels
            </h1>
        </div>

        <div className='flex gap-2 mt-4'>
            <div 
            className='h-[500px] w-1/2 m-2 boder-2 rounded-3xl overflow-hidden'
            style={{
                backgroundImage:'url("/assets/images/hero-image.png")',
                backgroundSize:'cover',
                backgroundPosition:'center',
            }}
            >
               <div className='flex flex-col justify-between text-white h-full'>
                    <div className='flex px-6 py-8 gap-2'>
                        <button className='border-2 border-gray-300 text-gray-300 px-4 py-2 rounded-full shadow-md'>
                            Beginner
                        </button>
                        <button className='border-2 border-gray-300 text-gray-300 px-4 py-2 rounded-full shadow-md'>
                            Basics
                        </button>
                    </div>
                    <div className='flex justify-between items-center px-6'>
                        <h1 className='text-[60px]'>Rookie <br /> Ready</h1>
                        <button className=" items-center border-2 border-white bg-white p-6 rounded-full shadow-md ml-4 align-middle">   
                            <GoArrowUpRight size={30} className="text-black" />
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-1/2'>
                <div className='flex gap-2'>
                    <div className='w-1/2 border-2  rounded-3xl m-2'>
                        <div></div>
                    </div>
                    <div className='w-1/2'>
                        <div 
                            className='h-[250px]  m-2 boder-2 rounded-3xl overflow-hidden'
                            style={{
                                backgroundImage:'url("/assets/images/hero-image.png")',
                                backgroundSize:'cover',
                                backgroundPosition:'center',
                            }}
                        ></div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Programs