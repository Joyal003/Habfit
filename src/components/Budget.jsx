import React from 'react'
import WelcomeBudget from './Budget/WelcomeBudget'
import Home from './Postpartum/Home'
import Contact from '../Common/Contact'
import WhyChooseHabfit from './Budget/WhyChooseHabfit'
import FAQBudget from './Budget/FAQ'
import RegistrationSection from './Budget/RegistrationSection'
import ServicesSection from './Budget/ServicesSection'
import LimitedOfferSection from './Budget/LimitedOfferSection'
import BonusesSection from './Budget/BonusesSection'
import TransformationSection from './Budget/TransformationSection'

const Budget = () => {
  return (
    <>
      <Home/>
      <WelcomeBudget/>
      <WhyChooseHabfit/>
      <ServicesSection/>
      <BonusesSection/>
      <LimitedOfferSection/>
      <RegistrationSection/>
      <TransformationSection/>
      <FAQBudget/>
      <Contact/>
    </>
  )
}

export default Budget