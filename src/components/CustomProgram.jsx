import React from 'react'
import Home from '../components/Postpartum/Home'
import Contact from '../components/Postpartum/Contact'
import WelcomeSection from './CustomProgram/WelcomeSection'
// import WhyChooseHabfit from './CustomProgram/WhyChooseHabFit'
import Custom from './CustomProgram/Custom'
import LimitedOfferSection from './CustomProgram/LimitedOfferSection'
import RegistrationSection from './CustomProgram/RegistrationSection'
import BonusesSection from './CustomProgram/BonusesSection'
import FAQ from './CustomProgram/FAQ'
import TransformationSection from './CustomProgram/TransformationSection'

const CustomProgram = () => {
  return (
    <div>
        <Home/>
        <WelcomeSection/>
        {/* <WhyChooseHabfit/> */}
        <Custom/>
        <LimitedOfferSection/>
        <BonusesSection/>
        <RegistrationSection/>
        <TransformationSection/>
        <FAQ/>
        <Contact/>
    </div>
  )
}

export default CustomProgram