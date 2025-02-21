// import React, { useState } from "react";
// import hwdIcon1 from "../../assets/imgs/hwd-icon-1.svg";
// import hwdIcon2 from "../../assets/imgs/hwd-icon-2.svg";
// import hwdIcon3 from "../../assets/imgs/hwd-icon-3.svg";
// import hwdIcon4 from "../../assets/imgs/hwd-icon-4.svg";
// import hwdIcon5 from "../../assets/imgs/hwd-icon-5.svg";
// import hwdIcon6 from "../../assets/imgs/hwd-icon-6.svg";
// import about2Tab1 from "../../assets/imgs/about2-tab-1.png";
// import about2Tab2 from "../../assets/imgs/about2-tab-2.png";
// import about2Tab3 from "../../assets/imgs/about2-tab-3.png";
// import about2Tab4 from "../../assets/imgs/about2-tab-4.png";
// import about2Tab5 from "../../assets/imgs/about2-tab-5.png";
// import "../../assets/css/style.css";
// import "../../assets/css/responsive.css";

// const AboutArea = () => {
//   const [activeTab, setActiveTab] = useState("business_strategy");

//   const handleTabClick = (tabId) => {
//     setActiveTab(tabId);
//   };

//   return (
//     <section className="about2-area">
//       <div className="custom-container">
//         <div className="about2-inner-box">
//           <div className="about2-header">
//             <h5 className="section-subtitle">SPECIALIZATION</h5>
//             <h1 className="section-title">What Makes Nighwan Tech Unique?</h1>
//             <div>
//               Nighwan Technology Pvt. Ltd. is redefining lean manufacturing technology by integrating AI, ML, and data analytics into the core of its solutions. Unlike traditional ERP or manufacturing management systems, Nighwan Tech focuses on real-time data-driven decision-making, waste reduction, and process optimization tailored for the Indian market.
//             </div>
//           </div>

//           {/* Tabs Navigation */}
//           <ul className="nav nav-tabs about2-tabs" role="tablist">
//             <li className="nav-item">
//               <button
//                 className={`nav-link ${activeTab === "business_strategy" ? "active" : ""}`}
//                 onClick={() => handleTabClick("business_strategy")}
//               >
//                 <span className="icon">
//                   <img src={hwdIcon1} alt="Icon" />
//                 </span>
//                 AI Optimization
//               </button>
//             </li>
//             <li className="nav-item">
//               <button
//                 className={`nav-link ${activeTab === "market_analysis" ? "active" : ""}`}
//                 onClick={() => handleTabClick("market_analysis")}
//               >
//                 <span className="icon">
//                   <img src={hwdIcon4} alt="Icon" />
//                 </span>
//                 Demand Forecasting
//               </button>
//             </li>
//             <li className="nav-item">
//               <button
//                 className={`nav-link ${activeTab === "process_optimization" ? "active" : ""}`}
//                 onClick={() => handleTabClick("process_optimization")}
//               >
//                 <span className="icon">
//                   <img src={hwdIcon6} alt="Icon" />
//                 </span>
//                 Lean E-Commerce
//               </button>
//             </li>
//             <li className="nav-item">
//               <button
//                 className={`nav-link ${activeTab === "performance_improvement" ? "active" : ""}`}
//                 onClick={() => handleTabClick("performance_improvement")}
//               >
//                 <span className="icon">
//                   <img src={hwdIcon2} alt="Icon" />
//                 </span>
//                 Predictive Maintenance
//               </button>
//             </li>
//             <li className="nav-item">
//               <button
//                 className={`nav-link ${activeTab === "real_time_analytics" ? "active" : ""}`}
//                 onClick={() => handleTabClick("real_time_analytics")}
//               >
//                 <span className="icon">
//                   <img src={hwdIcon3} alt="Icon" />
//                 </span>
//                 Real-Time Analytics
//               </button>
//             </li>
//             <li className="nav-item">
//               <button
//                 className={`nav-link ${activeTab === "custom_erp" ? "active" : ""}`}
//                 onClick={() => handleTabClick("custom_erp")}
//               >
//                 <span className="icon">
//                   <img src={hwdIcon5} alt="Icon" />
//                 </span>
//                 Custom ERP
//               </button>
//             </li>
//           </ul>

//           {/* Tabs Content */}
//           <div className="tab-content about2-tab-content">
//             {activeTab === "business_strategy" && (
//               <div className="tab-pane fade show active">
//                 <div className="about2-tab-content-body d-flex gap-24">
//                   <div className="img-box">
//                     <img src={about2Tab1} alt="About" />
//                   </div>
//                   <div className="content-box card-h">
//                     <h1>
//                       <span className="icon">
//                         <img src={hwdIcon1} alt="Icon" />
//                       </span>
//                       Elevating your business strategy for success
//                     </h1>
//                     <div className="content">
//                       <p>
//                         Unlike traditional lean tools that rely on manual data entry, Nighwan Tech leverages machine learning to analyze production cycles, efficiency bottlenecks, and resource utilization.
//                       </p>
//                       <p>Automated alerts for excess material usage, process delays, and machine downtime.</p>
//                       <p>Advantage: Reduces waste (Muda) and enhances productivity by predicting inefficiencies before they occur.</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === "market_analysis" && (
//               <div className="tab-pane fade show active">
//                 <div className="about2-tab-content-body d-flex gap-24">
//                   <div className="img-box">
//                     <img src={about2Tab2} alt="About" />
//                   </div>
//                   <div className="content-box card-h">
//                     <h1>
//                       <span className="icon">
//                         <img src={hwdIcon4} alt="Icon" />
//                       </span>
//                       Unveiling the comprehensive market analysis
//                     </h1>
//                     <div className="content">
//                       <p>
//                         Our Market Analysis services provide you with the critical insights needed to make informed decisions.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === "process_optimization" && (
//               <div className="tab-pane fade show active">
//                 <div className="about2-tab-content-body d-flex gap-24">
//                   <div className="img-box">
//                     <img src={about2Tab3} alt="About" />
//                   </div>
//                   <div className="content-box card-h">
//                     <h1>
//                       <span className="icon">
//                         <img src={hwdIcon6} alt="Icon" />
//                       </span>
//                       Streamline your operations for maximum efficiency
//                     </h1>
//                     <div className="content">
//                       <p>Optimize business processes with AI-powered solutions.</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutArea;

import React, { useState } from "react";
import hwdIcon1 from "../../assets/imgs/hwd-icon-1.svg";
import hwdIcon2 from "../../assets/imgs/hwd-icon-2.svg";
import hwdIcon3 from "../../assets/imgs/hwd-icon-3.svg";
import hwdIcon4 from "../../assets/imgs/hwd-icon-4.svg";
import hwdIcon5 from "../../assets/imgs/hwd-icon-5.svg";
import hwdIcon6 from "../../assets/imgs/hwd-icon-6.svg";
import about2Tab1 from "../../assets/imgs/about2-tab-1.png";
import about2Tab2 from "../../assets/imgs/about2-tab-2.png";
import about2Tab3 from "../../assets/imgs/about2-tab-3.png";
import about2Tab4 from "../../assets/imgs/about2-tab-4.png";
import about2Tab5 from "../../assets/imgs/about2-tab-5.png";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const AboutArea = () => {
  const [activeTab, setActiveTab] = useState("business_strategy");

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
            <div>
              Nighwan Technology Pvt. Ltd. is redefining lean manufacturing technology by integrating AI, ML, and data analytics into the core of its solutions. Unlike traditional ERP or manufacturing management systems, Nighwan Tech focuses on real-time data-driven decision-making, waste reduction, and process optimization tailored for the Indian market.
            </div>
          </div>

          {/* Tabs Navigation */}
          <ul className="nav nav-tabs about2-tabs" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "business_strategy" ? "active" : ""}`}
                onClick={() => handleTabClick("business_strategy")}
              >
                <span className="icon">
                  <img src={hwdIcon1} alt="Icon" />
                </span>
                AI Optimization
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "market_analysis" ? "active" : ""}`}
                onClick={() => handleTabClick("market_analysis")}
              >
                <span className="icon">
                  <img src={hwdIcon4} alt="Icon" />
                </span>
                Demand Forecasting
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "process_optimization" ? "active" : ""}`}
                onClick={() => handleTabClick("process_optimization")}
              >
                <span className="icon">
                  <img src={hwdIcon6} alt="Icon" />
                </span>
                Lean E-Commerce
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "performance_improvement" ? "active" : ""}`}
                onClick={() => handleTabClick("performance_improvement")}
              >
                <span className="icon">
                  <img src={hwdIcon2} alt="Icon" />
                </span>
                Predictive Maintenance
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "real_time_analytics" ? "active" : ""}`}
                onClick={() => handleTabClick("real_time_analytics")}
              >
                <span className="icon">
                  <img src={hwdIcon3} alt="Icon" />
                </span>
                Real-Time Analytics
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "custom_erp" ? "active" : ""}`}
                onClick={() => handleTabClick("custom_erp")}
              >
                <span className="icon">
                  <img src={hwdIcon5} alt="Icon" />
                </span>
                Custom ERP
              </button>
            </li>
          </ul>

          {/* Tabs Content */}
          <div className="tab-content about2-tab-content">
            {activeTab === "business_strategy" && (
              <div className="tab-pane fade show active">
                <div className="about2-tab-content-body d-flex gap-24">
                  <div className="img-box">
                    <img src={about2Tab1} alt="About" />
                  </div>
                  <div className="content-box card-h">
                    <h1>
                      <span className="icon">
                        <img src={hwdIcon1} alt="Icon" />
                      </span>
                      Elevating your business strategy for success
                    </h1>
                    <div className="content">
                      <p>
                        Unlike traditional lean tools that rely on manual data entry, Nighwan Tech leverages machine learning to analyze production cycles, efficiency bottlenecks, and resource utilization.
                      </p>
                      <p>Automated alerts for excess material usage, process delays, and machine downtime.</p>
                      <p>Advantage: Reduces waste (Muda) and enhances productivity by predicting inefficiencies before they occur.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "market_analysis" && (
              <div className="tab-pane fade show active">
                <div className="about2-tab-content-body d-flex gap-24">
                  <div className="img-box">
                    <img src={about2Tab2} alt="About" />
                  </div>
                  <div className="content-box card-h">
                    <h1>
                      <span className="icon">
                        <img src={hwdIcon4} alt="Icon" />
                      </span>
                      Unveiling the comprehensive market analysis
                    </h1>
                    <div className="content">
                      <p>
                        Our Market Analysis services provide you with the critical insights needed to make informed decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "process_optimization" && (
              <div className="tab-pane fade show active">
                <div className="about2-tab-content-body d-flex gap-24">
                  <div className="img-box">
                    <img src={about2Tab3} alt="About" />
                  </div>
                  <div className="content-box card-h">
                    <h1>
                      <span className="icon">
                        <img src={hwdIcon6} alt="Icon" />
                      </span>
                      Streamline your operations for maximum efficiency
                    </h1>
                    <div className="content">
                      <p>Optimize business processes with AI-powered solutions.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "performance_improvement" && (
              <div className="tab-pane fade show active">
                <div className="about2-tab-content-body d-flex gap-24">
                  <div className="img-box">
                    <img src={about2Tab4} alt="About" />
                  </div>
                  <div className="content-box card-h">
                    <h1>
                      <span className="icon">
                        <img src={hwdIcon2} alt="Icon" />
                      </span>
                      Enhancing performance through predictive maintenance
                    </h1>
                    <div className="content">
                      <p>
                        Predictive maintenance helps in identifying potential equipment failures before they occur, reducing downtime and maintenance costs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "real_time_analytics" && (
              <div className="tab-pane fade show active">
                <div className="about2-tab-content-body d-flex gap-24">
                  <div className="img-box">
                    <img src={about2Tab5} alt="About" />
                  </div>
                  <div className="content-box card-h">
                    <h1>
                      <span className="icon">
                        <img src={hwdIcon3} alt="Icon" />
                      </span>
                      Real-time analytics for data-driven decisions
                    </h1>
                    <div className="content">
                      <p>
                        Real-time analytics provides immediate insights into your operations, enabling quick and informed decision-making.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "custom_erp" && (
              <div className="tab-pane fade show active">
                <div className="about2-tab-content-body d-flex gap-24">
                  <div className="img-box">
                    <img src={about2Tab1} alt="About" />
                  </div>
                  <div className="content-box card-h">
                    <h1>
                      <span className="icon">
                        <img src={hwdIcon5} alt="Icon" />
                      </span>
                      Custom ERP solutions tailored to your needs
                    </h1>
                    <div className="content">
                      <p>
                        Our custom ERP solutions are designed to meet the unique requirements of your business, ensuring seamless integration and optimal performance.
                      </p>
                    </div>
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

