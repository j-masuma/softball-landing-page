import React from 'react'
import { GoArrowUp } from 'react-icons/go'
import { TbHeartHandshake } from 'react-icons/tb'

function Footer() {
  return(
    <div className='bg-black p-4 md:p-8'>

        <div className='px-4 my-4 md:my-8 text-black'>
                <hr className='border-y-[1px] border-gray-500 '/>
        </div>

        <div>
            <button className='flex items-center gap-1 border-2 border-white bg-white px-2 py-1 rounded-full shadow-md '>
                <span className='border-2 border-yellow-500  bg-yellow-500 rounded-[50%] p-1'>
                <TbHeartHandshake size={20} />
                </span>
                Slugger
            </button>
        </div>
        <div className='md:flex justify-between items-center  mt-16'>
            <div className='flex justify-center text-center md:text-left  md:w-[50%]'>
              <h1 className='text-gray-200 text-xl xs:text-2xl md:text-[32px] w-[90%]'>We are dedicated to empowering baseball players of all skill levels. </h1>
            </div>
            <div className='w-32 h-32 rounded-3xl overflow-hidden md:mr-20 my-2 md:my-0 justify-self-center'>
              <img src="/assets/images/footer.png" className='w-full h-full' alt="" />
            </div>
        </div>

        <div className='px-4 my-8 text-black'>
                <hr className='border-y-[0.75px] border-gray-500 '/>
        </div>

        <div className='space-y-2 md:flex justify-between text-gray-500 px-4 text-lg'>
          <p>123 Baseball Lane, Sports City, USA</p>
          <p>+1(555)123-4567</p>
          <p>info@gmail.com</p>
        </div>

        <div className='space-y-4 text-center md:flex justify-between items-center mt-8 md:mt-16'>
          <div className='text-gray-500 text-sm'>@2025 Sluggers, All right reserves</div>
          <div className='flex gap-2 justify-center'>
                      <button className=' border-[1px] border-white px-2 py-1 rounded-full shadow-md text-white hover:border-yellow-500 hover:bg-yellow-500 hover:text-gray-200 transition duration-500 '>
                          Home
                      </button>
                      <button className=' border-[1px] border-white px-2 py-1 rounded-full shadow-md text-white  hover:border-yellow-500 hover:bg-yellow-500 hover:text-gray-200 transition duration-500'>
                          Programs
                      </button>
                      <button className=' border-[1px] border-white px-2 py-1 rounded-full shadow-md text-white  hover:border-yellow-500 hover:bg-yellow-500 hover:text-gray-200 transition duration-500'>
                          Coaches
                      </button>
                      <button className=' border-[1px] border-white px-2 py-1 rounded-full shadow-md text-white  hover:border-yellow-500 hover:bg-yellow-500 hover:text-gray-200 transition duration-500'>
                          Scedule
                      </button>
                      <button className='border-2 border-white rounded-[50%] bg-white p-1  hover:border-yellow-500 hover:bg-yellow-500 hover:text-gray-200 transition duration-500'>
                          <GoArrowUp size={25}/>
                      </button>
                  </div>
        </div>

    </div>
  )
}

export default Footer