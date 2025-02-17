// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/css/nighlogo.svg'; // Adjust the path to your logo
// import '../assets/css/style.css'; // Import your custom CSS
// import '../assets/css/responsive.css';
// import '../assets/css/line.css'; // Import your responsive CSS
// import hwdIcon1 from '../assets/imgs/hwd-icon-1.svg';
// import hwdIcon2 from '../assets/imgs/hwd-icon-2.svg';
// import hwdIcon3 from '../assets/imgs/hwd-icon-3.svg';
// import hwdIcon4 from '../assets/imgs/hwd-icon-4.svg';
// import portfolio1 from '../assets/imgs/portfolio-mega-menu-1.jpg';
// import portfolio2 from '../assets/imgs/portfolio-mega-menu-2.jpg';
// import portfolio3 from '../assets/imgs/portfolio-mega-menu-3.jpg';
// import portfolio4 from '../assets/imgs/portfolio-mega-menu-4.jpg';
// import ipad from '../assets/imgs/ipad.jpg';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isPortfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
//   const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handlePortfolioDropdown = () => {
//     setPortfolioDropdownOpen(true);
//   };

//   const handleServicesDropdown = () => {
//     setServicesDropdownOpen(true);
//   };

//   const closeDropdowns = () => {
//     setPortfolioDropdownOpen(false);
//     setServicesDropdownOpen(false);
//   };

//   return (
//     <header className="header-area">
//       <div className="custom-container">
//         <div className="custom-row align-items-center justify-content-between">
//           <div className="header-left d-flex align-items-center">
//             <Link to="/" className="logo">
//               <img src={logo} alt="Logo" />
//             </Link>

//             <div className="header-left-right">
//               <Link to="/contact" className="theme-btn">
//                 Contact Us
//               </Link>
//               <span className="menu-bar" onClick={toggleMenu}>
//                 <i className="las la-bars"></i>
//               </span>
//             </div>

//             {/* Navbar */}
//             <nav className={`navbar-wrapper ${isMenuOpen ? 'active' : ''}`}>
//               <span className="close-menu-bar" onClick={toggleMenu}>
//                 <i className="las la-times"></i>
//               </span>
//               <ul>
//                 <li>
//                   <Link onClick={toggleMenu} to="/">
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link onClick={toggleMenu} to="/about">
//                     Our Roots
//                   </Link>
//                 </li>
//                 <li>
//                   <Link onClick={toggleMenu} to="/lean">
//                     Lean Consultancy
//                   </Link>
//                 </li>

//                 {/* Services Mega Menu */}
//                 <li
//                   className={`mega-menu-item ${isServicesDropdownOpen ? 'active' : ''}`}
//                   onMouseEnter={handleServicesDropdown}
//                   onMouseLeave={closeDropdowns}
//                   onClick={handleServicesDropdown}

//                 >
//                   <div>
//                     <Link to="/service">Services</Link>
//                     <span className="dropdown-menu-item-icon">
//                       <i className="las la-angle-down"></i>
//                     </span>
//                   </div>
//                   {isServicesDropdownOpen && (
//                     <div className="mega-menu">
//                       <div className="mega-menu-inner" onMouseLeave={closeDropdowns}>
//                         <div className="custom-container d-flex">
//                           <div className="left">
//                             <div className="mega-menu-link-wrap d-flex align-items-start justify-content-between">
//                               <div className="mega-menu-service-cards align-items-start">
//                                 <div className="mega-menu-service-card">
//                                   <span className="icon">
//                                     <img src={hwdIcon1} alt="Service" />
//                                   </span>
//                                   <div className="content">
//                                     <h2>
//                                       <Link to="/service">Brainstorming</Link>
//                                     </h2>
//                                     <p>Ideas</p>
//                                   </div>
//                                 </div>
//                                 <div className="mega-menu-service-card">
//                                   <span className="icon">
//                                     <img src={hwdIcon4} alt="Service" />
//                                   </span>
//                                   <div className="content">
//                                     <h2>
//                                       <Link to="/service">Product</Link>
//                                     </h2>
//                                     <p>Design</p>
//                                   </div>
//                                 </div>
//                                 <div className="mega-menu-service-card">
//                                   <span className="icon">
//                                     <img src={hwdIcon2} alt="Service" />
//                                   </span>
//                                   <div className="content">
//                                     <h2>
//                                       <Link to="/service">SEO</Link>
//                                     </h2>
//                                     <p>Optimization</p>
//                                   </div>
//                                 </div>
//                                 <div className="mega-menu-service-card">
//                                   <span className="icon">
//                                     <img src={hwdIcon3} alt="Service" />
//                                   </span>
//                                   <div className="content">
//                                     <h2>
//                                       <Link to="/service">Front-End</Link>
//                                     </h2>
//                                     <p>Development</p>
//                                   </div>
//                                 </div>
//                               </div>
//                               <div className="mega-menu-links d-flex">
//                                 <div className="mega-menu-link">
//                                   <h3>Services</h3>
//                                   <ul>
//                                     <li>
//                                       <Link to="/service" style={{ fontSize: '0.7em' }}>
//                                       Lean Consultancy 
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link to="/service" style={{ fontSize: '0.7em' }}>
//                                       Branding
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link to="/service" style={{ fontSize: '0.7em' }}>
//                                       ERP Development
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link to="/service" style={{ fontSize: '0.7em' }}>
//                                       AI/ML Solutions
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link to="/service" style={{ fontSize: '0.7em' }}>
//                                       Web/Mobile App Development
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link to="/service" style={{ fontSize: '0.7em' }}>
//                                       Data Analytics
//                                       </Link>
//                                     </li>
//                                   </ul>
//                                 </div>
//                                 <div className="mega-menu-link">
//                                   <h3>‎ ‎ </h3>
//                                   <ul>
//                                     <li>
//                                       <Link to="/service" style={{ fontSize: '0.7em' }}>
//                                       IoT Solutions
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link to="/service" style={{ fontSize: '0.7em' }}>
//                                       Digital Marketing
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link to="/service" style={{ fontSize: '0.7em' }}>
//                                       IT Support & Maintenance
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link to="/service" style={{ fontSize: '0.7em' }}>
//                                       DevOps Services
//                                       </Link>
//                                     </li>
//                                     {/* <li>
//                                       <Link to="/service" style={{ fontSize: '0.6em' }}>
//                                         Industries
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link to="/service" style={{ fontSize: '0.6em' }}>
//                                         Hotels
//                                       </Link>
//                                     </li> */}
//                                   </ul>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="mega-menu-footer d-flex align-items-center justify-content-between w-full">
//                               <ul className="mega-menu-social d-flex align-items-center">
//                                 <li>
//                                   <a href="#">
//                                     <i className="iconoir-dribbble"></i>
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a href="#">
//                                     <i className="iconoir-twitter"></i>
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a href="#">
//                                     <i className="iconoir-instagram"></i>
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a href="#">
//                                     <i className="iconoir-linkedin"></i>
//                                   </a>
//                                 </li>
//                               </ul>
//                               <p>
//                               <span style={{ fontSize: '0.8em' }}>Looking for new career?</span> <Link to="/career">We're hiring</Link>
//                               </p>
//                             </div>
//                           </div>
//                           <div className="right">
//                             <div className="mega-menu-ads">
//                               <img src={ipad} alt="iPad" />
//                               <h2>Our product hits</h2>
//                               <p>
//                                 Our new best IT product of the <br />year 2023.
//                               </p>
//                               <Link to="/#">View more</Link>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </li>

//                 {/* Portfolio Mega Menu */}
//                 <li
//                   className={`mega-menu-item ${isPortfolioDropdownOpen ? 'active' : ''}`}
//                   onMouseEnter={handlePortfolioDropdown}
//                   onMouseLeave={closeDropdowns}
//                   onClick={handlePortfolioDropdown}
//                 >
//                   <div>
//                     <Link to="/products">Product</Link>
//                     <span className="dropdown-menu-item-icon">
//                       <i className="las la-angle-down"></i>
//                     </span>
//                   </div>
//                   {isPortfolioDropdownOpen && (
//                     <div className="mega-menu mega-menu-portfolio">
//                       <div className="mega-menu-inner" onMouseLeave={closeDropdowns}>
//                         <div className="custom-container d-flex">
//                           <div className="left">
//                             <div className="mega-menu-link-wrap d-flex align-items-start justify-content-between">
//                               <div className="mega-menu-portfolio-card">
//                                 <div className="img-box">
//                                   <img src={portfolio1} alt="Portfolio" />
//                                 </div>
//                                 <div className="content-box">
//                                   <h3>
//                                     <Link to="/portfolio">Nighwan ERP – AI-Powered Business Management</Link>
//                                   </h3>
//                                   <p>
//                                   A custom-built ERP system designed for businesses  <br />that need an integrated and intelligent management solution.
//                                   </p>
//                                 </div>
//                               </div>
//                               <div className="mega-menu-portfolio-card">
//                                 <div className="img-box">
//                                   <img src={portfolio2} alt="Portfolio" />
//                                 </div>
//                                 <div className="content-box">
//                                   <h3>
//                                     <Link to="/portfolio">LeanPro – AI-Based Sales & Demand Forecasting</Link>
//                                   </h3>
//                                   <p>
//                                   An advanced AI/ML-driven predictive analytics tool designed for manufacturers and retailers to optimize inventory and sales.<br />
//                                   </p>
//                                 </div>
//                               </div>
//                               <div className="mega-menu-portfolio-card">
//                                 <div className="img-box">
//                                   <img src={portfolio3} alt="Portfolio" />
//                                 </div>
//                                 <div className="content-box">
//                                   <h3>
//                                     <Link to="/portfolio">Nighwan B2B – Multi-Vendor E-Commerce Platform</Link>
//                                   </h3>
//                                   <p>
//                                   A next-gen B2B e-commerce platform that helps businesses list, sell, and manage their products seamlessly. <br />
//                                   </p>
//                                 </div>
//                               </div>
//                               <div className="mega-menu-portfolio-card">
//                                 <div className="img-box">
//                                   <img src={portfolio4} alt="Portfolio" />
//                                 </div>
//                                 <div className="content-box">
//                                   <h3>
//                                     <Link to="/portfolio">IoTGuard – Predictive Maintenance Systemy</Link>
//                                   </h3>
//                                   <p>
//                                   A smart IoT solution that enables businesses to monitor and maintain equipment health in real-time. <br />
//                                   </p>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="mega-menu-footer d-flex align-items-center justify-content-between w-full">
//                               <ul className="mega-menu-social d-flex align-items-center">
//                                 <li>
//                                   <a href="#">
//                                     <i className="iconoir-dribbble"></i>
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a href="#">
//                                     <i className="iconoir-twitter"></i>
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a href="#">
//                                     <i className="iconoir-instagram"></i>
//                                   </a>
//                                 </li>
//                                 <li>
//                                   <a href="#">
//                                     <i className="iconoir-linkedin"></i>
//                                   </a>
//                                 </li>
//                               </ul>
//                               <p>
//                                 <Link to="/portfolio">
//                                   View Product <i className="iconoir-arrow-up-right"></i>
//                                 </Link>
//                               </p>
//                             </div>
//                           </div>
//                           <div className="right">
//                             <div className="mega-menu-ads">
//                               <img src={ipad} alt="iPad" />
//                               <h2>Mobile app for a new era</h2>
//                               <p>
//                                 Download slack in your mobile for <br />your daily usage.
//                               </p>
//                               <Link to="/case-study-single">View more</Link>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </li>

//                 {/* Careers Section */}
//                 <li>
//                   <Link onClick={toggleMenu} to="/career">
//                     Career
//                   </Link>
//                 </li>
//                 {/* Blogs Section */}
//                 <li>
//                   <Link onClick={toggleMenu} to="/blog">
//                     Blogs
//                   </Link>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//           <div className="header-right">
//             <div className="header-contact-info d-flex align-items-center">
//               <div className="phone-number">
//                 <a href="tel:+91 8985025794">
//                   Call Us <i className="iconoir-arrow-up-right"></i>
//                 </a>
//                 +91 8985025794
//               </div>
//               <Link to="/contact" className="theme-btn">
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/css/nighlogo.svg'; // Adjust the path to your logo
import '../assets/css/style.css'; // Import your custom CSS
import '../assets/css/responsive.css';
import '../assets/css/line.css'; // Import your responsive CSS
import hwdIcon1 from '../assets/imgs/hwd-icon-1.svg';
import hwdIcon2 from '../assets/imgs/hwd-icon-2.svg';
import hwdIcon3 from '../assets/imgs/hwd-icon-3.svg';
import hwdIcon4 from '../assets/imgs/hwd-icon-4.svg';
import portfolio1 from '../assets/imgs/portfolio-mega-menu-1.jpg';
import portfolio2 from '../assets/imgs/portfolio-mega-menu-2.jpg';
import portfolio3 from '../assets/imgs/portfolio-mega-menu-3.jpg';
import portfolio4 from '../assets/imgs/portfolio-mega-menu-4.jpg';
import ipad from '../assets/imgs/ipad.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPortfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  // Determine if we're in mobile view.
  const isMobile = window.innerWidth < 768;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Desktop hover handlers (applied only if not mobile)
  const handlePortfolioDropdown = () => {
    if (!isMobile) setPortfolioDropdownOpen(true);
  };

  const handleServicesDropdown = () => {
    if (!isMobile) setServicesDropdownOpen(true);
  };

  const closeDropdowns = () => {
    if (!isMobile) {
      setPortfolioDropdownOpen(false);
      setServicesDropdownOpen(false);
    }
  };

  return (
    <header className="header-area">
      <div className="custom-container">
        <div className="custom-row align-items-center justify-content-between">
          <div className="header-left d-flex align-items-center">
            <Link to="/" className="logo">
              <img src={logo} alt="Logo" />
            </Link>

            <div className="header-left-right">
              <Link to="/contact" className="theme-btn">
                Contact Us
              </Link>
              <span className="menu-bar" onClick={toggleMenu}>
                <i className="las la-bars"></i>
              </span>
            </div>

            {/* Navbar */}
            <nav className={`navbar-wrapper ${isMenuOpen ? 'active' : ''}`}>
              <span className="close-menu-bar" onClick={toggleMenu}>
                <i className="las la-times"></i>
              </span>
              <ul>
                <li>
                  <Link onClick={toggleMenu} to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link onClick={toggleMenu} to="/about">
                    Our Roots
                  </Link>
                </li>
                <li>
                  <Link onClick={toggleMenu} to="/lean">
                    Lean Consultancy
                  </Link>
                </li>

                {/* Services Mega Menu */}
                {/* <li
                  className={`mega-menu-item ${isServicesDropdownOpen ? 'active' : ''}`}
                  {...(!isMobile ? { onMouseEnter: handleServicesDropdown, onMouseLeave: closeDropdowns } : {})}
                >
                  <div>
                    <Link to="/service">Services</Link>
                    <span
                      className="dropdown-menu-item-icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        setServicesDropdownOpen((prev) => !prev);
                      }}
                    >
                      <i className="las la-angle-down"></i>
                    </span>
                  </div>
                  {isServicesDropdownOpen && (
                    <div className="mega-menu">
                      <div className="mega-menu-inner" onMouseLeave={closeDropdowns}>
                        <div className="custom-container d-flex">
                          <div className="left">
                            <div className="mega-menu-link-wrap d-flex align-items-start justify-content-between">
                              <div className="mega-menu-service-cards align-items-start">
                                <div className="mega-menu-service-card">
                                  <span className="icon">
                                    <img src={hwdIcon1} alt="Service" />
                                  </span>
                                  <div className="content">
                                    <h2>
                                      <Link to="/service">Brainstorming</Link>
                                    </h2>
                                    <p>Ideas</p>
                                  </div>
                                </div>
                                <div className="mega-menu-service-card">
                                  <span className="icon">
                                    <img src={hwdIcon4} alt="Service" />
                                  </span>
                                  <div className="content">
                                    <h2>
                                      <Link to="/service">Product</Link>
                                    </h2>
                                    <p>Design</p>
                                  </div>
                                </div>
                                <div className="mega-menu-service-card">
                                  <span className="icon">
                                    <img src={hwdIcon2} alt="Service" />
                                  </span>
                                  <div className="content">
                                    <h2>
                                      <Link to="/service">SEO</Link>
                                    </h2>
                                    <p>Optimization</p>
                                  </div>
                                </div>
                                <div className="mega-menu-service-card">
                                  <span className="icon">
                                    <img src={hwdIcon3} alt="Service" />
                                  </span>
                                  <div className="content">
                                    <h2>
                                      <Link to="/service">Front-End</Link>
                                    </h2>
                                    <p>Development</p>
                                  </div>
                                </div>
                              </div>
                              <div className="mega-menu-links d-flex">
                                <div className="mega-menu-link">
                                  <h3>Services</h3>
                                  <ul>
                                    <li>
                                      <Link to="/service" style={{ fontSize: '0.7em' }}>
                                        Lean Consultancy 
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/service" style={{ fontSize: '0.7em' }}>
                                        Branding
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/service" style={{ fontSize: '0.7em' }}>
                                        ERP Development
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/service" style={{ fontSize: '0.7em' }}>
                                        AI/ML Solutions
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/service" style={{ fontSize: '0.7em' }}>
                                        Web/Mobile App Development
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/service" style={{ fontSize: '0.7em' }}>
                                        Data Analytics
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <div className="mega-menu-link">
                                  <h3>&nbsp;</h3>
                                  <ul>
                                    <li>
                                      <Link to="/service" style={{ fontSize: '0.7em' }}>
                                        IoT Solutions
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/service" style={{ fontSize: '0.7em' }}>
                                        Digital Marketing
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/service" style={{ fontSize: '0.7em' }}>
                                        IT Support & Maintenance
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/service" style={{ fontSize: '0.7em' }}>
                                        DevOps Services
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              
                            </div>
                            <div className="mega-menu-footer d-flex align-items-center justify-content-between w-full">
                              <ul className="mega-menu-social d-flex align-items-center">
                                <li>
                                  <a href="#">
                                    <i className="iconoir-dribbble"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="iconoir-twitter"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="iconoir-instagram"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="iconoir-linkedin"></i>
                                  </a>
                                </li>
                              </ul>
                              <p>
                                <span style={{ fontSize: '0.8em' }}>Looking for new career?</span>{' '}
                                <Link to="/career">We're hiring</Link>
                              </p>
                            </div>
                          </div>
                          <div className="right">
                            <div className="mega-menu-ads">
                              <img src={ipad} alt="iPad" />
                              <h2>Our product hits</h2>
                              <p>
                                Our new best IT product of the <br />year 2023.
                              </p>
                              <Link to="/#">View more</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li> */}
                <li
                  className={`mega-menu-item ${isServicesDropdownOpen ? 'active' : ''}`}
                  {...(!isMobile ? { onMouseEnter: handleServicesDropdown, onMouseLeave: closeDropdowns } : {})}
                >
                  <div>
                    <Link to="/service">Services</Link>
                    <span
                      className="dropdown-menu-item-icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        setServicesDropdownOpen((prev) => !prev);
                      }}
                    >
                      <i className="las la-angle-down"></i>
                    </span>
                  </div>
                  {isServicesDropdownOpen && (
                    <div className="mega-menu">
                      <div className="mega-menu-inner" onMouseLeave={closeDropdowns}>
                        <div className="custom-container d-flex">
                          <div className="left">
                            <div className="mega-menu-link-wrap d-flex align-items-start justify-content-between">
                              <div className="mega-menu-service-cards align-items-start">
                                <div className="mega-menu-service-card">
                                  <span className="icon">
                                    <img src={hwdIcon1} alt="Service" />
                                  </span>
                                  <div className="content">
                                    <h2>
                                      <Link to="/service">Brainstorming</Link>
                                    </h2>
                                    <p>Ideas</p>
                                  </div>
                                </div>
                                <div className="mega-menu-service-card">
                                  <span className="icon">
                                    <img src={hwdIcon4} alt="Service" />
                                  </span>
                                  <div className="content">
                                    <h2>
                                      <Link to="/service">Product</Link>
                                    </h2>
                                    <p>Design</p>
                                  </div>
                                </div>
                                <div className="mega-menu-service-card">
                                  <span className="icon">
                                    <img src={hwdIcon2} alt="Service" />
                                  </span>
                                  <div className="content">
                                    <h2>
                                      <Link to="/service">SEO</Link>
                                    </h2>
                                    <p>Optimization</p>
                                  </div>
                                </div>
                                <div className="mega-menu-service-card">
                                  <span className="icon">
                                    <img src={hwdIcon3} alt="Service" />
                                  </span>
                                  <div className="content">
                                    <h2>
                                      <Link to="/service">Front-End</Link>
                                    </h2>
                                    <p>Development</p>
                                  </div>
                                </div>
                              </div>
                              <div className="mega-menu-links d-flex">
                                <div className="mega-menu-link">
                                  <h3>Services</h3>
                                  <ul>
                                    <li>
                                      <Link to="/service" style={{ fontSize: '0.7em' }}>
                                        Lean Consultancy 
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/service" style={{ fontSize: '0.7em' }}>
                                        Branding
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/service" style={{ fontSize: '0.7em' }}>
                                        ERP Development
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/service" style={{ fontSize: '0.7em' }}>
                                        AI/ML Solutions
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/service" style={{ fontSize: '0.7em' }}>
                                        Web/Mobile App Development
                                      </Link>
                                    </li>
                                    {/* <li>
                                      <Link to="/service" style={{ fontSize: '0.7em' }}>
                                        Data Analytics
                                      </Link>
                                    </li> */}
                                  </ul>
                                </div>
                                <div className="mega-menu-link">
                                  <h3>&nbsp;</h3>
                                  <ul>
                                    <li>
                                      <Link to="/service" style={{ fontSize: '0.7em' }}>
                                        IoT Solutions
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/service" style={{ fontSize: '0.7em' }}>
                                        Digital Marketing
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/service" style={{ fontSize: '0.7em' }}>
                                      Data Analytics
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/service" style={{ fontSize: '0.7em' }}>
                                        DevOps Services
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/service" style={{ fontSize: '0.7em' }}>
                                      IT Support & Maintenance
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="mega-menu-footer d-flex align-items-center justify-content-between w-full">
                              <ul className="mega-menu-social d-flex align-items-center">
                                <li>
                                  <a href="#">
                                    <i className="iconoir-dribbble"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="iconoir-twitter"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="iconoir-instagram"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="iconoir-linkedin"></i>
                                  </a>
                                </li>
                              </ul>
                              <p>
                                <span style={{ fontSize: '0.8em' }}>Looking for new career?</span>{' '}
                                <Link to="/career">We're hiring</Link>
                              </p>
                            </div>
                          </div>
                          <div className="right">
                            <div className="mega-menu-ads">
                              <img src={ipad} alt="iPad" />
                              <h2>Our product hits</h2>
                              <p>
                                Our new best IT product of the <br />year 2023.
                              </p>
                              <Link to="/#">View more</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>

                {/* Portfolio Mega Menu */}
                <li
                  className={`mega-menu-item ${isPortfolioDropdownOpen ? 'active' : ''}`}
                  {...(!isMobile ? { onMouseEnter: handlePortfolioDropdown, onMouseLeave: closeDropdowns } : {})}
                >
                  <div>
                    <Link to="/products">Product</Link>
                    <span
                      className="dropdown-menu-item-icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPortfolioDropdownOpen((prev) => !prev);
                      }}
                    >
                      <i className="las la-angle-down"></i>
                    </span>
                  </div>
                  {isPortfolioDropdownOpen && (
                    <div className="mega-menu mega-menu-portfolio">
                      <div className="mega-menu-inner" onMouseLeave={closeDropdowns}>
                        <div className="custom-container d-flex">
                          <div className="left">
                            <div className="mega-menu-link-wrap d-flex align-items-start justify-content-between">
                              <div className="mega-menu-portfolio-card">
                                <div className="img-box">
                                  <img src={portfolio1} alt="Portfolio" />
                                </div>
                                <div className="content-box">
                                  <h3>
                                    <Link to="/product-detail/erp">
                                      Nighwan ERP – AI-Powered Business Management
                                    </Link>
                                  </h3>
                                  <p>
                                    A custom-built ERP system designed for businesses <br />that need an integrated and intelligent management solution.
                                  </p>
                                </div>
                              </div>
                              <div className="mega-menu-portfolio-card">
                                <div className="img-box">
                                  <img src={portfolio2} alt="Portfolio" />
                                </div>
                                <div className="content-box">
                                  <h3>
                                    <Link to="/product-detail/ai">
                                      LeanPro – AI-Based Sales & Demand Forecasting
                                    </Link>
                                  </h3>
                                  <p>
                                    An advanced AI/ML-driven predictive analytics tool designed for manufacturers and retailers to optimize inventory and sales.<br />
                                  </p>
                                </div>
                              </div>
                              <div className="mega-menu-portfolio-card">
                                <div className="img-box">
                                  <img src={portfolio3} alt="Portfolio" />
                                </div>
                                <div className="content-box">
                                  <h3>
                                    <Link to="/product-detail/b2b">
                                      Nighwan B2B – Multi-Vendor E-Commerce Platform
                                    </Link>
                                  </h3>
                                  <p>
                                    A next-gen B2B e-commerce platform that helps businesses list, sell, and manage their products seamlessly. <br />
                                  </p>
                                </div>
                              </div>
                              <div className="mega-menu-portfolio-card">
                                <div className="img-box">
                                  <img src={portfolio4} alt="Portfolio" />
                                </div>
                                <div className="content-box">
                                  <h3>
                                    <Link to="/product-detail/iot">
                                      IoTGuard – Predictive Maintenance Systemy
                                    </Link>
                                  </h3>
                                  <p>
                                    A smart IoT solution that enables businesses to monitor and maintain equipment health in real-time. <br />
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="mega-menu-footer d-flex align-items-center justify-content-between w-full">
                              <ul className="mega-menu-social d-flex align-items-center">
                                <li>
                                  <a href="#">
                                    <i className="iconoir-dribbble"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="iconoir-twitter"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="iconoir-instagram"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="iconoir-linkedin"></i>
                                  </a>
                                </li>
                              </ul>
                              <p>
                                <Link to="/portfolio">
                                  View Product <i className="iconoir-arrow-up-right"></i>
                                </Link>
                              </p>
                            </div>
                          </div>
                          <div className="right">
                            <div className="mega-menu-ads">
                              <img src={ipad} alt="iPad" />
                              <h2>Mobile app for a new era</h2>
                              <p>
                                Download slack in your mobile for <br />your daily usage.
                              </p>
                              <Link to="/case-study-single">View more</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>

                {/* Careers Section */}
                <li>
                  <Link onClick={toggleMenu} to="/career">
                    Career
                  </Link>
                </li>
                {/* Blogs Section */}
                <li>
                  <Link onClick={toggleMenu} to="/blog">
                    Blogs
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-right">
            <div className="header-contact-info d-flex align-items-center">
              <div className="phone-number">
                <a href="tel:+91 8985025794">
                  Call Us <i className="iconoir-arrow-up-right"></i>
                </a>
                +91 8985025794
              </div>
              <Link to="/contact" className="theme-btn">
                Contact Us
              </Link>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;