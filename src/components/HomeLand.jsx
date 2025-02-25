import React from 'react'
import Home from '../Common/Home'
import About from './Landing/About'
import Programs from './Landing/Programs'
import ConsultForm from './Landing/ConsultForm'
import ReviewCards from './Landing/ReviewCards'
import Contact from '../Common/Contact'
import HabFitFeatures from './Landing/HabfitFeatures'

const HomeLand = () => {
  return (
    <div>
        <Home/>
        <About/>
        <Programs/>
        {/* <HabFitFeatures/> */}
        <ConsultForm/>
        <ReviewCards/>
        <Contact/>
    </div>
  )
}

export default HomeLand