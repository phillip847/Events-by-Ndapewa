import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" style={{backgroundColor: '#F5DEB3', backdropFilter: 'blur(10px)', transition: 'all 0.3s ease'}}>
      <div className="container-fluid">
        <a className="navbar-brand ms-3" href="#home" style={{transition: 'all 0.3s ease'}} onMouseEnter={(e) => e.target.querySelector('img').style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.target.querySelector('img').style.transform = 'scale(1)'}>
          <img src={logo} alt="EventPerfect" height="60" style={{opacity: 0.8, transition: 'all 0.3s ease'}} />
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark rounded px-3 py-2" href="#home" style={{transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.backgroundColor = 'rgba(0,123,255,0.1)'; e.target.style.color = '#007bff'; e.target.style.transform = 'translateY(-2px)'}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#333'; e.target.style.transform = 'translateY(0)'}}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark rounded px-3 py-2" href="#about" style={{transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.backgroundColor = 'rgba(0,123,255,0.1)'; e.target.style.color = '#007bff'; e.target.style.transform = 'translateY(-2px)'}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#333'; e.target.style.transform = 'translateY(0)'}}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark rounded px-3 py-2" href="#services" style={{transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.backgroundColor = 'rgba(0,123,255,0.1)'; e.target.style.color = '#007bff'; e.target.style.transform = 'translateY(-2px)'}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#333'; e.target.style.transform = 'translateY(0)'}}>Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark rounded px-3 py-2" href="#packages" style={{transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.backgroundColor = 'rgba(0,123,255,0.1)'; e.target.style.color = '#007bff'; e.target.style.transform = 'translateY(-2px)'}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#333'; e.target.style.transform = 'translateY(0)'}}>Packages</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark rounded px-3 py-2" href="#gallery" style={{transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.backgroundColor = 'rgba(0,123,255,0.1)'; e.target.style.color = '#007bff'; e.target.style.transform = 'translateY(-2px)'}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#333'; e.target.style.transform = 'translateY(0)'}}>Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark rounded px-3 py-2" href="#cta" style={{transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.backgroundColor = 'rgba(0,123,255,0.1)'; e.target.style.color = '#007bff'; e.target.style.transform = 'translateY(-2px)'}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#333'; e.target.style.transform = 'translateY(0)'}}>Contact</a>
            </li>
          </ul>
          
          <div className="d-flex">
            <a href="#cta" className="btn btn-primary rounded-pill px-4 fw-semibold shadow" style={{transition: 'all 0.3s ease'}} onMouseEnter={(e) => {e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 6px 20px rgba(0,123,255,0.4)'}} onMouseLeave={(e) => {e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 15px rgba(0,123,255,0.3)'}}>
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;