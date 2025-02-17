import React from 'react';
import project1 from '../../assets/imgs/project-1.png'; // Adjust the path to your assets
import project2 from '../../assets/imgs/project-2.png';
import project3 from '../../assets/imgs/project-3.jpg';
import project4 from '../../assets/imgs/project-4.png';
import project5 from '../../assets/imgs/project-5.png';
import project6 from '../../assets/imgs/project-6.png';
import project7 from '../../assets/imgs/project-7.png';
import project8 from '../../assets/imgs/project-8.png';
import project9 from '../../assets/imgs/project-9.png';
import project10 from '../../assets/imgs/project-10.png';
import project11 from '../../assets/imgs/project-11.png';
import project12 from '../../assets/imgs/project-12.png';
import bgShape2 from '../../assets/imgs/bg-shape-2.svg';
import bgShape22 from '../../assets/imgs/bg-shape-2-2.svg';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS
import { Link } from 'react-router-dom';

const PortfolioArea = () => {
  return (
    <section className="portfolio-area">
      <div className="custom-container">
        <div className="portfolio-items">
          <div className="portfolio-item-col portfolio-black-box">
            <div className="project-item">
              <div className="project-item-inner">
                <h2 className="white">
                <Link to={"/product-detail/erp"} >
                    ERP System
                </Link>
                </h2>
                <img src={project1} alt="Project" />
              </div>
            </div>
            
            <div className="portfolio-sample-details">
              <img src={bgShape2} alt="Shape" className="bg-shape" />
              <h3>
              <Link to={"/product-detail/erp"} >
                ERP System <i className="iconoir-arrow-up-right"></i>
                </Link>
              </h3>
              <p>A custom-built ERP solution tailored for businesses looking to integrate and automate their operations.</p>
            </div>
           
          </div>

          <div className="portfolio-item-col portfolio-gray-box">
            <div className="project-item">
              <div className="project-item-inner">
                <h2>
                <Link to={"/product-detail/ai"} >
                  AI-Powered <br />
                  Sales <br />
                  Forecasting
                  </Link>
                </h2>
                <img src={project2} alt="Project" />
              </div>
            </div>
            <div className="portfolio-sample-details">
              <h3>
              <Link to={"/product-detail/ai"} >
                AI-Powered Sales Forecasting<i className="iconoir-arrow-up-right"></i>
              </Link>
              </h3>
              <p>Advanced AI/ML-driven sales prediction software for demand-driven manufacturing and retail businesses.</p>
            </div>
          </div>

          <div className="portfolio-item-col">
            <div className="project-item">
              <div className="project-item-inner">
                <h2>
                <Link to={"/product-detail/b2b"} >
                  B2B<br />
                  E-Commerce<br />
                  Platform 
                  </Link>
                </h2>
                <img src={project3} alt="Project" />
              </div>
            </div>
            <div className="portfolio-sample-details">
              <h3>
              <Link to={"/product-detail/b2b"} >
                B2B E-Commerce Platform <i className="iconoir-arrow-up-right"></i>
              </Link>
              </h3>
              <p>A feature-rich online marketplace where multiple vendors can list, sell, and manage their products seamlessly.</p>
            </div>
          </div>

          <div className="portfolio-item-col portfolio-black-box">
            <div className="project-item">
              <div className="project-item-inner">
                <h2>
                <Link to={"/product-detail/iot"} >
                  IoT-Enabled<br />
                  Predictive <br />
                  Maintenance
                  </Link>
                </h2>
                <img src={project4} alt="Project" />
              </div>
            </div>
            <div className="portfolio-sample-details">
              <h3>
              <Link to={"/product-detail/iot"} >
                IoT-Enabled Predictive Maintenance<i className="iconoir-arrow-up-right"></i>
              </Link>
              </h3>
              <p>A smart IoT solution that helps industries monitor equipment health and predict failures before they occur.</p>
            </div>
          </div>
        </div>

        <div className="portfolio-items">
          <div className="portfolio-item-col portfolio-black-box portfolio-bluebase">
            <div className="project-item">
              <div className="project-item-inner">
                <h2 className="white">
                <Link to={"/product-detail/hrms"} >
                  HRMS with<br />
                  Job Portal<br />
                  </Link>
                </h2>
                <img src={project5} alt="Project" />
              </div>
            </div>
            <div className="portfolio-sample-details">
              <h3>
              <Link to={"/product-detail/hrms"} >
                HRMS with Job Portal
                <i className="iconoir-arrow-up-right"></i>
              </Link>
              </h3>
              <p>A comprehensive Human Resource Management System integrated with a job portal to streamline HR operations and talent acquisition.</p>
            </div>
          </div>

          <div className="portfolio-item-col">
            <div className="project-item">
              <div className="project-item-inner">
                <h2>
                <Link to={"/product-detail/tms"} >
                  Transport<br />
                  Management <br />
                  System
                  </Link>
                </h2>
                <img src={project6} alt="Project" />
              </div>
            </div>
            <div className="portfolio-sample-details">
              <h3>
              <Link to={"/product-detail/tms"} >
                Transport Management System <i className="iconoir-arrow-up-right"></i>
              </Link> 
              </h3>
              <p>A smart logistics and transportation management solution for fleet tracking and route optimization.</p>
            </div>
          </div>

          <div className="portfolio-item-col portfolio-gray-box">
            <div className="project-item">
              <div className="project-item-inner">
                <h2>
                <Link to={"/product-detail/data"} >
                  Data Analytics<br />
                  & Digital Twin<br />
                  Technology
                  </Link>
                </h2>
                <img src={project7} alt="Project" />
              </div>
            </div>
            <div className="portfolio-sample-details">
              <img src={bgShape22} alt="Shape" className="bg-shape" />
              <h3>
              <Link to={"/product-detail/data"} >
                Data Analytics & Digital Twin Technology<i className="iconoir-arrow-up-right"></i>
              </Link>
              </h3>
              <p>A powerful data analytics platform integrated with digital twin technology for real-time business insights.</p>
            </div>
          </div>

          <div className="portfolio-item-col portfolio-yellow-box">
            <div className="project-item">
              <div className="project-item-inner">
                <h2>
                <Link to={"/product-detail/devops"} >
                  DevOps & Cloud <br />
                  Solutions<br />
                  </Link>
                </h2>
                <img src={project8} alt="Project" />
              </div>
            </div>
            <div className="portfolio-sample-details">
              <h3>
              <Link to={"/product-detail/devops"} >
                DevOps & Cloud Solutions<i className="iconoir-arrow-up-right"></i>
              </Link>
              </h3>
              <p>A fully automated DevOps platform to streamline software development and deployment.</p>
            </div>
          </div>
        </div>

        <div className="portfolio-items">
          <div className="portfolio-item-col portfolio-darkgray-box">
            <div className="project-item">
              <div className="project-item-inner">
                <h2 className="white">
                <Link to={"/product-detail/digital"} >
                  Digital Marketing<br />
                  Automation<br />
                </Link>
                </h2>
                <img src={project9} alt="Project" />
              </div>
            </div>
            <div className="portfolio-sample-details">
              <h3>
              <Link to={"/product-detail/digital"} >
                Digital Marketing Automation
                <i className="iconoir-arrow-up-right"></i>
              </Link>
              </h3>
              <p>A data-driven digital marketing platform to automate campaigns, analyze customer behavior, and improve engagement.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioArea;