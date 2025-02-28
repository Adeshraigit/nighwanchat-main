import React from 'react';
import CompanyServiceArea from '../components/Career/CompanyServiceArea';
import CareerArea from '../components/Career/CareerArea';
import AboutServiceArea from "../components/About/AboutServiceArea";
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
        <CompanyServiceArea/>
        <CareerArea/>
        <AboutServiceArea/>
        <ContactArea/>
    </>
  )
}

export default CareerPage