const HeroSection = ({type}) => {

  const products = {
    "erp" : {
      one: "ERP System – Intelligent Business Management",
      two: "A custom-built ERP solution tailored for businesses looking to integrate and automate their operations.",
    },
    "ai": {
    one: "AI-Powered Sales Forecasting",
    two: "Advanced AI/ML-driven sales prediction software for demand-driven manufacturing and retail businesses.",
  },
  "b2b": {
    one: "B2B E-Commerce Platform",
    two: "A feature-rich online marketplace where multiple vendors can list, sell, and manage their products seamlessly.",
    },
    "iot" : {
      one : "IoT-Enabled Predictive Maintenance",
      two : "A smart IoT solution that helps industries monitor equipment health and predict failures before they",
    },  
    "hrms" : {
      one : "HRMS with Job Portal",
      two : "A comprehensive Human Resource Management System integrated with a job portal to streamline HR operations and talent acquisition.",
    },
    "tms" : {
      one : "Transport Management System",
      two : "A smart logistics and transportation management solution for fleet tracking and route optimization.", 
    },
    "data" : {
      one : "Data Analytics & Digital Twin Technology",
      two : "A powerful data analytics platform integrated with digital twin technology for real-time business insights.",
    }, 
    "devops" : {
      one : "DevOps & Cloud Solutions",
      two : "A fully automated DevOps platform to streamline software development and deployment."
    }, 
    "digital" : {
      one : "Digital Marketing Automation",
      two : "A data-driven digital marketing platform to automate campaigns, analyze customer behavior, and improve engagement.",
    }
  }

    return (
      <section className="hero-service-wrap hero-section-wrap hero-overview-wrap">
        <div className="hero-section-content-wrap">
          <div className="custom-container">
            <div className="hero-portfolio-body">
              <div className="hero-section-content text-center">
                <h5 className="section-subtitle">Portfolio</h5>
                <h1 className="section-title fade-in">
                 {products[type].one}
                </h1>
                <p>
                 {products[type].two} 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  
  