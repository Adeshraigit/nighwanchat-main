import React, { useEffect, useState } from 'react';
import '../../assets/css/style.css';
import '../../assets/css/responsive.css';

const CareerArea = () => {
  const [jobListings, setJobListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://hrmsapi.leanxpert.in/api/JobPost'); // Replace with your actual API URL
        const data = await response.json();
        const filteredJobs = data.filter(job => job.isActive);
        setJobListings(filteredJobs);
      } catch (err) {
        setError('Failed to fetch job listings');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="career-area">
      <div className="custom-container">
        <div className="career-body d-flex">
          <div className="career-left">
            <h5 className="section-subtitle">OPENING IN OUR COMPANY</h5>
            <h1 className="section-title">
              Job openings
              <br />
              and career
              <br />
              opportunities
            </h1>
          </div>

          <div className="career-lists">
            {loading && <p>Loading job listings...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && !error && jobListings.length === 0 && <p>No job openings available.</p>}
            {!loading &&
              !error &&
              jobListings.map((job) => (
                <div key={job.jobPostId} className="career-box">
                  <span className="location">{job.jobLocationName}</span>
                  <h2>
                    {job.designationName} - <span>{job.departmentName}</span>
                  </h2>
                  <p>Minimum Experience: {job.minimumExperience}</p>
                  <div className="career-time">
                    <span>
                      <i className="las la-clock"></i> {job.jobtypeName}
                    </span>
                    <span>
                      <i className="las la-dollar-sign"></i> {job.salaryAmount}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerArea;
