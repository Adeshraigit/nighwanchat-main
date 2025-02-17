import React from 'react';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS

const HeroSection = () => {
  return (
    <section className="hero-service-wrap hero-section-wrap hero-about-wrap">
      <div className="hero-section-content-wrap">
        <div className="custom-container">
          <div className="hero-portfolio-body">
            <div className="hero-section-content text-center">
              <h5 className="section-subtitle">Company</h5>
              <h1 className="section-title fade-in">
                Our company provide a best horizon tech solutions
              </h1>
              <p>
                Experience the transformative power of innovation and seamless solutions with
                dynamics. Our journey doesn't end with the delivery of a solution.
              </p>
            </div>

            <div className="hero-company-boxes">
              <div className="hero-company-box simple-shadow">
                <h1>300+</h1>
                <h3>Projects</h3>
                <p>We are spread around the world.</p>
              </div>
              <div className="hero-company-box simple-shadow">
                <h1>100%</h1>
                <h3>Client Satisfaction</h3>
                <p>Our clients are happy with our service.</p>
              </div>
              <div className="hero-company-box simple-shadow">
                <h1>15k</h1>
                <h3>Legal Customers</h3>
                <p>Our customers are from many countries.</p>
              </div>
              <div className="hero-company-box simple-shadow">
                <h1>1995</h1>
                <h3>We Established On</h3>
                <p>Our company has a great history.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;