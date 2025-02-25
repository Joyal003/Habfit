import React from 'react'
import WelcomeGroup from './GroupClass/WelcomeGroup'
import Home from './Postpartum/Home'
import Contact from '../Common/Contact'
import WhyChooseHabfit from './GroupClass/WhyChooseHabfit'
import ServicesSection from './GroupClass/ServicesSection'
import BonusesSection from './GroupClass/BonusesSection'
import LimitedOfferSection from './GroupClass/LimitedOfferSection'
import TransformationSection from './GroupClass/TransformationSection'
import RegistrationSection from './GroupClass/RegistrationSection'
import FAQ from './GroupClass/FAQ'

const GroupClass = () => {
  return (
    <>
    <Home/>
    <WelcomeGroup/>
      <WhyChooseHabfit/>
      <ServicesSection/>
      <BonusesSection/>
      <LimitedOfferSection/>
      <RegistrationSection/>
      <TransformationSection/>
      <FAQ/>
    <Contact/>
    </>
  )
}

export default GroupClass