import React from 'react'
import HeroServiceWrap from '../components/Servicedetails/HeroServiceWrap';
import NewReleaseHeroImgArea from '../components/Servicedetails/NewReleaseHeroImgArea.jsx';
// import Feature3Area from '../components/Service/Feature3Area';
import AboutService7Area from '../components/Servicedetails/AboutService7Area';
import AboutService3Area from '../components/Servicedetails/AboutService3Area';
import TestimonialArea from '../components/Home/TestimonialArea';
import ContactArea from '../components/Home/ContactArea';
import { Helmet } from "react-helmet";  
import { useParams } from 'react-router-dom';
// import Service4Area from '../components/About/Service4Area';  

const ServicedetailsPage = () => {

  const params = useParams();
  const { type } = params;   
   
  const services = {
    "Branding" : {},
    "ERP" : {},
    "aim" : {},
    "Web" : {},
    "Data" : {},
    "Iot" : {},
    "Digital" : {},
    "IT" : {},
    "Devops" : {},
  }

  return (
    <>
    <Helmet>
    <title>Our Services | Nighwan Technology Pvt. Ltd.</title>  <meta name="description" content="Explore our wide range of IT services, including ERP development, AI-powered analytics, cloud computing, IT consulting, and lean manufacturingsolutions." />  <meta name="keywords" content="IT services, AI analytics, ERP solutions, software development, cloud computing, digital transformation, enterprise solutions, lean manufacturing technology" />
        <meta name="robots" content="index, follow" />
        </Helmet>
        <HeroServiceWrap type={type} />
        <NewReleaseHeroImgArea type={type} />
        <AboutService7Area type={type} />
        {/* <Service4Area /> */}
        <AboutService3Area type={type} />
        {/* <Feature3Area/> */}
        <TestimonialArea/>
        <ContactArea/>
    </>
  )
}

export default ServicedetailsPage;