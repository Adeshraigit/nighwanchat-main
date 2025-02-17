import React from 'react';
import '../../assets/css/style.css'; // Updated CSS import path
import '../../assets/css/responsive.css'; // Updated CSS import path
import aboutService3 from '../../assets/imgs/about-service-3.png'; // Updated image import path

const AboutServiceArea = () => {
  return (
    <section className="about-service3-area">
      <div className="custom-container">
        <div className="custom-row align-items-center">
          <div className="img-box">
            <img src={aboutService3} alt="About" />
          </div>

          <div className="content-box">
            <h1>
              Why our services are <br />
              better than others?
            </h1>
            <p>
              We don't believe in a one-size-fit-all approach. Our services are carefully customized
              to suit your specific need, ensuring you to achieve your goals.
            </p>
            <p>
              We believe in delivering value that extends your beyond the immediate project. Our
              services are designed to provide a long-term benefits.
            </p>
            <ul>
              <li>
                <i className="las la-check"></i> PPD Development
              </li>
              <li>
                <i className="las la-check"></i> Quick Response
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServiceArea;