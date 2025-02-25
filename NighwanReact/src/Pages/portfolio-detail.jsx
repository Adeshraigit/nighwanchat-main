import React from 'react'
import HeroSection from '../components/portfoliodetail/Hero'
// import NewReleaseHeroImage from '../components/portfoliodetail/HeroImage'
import ContactArea from '../components/Home/ContactArea'
import BlogDetails from '../components/portfoliodetail/BlogDetails'
import CtaArea from '../components/Career/CtaArea'
import ProjectArea from '../components/Home/ProjectArea'
import { useParams } from 'react-router-dom';

function Portfoliodetail() {
  const params = useParams();
  const { type } = params;  
  return (
    <>
    <HeroSection type={type} />
    {/* <NewReleaseHeroImage/> */}
    <BlogDetails type={type} />
    {/* <CtaArea/> */}
    <ProjectArea/>
    <ContactArea/>
    </>
  )
}

export default Portfoliodetail