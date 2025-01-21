import React from 'react'
import HeroSection from '../components/homeComponents/HeroSection'
import About from '../components/homeComponents/About'
import Programs from '../components/homeComponents/Programs'
import JoinUs from '../components/homeComponents/JoinUs'

function HomePage() {
  return (
    <div >
      <HeroSection/>
      <About/>
      <Programs/>
      <JoinUs/>
    </div>
  )
}

export default HomePage