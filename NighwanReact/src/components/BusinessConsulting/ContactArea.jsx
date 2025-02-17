import React from 'react';
import flag from '../../assets/imgs/flag.png'; // Adjust the path to your assets
import mapImg from '../../assets/imgs/map.svg';
import supportIcon from '../../assets/imgs/support-icon.svg';
import mapIcon from '../../assets/imgs/map-icon.svg';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS

const ContactArea = () => {
  return (
    <section className="contact2-area">
      <div className="custom-container">
        <div className="section-header d-flex align-items-center justify-content-between">
          <div className="left">
            <h5 className="section-subtitle">Contact</h5>
            <h1 className="section-title">We have branches all over the india</h1>
          </div>
          <p>
            Reach out to us through the contact form below, and a member of our dedicated team will
            respond promptly. We're here to listen, assist, and collaborate.
          </p>
        </div>
        <div className="contact2-body">
          <div className="contact-map-wrap">
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

            <div id="map">
              {[...Array(6)].map((_, index) => (
                <div className="map-location-item" key={index}>
                  <div className="map-location-item-inner">
                    <img src={flag} alt="Flag" />
                    <div className="content">
                      <h3>New York, USA</h3>
                      <p>
                        720/5, Starc Street,
                        <br />
                        North View, New York
                      </p>
                    </div>
                  </div>
                  <span className="circle"></span>
                </div>
              ))}
              <img src={mapImg} alt="Map" />
            </div>
          </div>

          <div className="contact2-infos d-flex">
            <div className="contact2-info-box">
              <img src={supportIcon} alt="Icon" />
              <h2>Contact Info</h2>
              <ul>
                <li>+1 455 1482 236</li>
                <li>bluebase@mail.com</li>
                <li>mandro@mail.com</li>
              </ul>
            </div>
            <div className="contact2-info-box contact2-visit-our-office">
              <img src={mapIcon} alt="Icon" />
              <h2>Visit our office</h2>
              <p className="address">
                16/9, Down Street
                <br />
                Edinburgh, Scotland
                <br />
                United Kingdom
              </p>
            </div>
            <div className="contact2-info-box contact2-social-links">
              <ul>
                <li>
                  <a href="#">
                    <i className="iconoir-dribbble"></i>Dribbble
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="iconoir-twitter"></i>Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="iconoir-instagram"></i>Instagram
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="iconoir-linkedin"></i>Linkedin
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact2-info-box contact2-experience">
              <div className="contact2-experience-list">
                <h1>
                  22+ <span>Years</span>
                </h1>
                <p>Field Experience</p>
              </div>
              <div className="contact2-experience-list">
                <h1>
                  950+ <span>Projects</span>
                </h1>
                <p>Done Around World</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArea;