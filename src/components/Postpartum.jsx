import React from "react";
import Reviews from "./Postpartum/Reviews";
import FitnessForm from "./Postpartum/FitnessForm";
import Features from "./Postpartum/Features";
import Details from "./Postpartum/Details";
import Bonus from "./Postpartum/Bonus";
import PromoCard from "./Postpartum/PromoCard";
import Home from "./Postpartum/Home";
import Welcome from "./Postpartum/Welcome";
import FAQ from "./Postpartum/FAQ";
import Contact from "../Common/Contact";

const Postpartum = () => {
  return (
    <>
      <Home />
      <Welcome />
      <Features />
      <Details />
      <Bonus />
      <PromoCard />
      <FitnessForm />
      <Reviews />
      <FAQ/>
      <Contact />
    </>
  );
};

export default Postpartum;
