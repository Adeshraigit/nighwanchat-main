import React from 'react';
import '../assets/css/style.css'; // Import your custom CSS
import '../assets/css/responsive.css'; // Import your responsive CSS

const Footer = () => {
  return (
    <>
      <footer style={{ paddingTop: '30px', paddingBottom: '10px' }} className="footer-area">
        {/* <img src={bgShape} alt="Shape" className="animation-slide-right bg-shape" /> */}
        {/* ===== Footer Bottom Section ===== */}
        {/* Desktop Version – remains unchanged */}
        <div style={{ paddingTop: '0px', paddingBottom: '0px', marginTop: '0px' }} className="footer-bottom desktop-footer">
          <div className="custom-container">
            <div className="custom-row">
              <div className="footer-all-links-wrap justify-content-between d-flex">
                <div className="footer-links">
                  <h3>Services</h3>
                  <ul>
                    <li><a href="/lean">Lean Consultancy</a></li>
                    <li><a href="/service-details/ERP">ERP Development</a></li>
                    <li>
                      <a href="/service-details/aim">
                      AI/ML Solutions
                      </a>
                    </li>
                    <li><a href="/service-details/Data">Data Analytics
                    </a></li>
                    <li><a href="/service-details/Web">Web / Mobile</a></li>
                    <li><a href="/service-details/Branding">Branding</a></li>
                  </ul>
                </div>
                <div className="footer-links">
                  <h3>Company</h3>
                  <ul>
                    <li><a href="/lean">Lean Consultancy</a></li>
                    <li><a href="/our-roots">Our Roots</a></li>
                    <li><a href="/service">Services</a></li>
                    <li><a href="/products">Product</a></li>
                    <li><a href="/career">Careers</a></li>
                    <li><a href="/blog">Blog</a></li>
                  </ul>
                </div>
                <div className="footer-links">
                  <h3>Product</h3>
                  <ul>
                    <li><a href="/product-detail/iot">Iot - Enabled Predictive Maintenance</a></li>
                    <li><a href="/product-detail/ai">AI-Powered Sales Forecasting</a></li>
                    <li><a href="/product-detail/tms">Transport Management System</a></li>
                    <li><a href="/product-detail/b2b">B2B E-Commerce Platform</a></li>
                    <li><a href="/product-detail/erp">ERP System</a></li>
                    <li><a href="/product-detail/hrms">HRMS</a></li>
                  </ul>
                </div>
              </div>
              <div className="footer-contact-info">
                <div className="footer-contact-info-item">
                  <h4>Phone</h4>
                  <p>
                    <a href="tel:+918985025794" target="_blank" rel="noopener noreferrer">+91 8985025794</a> <br />
                    <a href="tel:+918092225777" target="_blank" rel="noopener noreferrer">+91 8092225777</a>
                  </p>
                </div>
                <div className="footer-contact-info-item">
                  <h4>Mail</h4>
                  <p>
                    <a href="mailto:contact@nighwantech.com" target="_blank" rel="noopener noreferrer">contact@nighwantech.com</a> <br />
                    <a href="mailto:info@nighwantech.com" target="_blank" rel="noopener noreferrer">info@nighwantech.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Version – rearranged into two groups */}
        <div className="footer-bottom mobile-footer">
          <div className="custom-container">
            <div className="custom-row">
              {/* Group A: Services & Company side by side */}
              <div className="footer-column group-a">
                <div className="footer-links">
                  <h3>Services</h3>
                  <ul>
                    <li><a href="/lean">Lean Consultancy</a></li>
                    <li><a href="/service-details/ERP">ERP Development</a></li>
                    <li>
                      <a href="/service-details/aim">
                      AI/ML Solutions
                      </a>
                    </li>
                    <li><a href="/service-details/Data">Data Analytics
                    </a></li>
                    <li><a href="/service-details/Web">Web / Mobile</a></li>
                    <li><a href="/service-details/Branding">Branding</a></li>
                  </ul>
                </div>
                <div className="footer-links">
                  <h3>Company</h3>
                  <ul>
                    <li><a href="/lean">Lean Consultancy</a></li>
                    <li><a href="/about">Our Roots</a></li>
                    <li><a href="/service">Services</a></li>
                    <li><a href="/product">Product</a></li>
                    <li><a href="/career">Careers</a></li>
                    <li><a href="/blog">Blog</a></li>
                  </ul>
                </div>
              </div>
              {/* Group B: Product & Contact Info side by side */}
              <div className="footer-column group-b">
              <div className="footer-links">
                  <h3>Product</h3>
                  <ul>
                    <li><a href="/product-detail/iot">Iot - Enabled Predictive Maintenance</a></li>
                    <li><a href="/product-detail/ai">AI-Powered Sales Forecasting</a></li>
                    <li><a href="/product-detail/tms">Transport Management System</a></li>
                    <li><a href="/product-detail/b2b">B2B E-Commerce Platform</a></li>
                    <li><a href="/product-detail/erp">ERP System</a></li>
                    <li><a href="/product-detail/hrms">HRMS</a></li>
                  </ul>
                </div>
                <div className="footer-contact-info">
                  <div className="footer-contact-info-item">
                    <h4>Phone</h4>
                    <p>
                      <a href="tel:+918985025794" target="_blank" rel="noopener noreferrer">+91 8985025794</a> <br />
                      <a href="tel:+918985025794" target="_blank" rel="noopener noreferrer">+91 8985025794</a>
                    </p>
                  </div>
                  <div className="footer-contact-info-item">
                    <h4>Mail</h4>
                    <p>
                      <a href="mailto:contact@nighwantech.com" target="_blank" rel="noopener noreferrer">contact@nighwantech.com</a> <br />
                      <a href="mailto:contact@nighwantech.com" target="_blank" rel="noopener noreferrer">contact@nighwantech.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Copyright Area ===== */}
        <div style={{ padding: '10px' }} className="copyright-area">
          <div className="custom-container">
            <div className="custom-row d-flex align-items-center justify-content-between">
              <ul className="social-links d-flex align-items-center">
                <li>
                  <a href="https://www.facebook.com/Nighwantech" target="_blank" rel="noopener noreferrer">
                    <i className="iconoir-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://x.com/nighwantech" target="_blank" rel="noopener noreferrer">
                    <i className="iconoir-x"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/nighwantech/" target="_blank" rel="noopener noreferrer">
                    <i className="iconoir-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/nighwan-technology-pvt-ltd/" target="_blank" rel="noopener noreferrer">
                    <i className="iconoir-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@Nighwantech" target="_blank" rel="noopener noreferrer">
                    <i className="iconoir-youtube"></i>
                  </a>
                </li>
              </ul>
              <p>
                &copy; 2025 All rights reserved by{' '}
                <a href="https://nighwantech.com/" target="_blank" rel="noopener noreferrer">Nighwan Technology</a>
              </p>
              <p>
                <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms and Conditions</a> |
                <a href="/privacy-policy" target="_blank" rel="noopener noreferrer"> Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* ===== Inline CSS to Control Versions & Mobile Adjustments ===== */}
      <style>{`
        /* Desktop version visible by default */
        .desktop-footer { display: block; }
        .mobile-footer { display: none; }

        /* On mobile, show mobile version and adjust styles */
        @media (max-width: 768px) {
          .desktop-footer { display: none; }
          .mobile-footer { display: block; }

          /* Adjust subscribe form input and button widths */
          .subscribe-form .subscribe-box {
            flex-wrap: nowrap;
          }
          .subscribe-form .subscribe-box input[type="email"] {
            width: 70% !important;
            box-sizing: border-box;
          }
          .subscribe-form .subscribe-box button {
            width: 30% !important;
          }

          /* Ensure client logos wrap and display fully */
          .footer-clients {
            flex-wrap: wrap;
            justify-content: center;
          }
          .footer-client-img {
            flex: 1 1 45%;
            max-width: 45%;
            text-align: center;
            margin: 5px 0;
          }
          .footer-client-img img {
            max-width: 100%;
            height: auto;
          }

          /* Nudge social media icons & trademark text upward */
          .copyright-area {
            margin-top: -10px;
          }

          /* Mobile styling for rearranged footer bottom */
          .mobile-footer .custom-row {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          .mobile-footer .footer-column {
            display: flex;
            gap: 20px;
          }
          .mobile-footer .group-a,
          .mobile-footer .group-b {
            display: flex;
            width: 100%;
          }
          .mobile-footer .group-a .footer-links,
          .mobile-footer .group-b .footer-links,
          .mobile-footer .group-b .footer-contact-info {
            width: 50%;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
