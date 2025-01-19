import React from 'react'
import HeroSection from '../components/homeComponents/HeroSection'
import About from '../components/homeComponents/About'
import Programs from '../components/homeComponents/Programs'

function HomePage() {
  return (
    <div >
      <HeroSection/>
      <About/>
      <Programs/>
    </div>
  )
}

export default HomePage