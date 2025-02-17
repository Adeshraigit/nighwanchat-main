import React from 'react';
import portfolioDetails from '../../assets/imgs/portfolio-details.jpg';          

const NewReleaseHeroImage = () => {
    return (
      <section className="new-release-hero-img-area">
        <div className="custom-container">
          <div className="new-release-img-box">
            <img src={portfolioDetails} alt="Portfolio Details" />
          </div>
        </div>
      </section>
    );
  };
  
  export default NewReleaseHeroImage;
  