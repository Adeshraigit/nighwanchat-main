import React,{ useEffect, useRef, useState } from 'react';
import bgShape5 from '../../assets/imgs/bg-shape-5.svg'; // Adjust the path to your assets
import bgShape6 from '../../assets/imgs/bg-shape-6.svg';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS 
import HCaptcha from '@hcaptcha/react-hcaptcha';

// Enhanced ErrorBoundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h1>Oops, something went wrong!</h1>
          <p>{this.state.error?.message || "An unexpected error occurred."}</p>
          <button onClick={this.handleReload}>Reload Page</button>
        </div>
      );
    }

    return this.props.children;
  }
}


const HeroSection = () => {

  const captchaRef = useRef(null);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    country: "",
    message: "",
    privacy_policy_accept: false,
  });
  const [errors, setErrors] = useState({});
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [isHCaptchaLoaded, setIsHCaptchaLoaded] = useState(false);
  const [hcaptchaError, setHCaptchaError] = useState(null);

  // hCaptcha Callbacks
  const handleLoad = () => {
    console.log("hCaptcha loaded successfully");
    setIsHCaptchaLoaded(true);
    setHCaptchaError(null);
  };

  const handleVerify = (token) => {
    console.log("hCaptcha verified, token:", token);
    setCaptchaToken(token);
  };

  const handleExpire = () => {
    console.log("hCaptcha expired");
    setCaptchaToken(null);
  };

  const handleError = (error) => {
    console.error("hCaptcha error:", error);
    setHCaptchaError("Failed to load hCaptcha. Please try again later.");
  };

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Form Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.first_name.trim()) {
      newErrors.first_name = "First Name is required.";
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone_number.trim() || !/^\d{10}$/.test(formData.phone_number)) {
      newErrors.phone_number = "Please enter a valid 10-digit phone number.";
    }
    if (!formData.privacy_policy_accept) {
      newErrors.privacy_policy_accept = "You must agree to the terms and conditions.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit Form Data
  const submitFormData = async (formData, captchaToken) => {
    try {
      // Optionally, you can verify the captchaToken on your backend here
      // before proceeding with the form submission.

      // Build your request body without including the captcha token
      const requestBody = {
        isActive: true,
        createdOn: new Date().toISOString(),
        createdBy: "User",
        updatedBy: "User",
        updatedOn: new Date().toISOString(),
        enquiryFormId: 0,
        name: `${formData.first_name}`,
        mobileNo: formData.phone_number,
        emailId: formData.email,
        serviceTypeId: 0,
        serviceType: window.location.href,
        sourceId: 0,
        source: "NTPL Website Contact Form",
        message: formData.message,
        enquiryFormIds: [0],
      };

      const response = await fetch("https://jobportalapi.leanxpert.in/api/EnquiryForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) throw new Error("Failed to submit form.");

      setAlertMessage("Form submitted successfully!");
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        country: "",
        message: "",
        privacy_policy_accept: false,
      });
      if (captchaRef.current) {
        captchaRef.current.resetCaptcha();
      }
    } catch (error) {
      setAlertMessage("Failed to submit form. Please try again.");
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };


  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaToken) {
      setAlertMessage("Please complete the captcha.");
      return;
    }
    if (validateForm()) {
      setIsLoading(true);
      submitFormData(formData, captchaToken);
    } else {
      setAlertMessage("Please correct the errors before submitting.");
    }
  };

  // Cleanup on Unmount
  useEffect(() => {
    return () => {
      if (captchaRef.current) {
        captchaRef.current.resetCaptcha();
      }
    };
  }, []);

  return (
    <ErrorBoundary>
    <section className="hero-section-wrap hero-home2">
      <div className="hero-section-content-wrap">
        <img className="bg-shape slide-left" src={bgShape6} alt="Shape" />
        <img className="bg-shape2 slide-right" src={bgShape5} alt="Shape" />
        <div className="custom-container">
          <div className="hero-section-content text-center">
            <h5 className="section-subtitle">ACCELERATED GROWTH</h5>
            <h1 className="section-title fade-in">
              Empowering business with modern rules and insights
            </h1>
            <p>
              Welcome to Nighwan business consulting and solutions, where success is not just a
              destination.
            </p>
            <a href="#" className="theme-btn2">
              Let’s talk to our team <i className="iconoir-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="custom-container">
        <div className="hero-contact-form-wrap">
        <div className="contact-form-wrap">
            {/* <div className="contact-form-body">
              <h5 className="section-subtitle">Contact</h5>
              <h1 className="section-title">Let's get in touch</h1>
              <p>
                You can reach us anytime via{' '}
                <a href="mailto:contact@nighwantech.com">contact@nighwantech.com</a>
              </p>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="input-row">
                  <div className="input-group">
                    <input
                      id="first_name"
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      value={formData.first_name}
                      onChange={handleChange}
                    />
                    {errors.first_name && <span className="error-message">{errors.first_name}</span>}
                  </div>
                  <div className="input-group">
                    <input
                      id="last_name"
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      value={formData.last_name}
                      onChange={handleChange}
                    />
                    {errors.last_name && <span className="error-message">{errors.last_name}</span>}
                  </div>
                </div>
                <div className="input-row">
                  <div className="input-group">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                </div>
                <div className="input-row">
                  <div className="input-group phone-number">
                    <select className="number-prefix">
                      <option value="IN">IN</option>
                    </select>
                    <label htmlFor="phone_number">Phone Number</label>
                    {errors.phone_number && <span className="error-message">{errors.phone_number}</span>}
                    <input
                      id="phone_number"
                      type="tel"
                      name="phone_number"
                      placeholder="Your Number"
                      value={formData.phone_number}
                      onChange={handleChange}
                    />
                    
                  </div>
                  <div className="input-group">
                    <input
                      id="homeland"
                      type="text"
                      name="country"
                      placeholder="Your Country"
                      value={formData.country}
                      onChange={handleChange}
                    />
                    {errors.country && <span className="error-message">{errors.country}</span>}
                  </div>
                </div>
                <div className="input-row">
                  <div className="input-group">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Leave us a message...."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                  </div>
                </div>
                <div className="input-row">
                  <div className="input-group input-checkbox">
                    <input
                      type="checkbox"
                      id="privacy_policy_accept"
                      name="privacy_policy_accept"
                      checked={formData.privacy_policy_accept}
                      onChange={handleChange}
                    />
                    <label htmlFor="privacy_policy_accept">
                      You agree to our <a href="#">terms and conditions.</a>
                    </label>
                    {errors.privacy_policy_accept && <span className="error-message">{errors.privacy_policy_accept}</span>}
                  </div>
                </div>
                <div className="input-row">
                  <div className="input-group">
                    <button id="submit" className="theme-btn" type="submit">
                      Get Started
                    </button>
                  </div>
                </div>
                <div className="input-row">
                  <div className="input-group alert-notification">
                    <div id="alert-message" className="alert-msg">{alertMessage}</div>
                  </div>
                </div>
              </form>
            </div> */}
            <div className="contact-form-body">
                <h5 className="section-subtitle">Contact</h5>
                <h1 className="section-title">Let's get in touch</h1>
                <p>
                  You can reach us anytime via{' '}
                  <a href="mailto:contact@nighwantech.com">contact@nighwantech.com</a>
                </p>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="input-row">
                    <div className="input-group">
                      <input
                        id="first_name"
                        type="text"
                        name="first_name"
                        placeholder={errors.first_name ? " Name is required." : "Your Name"}
                        value={formData.first_name}
                        onChange={handleChange}
                        className={errors.first_name ? "error-input" : ""}
                      />
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder={errors.email ? "Please enter a valid email address." : "Your Email"}
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "error-input" : ""}
                      />
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group phone-number">
                      <select className="number-prefix">
                        <option value="IN">IN</option>
                      </select>
                      <label htmlFor="phone_number"></label>
                      <input
                        id="phone_number"
                        type="tel"
                        name="phone_number"
                        placeholder={errors.phone_number ? "Please enter a valid 10-digit phone number." : "Your Number"}
                        value={formData.phone_number}
                        onChange={handleChange}
                        className={errors.phone_number ? "error-input" : ""}
                      />
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Leave us a message...."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      {errors.message && (
                        <span className="error-message">{errors.message}</span>
                      )}
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group input-checkbox">
                      <input
                        type="checkbox"
                        id="privacy_policy_accept"
                        name="privacy_policy_accept"
                        checked={formData.privacy_policy_accept}
                        onChange={handleChange}
                      />
                      <label htmlFor="privacy_policy_accept">
                        You agree to our <a href="#">terms and conditions.</a>
                      </label>
                      {errors.privacy_policy_accept && (
                        <span className="error-message">{errors.privacy_policy_accept}</span>
                      )}
                    </div>
                  </div>
                  <div className="input-row">
                    {hcaptchaError ? (
                      <div className="error-message">{hcaptchaError}</div>
                    ) : (
                      <HCaptcha
                        ref={captchaRef}
                        sitekey="caca3a8a-c728-4fcc-841c-795674a87c92"
                        onLoad={handleLoad}
                        onVerify={handleVerify}
                        onExpire={handleExpire}
                        onError={handleError}
                      />
                    )}
                  </div>
                  <div className="input-row">
                    <div className="input-group">
                      <button id="submit" className="theme-btn" type="submit" disabled={isLoading}>
                        {isLoading ? "Submitting..." : "Get Started"}
                      </button>
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group alert-notification">
                      <div id="alert-message" className="alert-msg">{alertMessage}</div>
                    </div>
                  </div>
                </form>
              </div>
          </div>
        </div>
      </div>
    </section>
    </ErrorBoundary>
  );
};

export default HeroSection;