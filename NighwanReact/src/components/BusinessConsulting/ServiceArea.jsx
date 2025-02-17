import React from 'react';
import bgShape7 from '../../assets/imgs/bg-shape-7.svg'; // Adjust the path to your assets
import service1 from '../../assets/imgs/service-1.png';
import service2 from '../../assets/imgs/service-2.png';
import service3 from '../../assets/imgs/service-3.png';
import service4 from '../../assets/imgs/service-4.png';
import service5 from '../../assets/imgs/service-5.png';
import service6 from '../../assets/imgs/service-6.png';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS

const ServiceArea = () => {
  return (
    <section className="service2-area">
      <img className="bg-shape" src={bgShape7} alt="Shape" />
      <div className="custom-container">
        <div className="custom-row">
          <div className="service2-header d-flex align-items-center justify-content-between w-full">
            <div className="left">
              <h5 className="section-subtitle">OUR SERVICES</h5>
              <h1 className="section-title">We provide best services</h1>
              <p>
                Our consulting process begins with a thorough assessment of your current
                infrastructure, workflows, and pain points.
              </p>
            </div>

            <a href="service.html" className="theme-btn">
              Learn More <i className="iconoir-arrow-up-right"></i>
            </a>
          </div>
        </div>

        <div className="service2-items d-flex w-full">
          <div className="service2-card card-h">
            <img src={service1} alt="Service" />
            <h2>Market Researching</h2>
            <p>
              Stay ahead of the curve <br />
              in-depth market analysis.
            </p>
            <a href="#" className="theme-btn">
              <i className="iconoir-arrow-up-right"></i>
            </a>
          </div>
          <div className="service2-card card-h">
            <img src={service2} alt="Service" />
            <h2>Photography</h2>
            <p>
              We have a best team for <br />
              your shopping websites.
            </p>
            <a href="#" className="theme-btn">
              <i className="iconoir-arrow-up-right"></i>
            </a>
          </div>
          <div className="service2-card card-h">
            <img src={service3} alt="Service" />
            <h2>Change Management</h2>
            <p>
              Navigating organizational <br />
              change can be complex.
            </p>
            <a href="#" className="theme-btn">
              <i className="iconoir-arrow-up-right"></i>
            </a>
          </div>
          <div className="service2-card card-h">
            <img src={service4} alt="Service" />
            <h2>Branding</h2>
            <p>
              We create vibrant, intuitive <br />
              and minimalist branding
            </p>
            <a href="#" className="theme-btn">
              <i className="iconoir-arrow-up-right"></i>
            </a>
          </div>
        </div>

        <div className="d-flex gap-24 service2-bottom-2-col">
          <div className="service3-card d-flex flex-1 card-h">
            <img src={service5} alt="Service" />
            <div className="service3-body">
              <div className="service3-content">
                <h3>Business Development</h3>
                <p>
                  Success require a proactive strategic <br />
                  approach to business development.
                </p>
                <ul>
                  <li>
                    <i className="las la-check"></i> Customized Growth
                  </li>
                  <li>
                    <i className="las la-check"></i> Market Penetration
                  </li>
                </ul>
                <a href="#" className="theme-btn">
                  <i className="iconoir-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="service3-card d-flex flex-1 card-h">
            <img src={service6} alt="Service" />
            <div className="service3-body">
              <div className="service3-content">
                <h3>Business Consulting</h3>
                <p>
                  We are your partners <br />
                  in today's markets
                </p>
                <ul>
                  <li>
                    <i className="las la-check"></i> Industry Insights
                  </li>
                  <li>
                    <i className="las la-check"></i> Optimize Resources
                  </li>
                </ul>
                <a href="#" className="theme-btn">
                  <i className="iconoir-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;