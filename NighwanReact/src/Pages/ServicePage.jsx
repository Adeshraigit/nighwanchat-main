import React from 'react'
import HeroService from '../components/Service/Hero';
import Service4Area from '../components/About/Service4Area';
import CaseStudies from '../components/Service/CaseStudio';
import AboutArea from '../components/Service/About';
import AboutService from '../components/Service/AboutService';
import ContactArea from '../components/Home/ContactArea';   

function ServicePage() {
  return (
    <>
    <HeroService/>
    <Service4Area/>
    <CaseStudies/>
    <AboutArea/>
    <AboutService/>
    <ContactArea/>
    </>
  )
}

export default ServicePage;