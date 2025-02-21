import React from 'react';
import HeroCareer from '../components/Career/HeroCareer';
import CompanyServiceArea from '../components/Career/CompanyServiceArea';
import ServiceArea from '../components/Career/ServiceArea';
import CareerArea from '../components/Career/CareerArea';
import AboutServiceArea from '../components/Career/AboutServiceArea';
import CtaArea from '../components/Career/CtaArea';
import ContactArea from '../components/Home/ContactArea';
import { Helmet } from "react-helmet";

const CareerPage = () => {
  return (
    <>
    <Helmet>
        <title>Careers - Nighwan Technology Pvt. Ltd.</title>
         <meta name="description" content="This is Careerpage" />
        <meta name="robots" content="index, follow" />
        </Helmet>
        <HeroCareer/>
        <CompanyServiceArea/>
        {/* <ServiceArea/> */}
        <CareerArea/>
        <AboutServiceArea/>
        <CtaArea/>
        <ContactArea/>
    </>
  )
}

export default CareerPage