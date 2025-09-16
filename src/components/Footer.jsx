import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h3 className="fw-bold mb-3">
              <span className="text-primary">Event</span>Perfect
            </h3>
            <p className="mb-4">
              Creating unforgettable moments and turning your dreams into reality. 
              We specialize in weddings, corporate events, and special celebrations.
            </p>
          </div>
          
          <div className="col-lg-4 mb-4">
            <h5 className="fw-semibold mb-3">Contact Info</h5>
            <p className="mb-2">
              <strong>Phone:</strong> +1 (234) 567-8900
            </p>
            <p className="mb-2">
              <strong>Email:</strong> info@eventperfect.com
            </p>
            <p className="mb-2">
              <strong>Address:</strong> 123 Event Street, City, State 12345
            </p>
          </div>
          
          <div className="col-lg-4 mb-4">
            <h5 className="fw-semibold mb-3">Business Hours</h5>
            <p className="mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="mb-2">Saturday: 10:00 AM - 4:00 PM</p>
            <p className="mb-2">Sunday: By Appointment</p>
          </div>
        </div>
        
        <hr className="my-4" />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">© 2024 EventPerfect. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#" className="text-white text-decoration-none me-3">Privacy Policy</a>
            <a href="#" className="text-white text-decoration-none">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;