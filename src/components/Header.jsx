import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { IoSearchOutline } from 'react-icons/io5'
import { TbHeartHandshake } from 'react-icons/tb'

function Header() {
  return (
    <div className='flex justify-between items-center p-4 mt-4 mx-4'>
        <div>
            <button className='flex items-center gap-1 border-2 border-white bg-white px-2 py-1 rounded-full shadow-md '>
                <span className='border-2 border-yellow-500  bg-yellow-500 rounded-[50%] p-1'>
                <TbHeartHandshake size={20} />
                </span>
                Slugger
            </button>
        </div>
        <div className='flex gap-2'>
            <button className=' border-2 border-white px-2 py-1 rounded-full shadow-md text-white '>
                Home
            </button>
            <button className=' border-2 border-white px-2 py-1 rounded-full shadow-md text-white '>
                Programs
            </button>
            <button className=' border-2 border-white px-2 py-1 rounded-full shadow-md text-white '>
                Coaches
            </button>
            <button className=' border-2 border-white px-2 py-1 rounded-full shadow-md text-white '>
                Scedule
            </button>
            <button className='border-2 border-white rounded-[50%] bg-white p-1'>
                <IoSearchOutline size={25}/>
            </button>
        </div>
        <div>
            <button className='flex items-center gap-1 border-2 border-white bg-white px-2 py-1 rounded-full shadow-md '>
                Free Trial
                <span className='border-2 border-gray-800  bg-gray-800 rounded-[50%] p-1 text-white'>
                    <GoArrowUpRight size={20}/>
                </span>
            
            </button>
        </div>
    </div>
  )
}

export default Header