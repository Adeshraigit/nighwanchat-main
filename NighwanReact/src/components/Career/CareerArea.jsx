import React from 'react';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS

const CareerArea = () => {
  return (
    <section className="career-area">
      <div className="custom-container">
        <div className="career-body d-flex">
          <div className="career-left">
            <h5 className="section-subtitle">OPENING IN OUR COMPANY</h5>
            <h1 className="section-title">
              Job openings
              <br />
              and career
              <br />
              opportunities
            </h1>
          </div>

          <div className="career-lists">
            <div className="career-box">
              <span className="location">San Fransico, USA</span>
              <h2>
                Front End Developer - <span>Development</span>
              </h2>
              <p>Minimum 5 years experience or above</p>
              <div className="career-time">
                <span>
                  <i className="las la-clock"></i> Full Time
                </span>
                <span>
                  <i className="las la-dollar-sign"></i> 10k - 30k
                </span>
              </div>
            </div>
            <div className="career-box">
              <span className="location">Changi, SGD</span>
              <h2>
                Web Developer - <span>Development</span>
              </h2>
              <p>Internship and training</p>
              <div className="career-time">
                <span>
                  <i className="las la-clock"></i> Part Time
                </span>
                <span>
                  <i className="las la-dollar-sign"></i> 5k - 8k
                </span>
              </div>
            </div>
            <div className="career-box">
              <span className="location">London, UK</span>
              <h2>
                SQL Specialist - <span>Database</span>
              </h2>
              <p>0-5 years experience</p>
              <div className="career-time">
                <span>
                  <i className="las la-clock"></i> Full Time
                </span>
                <span>
                  <i className="las la-dollar-sign"></i> 10k - 40k
                </span>
              </div>
            </div>
            <div className="career-box">
              <span className="location">Los Angels, USA</span>
              <h2>
                Web Designer - <span>Design</span>
              </h2>
              <p>For all level designers and freshers</p>
              <div className="career-time">
                <span>
                  <i className="las la-clock"></i> Full Time
                </span>
                <span>
                  <i className="las la-dollar-sign"></i> 30k - 60k
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerArea;