import React from 'react'
import Home from '../Common/Home'
import About from './Landing/About'
import Programs from './Landing/Programs'
import ConsultForm from './Landing/ConsultForm'
import ReviewCards from './Landing/ReviewCards'
import Contact from '../Common/Contact'


const HomeLand = () => {
  return (
    <div>
        <Home/>
        <About/>
        <Programs/>
        <ConsultForm/>
        <ReviewCards/>
        <Contact/>
    </div>
  )
}

export default HomeLand