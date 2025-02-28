import React from 'react';
import blogDetailsImg from '../assets/imgs/blog-details.jpg'; // Adjust the path to your image
import blogDetailsImg2 from '../assets/imgs/blog-details-2.jpg'; // Adjust the path to your image
import testimonialImg from '../assets/imgs/testimonial-1.jpg'; // Adjust the path to your image
import '../assets/css/style.css'; // Import your custom CSS
import '../assets/css/responsive.css'; // Import your responsive CSS
import newsImg6 from '../assets/imgs/news-6.jpg'; // Adjust the path to your image
import newsImg7 from '../assets/imgs/news-7.jpg'; // Adjust the path to your image  
import { Helmet } from 'react-helmet';  
import { useParams } from 'react-router-dom';

const BlogDetailPage = () => {

  const params = useParams();
  const { type } = params;  

  const Blogs = {
    "aiml": {
      title: "How AI and Lean Manufacturing Are Revolutionizing the Indian Industry",
      "imgHero": blogDetailsImg,
      "p1": "Discover how Artificial Intelligence (AI) and Lean Manufacturing are reshaping the Indian industry by boosting efficiency, reducing costs, and improving product quality. Learn about key AI-driven innovations like predictive maintenance, smart automation, and supply chain optimization that are transforming manufacturing processes. Stay ahead of the competition with cutting-edge strategies!" ,
      "p2": "The Indian manufacturing sector is undergoing a massive transformation with the integration of Artificial Intelligence (AI) and Lean Manufacturing Techniques. These innovations are not only increasing efficiency but also reducing costs and enhancing product quality.",
      "p3": "What is Lean Manufacturing?",
      "p4": "Lean Manufacturing is a systematic approach that focuses on minimizing waste, improving productivity, and optimizing processes. It involves tools like Just-in-Time (JIT), Kaizen, and Six Sigma to enhance operational efficiency.",
      "imgMain": blogDetailsImg2,
      "p5": "Role of AI in Lean Manufacturing",
      "p6": "AI plays a crucial role in modern manufacturing by enabling:",
      "p7": "- Predictive Maintenance – Preventing machine failures before they occur.",
      "p8": "- Smart Automation – Reducing human intervention and increasing precision.",
      "p9": "- Supply Chain Optimization – Ensuring a seamless flow of raw materials and finished goods.",
      "p10": "- Data-Driven Decision Making – Leveraging AI-driven insights for better production planning.",
      "p11": "Benefits of AI and Lean Manufacturing in India",
      "p12": "- Cost Reduction: AI helps identify inefficiencies, leading to lower operational costs.",
      "p13": "- Enhanced Productivity: AI-driven automation speeds up production processes.",
      "p14": "- Better Quality Control: AI algorithms detect defects in real-time.",
      "p15": "- Sustainability: Lean practices reduce waste, supporting environmental goals.",
      "p16": "Adopting AI and Lean Manufacturing is no longer an option but a necessity for Indian businesses to remain competitive. Nighwan Technology is at the forefront of this revolution, providing cutting-edge solutions that help manufacturers embrace the future.", 
    },
    "erp": {
      title: "Why Your Business Needs an Integrated ERP System in 2025",
      "imgHero": blogDetailsImg,
      "p1": "Is your business ready for 2025? Discover why an integrated ERP system is essential for streamlining operations, improving efficiency, and gaining a competitive edge. Explore the latest trends in AI-powered automation, cloud-based ERP, and data security to future-proof your business. Learn how Nighwan Technology can help!" ,
      "p2": "With digital transformation accelerating across industries, businesses must adopt Enterprise Resource Planning (ERP) systems to streamline operations, improve efficiency, and gain a competitive edge.",
      "p3": "What is an ERP System?",
      "p4": "An ERP system integrates various business processes like finance, HR, supply chain, and customer relationship management (CRM) into a single platform, enabling better coordination and decision-making.",
      "imgMain": blogDetailsImg2,
      "p5": "Key Benefits of an Integrated ERP System",
      "p6": "AI plays a crucial role in modern manufacturing by enabling:",
      "p7": "- Real-Time Data Access: Make informed decisions with up-to-date insights.",
      "p8": "- Improved Efficiency: Automates repetitive tasks, saving time and effort.",
      "p9": "- Scalability: Supports business growth by adapting to evolving needs.",
      "p10": "- Regulatory Compliance: Ensures adherence to legal and financial regulations.",
      "p11": "Why Businesses Need ERP in 2025",
      "p12": "- AI-Powered Automation: AI-driven ERP solutions enhance productivity.",
      "p13": "- Cloud-Based Systems: Accessible from anywhere, ensuring business continuity.",
      "p14": "- Data Security: Protects sensitive business information from cyber threats.",
      "p15": "- Customizable Solutions: Tailored to meet the unique needs of different industries.",
      "p16": "Nighwan Technology’s advanced ERP solutions help businesses integrate processes, optimize workflows, and drive growth. Contact us today to upgrade your operations!", 
    },
    "hrms": {
      title: "Transforming Workforce Management with AI-Powered HRMS Solutions",
      "imgHero": blogDetailsImg,
      "p1": "HR management is evolving with AI-powered HRMS solutions! Learn how automated payroll, smart recruitment tools, real-time attendance tracking, and AI-driven performance analytics are transforming workforce management. Discover why businesses need AI HRMS in 2025 and how Nighwan Technology can help enhance your HR operations." ,
      "p2": "In the age of digital transformation, businesses are turning to AI-powered Human Resource Management Systems (HRMS) to streamline workforce management, improve employee engagement, and enhance HR efficiency.",
      "p3": "What is an AI-Powered HRMS?",
      "p4": "An HRMS is an all-in-one platform that automates HR functions such as payroll, recruitment, attendance tracking, and performance management using Artificial Intelligence.",
      "imgMain": blogDetailsImg2,
      "p5": "Benefits of AI-Driven HRMS",
      "p6": "AI plays a crucial role in modern manufacturing by enabling:",
      "p7": "- Automated Payroll Processing: Reduces errors and ensures timely salary disbursement.",
      "p8": "- Smart Recruitment Tools: AI filters top talent, reducing hiring time.",
      "p9": "- Real-Time Attendance Tracking: Uses biometric and facial recognition technology.",
      "p10": "- Performance Analytics: AI assesses employee performance and suggests improvements.",
      "p11": "Why Your Business Needs HRMS in 2025",
      "p12": "- Remote Workforce Management: Essential for hybrid work environments.",
      "p13": "- Data Security & Compliance: Ensures adherence to labor laws and data protection regulations.",
      "p14": "- Employee Engagement & Retention: AI-driven insights enhance job satisfaction.",
      "p15": "- Customizable Solutions: Tailored to meet the unique needs of different industries.",
      "p16": "Nighwan Technology’s AI-powered HRMS solutions help businesses manage their workforce more effectively, boosting productivity and employee satisfaction. Upgrade your HR management with us today!", 
    }
  }

  return (
    <div>
      <Helmet>
        <title>BlogDetails - Nighwan Technology Pvt. Ltd.</title>
         <meta name="description" content="This is BlogDetails page" />
        <meta name="robots" content="index, follow" />
        </Helmet>
      {/* Blog Header Section */}
      <section className="blog-details-header-area">
        <div className="custom-container">
          <div className="blog-details-header-content-body d-flex align-items-center">
            <div className="section-header">
              <h5 className="section-subtitle">Blog</h5>
              <h1 className="section-title fade-in">{Blogs[`${type}`].title}</h1>
              {/* <p>We launches tap to pay on smartphone for domestic and international business</p> */}
            </div>
            <div className="img-box">
              <img src={Blogs[`${type}`].imgHero} alt="Blog" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="blog-details-area">
        <div className="custom-container">
          <div className="blog-details-body">
            <div className="blog-details-inner">
              <div className="blog-details-introduction">
                <h2>Blurb</h2>
                <p>{Blogs[`${type}`].p1}</p>
                <h2>Introduction</h2>
                <p>{Blogs[`${type}`].p2}</p>
                <h3>{Blogs[`${type}`].p3}</h3>
                <p>{Blogs[`${type}`].p4}</p>
                <img src={Blogs[`${type}`].imgMain} alt="Blog details" />
                <h3>{Blogs[`${type}`].p5}</h3>
                <p>{Blogs[`${type}`].p6}</p>
                <ul>
                  <li>
                   {Blogs[`${type}`].p7}  
                  </li>
                  <li>
                   {Blogs[`${type}`].p8}  
                  </li>
                  <li>
                    {Blogs[`${type}`].p9}
                  </li>
                  <li>
                    {Blogs[`${type}`].p10}  
                  </li>
                </ul>
                <h3>{Blogs[`${type}`].p11}</h3>
                <ul>
                  <li>
                    {Blogs[`${type}`].p12}
                  </li>
                  <li>
                    {Blogs[`${type}`].p13}
                  </li>
                  <li>
                    {Blogs[`${type}`].p14 }
                  </li>
                  <li>
                    {Blogs[`${type}`].p15}
                  </li>
                </ul>
                <h3>Conclusion</h3>
                <p>{Blogs[`${type}`].p16}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news-area">
      <div className="custom-container">
        {/* Section Header */}
        <div className="section-header d-flex align-items-end justify-content-between">
          <div className="left">
            <h5 className="section-subtitle">OUR LATEST BLOGS</h5>
            <h1 className="section-title">Read more blogs of our company</h1>
            <p>Are you busy reading out IT fires instead of focusing on your core business</p>
          </div>
        </div>

        {/* Sticky News Section */}
        <div className="sticky-news d-flex card-h1">
          <div className="news-img-box">
            <img src={newsImg6} alt="News" />
          </div>
          <div className="news-content">
            <h5 className="section-subtitle">MOBILE DEVELOPMENT</h5>
            <h1 className="section-title">
              <a href="/blog-detail">OpenAI launches new alignment division to tackle risks of superintelligent AI</a>
            </h1>
            <p>The makers of AI have announced the company will be dedicating 20% of its compute processing power over the next four years</p>
            <ul>
              <li>
                <i className="las la-check"></i> Collaboration Tools
              </li>
              <li>
                <i className="las la-check"></i> Smart Reminders
              </li>
            </ul>
            <a href="/blogs/aiml" className="theme-btn">
              <i className="icon-right iconoir-arrow-up-right"></i>
            </a>
          </div>
        </div>

        {/* News Items Section */}
        <div className="news-items d-flex align-items-start">
          {/* News Item 1 */}
          <div className="news-item card-h1">
            <div className="news-img-box">
              <img src={newsImg6} alt="News" />
            </div>
            <div className="news-item-body">
              <h5 className="section-subtitle">WEB DEVELOPMENT</h5>
              <h1 className="section-title">
                <a href="/blog-detail">New EU battery law could mean EOL for low-cost smartphones</a>
              </h1>
              <p>Apple might have wriggle room for the iPhone when it comes to new EU laws to make smartphone batteries user replaceable</p>
              <ul>
                <li>
                  <i className="las la-check"></i> Collaboration Tools
                </li>
                <li>
                  <i className="las la-check"></i> Smart Reminders
                </li>
                <li>
                  <i className="las la-check"></i> Requirement
                </li>
                <li>
                  <i className="las la-check"></i> Task Management
                </li>
              </ul>
              <a href="/blogs/erp" className="theme-btn">
                <i className="icon-right iconoir-arrow-up-right"></i>
              </a>
            </div>
          </div>

          {/* News Item 2 */}
          <div className="news-item card-h1">
            <div className="news-img-box">
              <img src={newsImg7} alt="News" />
            </div>
            <div className="news-item-body">
              <h5 className="section-subtitle">CLOUD COMPUTING</h5>
              <h1 className="section-title">
                <a href="/blog-detail">FTC reported to be investigating OpenAI for consumer protection violations</a>
              </h1>
              <p>OpenAI is reportedly under additional legal scrutiny, as the US Federal Trade asks the company to give detailed explanations</p>
              <ul>
                <li>
                  <i className="las la-check"></i> Collaboration Tools
                </li>
                <li>
                  <i className="las la-check"></i> Smart Reminders
                </li>
                <li>
                  <i className="las la-check"></i> Requirement
                </li>
              </ul>
              <a href="/blogs/hrms" className="theme-btn">
                <i className="icon-right iconoir-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default BlogDetailPage;