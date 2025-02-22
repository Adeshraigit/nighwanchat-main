import React from "react";
import HeroSection from "../components/About/HeroSection";
import CompanyServiceArea from "../components/About/CompanyServiceArea";
import Service4Area from "../components/About/Service4Area";
import OurTeam from "../components/About/OurTeam";
import AboutServiceArea from "../components/About/AboutServiceArea";
import CtaArea from "../components/About/CtaArea";
import ContactArea from "../components/Home/ContactArea";
import { Helmet } from "react-helmet";  
import TestimonialArea from "../components/Home/TestimonialArea";

const AboutPage = () => {
    return (
        <>
        <Helmet>
        <title>Our Roots - Nighwan Technology Pvt. Ltd.</title>
         <meta name="description" content="This is about page" />
        <meta name="robots" content="index, follow" />
        </Helmet>
        <HeroSection />
        <CompanyServiceArea />
        {/* <Service4Area /> */}
        {/* <OurTeam/> */}
        <AboutServiceArea/>
        {/* <CtaArea/> */}
        <TestimonialArea/>
        <ContactArea/>
        </>
    );
};

export default AboutPage;