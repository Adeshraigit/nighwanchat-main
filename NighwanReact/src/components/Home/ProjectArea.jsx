// export default ProjectArea; 
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import project1 from '../../assets/imgs/project-1.png';
import project2 from '../../assets/imgs/project-2.png';
// import project3 from '../../assets/imgs/project-3.png';
import project4 from '../../assets/imgs/project-4.png';
import project5 from '../../assets/imgs/project-5-new.png';
// import project6 from '../../assets/imgs/project-6-new.png';

const projects = [
  { img: project1, title: "ERP System" },
  { img: project2, title: "AI-Powered Sales Forecasting" },
  { img: project1, title: "B2B E-Commerce Platform", className: "black-text" },
  { img: project4, title: "IoT-Enabled Predictive Maintenance" },
  { img: project5, title: "HRMS with Job Portal" },
  { img: project4, title: "Transport Management System", className: "black-text" },
];

const ProjectArea = () => {
  return (
    <section className="project-area">
      <div className="custom-container">
        <div className="custom-row justify-content-between">
          <div className="project-left-details">
            <h5 className="section-subtitle">PROJECTS</h5>
            <h1 className="section-title">
              Showcase of
              <br />
              our recognized
              <br />
              work
            </h1>
            <p>
              Our collaborative approach ensures that we truly understand our clients' unique
              requirements and challenges.
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

          <div className="project-right-slider">
            <div className="project-right-slider-inner">
              <Swiper
                modules={[Pagination]}
                pagination={{
                  clickable: true,
                  el: '.swiper-pagination',
                }}
                loop={false}
                spaceBetween={30}
                slidesPerView={1} // Initially 1 slide visible
                breakpoints={{
                  768: { slidesPerView: 3 }, // Shows 3 slides at a time on larger screens
                }}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <div className="project-item">
                      <div className="project-item-inner">
                        <h2 className={project.className || ''}>
                          <a href="/products">
                            {project.title}
                          </a>
                        </h2>
                        <img src={project.img} alt={`Project ${index + 1}`} />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Pagination (Sliding Bar) */}
              <div className="swiper-pagination" style={{ marginTop: '20px' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS */}
      <style>
        {`
          .black-text {
            color: black !important;
          }

          .swiper-pagination {
            margin-top: 20px;
          }
        `}
      </style>
    </section>
  );
};

export default ProjectArea;