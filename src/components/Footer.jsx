import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="text-white py-5" style={{background: 'linear-gradient(135deg, #881337, #be185d)'}}>
      <div className="container-fluid px-3 px-md-5">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="d-flex align-items-center mb-3">
              <img src={logo} alt="Ndapewa Events" height="50" className="me-3" />
              <h3 className="fw-bold mb-0 text-white">
                Ndapewa Events
              </h3>
            </div>
            <p className="mb-4">
              Where elegance meets intention in luxury event planning. 
              We design luxury weddings and events that are as meaningful as they are beautiful.
            </p>
          </div>
          
          <div className="col-lg-4 mb-4">
            <h5 className="fw-semibold mb-3">Contact Info</h5>
            <p className="mb-2">
              <strong>Phone:</strong> 0817700348
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> 0812448543
            </p>
            <p className="mb-2">
              <strong>Email:</strong> ndapewaevents@gmail.com
            </p>
          </div>
          
          <div className="col-lg-4 mb-4">
            <h5 className="fw-semibold mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              <a 
                href="https://www.instagram.com/events_byndapewa?igsh=OTJvMm01dmVvb2g1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
                style={{fontSize: '1.5rem', transition: 'all 0.3s ease'}}
                onMouseEnter={(e) => e.target.style.color = '#f472b6'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="https://wa.me/message/HUEBKXOM7NKOI1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
                style={{fontSize: '1.5rem', transition: 'all 0.3s ease'}}
                onMouseEnter={(e) => e.target.style.color = '#f472b6'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
        
        <hr className="my-4" style={{borderColor: 'rgba(255,255,255,0.3)'}} />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">© 2024 Ndapewa Events. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#" className="text-white text-decoration-none me-3" onMouseEnter={(e) => e.target.style.color = '#f472b6'} onMouseLeave={(e) => e.target.style.color = 'white'}>Privacy Policy</a>
            <a href="#" className="text-white text-decoration-none" onMouseEnter={(e) => e.target.style.color = '#f472b6'} onMouseLeave={(e) => e.target.style.color = 'white'}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;