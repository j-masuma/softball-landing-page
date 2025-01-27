import React from 'react'
import HeroSection from '../components/homeComponents/HeroSection'
import About from '../components/homeComponents/About'
import Programs from '../components/homeComponents/Programs'
import JoinUs from '../components/homeComponents/JoinUs'
import Testimonial from '../components/homeComponents/Testimonial'
import Schedule from '../components/homeComponents/Scedule'

function HomePage() {
  return (
    <div >
      <HeroSection/>
      <About/>
      <Programs/>
      <Schedule/>
      <Testimonial/>
      <JoinUs/>
    </div>
  )
}

export default HomePage