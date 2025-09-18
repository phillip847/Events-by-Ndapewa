import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeNavbar = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" style={{backgroundColor: '#F5DEB3', backdropFilter: 'blur(10px)', transition: 'all 0.3s ease'}}>
      <div className="container-fluid">
        <a className="navbar-brand ms-3" href="#home" onClick={closeNavbar} style={{transition: 'all 0.3s ease'}} onMouseEnter={(e) => e.target.querySelector('img').style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.target.querySelector('img').style.transform = 'scale(1)'}>
          <img src={logo} alt="EventPerfect" height="60" style={{opacity: 0.8, transition: 'all 0.3s ease'}} />
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark rounded px-3 py-2" href="#home" onClick={closeNavbar} style={{transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.backgroundColor = 'rgba(0,123,255,0.1)'; e.target.style.color = '#007bff'; e.target.style.transform = 'translateY(-2px)'}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#333'; e.target.style.transform = 'translateY(0)'}}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark rounded px-3 py-2" href="#about" onClick={closeNavbar} style={{transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.backgroundColor = 'rgba(0,123,255,0.1)'; e.target.style.color = '#007bff'; e.target.style.transform = 'translateY(-2px)'}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#333'; e.target.style.transform = 'translateY(0)'}}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark rounded px-3 py-2" href="#services" onClick={closeNavbar} style={{transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.backgroundColor = 'rgba(0,123,255,0.1)'; e.target.style.color = '#007bff'; e.target.style.transform = 'translateY(-2px)'}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#333'; e.target.style.transform = 'translateY(0)'}}>Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark rounded px-3 py-2" href="#packages" onClick={closeNavbar} style={{transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.backgroundColor = 'rgba(0,123,255,0.1)'; e.target.style.color = '#007bff'; e.target.style.transform = 'translateY(-2px)'}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#333'; e.target.style.transform = 'translateY(0)'}}>Packages</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark rounded px-3 py-2" href="#gallery" onClick={closeNavbar} style={{transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.backgroundColor = 'rgba(0,123,255,0.1)'; e.target.style.color = '#007bff'; e.target.style.transform = 'translateY(-2px)'}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#333'; e.target.style.transform = 'translateY(0)'}}>Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark rounded px-3 py-2" href="#cta" onClick={closeNavbar} style={{transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.backgroundColor = 'rgba(0,123,255,0.1)'; e.target.style.color = '#007bff'; e.target.style.transform = 'translateY(-2px)'}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#333'; e.target.style.transform = 'translateY(0)'}}>Contact</a>
            </li>
          </ul>
          
          <div className="d-flex align-items-center gap-3">
            <a 
              href="https://www.instagram.com/events_byndapewa?igsh=OTJvMm01dmVvb2g1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-decoration-none"
              style={{color: '#ec4899', fontSize: '1.5rem', transition: 'all 0.3s ease'}}
              onMouseEnter={(e) => {e.target.style.transform = 'scale(1.2)'; e.target.style.color = '#be185d'}}
              onMouseLeave={(e) => {e.target.style.transform = 'scale(1)'; e.target.style.color = '#ec4899'}}
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#cta" onClick={closeNavbar} className="btn rounded-pill px-4 fw-semibold shadow" style={{background: 'linear-gradient(to right, #ec4899, #f43f5e)', border: 'none', color: 'white', transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 6px 20px rgba(236, 72, 153, 0.4)'}} onMouseLeave={(e) => {e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 15px rgba(236, 72, 153, 0.3)'}}>
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;