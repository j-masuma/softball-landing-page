import React from 'react'
import HeroSection from '../components/homeComponents/HeroSection'
import About from '../components/homeComponents/About'
import Programs from '../components/homeComponents/Programs'
import JoinUs from '../components/homeComponents/JoinUs'
import Testimonial from '../components/homeComponents/Testimonial'
import Schedule from '../components/homeComponents/Scedule'
import ShowModel from '../components/homeComponents/Model'

function HomePage() {
  return (
    <div >
      <HeroSection/>
      <About/>
      <Programs/>
      <Schedule/>
      <Testimonial/>
      <JoinUs/>
      <ShowModel/>
    </div>
  )
}

export default HomePage