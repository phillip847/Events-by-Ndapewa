import React, { useState, useEffect } from 'react';
import heroImage from '../assets/hero.jpeg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const styles = {
    container: {
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `linear-gradient(rgba(255, 182, 193, 0.4), rgba(255, 20, 147, 0.5)), url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    },
    mainContent: {
      position: 'relative',
      zIndex: 10
    },
    gradientText: {
      background: 'linear-gradient(to right, #ec4899, #f43f5e, #be185d)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))',
      transition: 'all 1s ease',
      transform: isVisible ? 'translateY(0)' : 'translateY(3rem)',
      opacity: isVisible ? 1 : 0
    },
    primaryButton: {
      background: 'linear-gradient(to right, #ec4899, #f43f5e)',
      border: 'none',
      borderRadius: '9999px',
      color: 'white',
      fontWeight: '600',
      fontSize: '1.125rem',
      padding: '1rem 2rem',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 14px 0 rgba(236, 72, 153, 0.39)',
      textDecoration: 'none',
      display: 'inline-block'
    }
  };

  return (
    <section className="d-flex align-items-center" style={styles.container}>
      <div style={styles.backgroundImage}></div>
      <div style={styles.mainContent} className="container-fluid px-3 px-md-5 text-center text-white">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="display-2 fw-bold mb-4" style={styles.gradientText}>
              Ndapewa Events
            </h1>
            <h2 className="h3 mb-4" style={{color: 'white', filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.5))'}}>
              Luxury Wedding & Event Planning
            </h2>
            <p className="lead mb-5" style={{color: 'white', filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.5))'}}>
              Where elegance meets intention in luxury event planning
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <a href="#about" style={styles.primaryButton}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                Learn More
              </a>
              <a href="https://wa.me/message/HUEBKXOM7NKOI1" target="_blank" rel="noopener noreferrer"
                style={{...styles.primaryButton, background: 'transparent', border: '2px solid white'}}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
                onMouseLeave={(e) => e.target.style.background = 'transparent'}
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;