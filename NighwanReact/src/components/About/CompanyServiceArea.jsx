import React from 'react';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS
import heroCompanyAbout from '../../assets/imgs/hero-company-about.jpg'; // Import the image

const CompanyServiceArea = () => {
  return (
    <section className="company-service-area">
      <div className="custom-container">
        <div className="hero-service-about">
          <div className="section-header d-flex align-items-center justify-content-between w-full">
            <div className="left">
              <h5 className="section-subtitle">OUR COMPANY</h5>
              <h1 className="section-title">Why our company is too popular?</h1>
              <p>Contact us today to begin your journey!</p>
            </div>
            <a href="contact.html" className="theme-btn">
              Contact Us
            </a>
          </div>

          {/* Updated image path */}
          <img src={heroCompanyAbout} alt="Service About" />
          <div className="hero-service-about-body">
            <p>
              Our team is a collective force of top talents, pros, experts, and visionaries from
              diverse fields. With a passion for excellence, our professionals bring a wealth of
              experience and knowledge to every project. At Slack, we are committed to delivering
              nothing short of excellence. From concept to implementation, we maintain the highest
              standards of quality and craftsmanship, leaving no room for compromise.
            </p>
            <ul>
              <li>
                <i className="las la-check"></i> Managed Services and Products
              </li>
              <li>
                <i className="las la-check"></i> Flexibility and Adaptability
              </li>
              <li>
                <i className="las la-check"></i> Competitive Advantage
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyServiceArea;