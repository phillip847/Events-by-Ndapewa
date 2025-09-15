// components/CTA.jsx
import React, { useState } from 'react';

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with your backend or email service
    alert('Thank you for your inquiry! We\'ll get back to you soon.');
  };

  return (
    <section className="py-5 position-relative" style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{backgroundColor: 'rgba(255,255,255,0.9)'}}></div>
      <div className="container-fluid px-3 position-relative" style={{zIndex: 2}}>
        <div className="row align-items-center py-5">
          {/* Left Side - Content */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="pe-lg-4">
              {/* Section Title */}
              <div className="mb-5">
                <h2 className="fw-light mb-3 text-center text-lg-start" style={{
                  fontSize: 'clamp(1.8rem, 5vw, 3rem)',
                  color: '#2c3e50',
                  lineHeight: '1.2'
                }}>
                  Ready to Plan Your
                  <span className="text-primary d-block">Perfect Event?</span>
                </h2>
                
                <div className="d-flex justify-content-center justify-content-lg-start mb-4">
                  <hr className="border-primary" style={{width: '60px', height: '3px', backgroundColor: '#0d6efd'}} />
                </div>

                <p className="lead text-muted mb-4 text-center text-lg-start" style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                  lineHeight: '1.7'
                }}>
                  Let's bring your vision to life. Get in touch with us today for a personalized consultation.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="cta-benefits">
                <div className="row g-3">
                  <div className="col-12">
                    <div className="d-flex align-items-center mb-3">
                      <div className="benefit-icon me-3" style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(135deg, #ff6b6b, #45b7d1)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <span style={{color: 'white', fontSize: '1.2rem'}}>✓</span>
                      </div>
                      <div>
                        <h6 className="mb-1 fw-semibold">Free Initial Consultation</h6>
                        <small className="text-muted">Discuss your vision with no commitment</small>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-12">
                    <div className="d-flex align-items-center mb-3">
                      <div className="benefit-icon me-3" style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(135deg, #4ecdc4, #45b7d1)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <span style={{color: 'white', fontSize: '1.2rem'}}>✓</span>
                      </div>
                      <div>
                        <h6 className="mb-1 fw-semibold">Custom Package Options</h6>
                        <small className="text-muted">Tailored to your budget and needs</small>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="d-flex align-items-center mb-3">
                      <div className="benefit-icon me-3" style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <span style={{color: 'white', fontSize: '1.2rem'}}>✓</span>
                      </div>
                      <div>
                        <h6 className="mb-1 fw-semibold">24/7 Support</h6>
                        <small className="text-muted">We're here every step of the way</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="cta-contact mt-4 pt-4" style={{borderTop: '1px solid #eee'}}>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="contact-item mb-3">
                      <h6 className="text-primary-custom mb-1">Call Us</h6>
                      <a href="tel:+1234567890" className="text-decoration-none text-dark fw-semibold">
                        +1 (234) 567-8900
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="contact-item mb-3">
                      <h6 className="text-primary-custom mb-1">Email Us</h6>
                      <a href="mailto:info@eventperfect.com" className="text-decoration-none text-dark fw-semibold">
                        info@eventperfect.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="col-lg-6">
            <div className="cta-form">
              <div className="card border-0 shadow">
                <div className="card-body p-3 p-md-4 p-lg-5">
                  <div className="text-center mb-4">
                    <h3 className="fw-light mb-2" style={{fontSize: 'clamp(1.3rem, 3vw, 1.75rem)'}}>Get Your Free Quote</h3>
                    <p className="text-muted small">Fill out the form below and we'll get back to you within 24 hours</p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                          <label htmlFor="name">Your Name *</label>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                          <label htmlFor="email">Your Email *</label>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                          <label htmlFor="phone">Phone Number</label>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="date"
                            className="form-control"
                            id="eventDate"
                            name="eventDate"
                            value={formData.eventDate}
                            onChange={handleInputChange}
                          />
                          <label htmlFor="eventDate">Event Date</label>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-floating">
                          <select
                            className="form-select"
                            id="eventType"
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Choose Event Type</option>
                            <option value="wedding">Wedding</option>
                            <option value="corporate">Corporate Event</option>
                            <option value="birthday">Birthday Party</option>
                            <option value="anniversary">Anniversary</option>
                            <option value="other">Other</option>
                          </select>
                          <label htmlFor="eventType">Event Type *</label>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            placeholder="Tell us about your event"
                            style={{height: '100px'}}
                            value={formData.message}
                            onChange={handleInputChange}
                          ></textarea>
                          <label htmlFor="message">Tell us about your event</label>
                        </div>
                      </div>

                      <div className="col-12 d-grid pt-3">
                        <button type="submit" className="btn btn-primary btn-lg">
                          Send My Request
                        </button>
                        <p className="small text-muted mt-2 mb-0 text-center">
                          We respect your privacy and never share your information
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;