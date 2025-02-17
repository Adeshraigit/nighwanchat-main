import React from 'react';
import '../../assets/css/style.css'; // Updated CSS import path
import '../../assets/css/responsive.css'; // Updated CSS import path
import serviceDetailsImg from '../../assets/imgs/service-details.jpg'; // Updated image import path

const NewReleaseHeroImgArea = () => {
  return (
    <section className="new-release-hero-img-area">
      <div className="custom-container">
        <div className="new-release-img-box">
          <img src={serviceDetailsImg} alt="Service Details" />
        </div>
      </div>
    </section>
  );
};

export default NewReleaseHeroImgArea;