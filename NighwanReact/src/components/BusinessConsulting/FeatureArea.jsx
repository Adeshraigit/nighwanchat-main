import React from 'react';
import bgShapeFeature from '../../assets/imgs/bg-shape-feature.svg'; // Adjust the path to your assets
import hwdIcon1 from '../../assets/imgs/hwd-icon-1.svg';
import hwdIcon2 from '../../assets/imgs/hwd-icon-2.svg';
import hwdIcon4 from '../../assets/imgs/hwd-icon-4.svg';
import hwdIcon6 from '../../assets/imgs/hwd-icon-6.svg';
import iphone13 from '../../assets/imgs/iphone-13.png';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS

const FeatureArea = () => {
  return (
    <section className="feature2-area">
      <img src={bgShapeFeature} alt="Shape" className="bg-shape" />
      <div className="custom-container">
        <div className="custom-row">
          <div className="feature2-content">
            <div className="feature2-header">
              <h5 className="section-subtitle">CONSULTING EXCELLENCE</h5>
              <h1 className="section-title">
                Build a solution that <br />
                wins you more clients.
              </h1>
            </div>

            <div className="feature2-content-body d-flex flex-wrap">
              <div className="feature2-card">
                <span className="icon">
                  <img src={hwdIcon1} alt="Icon" />
                </span>
                <h3>Customized Solutions</h3>
                <p>
                  Tailoring recommendations to the client's specific needs and circumstances.
                  Tailoring recommendations to the client's specific needs and circumstances.
                </p>
              </div>
              <div className="feature2-card">
                <span className="icon">
                  <img src={hwdIcon4} alt="Icon" />
                </span>
                <h3>Financial Analysis</h3>
                <p>
                  Analyzing financial data to optimize budgeting, forecasting, and resource
                  allocation. Analyzing financial data to optimize resource allocation.
                </p>
              </div>
              <div className="feature2-card">
                <span className="icon">
                  <img src={hwdIcon6} alt="Icon" />
                </span>
                <h3>Performance Measurement</h3>
                <p>
                  Developing key performance indicators and metrics to track progress and success.
                  Key performance indicators and metrics to track progress and success.
                </p>
              </div>
              <div className="feature2-card">
                <span className="icon">
                  <img src={hwdIcon2} alt="Icon" />
                </span>
                <h3>Stakeholder Management</h3>
                <p>
                  Advising on effective communication and engagement with stakeholders. Advising on
                  effective communication and engagement with stakeholders.
                </p>
              </div>
            </div>
          </div>

          <div className="feature2-img-box">
            <div className="feature2-img-box-inner">
              <div className="mac-btns-wrap d-flex align-items-center justify-content-between">
                <div className="mac-buttons d-flex align-items-center">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="action-btn d-flex align-items-center">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <img src={iphone13} alt="Iphone" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureArea;