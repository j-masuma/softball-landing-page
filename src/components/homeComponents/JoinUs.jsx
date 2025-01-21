import React from 'react'
import Section from './Section'

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
        <div className='flex justify-center items-center h-full'>
            <div className='bg-white w-[40%] p-8 rounded-3xl flex flex-col justify-between items-center'>
                <h1 className='text-3xl text-center w-[80%]'>
                    Join the team today and start your journey toward excellence!
                </h1>
                <p className='w-[90%] text-center mt-12 text-sm text-gray-500'>
                    <a href="/" className='underline text-black'>Join our team </a>
                     to grow your skills, connect with a supportive community, and achieve your goals, start your journey to excellence today!
                </p>
            </div>
        </div>

    </div>
  )
}

export default JoinUs