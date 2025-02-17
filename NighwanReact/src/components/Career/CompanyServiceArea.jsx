import React from 'react';
import heroCareerAbout from '../../assets/imgs/hero-career-about.jpg'; // Adjust the path to your assets
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS

const CompanyServiceArea = () => {
  return (
    <section className="company-service-area career-service-area">
      <div className="custom-container">
        <div className="hero-service-about">
          <img src={heroCareerAbout} alt="Service About" />
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