import React from 'react'
import Section from './Section'
import { GoArrowUpRight, GoChevronLeft, GoChevronRight } from 'react-icons/go'

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
                        <button className=" items-center border-2 border-white bg-white p-6 rounded-full shadow-md ml-4 align-middle text-black  hover:border-black hover:bg-black hover:text-gray-200 transition duration-500">   
                            <GoArrowUpRight size={30} className="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-1/2'>
                <div className='flex gap-2'>
                    <div className='w-1/2 border-2  rounded-3xl m-2 p-4'>
                        <div className='flex flex-col justify-between h-full'>
                            <div className='flex gap-2'>
                                <div className='w-1/2'>
                                
                                    <div className='flex justify-center border-2 rounded-[50%] items-center p-4 w-12 h-12 text-2xl'>
                                        +
                                    </div>

                                </div>
                                <div className='w-full md:w-1/2 border-2 border-transparent rounded-3xl overflow-hidden bg-cover' style={{ height: '125px' }}>
                                    <img src="/assets/images/hero-image.png" alt="HeroImage" className="w-full h-full object-cover" />
                                </div>



                            </div>
                            <div>
                                <h1 className='text-[32px]'>Slugger Squad</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div 
                            className='h-[250px]  m-2 boder-2 rounded-3xl overflow-hidden'
                            style={{
                                backgroundImage:'url("/assets/images/hero-image.png")',
                                backgroundSize:'cover',
                                backgroundPosition:'center',
                            }}
                        >
                            <div className='flex flex-col justify-between h-full p-4'>
                                <div className='flex gap-2'>
                                    <div className='w-1/2'>
                                    
                                        <div className='flex justify-center border-2 border-gray-300 rounded-[50%] items-center p-4 w-12 h-12 text-2xl text-gray-300'>
                                            +
                                        </div>

                                    </div>
                                    



                                </div>
                            <div>
                                <h1 className='text-[32px] text-gray-200'>MVP Grind</h1>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                </div>
                <div className='flex gap-1 justify-end m-2'>
                    <button className='border-2 p-4 rounded-full hover:border-black hover:bg-black hover:text-gray-200 transition duration-500'>
                        <GoChevronLeft size={25}/>
                    </button>
                    <button className='border-2 p-4 rounded-full hover:border-black hover:bg-black hover:text-gray-200 transition duration-500'>
                    <GoChevronRight size={25}/>
                    </button>

                </div>
                <div className='flex justify-end mt-12'>
                    <p className='w-1/2 text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, veniam accusantium ratione?
                    </p>
                </div>
            </div>
        </div>

        <div className='px-8 my-8 text-black'>
                <hr className='border-[1.25px] border-gray-400 '/>
        </div>
    </div>
  )
}

export default Programs