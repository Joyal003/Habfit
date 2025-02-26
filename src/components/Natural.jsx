import React from 'react'
import Home from '../components/Postpartum/Home'
import Contact from '../Common/Contact'
import Welcome from './Natural/Welcome'
import WhyChooseHabfit from './Natural/WhyChooseHabfit'
import BodybuildingServices from './Natural/BodybuildingServices'
import LimitedOffer from './Natural/LimitedOffer'
import JourneyForm from './Natural/JourneyForm'
import TransformationSection from './Natural/TransformationSection'
import FAQ from './Natural/FAQ'
import BodybuildingBonuses from './Natural/BodybuildingBonuses'

const Natural = () => {
  return (
    <div>
    <Home/>
    <Welcome/>
    <WhyChooseHabfit/>
    <BodybuildingServices/>
    <BodybuildingBonuses/>
    <LimitedOffer/>
    <JourneyForm/>
    <TransformationSection/>
    <FAQ/>
    <Contact/>
    </div>
  )
}

export default Natural