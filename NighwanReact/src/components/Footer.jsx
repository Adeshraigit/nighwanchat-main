// import React from 'react';
// import logoWhite from '../assets/css/nighlogo.svg'; // Adjust the path to your logo
// import bgShape from '../assets/imgs/bg-shape-4.svg'; // Adjust the path to your background shape
// import youtubeIcon from '../assets/imgs/youtube.svg'; // Adjust the path to your icons
// import webflowIcon from '../assets/imgs/webflow.svg';
// import upworkIcon from '../assets/imgs/upwork.svg';
// import shopifyIcon from '../assets/imgs/shopify.svg';
// import '../assets/css/style.css'; // Import your custom CSS
// import '../assets/css/responsive.css'; // Import your responsive CSS

// const Footer = () => {
//   return (
//     <>
//       <footer className="footer-area">
//         <img src={bgShape} alt="Shape" className="animation-slide-right bg-shape" />

//         {/* ===== Footer Top Section ===== */}
//         <div className="footer-top">
//           <div className="custom-container">
//             <div className="custom-row align-items-end justify-content-between">
//               <div className="left-content">
//                 <a href="index.html" className="logo">
//                   <img src={logoWhite} alt="Logo" />
//                 </a>
//                 <p>
//                   We provide the expertise and support to <br />propel your business forward.
//                 </p>
//                 <form
//                   action="https://wpriverthemes.com/HTML/synck/assets/mail/subscribe.php"
//                   method="POST"
//                   className="subscribe-form"
//                 >
//                   <div className="subscribe-box d-flex">
//                     <input type="email" id="email" name="email" placeholder="Enter Your Email" />
//                     <button id="submit2" className="theme-btn">Get Started</button>
//                   </div>
//                   {/* Alert Message */}
//                   <div className="input-row">
//                     <div className="input-group alert-notification">
//                       <div id="alert-message-subscribe" className="alert-msg"></div>
//                     </div>
//                   </div>
//                 </form>
//                 {/* Client Logos */}
//                 <div className="footer-clients d-flex align-items-center">
//                   <div className="footer-client-img">
//                     <img src={youtubeIcon} alt="Youtube" />
//                   </div>
//                   <div className="footer-client-img">
//                     <img src={webflowIcon} alt="Webflow" />
//                   </div>
//                   <div className="footer-client-img">
//                     <img src={upworkIcon} alt="Upwork" />
//                   </div>
//                   <div className="footer-client-img">
//                     <img src={shopifyIcon} alt="Shopify" />
//                   </div>
//                 </div>
//               </div>

//               <div className="right-content">
//                 <div className="right-content-inner">
//                   <h2>Let’s get started on something great</h2>
//                   <p>
//                     Our team of IT experts looks forward to meeting with you <br />
//                     and providing valuable insights tailored to your business.
//                   </p>
//                   <a href="contact.html" className="theme-btn">Get an appointment now</a>

//                   <div className="footer-experience d-flex align-items-center">
//                     <div className="footer-experience-item">
//                       <h1>2 <span>Mins</span></h1>
//                       <p>Response Time</p>
//                     </div>
//                     <div className="footer-experience-item">
//                       <h1>99%</h1>
//                       <p>Client Satisfaction</p>
//                     </div>
//                     <div className="footer-experience-item">
//                       <h1>18+ <span>Years</span></h1>
//                       <p>Field Experience</p>
//                     </div>
//                   </div>
//                   <div className="footer-experience d-flex align-items-center">
//                     <div className="footer-experience-item">
//                       <h1>150+ <span>Projects</span></h1>
//                       <p>Done Around World</p>
//                     </div>
//                     <div className="footer-experience-item">
//                       <h1>2020 <span>Years</span></h1>
//                       <p>Established On</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ===== Footer Bottom Section ===== */}
//         {/* Desktop Version – remains unchanged */}
//         <div className="footer-bottom desktop-footer">
//           <div className="custom-container">
//             <div className="custom-row">
//               <div className="footer-all-links-wrap justify-content-between d-flex">
//                 <div className="footer-links">
//                   <h3>Services</h3>
//                   <ul>
//                     <li><a href="/service">IT Support</a></li>
//                     <li><a href="service-details.html">Web Design</a></li>
//                     <li><a href="service-details.html">Development</a></li>
//                     <li>
//                       <a href="service-details.html">
//                         Cloud Things <span className="new">New</span>
//                       </a>
//                     </li>
//                     <li><a href="service-details.html">E-Commerce</a></li>
//                     <li><a href="service-details.html">CRM Solutions</a></li>
//                   </ul>
//                 </div>
//                 <div className="footer-links">
//                   <h3>Company</h3>
//                   <ul>
//                     <li><a href="/blog">Blog</a></li>
//                     <li><a href="about.html">About Us</a></li>
//                     <li><a href="partner.html">Partners</a></li>
//                     <li><a href="career.html">Careers</a></li>
//                     <li><a href="event.html">Events</a></li>
//                     <li><a href="#">Team</a></li>
//                   </ul>
//                 </div>
//                 <div className="footer-links">
//                   <h3>Product</h3>
//                   <ul>
//                     <li><a href="case-studie.html">Case Studies</a></li>
//                     <li><a href="pricing.html">Our Pricing</a></li>
//                     <li><a href="feature.html">Features</a></li>
//                     <li><a href="overview.html">Overview</a></li>
//                     <li><a href="new-release.html">New Releases</a></li>
//                     <li><a href="solution.html">Solutions</a></li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="footer-contact-info">
//                 <div className="footer-contact-info-item">
//                   <h4>Phone</h4>
//                   <p>
//                     <a href="tel:+91 8985025794">+91 8985025794</a> <br />
//                     <a href="tel:+91 8985025794">+91 8985025794</a>
//                   </p>
//                 </div>
//                 <div className="footer-contact-info-item">
//                   <h4>Mail</h4>
//                   <p>
//                     <a href="mailto:contact@nighwantech.com">contact@nighwantech.com</a> <br />
//                     <a href="mailto:contact@nighwantech.com">contact@nighwantech.com</a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Version – rearranged into two groups */}
//         <div className="footer-bottom mobile-footer">
//           <div className="custom-container">
//             <div className="custom-row">
//               {/* Group A: Services & Company side by side */}
//               <div className="footer-column group-a">
//                 <div className="footer-links">
//                   <h3>Services</h3>
//                   <ul>
//                     <li><a href="/service">IT Support</a></li>
//                     <li><a href="service-details.html">Web Design</a></li>
//                     <li><a href="service-details.html">Development</a></li>
//                     <li>
//                       <a href="service-details.html">
//                         Cloud Things <span className="new">New</span>
//                       </a>
//                     </li>
//                     <li><a href="service-details.html">E-Commerce</a></li>
//                     <li><a href="service-details.html">CRM Solutions</a></li>
//                   </ul>
//                 </div>
//                 <div className="footer-links">
//                   <h3>Company</h3>
//                   <ul>
//                     <li><a href="/blog">Blog</a></li>
//                     <li><a href="about.html">About Us</a></li>
//                     <li><a href="partner.html">Partners</a></li>
//                     <li><a href="career.html">Careers</a></li>
//                     <li><a href="event.html">Events</a></li>
//                     <li><a href="#">Team</a></li>
//                   </ul>
//                 </div>
//               </div>
//               {/* Group B: Product & Contact Info side by side */}
//               <div className="footer-column group-b">
//                 <div className="footer-links">
//                   <h3>Product</h3>
//                   <ul>
//                     <li><a href="case-studie.html">Case Studies</a></li>
//                     <li><a href="pricing.html">Our Pricing</a></li>
//                     <li><a href="feature.html">Features</a></li>
//                     <li><a href="overview.html">Overview</a></li>
//                     <li><a href="new-release.html">New Releases</a></li>
//                     <li><a href="solution.html">Solutions</a></li>
//                   </ul>
//                 </div>
//                 <div className="footer-contact-info">
//                   <div className="footer-contact-info-item">
//                     <h4>Phone</h4>
//                     <p>
//                       <a href="tel:+91 8985025794">+91 8985025794</a> <br />
//                       <a href="tel:+91 8985025794">+91 8985025794</a>
//                     </p>
//                   </div>
//                   <div className="footer-contact-info-item">
//                     <h4>Mail</h4>
//                     <p>
//                       <a href="mailto:contact@nighwantech.com">contact@nighwantech.com</a> <br />
//                       <a href="mailto:contact@nighwantech.com">contact@nighwantech.com</a>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ===== Copyright Area ===== */}
//         <div className="copyright-area">
//           <div className="custom-container">
//             <div className="custom-row d-flex align-items-center justify-content-between">
//               <ul className="social-links d-flex align-items-center">
//                 <li>
//                   <a href="https://www.facebook.com/Nighwantech">
//                     <i className="iconoir-facebook"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="https://x.com/nighwantech">
//                     <i className="iconoir-x"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="https://www.instagram.com/nighwantech/">
//                     <i className="iconoir-instagram"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="https://www.linkedin.com/company/nighwan-technology-pvt-ltd/">
//                     <i className="iconoir-linkedin"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="https://www.youtube.com/@Nighwantech">
//                     <i className="iconoir-youtube"></i>
//                   </a>
//                 </li>
//               </ul>

//               <p>
//                 &copy; 2023 All rights reserved by{' '}
//                 <a href="https://nighwantech.com/">Nighwan</a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* ===== Inline CSS to Control Versions & Mobile Adjustments ===== */}
//       <style>{`
//         /* Desktop version visible by default */
//         .desktop-footer { display: block; }
//         .mobile-footer { display: none; }

//         /* On mobile, show mobile version and adjust styles */
//         @media (max-width: 768px) {
//           .desktop-footer { display: none; }
//           .mobile-footer { display: block; }

//           /* Adjust subscribe form input and button widths */
//           .subscribe-form .subscribe-box {
//             flex-wrap: nowrap;
//           }
//           .subscribe-form .subscribe-box input[type="email"] {
//             width: 70% !important;
//             box-sizing: border-box;
//           }
//           .subscribe-form .subscribe-box button {
//             width: 30% !important;
//           }

//           /* Ensure client logos wrap and display fully */
//           .footer-clients {
//             flex-wrap: wrap;
//             justify-content: center;
//           }
//           .footer-client-img {
//             flex: 1 1 45%;
//             max-width: 45%;
//             text-align: center;
//             margin: 5px 0;
//           }
//           .footer-client-img img {
//             max-width: 100%;
//             height: auto;
//           }

//           /* Nudge social media icons & trademark text upward */
//           .copyright-area {
//             margin-top: -10px;
//           }

//           /* Mobile styling for rearranged footer bottom */
//           .mobile-footer .custom-row {
//             display: flex;
//             flex-direction: column;
//             gap: 20px;
//           }
//           .mobile-footer .footer-column {
//             display: flex;
//             gap: 20px;
//           }
//           .mobile-footer .group-a,
//           .mobile-footer .group-b {
//             display: flex;
//             width: 100%;
//           }
//           .mobile-footer .group-a .footer-links,
//           .mobile-footer .group-b .footer-links,
//           .mobile-footer .group-b .footer-contact-info {
//             width: 50%;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Footer;

import React from 'react';
import logoWhite from '../assets/css/nighlogo.svg'; // Adjust the path to your logo
import bgShape from '../assets/imgs/bg-shape-4.svg'; // Adjust the path to your background shape
import youtubeIcon from '../assets/imgs/youtube.svg'; // Adjust the path to your icons
import webflowIcon from '../assets/imgs/webflow.svg';
import upworkIcon from '../assets/imgs/upwork.svg';
import shopifyIcon from '../assets/imgs/shopify.svg';
import '../assets/css/style.css'; // Import your custom CSS
import '../assets/css/responsive.css'; // Import your responsive CSS

const Footer = () => {
  return (
    <>
      <footer className="footer-area">
        <img src={bgShape} alt="Shape" className="animation-slide-right bg-shape" />

        {/* ===== Footer Top Section ===== */}
        <div className="footer-top">
          <div className="custom-container">
            <div className="custom-row align-items-end justify-content-between">
              <div className="left-content">
                <a href="index.html" className="logo">
                  <img src={logoWhite} alt="Logo" />
                </a>
                <p>
                  We provide the expertise and support to <br />propel your business forward.
                </p>
                <form
                  action="https://wpriverthemes.com/HTML/synck/assets/mail/subscribe.php"
                  method="POST"
                  className="subscribe-form"
                >
                  <div className="subscribe-box d-flex">
                    <input type="email" id="email" name="email" placeholder="Enter Your Email" />
                    <button id="submit2" className="theme-btn">Get Started</button>
                  </div>
                  {/* Alert Message */}
                  <div className="input-row">
                    <div className="input-group alert-notification">
                      <div id="alert-message-subscribe" className="alert-msg"></div>
                    </div>
                  </div>
                </form>
                {/* Client Logos */}
                <div className="footer-clients d-flex align-items-center">
                  <div className="footer-client-img">
                    <img src={youtubeIcon} alt="Youtube" />
                  </div>
                  <div className="footer-client-img">
                    <img src={webflowIcon} alt="Webflow" />
                  </div>
                  <div className="footer-client-img">
                    <img src={upworkIcon} alt="Upwork" />
                  </div>
                  <div className="footer-client-img">
                    <img src={shopifyIcon} alt="Shopify" />
                  </div>
                </div>
              </div>

              <div className="right-content">
                <div className="right-content-inner">
                  <h2>Let’s get started on something great</h2>
                  <p>
                    Our team of IT experts looks forward to meeting with you <br />
                    and providing valuable insights tailored to your business.
                  </p>
                  <a href="contact.html" className="theme-btn">Get an appointment now</a>

                  <div className="footer-experience d-flex align-items-center">
                    <div className="footer-experience-item">
                      <h1>2 <span>Mins</span></h1>
                      <p>Response Time</p>
                    </div>
                    <div className="footer-experience-item">
                      <h1>99%</h1>
                      <p>Client Satisfaction</p>
                    </div>
                    <div className="footer-experience-item">
                      <h1>18+ <span>Years</span></h1>
                      <p>Field Experience</p>
                    </div>
                  </div>
                  <div className="footer-experience d-flex align-items-center">
                    <div className="footer-experience-item">
                      <h1>150+ <span>Projects</span></h1>
                      <p>Done Around World</p>
                    </div>
                    <div className="footer-experience-item">
                      <h1>2020 <span>Years</span></h1>
                      <p>Established On</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Footer Bottom Section ===== */}
        {/* Desktop Version – remains unchanged */}
        <div className="footer-bottom desktop-footer">
          <div className="custom-container">
            <div className="custom-row">
              <div className="footer-all-links-wrap justify-content-between d-flex">
                <div className="footer-links">
                  <h3>Services</h3>
                  <ul>
                    <li><a href="/service">IT Support</a></li>
                    <li><a href="service-details.html">Web Design</a></li>
                    <li><a href="service-details.html">Development</a></li>
                    <li>
                      <a href="service-details.html">
                        Cloud Things <span className="new">New</span>
                      </a>
                    </li>
                    <li><a href="service-details.html">E-Commerce</a></li>
                    <li><a href="service-details.html">CRM Solutions</a></li>
                  </ul>
                </div>
                <div className="footer-links">
                  <h3>Company</h3>
                  <ul>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="partner.html">Partners</a></li>
                    <li><a href="career.html">Careers</a></li>
                    <li><a href="event.html">Events</a></li>
                    <li><a href="#">Team</a></li>
                  </ul>
                </div>
                <div className="footer-links">
                  <h3>Product</h3>
                  <ul>
                    <li><a href="case-studie.html">Case Studies</a></li>
                    <li><a href="pricing.html">Our Pricing</a></li>
                    <li><a href="feature.html">Features</a></li>
                    <li><a href="overview.html">Overview</a></li>
                    <li><a href="new-release.html">New Releases</a></li>
                    <li><a href="solution.html">Solutions</a></li>
                  </ul>
                </div>
              </div>
              <div className="footer-contact-info">
                <div className="footer-contact-info-item">
                  <h4>Phone</h4>
                  <p>
                    <a href="tel:+91 8985025794">+91 8985025794</a> <br />
                    <a href="tel:+91 8985025794">+91 8092225777</a>
                  </p>
                </div>
                <div className="footer-contact-info-item">
                  <h4>Mail</h4>
                  <p>
                    <a href="mailto:contact@nighwantech.com">contact@nighwantech.com</a> <br />
                    <a href="mailto:contact@nighwantech.com">info@nighwantech.com</a>
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
                    <li><a href="/service">IT Support</a></li>
                    <li><a href="service-details.html">Web Design</a></li>
                    <li><a href="service-details.html">Development</a></li>
                    <li>
                      <a href="service-details.html">
                        Cloud Things <span className="new">New</span>
                      </a>
                    </li>
                    <li><a href="service-details.html">E-Commerce</a></li>
                    <li><a href="service-details.html">CRM Solutions</a></li>
                  </ul>
                </div>
                <div className="footer-links">
                  <h3>Company</h3>
                  <ul>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="partner.html">Partners</a></li>
                    <li><a href="career.html">Careers</a></li>
                    <li><a href="event.html">Events</a></li>
                    <li><a href="#">Team</a></li>
                  </ul>
                </div>
              </div>
              {/* Group B: Product & Contact Info side by side */}
              <div className="footer-column group-b">
                <div className="footer-links">
                  <h3>Product</h3>
                  <ul>
                    <li><a href="case-studie.html">Case Studies</a></li>
                    <li><a href="pricing.html">Our Pricing</a></li>
                    <li><a href="feature.html">Features</a></li>
                    <li><a href="overview.html">Overview</a></li>
                    <li><a href="new-release.html">New Releases</a></li>
                    <li><a href="solution.html">Solutions</a></li>
                  </ul>
                </div>
                <div className="footer-contact-info">
                  <div className="footer-contact-info-item">
                    <h4>Phone</h4>
                    <p>
                      <a href="tel:+91 8985025794">+91 8985025794</a> <br />
                      <a href="tel:+91 8985025794">+91 8985025794</a>
                    </p>
                  </div>
                  <div className="footer-contact-info-item">
                    <h4>Mail</h4>
                    <p>
                      <a href="mailto:contact@nighwantech.com">contact@nighwantech.com</a> <br />
                      <a href="mailto:contact@nighwantech.com">contact@nighwantech.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Copyright Area ===== */}
        <div className="copyright-area">
          <div className="custom-container">
            <div className="custom-row d-flex align-items-center justify-content-between">
              <ul className="social-links d-flex align-items-center">
                <li>
                  <a href="https://www.facebook.com/Nighwantech">
                    <i className="iconoir-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://x.com/nighwantech">
                    <i className="iconoir-x"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/nighwantech/">
                    <i className="iconoir-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/nighwan-technology-pvt-ltd/">
                    <i className="iconoir-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@Nighwantech">
                    <i className="iconoir-youtube"></i>
                  </a>
                </li>
              </ul>

              <p>
                &copy; 2023 All rights reserved by{' '}
                <a href="https://nighwantech.com/">Nighwan</a>
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