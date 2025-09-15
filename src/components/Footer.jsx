// components/Footer.jsx
import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Handle newsletter subscription here
      setSubscribeStatus('Thank you for subscribing!');
      setEmail('');
      setTimeout(() => setSubscribeStatus(''), 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Facebook',
      icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z',
      url: 'https://facebook.com/eventperfect'
    },
    {
      name: 'Instagram',
      icon: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.987 11.988 11.987s11.987-5.369 11.987-11.987C24.014 5.367 18.635.001 12.017.001zM8.449 18.746c-2.273 0-4.124-1.851-4.124-4.124s1.851-4.124 4.124-4.124 4.124 1.851 4.124 4.124-1.851 4.124-4.124 4.124zm7.718 0c-2.273 0-4.124-1.851-4.124-4.124s1.851-4.124 4.124-4.124 4.124 1.851 4.124 4.124-1.851 4.124-4.124 4.124z',
      url: 'https://instagram.com/eventperfect'
    },
    {
      name: 'Pinterest',
      icon: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.160 1.219-5.160s-.219-.438-.219-1.085c0-1.016.219-1.778.657-1.778.219 0 .438.219.438.657 0 .438-.219.876-.219 1.314 0 .876.657 1.533 1.533 1.533 1.314 0 2.190-1.533 2.190-3.504 0-1.314-.876-2.628-2.628-2.628-1.971 0-3.285 1.314-3.285 3.066 0 .657.219 1.095.438 1.533-.105.438-.219.876-.438 1.314-.438.219-.876.219-1.314 0-.876-.438-1.314-1.314-1.314-2.628 0-2.628 1.971-5.036 5.036-5.036 2.628 0 4.599 1.971 4.599 4.379 0 2.628-1.533 4.818-3.723 4.818-.657 0-1.314-.438-1.533-.876 0 0-.438 1.533-.438 1.971-.219.657-.438 1.314-.876 1.752C9.417 23.564 10.771 24 12.017 24c6.621 0 11.988-5.367 11.988-11.988C24.005 5.367 18.638.001 12.017.001z',
      url: 'https://pinterest.com/eventperfect'
    },
    {
      name: 'LinkedIn',
      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
      url: 'https://linkedin.com/company/eventperfect'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#cta' }
  ];

  const services = [
    { name: 'Wedding Planning', href: '#services' },
    { name: 'Corporate Events', href: '#services' },
    { name: 'Birthday Parties', href: '#services' },
    { name: 'Anniversary Celebrations', href: '#services' },
    { name: 'Engagement Parties', href: '#services' },
    { name: 'Baby Showers', href: '#services' }
  ];

  return (
    <footer className="footer-section">
      {/* Newsletter Section */}
      <div className="bg-primary py-5">
        <div className="container-fluid px-3">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="text-center text-lg-start">
                <h3 className="fw-light text-white mb-2" style={{fontSize: 'clamp(1.5rem, 4vw, 2rem)'}}>
                  Stay Updated with Our Latest Events
                </h3>
                <p className="text-white-75 mb-0" style={{fontSize: 'clamp(0.9rem, 2vw, 1rem)'}}>
                  Get exclusive tips, inspiration, and special offers
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <form onSubmit={handleSubscribe}>
                <div className="input-group input-group-lg">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="btn btn-light fw-semibold"
                  >
                    Subscribe
                  </button>
                </div>
                {subscribeStatus && (
                  <div className="mt-2 text-center">
                    <small className="text-white-75">{subscribeStatus}</small>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-dark text-white py-5">
        <div className="container-fluid px-3">
          <div className="row g-4">
            {/* Company Info */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget">
                <div className="footer-brand mb-4">
                  <h3 className="fw-bold mb-3" style={{fontSize: 'clamp(1.3rem, 3vw, 1.75rem)'}}>
                    <span className="text-primary">Event</span>Perfect
                  </h3>
                  <p className="text-muted mb-4" style={{lineHeight: '1.7'}}>
                    Creating unforgettable moments and turning your dreams into reality. 
                    We specialize in weddings, corporate events, and special celebrations 
                    with meticulous attention to detail.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="contact-info">
                  <div className="contact-item d-flex align-items-center mb-3">
                    <div className="contact-icon me-3" style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #ff6b6b, #45b7d1)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                      </svg>
                    </div>
                    <div>
                      <a href="tel:+1234567890" className="text-white text-decoration-none">
                        +1 (234) 567-8900
                      </a>
                    </div>
                  </div>

                  <div className="contact-item d-flex align-items-center mb-3">
                    <div className="contact-icon me-3" style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #4ecdc4, #45b7d1)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <div>
                      <a href="mailto:info@eventperfect.com" className="text-white text-decoration-none">
                        info@eventperfect.com
                      </a>
                    </div>
                  </div>

                  <div className="contact-item d-flex align-items-center mb-3">
                    <div className="contact-icon me-3" style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <span className="text-white">
                        123 Event Street, City, State 12345
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget">
                <h5 className="fw-semibold mb-4 text-white">Quick Links</h5>
                <ul className="list-unstyled footer-links">
                  {quickLinks.map((link, index) => (
                    <li key={index} className="mb-2">
                      <a 
                        href={link.href} 
                        className="text-muted text-decoration-none footer-link"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Services */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h5 className="fw-semibold mb-4 text-white">Our Services</h5>
                <ul className="list-unstyled footer-links">
                  {services.map((service, index) => (
                    <li key={index} className="mb-2">
                      <a 
                        href={service.href} 
                        className="text-muted text-decoration-none footer-link"
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Business Hours & Social */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h5 className="fw-semibold mb-4 text-white">Business Hours</h5>
                <div className="business-hours mb-4">
                  <div className="hours-item d-flex justify-content-between mb-2">
                    <span className="text-muted">Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-item d-flex justify-content-between mb-2">
                    <span className="text-muted">Saturday</span>
                    <span className="text-white">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="hours-item d-flex justify-content-between mb-2">
                    <span className="text-muted">Sunday</span>
                    <span className="text-white">By Appointment</span>
                  </div>
                </div>

                {/* Social Media */}
                <div className="social-media">
                  <h6 className="fw-semibold mb-3 text-white">Follow Us</h6>
                  <div className="social-links d-flex">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link me-3"
                        style={{
                          width: '40px',
                          height: '40px',
                          background: 'rgba(255,255,255,0.1)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease',
                          textDecoration: 'none'
                        }}
                      >
                        <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                          <path d={social.icon} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="copyright-bar bg-black py-3">
        <div className="container-fluid px-3">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0 text-muted small">
                © {currentYear} EventPerfect. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="legal-links">
                <a href="#" className="text-muted text-decoration-none small me-3">
                  Privacy Policy
                </a>
                <a href="#" className="text-muted text-decoration-none small me-3">
                  Terms of Service
                </a>
                <a href="#" className="text-muted text-decoration-none small">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;