import React from 'react'
import HeroPortfolio from '../components/Portfolio/HeroPortfolio'
import PortfolioArea from '../components/Portfolio/PortfolioArea'
import ContactArea from '../components/Home/ContactArea'
import { Helmet } from "react-helmet";  

const PortfolioPage = () => {
  return (
    <>
    <Helmet>
        <title>Portfolio - Nighwan Technology Pvt. Ltd.</title>
         <meta name="description" content="This is Portfolio page" />
        <meta name="robots" content="index, follow" />
        </Helmet>
    <HeroPortfolio/>
    <PortfolioArea/>
    <ContactArea/>
    </>
  )
}

export default PortfolioPage