import serviceAbout from "../../assets/imgs/hero-service-about.jpg"; 

const HeroService = () => {
    return (
      <section className="hero-service-wrap hero-section-wrap">
        <div style={{ paddingTop: '100px'}} className="hero-section-content-wrap">
          <div className="custom-container">
            <div className="hero-section-content text-center">
              <h5 className="section-subtitle">Our Services</h5>
              <h1 className="section-title fade-in">
                Empowering you with premier <br />
                solutions and support
              </h1>
              <p>
                At Premier Services, we are committed to providing exceptional solutions and <br />
                unwavering support to meet your every need.
              </p>
            </div>
  
            <div className="hero-service-about">
              <img src={serviceAbout} alt="Service About" />
              <div className="hero-service-about-body">
                <p>
                  Our team is a collective force of top talents, pros, experts, and visionaries from diverse fields. With a passion for excellence, our professionals bring a wealth of experience and knowledge to every project. At Slack, we are committed to delivering nothing short of excellence. From concept to implementation, we maintain the highest standards of quality and craftsmanship, leaving no room for compromise.
                </p>
                <ul>
                  <li>
                    <i className="las la-check"></i> Managed Services and Products
                  </li>
                  <li>
                    <i className="las la-check"></i> Flexibility and Adaptability
                  </li>
                  <li>
                    <i className="las la-check"></i> Competitive Advantage
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroService;
  