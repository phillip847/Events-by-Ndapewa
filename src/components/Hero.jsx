// components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section min-vh-100 d-flex align-items-center">
      <div className="container-fluid p-0">
        <div className="row g-0 min-vh-100">
          {/* Left Content Side */}
          <div className="col-lg-6 d-flex align-items-center">
            <div className="hero-content p-5">
              {/* Brand Logo/Name */}
              <div className="hero-brand mb-4">
                <h1 className="display-4 fw-light text-muted mb-1" style={{letterSpacing: '0.2em'}}>
                  EP
                </h1>
                <p className="text-uppercase text-muted" style={{fontSize: '0.9rem', letterSpacing: '0.15em'}}>
                  Wedding & Event Planner
                </p>
              </div>

              {/* Main Heading */}
              <div className="hero-heading mb-4">
                <h2 className="display-1 fw-light mb-3" style={{
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  lineHeight: '1.1',
                  color: '#2c3e50'
                }}>
                  Wedding
                </h2>
                <h2 className="display-1 fw-light" style={{
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  lineHeight: '1.1',
                  color: '#2c3e50'
                }}>
                  Planner
                </h2>
              </div>

              {/* Decorative Line */}
              <div className="hero-divider mb-4">
                <div style={{
                  width: '80px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #d4af37, #f4d03f)',
                  marginBottom: '2rem'
                }}></div>
              </div>

              {/* Description */}
              <div className="hero-description mb-5">
                <p className="lead text-muted" style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  maxWidth: '500px'
                }}>
                  We specialize in turning your wedding dreams into enchanting realities. With a passion for meticulous planning and an eye for exquisite details, we're dedicated to curating unforgettable experiences that reflect your unique love story.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="hero-cta">
                <a href="#packages" className="btn btn-custom-primary me-3 mb-2">
                  View Packages
                </a>
                <a href="#gallery" className="btn btn-outline-custom mb-2">
                  View Gallery
                </a>
              </div>
            </div>
          </div>

          {/* Right Image Side */}
          <div className="col-lg-6">
            <div className="hero-image-container h-100 position-relative">
              {/* Placeholder for main image - replace with your actual image */}
              <div className="hero-image h-100" style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
              }}>
                {/* Overlay for better text contrast if needed */}
                <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100" style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.1) 100%)'
                }}></div>
              </div>

              {/* Decorative Elements */}
              <div className="position-absolute top-0 end-0 p-4">
                <div style={{
                  width: '60px',
                  height: '60px',
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderRadius: '50%'
                }}></div>
              </div>

              <div className="position-absolute bottom-0 start-0 p-4">
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(212, 175, 55, 0.3)',
                  borderRadius: '50%'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative leaves/floral elements - CSS only */}
      <div className="hero-decorations">
        <div className="position-absolute" style={{
          top: '10%',
          left: '5%',
          width: '100px',
          height: '100px',
          background: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMCA4MEwzMCA0MEw2MCA2MEw4MCAyMEw2MCA4MEw0MCA2MEwxMCA0MEwyMCA4MFoiIGZpbGw9IiNkNGFmMzciIGZpbGwtb3BhY2l0eT0iMC4yIi8+Cjwvc3ZnPgo=) no-repeat center',
          backgroundSize: 'contain',
          opacity: '0.6',
          zIndex: '1'
        }}></div>
      </div>
    </section>
  );
};

export default Hero;