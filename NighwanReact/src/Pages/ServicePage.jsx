import React from 'react'
import HeroService from '../components/Service/Hero';
import Service4Area from '../components/About/Service4Area';
import CaseStudies from '../components/Home/CaseStudioArea';
import AboutArea from '../components/Service/About';
import AboutServiceArea from "../components/About/AboutServiceArea";
import ContactArea from '../components/Home/ContactArea';   

function ServicePage() {
  return (
    <>
    <HeroService/>
    <Service4Area/>
    <CaseStudies/>
    <AboutArea/>
    <AboutServiceArea/>
    <ContactArea/>
    </>
  )
}

export default ServicePage;