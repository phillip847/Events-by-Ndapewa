// components/Navbar.jsx
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'navbar-light bg-white shadow' : 'navbar-dark'}`}>
      <div className="container-fluid px-3">
        {/* Brand Logo */}
        <a className="navbar-brand fw-bold" href="#home">
          <span className="text-primary">Event</span>Perfect
        </a>

        {/* Mobile Toggle Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#packages">Packages</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery">Gallery</a>
            </li>
          </ul>

          {/* Contact Button */}
          <div className="d-flex">
            <a href="#cta" className="btn btn-primary">
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;