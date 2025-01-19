import React from 'react'

function Section({no, section}) {
  return (
    <div className='flex items-center '>
        <p className='border-2 border-gray-800 bg-gray-800 text-gray-200 text-sm rounded-[50%] p-1 px-2'>{no}</p>
        <p className='border-2 border-gray-200 bg-gray-200 rounded-full p-1 text-sm px-2'>{section}</p> 
    </div>
  )
}

export default Section