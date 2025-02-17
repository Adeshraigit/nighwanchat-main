import React, { useState } from 'react';
import hwdIcon1 from '../../assets/imgs/hwd-icon-1.svg'; // Adjust the path to your assets
import hwdIcon2 from '../../assets/imgs/hwd-icon-2.svg';
import hwdIcon3 from '../../assets/imgs/hwd-icon-3.svg';
import hwdIcon4 from '../../assets/imgs/hwd-icon-4.svg';
import hwdIcon5 from '../../assets/imgs/hwd-icon-5.svg';
import hwdIcon6 from '../../assets/imgs/hwd-icon-6.svg';
import about2Tab1 from '../../assets/imgs/about2-tab-1.png';
import about2Tab2 from '../../assets/imgs/about2-tab-2.png';
import about2Tab3 from '../../assets/imgs/about2-tab-3.png';
import about2Tab4 from '../../assets/imgs/about2-tab-4.png';
import about2Tab5 from '../../assets/imgs/about2-tab-5.png';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS

const AboutArea = () => {
  const [activeTab, setActiveTab] = useState('business_strategy');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className="about2-area">
      <div className="custom-container">
        <div className="about2-inner-box">
          <div className="about2-header">
            <h5 className="section-subtitle">SPECIALIZATION</h5>
            <h1 className="section-title">What Makes Nighwan Tech Unique?</h1>
            <div>Nighwan Technology Pvt. Ltd. is redefining lean manufacturing technology by integrating AI, ML, and data analytics into the core of its solutions. Unlike traditional ERP or manufacturing management systems, Nighwan Tech focuses on real-time data-driven decision-making, waste reduction, and process optimization tailored for the Indian market.</div>
            
          </div>

          <ul className="nav nav-tabs about2-tabs" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'business_strategy' ? 'active' : ''}`}
                onClick={() => handleTabClick('business_strategy')}
              >
                <span className="icon">
                  <img src={hwdIcon1} alt="Icon" />
                </span>{' '}
                AI Optimization
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'market_analysis' ? 'active' : ''}`}
                onClick={() => handleTabClick('market_analysis')}
              >
                <span className="icon">
                  <img src={hwdIcon4} alt="Icon" />
                </span>{' '}
                Demand Forecasting
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'process_optimation' ? 'active' : ''}`}
                onClick={() => handleTabClick('process_optimation')}
              >
                <span className="icon">
                  <img src={hwdIcon6} alt="Icon" />
                </span>{' '}
                Lean E-Commerce
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'performance_improvement' ? 'active' : ''}`}
                onClick={() => handleTabClick('performance_improvement')}
              >
                <span className="icon">
                  <img src={hwdIcon2} alt="Icon" />
                </span>{' '}
                Predictive Maintenance
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'entrepreneurial_guidance' ? 'active' : ''}`}
                onClick={() => handleTabClick('entrepreneurial_guidance')}
              >
                <span className="icon">
                  <img src={hwdIcon3} alt="Icon" />
                </span>{' '}
                Real-Time Analytics
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'entrepreneurial_guidance' ? 'active' : ''}`}
                onClick={() => handleTabClick('entrepreneurial_guidance')}
              >
                <span className="icon">
                  <img src={hwdIcon3} alt="Icon" />
                </span>{' '}
                Custom ERP
              </button>
            </li>
          </ul>

          <div className="tab-content about2-tab-content">
            {activeTab === 'business_strategy' && (
              <div className="tab-pane fade show active" id="business_strategy" role="tabpanel">
                <div className="about2-tab-content-body d-flex gap-24">
                  <div className="img-box">
                    <img src={about2Tab1} alt="About" />
                  </div>
                  <div className="content-box card-h">
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
                    <h1>
                      <span className="icon">
                        <img src={hwdIcon1} alt="Icon" />
                      </span>{' '}
                      Elevating your business strategy for success
                    </h1>
                    <div className="content">
                      <p>
                      Unlike traditional lean tools that rely on manual data entry, Nighwan Tech leverages machine learning to analyze production cycles, efficiency bottlenecks, and resource utilization.
                      </p>
                      <p>
                      Automated alerts for excess material usage, process delays, and machine downtime.
                      </p>
                      <p>
                      Advantage: Reduces waste (Muda) and enhances productivity by predicting inefficiencies before they occur.
                      </p>
                    </div>
                    <a href="#" className="theme-btn">
                      <i className="iconoir-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'market_analysis' && (
              <div className="tab-pane fade" id="market_analysis" role="tabpanel">
                <div className="about2-tab-content-body d-flex gap-24">
                  <div className="img-box">
                    <img src={about2Tab2} alt="About" />
                  </div>
                  <div className="content-box card-h">
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
                    <h1>
                      <span className="icon">
                        <img src={hwdIcon4} alt="Icon" />
                      </span>{' '}
                      Unveiling the comprehensive market analysis
                    </h1>
                    <div className="content">
                      <p>
                        In the ever-evolving landscape of business, knowledge is power. At Strategic
                        Business Solutions, we offer an unparalleled lens through which you can
                        decipher the complexities of your industry. Our Market Analysis services
                        provide you with the critical insights needed to make informed decisions.
                      </p>
                    </div>
                    <a href="#" className="theme-btn">
                      <i className="iconoir-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'process_optimation' && (
              <div className="tab-pane fade" id="process_optimation" role="tabpanel">
                <div className="about2-tab-content-body d-flex gap-24">
                  <div className="img-box">
                    <img src={about2Tab3} alt="About" />
                  </div>
                  <div className="content-box card-h">
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
                    <h1>
                      <span className="icon">
                        <img src={hwdIcon6} alt="Icon" />
                      </span>{' '}
                      Streamline your operations for maximum efficiency
                    </h1>
                    <div className="content">
                      <p>
                        In the ever-evolving landscape of business, operational efficiency is the
                        cornerstone of success. At Strategic Business Solutions, we specialize in
                        process optimization—a transformative approach that enables your organization
                        to achieve peak performance.
                      </p>
                    </div>
                    <a href="#" className="theme-btn">
                      <i className="iconoir-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'performance_improvement' && (
              <div className="tab-pane fade" id="performance_improvement" role="tabpanel">
                <div className="about2-tab-content-body d-flex gap-24">
                  <div className="img-box">
                    <img src={about2Tab4} alt="About" />
                  </div>
                  <div className="content-box card-h">
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
                    <h1>
                      <span className="icon">
                        <img src={hwdIcon2} alt="Icon" />
                      </span>{' '}
                      Elevate your business performance to new heights
                    </h1>
                    <div className="content">
                      <p>
                        In today's fast-paced and competitive business landscape, achieving and
                        sustaining high levels of performance is essential for long-term success. At
                        Strategic Business Solutions, we specialize in helping organizations like
                        yours enhance their performance, optimize operations, and achieve peak
                        efficiency.
                      </p>
                    </div>
                    <a href="#" className="theme-btn">
                      <i className="iconoir-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'entrepreneurial_guidance' && (
              <div className="tab-pane fade" id="entrepreneurial_guidance" role="tabpanel">
                <div className="about2-tab-content-body d-flex gap-24">
                  <div className="img-box">
                    <img src={about2Tab5} alt="About" />
                  </div>
                  <div className="content-box card-h">
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
                    <h1>
                      <span className="icon">
                        <img src={hwdIcon3} alt="Icon" />
                      </span>{' '}
                      Nurturing entrepreneurial excellence using Slack
                    </h1>
                    <div className="content">
                      <p>
                        Embarking on the journey of entrepreneurship is an exhilarating endeavor,
                        filled with boundless opportunities and unique challenges. At Strategic
                        Business Solutions, we are dedicated to providing you with the indispensable
                        guidance needed to navigate this journey successfully.
                      </p>
                    </div>
                    <a href="#" className="theme-btn">
                      <i className="iconoir-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;