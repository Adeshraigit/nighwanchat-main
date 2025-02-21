import React from 'react'
import HeroSection from '../components/BusinessConsulting/HeroSection'
import ClientArea from '../components/BusinessConsulting/ClientArea'
import ServiceArea from '../components/BusinessConsulting/ServiceArea'
import AboutArea from '../components/BusinessConsulting/AboutArea'
import FeatureArea from '../components/BusinessConsulting/FeatureArea'
import PortfolioArea from '../components/BusinessConsulting/PortfolioArea'
import TestimonialArea from '../components/BusinessConsulting/TestimonialArea'
import ContactArea from '../components/BusinessConsulting/ContactArea'
import { Helmet } from "react-helmet";

const BusinessConsulting = () => {
  return (
    <>
    <Helmet>
        <title>Business Consulting   - Nighwan Technology Pvt. Ltd.</title>
         <meta name="description" content="This is Business Consulting page" />
        <meta name="robots" content="index, follow" />
        </Helmet>
    <HeroSection/>
    {/* <ClientArea/> */}
    <ServiceArea/>
    <AboutArea/>
    <FeatureArea/>
    {/* Hide */}
    {/* <NewsArea/> */}
    <PortfolioArea/>
    {/* Hide */}
    {/* <OurTeamArea/> */}
    <TestimonialArea/>
    <ContactArea/>
    </>
  )
}

export default BusinessConsulting