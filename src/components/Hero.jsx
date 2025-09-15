// components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="min-vh-100 d-flex align-items-center position-relative" style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{backgroundColor: 'rgba(0,0,0,0.6)'}}></div>
      <div className="container-fluid px-3 position-relative" style={{zIndex: 2}}>
        <div className="row align-items-center min-vh-100 justify-content-center">
          {/* Content */}
          <div className="col-12 col-md-10 col-lg-8 col-xl-6">
            <div className="text-center py-5">
              {/* Brand Logo/Name */}
              <div className="mb-4">
                <h1 className="display-4 fw-light text-white mb-1" style={{letterSpacing: '0.2em', textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
                  EP
                </h1>
                <p className="text-uppercase text-white" style={{fontSize: '0.9rem', letterSpacing: '0.15em', textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
                  Wedding & Event Planner
                </p>
              </div>

              {/* Main Heading */}
              <div className="mb-4">
                <h2 className="display-1 fw-light mb-3 text-white" style={{
                  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                  lineHeight: '1.1',
                  textShadow: '3px 3px 6px rgba(0,0,0,0.7)'
                }}>
                  Wedding Planner
                </h2>
              </div>

              {/* Decorative Line */}
              <div className="d-flex justify-content-center mb-4">
                <hr className="border-primary" style={{width: '80px', height: '3px', backgroundColor: '#0d6efd'}} />
              </div>

              {/* Description */}
              <div className="mb-5">
                <p className="lead text-white mx-auto" style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                  lineHeight: '1.7',
                  maxWidth: '600px',
                  textShadow: '1px 1px 3px rgba(0,0,0,0.7)'
                }}>
                  We specialize in turning your wedding dreams into enchanting realities. With a passion for meticulous planning and an eye for exquisite details.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <a href="#packages" className="btn btn-primary btn-lg px-4">
                  View Packages
                </a>
                <a href="#gallery" className="btn btn-outline-light btn-lg px-4">
                  View Gallery
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;