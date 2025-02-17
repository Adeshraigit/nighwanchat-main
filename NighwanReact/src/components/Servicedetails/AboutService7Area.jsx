import React from 'react';
import '../../assets/css/style.css'; // Updated CSS import path
import '../../assets/css/responsive.css'; // Updated CSS import path
import serviceDetails2 from '../../assets/imgs/service-details-2.jpg'; // Updated image import path
import serviceDetails3 from '../../assets/imgs/service-details-3.jpg'; // Updated image import path

const AboutService7Area = ({type}) => {

  const services = {
    "Branding" : {
      name : "Our Branding Services",
      one : "🎨 Logo & Visual Identity Design – Stand out with a professional and distinctive look.",
      two : "📢 Brand Messaging & Positioning – Create a compelling brand story that connects with your audience.",
      three : "📱 Social Media & Digital Branding – Strengthen your online presence with consistent branding."
    },
    "ERP" : {
      name : "Key ERP Features",
      one : "✅ Inventory & Supply Chain Management – Track and manage stock in real-time.",
      two : "✅ HR & Payroll Automation – Simplify employee management and payroll processing.",
      three : "✅ Financial & Sales Reporting – Gain insights with smart analytics and forecasting."
    },
    "aim" : {
      name : "AI/ML Services We Offer",
      one : "🤖 Predictive Analytics – Forecast trends and optimize processes",
      two : "📊 Chatbots & AI Customer Support – Automate customer interactions.",
      three : "🔍 Image Recognition & Computer Vision – Enhance security and automation."
    },
    "Web" : {
      name : "Our Development Services",
      one : "🌐 Web Development – Custom websites & web applications.",
      two : "📱 Mobile App Development – iOS, Android & Cross-platform solutions.",
      three : "🔗 Progressive Web Apps (PWA) – Faster, lightweight, and responsive apps."
    },
    "Data" : {
      name : "Our Data Analytics Services",
      one : "📊 Business Intelligence Dashboards – Get real-time data visualization.",
      two : "📈 Big Data & Predictive Analytics – Identify trends and future opportunities.",
      three : "🔍 Customer Behavior & Market Insights – Improve marketing & sales strategies."
    },
    "Iot" : {
      name : "Our IoT Services",
      one : "📡 Smart Manufacturing & Predictive Maintenance – Reduce downtime & optimize production.",
      two : "🏠 IoT-Based Home & Office Automation – Intelligent control of appliances & security.",
      three : "🚛 Fleet & Asset Tracking Solutions – Real-time GPS tracking & monitoring.."
    },
    "Digital" : {
      name : "Our Digital Marketing Services",
      one : "🔍 SEO & Content Marketing – Improve search rankings & visibility.",
      two : "📱 Social Media Management – Engage your audience effectively.",
      three : "🎯 Paid Advertising (PPC & Social Ads) – Generate high-quality leads."
    },
    "IT" : {
      name : "Our IT Support Services",
      one : "🛠 24/7 System Monitoring & Troubleshooting",
      two : "🔄 Software Updates & Security Patching",
      three : "🔒 Data Backup & Disaster Recovery"
    },
    "Devops" : {
      name : "Our DevOps Services",
      one : "⚙ CI/CD Pipeline Implementation – Automate build & deployment processes.",
      two : "📦 Containerization & Microservices – Improve scalability with Docker & Kubernetes.",
      three : "🚀 Cloud Infrastructure Management – Secure & optimize cloud-based operations."
    },
  }

  return (
    <section className="about-service7-area">
      <div className="custom-container">
        <div className="about-service7-body d-flex align-items-center">
          <div className="about-service7-content">
            <div className="section-header">
              {/* <h5 className="section-subtitle"></h5> */}
              <h1 className="section-title">
              {services[type].name}</h1>
              {/* <p>Development is the cornerstone of innovation.</p> */}
            </div>
            <p>
             {services[type].one}
            </p>
            <p>
            {services[type].two}
            </p>
            <p>
            {services[type].three}  
            </p>
          </div>
          <div className="about-service7-img-box d-flex">
            <img src={serviceDetails2} alt="Service Details" />
            <img src={serviceDetails3} alt="Service Details" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutService7Area;