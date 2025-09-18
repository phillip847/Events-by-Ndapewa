import React, { useState, useEffect } from 'react';

const WeddingPackages = () => {
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
      backgroundImage: `linear-gradient(rgba(255, 218, 185, 0.3), rgba(255, 182, 193, 0.4)), url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    },
    floatingBg1: {
      position: 'absolute',
      top: '-10rem',
      right: '-10rem',
      width: '20rem',
      height: '20rem',
      backgroundColor: 'rgba(255, 218, 185, 0.3)',
      borderRadius: '50%',
      mixBlendMode: 'multiply',
      filter: 'blur(40px)',
      animation: 'pulse 3s ease-in-out infinite'
    },
    floatingBg2: {
      position: 'absolute',
      bottom: '-10rem',
      left: '-10rem',
      width: '20rem',
      height: '20rem',
      backgroundColor: 'rgba(255, 182, 193, 0.3)',
      borderRadius: '50%',
      mixBlendMode: 'multiply',
      filter: 'blur(40px)',
      animation: 'pulse 3s ease-in-out infinite 2s'
    },
    floatingBg3: {
      position: 'absolute',
      top: '10rem',
      left: '50%',
      width: '15rem',
      height: '15rem',
      backgroundColor: 'rgba(255, 192, 203, 0.25)',
      borderRadius: '50%',
      mixBlendMode: 'multiply',
      filter: 'blur(40px)',
      animation: 'bounce 2s ease-in-out infinite 4s'
    },
    mainContent: {
      position: 'relative',
      zIndex: 10
    },
    header: {
      transition: 'all 1s ease',
      transform: isVisible ? 'translateY(0)' : 'translateY(3rem)',
      opacity: isVisible ? 1 : 0
    },
    gradientText: {
      background: 'linear-gradient(to right, #FF6B6B, #FF8E8E, #FFB6C1)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))'
    },
    divider: {
      width: '6rem',
      height: '0.25rem',
      background: 'linear-gradient(to right, #FFDAB9, #FFB6C1)',
      borderRadius: '9999px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    },
    packageCard: {
      backdropFilter: 'blur(16px)',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '1.5rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      transition: 'all 0.5s ease',
      cursor: 'pointer',
      height: '100%'
    },
    peachText: {
      color: '#D2691E',
      fontWeight: '500'
    },
    pinkHeading: {
      color: '#C71585',
      filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.1))'
    },
    priceText: {
      background: 'linear-gradient(to right, #FF6B6B, #FFB6C1)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      fontWeight: 'bold'
    },
    iconCircle: {
      width: '4rem',
      height: '4rem',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #FFDAB9, #FFB6C1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      boxShadow: '0 8px 25px rgba(255, 182, 193, 0.3)',
      margin: '0 auto 1rem auto'
    }
  };

  const packages = [
    {
      name: "Pearl Package",
      icon: "💎",
      price: "Contact for Price",
      features: [
        "Consultation",
        "Budget Management", 
        "Vendor Sourcing",
        "Reception Management",
        "Bridal party Coordination",
        "Final Count down"
      ],
      delay: '300ms'
    },
    {
      name: "Rose Package", 
      icon: "🌹",
      price: "Contact for Price",
      features: [
        "Consultation",
        "Budget Management",
        "Vendor Sourcing", 
        "Reception Management",
        "Bridal party coordination",
        "Final Countdown",
        "Bridal room set up"
      ],
      delay: '600ms',
      popular: true
    },
    {
      name: "Gold Package",
      icon: "👑", 
      price: "Contact for Price",
      features: [
        "Full service experience",
        "Full wedding coordination",
        "Design and styling concept", 
        "Wedding Stationeries",
        "Add on extras",
        "Assist in planning Bridal shower"
      ],
      delay: '900ms'
    }
  ];

  return (
    <div style={styles.container}>
      {/* Background Image */}
      <div style={styles.backgroundImage}></div>

      {/* Animated background elements */}
      <div style={styles.floatingBg1}></div>
      <div style={styles.floatingBg2}></div>
      <div style={styles.floatingBg3}></div>

      <div style={styles.mainContent} className="container-fluid px-4 py-5">
        {/* Header Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10 text-center" style={styles.header}>
            <h2 className="display-2 fw-bold mb-4" style={styles.gradientText}>
              Explore Our Packages
            </h2>
            <div className="mx-auto mb-4" style={styles.divider}></div>
            <p className="fs-4 mb-0" style={{...styles.peachText, maxWidth: '800px', margin: '0 auto', filter: 'drop-shadow(1px 1px 1px rgba(0,0,0,0.1))'}}>
              Choose the perfect package for your dream celebration
            </p>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="row g-4 justify-content-center">
          {packages.map((pkg, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div 
                className="p-4 p-lg-5 text-center position-relative"
                style={{
                  ...styles.packageCard,
                  transform: isVisible ? 'translateY(0)' : 'translateY(4rem)',
                  opacity: isVisible ? 1 : 0,
                  animationDelay: pkg.delay,
                  ...(pkg.popular && {
                    transform: isVisible ? 'translateY(-10px) scale(1.05)' : 'translateY(4rem)',
                    border: '2px solid rgba(255, 182, 193, 0.5)',
                    boxShadow: '0 30px 60px -12px rgba(255, 182, 193, 0.4)'
                  })
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = pkg.popular ? 'translateY(-15px) scale(1.08)' : 'translateY(-10px) scale(1.03)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                  e.currentTarget.style.boxShadow = '0 35px 70px -12px rgba(255, 182, 193, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = pkg.popular ? 'translateY(-10px) scale(1.05)' : 'translateY(0) scale(1)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.boxShadow = pkg.popular ? '0 30px 60px -12px rgba(255, 182, 193, 0.4)' : '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                }}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '20px',
                    background: 'linear-gradient(135deg, #FF6B6B, #FFB6C1)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(255, 182, 193, 0.4)'
                  }}>
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div style={styles.iconCircle}>
                  <span style={{animation: 'pulse 2s ease-in-out infinite'}}>{pkg.icon}</span>
                </div>

                {/* Package Name */}
                <h3 className="display-6 fw-bold mb-3" style={styles.pinkHeading}>
                  {pkg.name}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <span className="fs-4" style={styles.priceText}>
                    {pkg.price}
                  </span>
                </div>

                {/* Features List */}
                <ul className="list-unstyled text-start">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="mb-3 d-flex align-items-start">
                      <span 
                        className="me-3 flex-shrink-0"
                        style={{
                          color: '#FFB6C1',
                          fontSize: '1.2rem',
                          marginTop: '0.1rem'
                        }}
                      >
                        ✓
                      </span>
                      <span style={styles.peachText} className="fs-6">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-4 pt-3">
                  <button 
                    className="btn btn-lg w-100"
                    style={{
                      background: 'linear-gradient(135deg, #FFDAB9, #FFB6C1)',
                      border: 'none',
                      borderRadius: '25px',
                      color: '#8B4513',
                      fontWeight: '600',
                      padding: '0.875rem 1.5rem',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(255, 182, 193, 0.3)'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 25px rgba(255, 182, 193, 0.4)';
                      e.target.style.background = 'linear-gradient(135deg, #FFE4B5, #FFC0CB)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(255, 182, 193, 0.3)';
                      e.target.style.background = 'linear-gradient(135deg, #FFDAB9, #FFB6C1)';
                    }}
                  >
                    Choose This Package
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8 text-center">
            <div 
              className="p-4 p-lg-5"
              style={{
                ...styles.packageCard,
                transform: isVisible ? 'translateY(0)' : 'translateY(4rem)',
                opacity: isVisible ? 1 : 0,
                animationDelay: '1200ms'
              }}
            >
              <h3 className="display-6 fw-bold mb-3" style={styles.pinkHeading}>
                Ready to Plan Your Dream Event?
              </h3>
              <p className="fs-5 mb-4" style={styles.peachText}>
                Contact us today for a personalized consultation and let's create something beautiful together.
              </p>
              <button 
                className="btn btn-lg"
                style={{
                  background: 'linear-gradient(135deg, #FF6B6B, #FFB6C1)',
                  border: 'none',
                  borderRadius: '30px',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '1.125rem',
                  padding: '1rem 2.5rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 6px 20px rgba(255, 107, 107, 0.4)'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.05) translateY(-2px)';
                  e.target.style.boxShadow = '0 10px 30px rgba(255, 107, 107, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1) translateY(0)';
                  e.target.style.boxShadow = '0 6px 20px rgba(255, 107, 107, 0.4)';
                }}
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
          40%, 43% { transform: translateY(-30px); }
          70% { transform: translateY(-15px); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% { background-position: -200px 0; }
          100% { background-position: calc(200px + 100%) 0; }
        }
        
        @media (max-width: 768px) {
          .display-2 { font-size: 2.5rem !important; }
          .display-6 { font-size: 1.5rem !important; }
          .fs-4 { font-size: 1.25rem !important; }
          .fs-5 { font-size: 1.1rem !important; }
          .fs-6 { font-size: 1rem !important; }
        }
      `}</style>
    </div>
  );
};

export default WeddingPackages;