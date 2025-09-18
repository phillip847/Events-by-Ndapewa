import React, { useState, useEffect } from 'react';

const AboutUs = () => {
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
      backgroundImage: `linear-gradient(rgba(255, 182, 193, 0.3), rgba(255, 20, 147, 0.4)), url('https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
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
      backgroundColor: 'rgba(255, 182, 193, 0.3)',
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
      backgroundColor: 'rgba(251, 113, 133, 0.3)',
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
      backgroundColor: 'rgba(244, 114, 182, 0.25)',
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
      background: 'linear-gradient(to right, #ec4899, #f43f5e, #be185d)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))'
    },
    divider: {
      width: '6rem',
      height: '0.25rem',
      background: 'linear-gradient(to right, #f472b6, #f43f5e)',
      borderRadius: '9999px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    },
    glassCard: {
      backdropFilter: 'blur(16px)',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '1.5rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      transition: 'all 1.2s ease',
      transform: isVisible ? 'translateY(0)' : 'translateY(4rem)',
      opacity: isVisible ? 1 : 0,
      animationDelay: '300ms'
    },
    buttonGradient: {
      background: 'linear-gradient(to right, #ec4899, #f43f5e)',
      border: 'none',
      borderRadius: '9999px',
      color: 'white',
      fontWeight: '600',
      fontSize: '1.125rem',
      padding: '1rem 2rem',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 14px 0 rgba(236, 72, 153, 0.39)',
      cursor: 'pointer'
    },
    imageContainer: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '1rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      transition: 'transform 0.5s ease'
    },
    statsCard: {
      backdropFilter: 'blur(12px)',
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
      border: '1px solid rgba(255, 255, 255, 0.4)',
      borderRadius: '1rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    valuesCard: {
      backdropFilter: 'blur(16px)',
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      border: '1px solid rgba(255, 255, 255, 0.25)',
      borderRadius: '1.5rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      transition: 'all 1.6s ease',
      transform: isVisible ? 'translateY(0)' : 'translateY(6rem)',
      opacity: isVisible ? 1 : 0,
      animationDelay: '900ms'
    },
    missionVisionCard: {
      backdropFilter: 'blur(16px)',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '1.5rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      transition: 'all 2s ease',
      transform: isVisible ? 'translateY(0)' : 'translateY(8rem)',
      opacity: isVisible ? 1 : 0,
      animationDelay: '1200ms'
    },
    floatingElement: {
      position: 'absolute',
      borderRadius: '50%',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    pinkText: {
      color: '#831843',
      fontWeight: '500'
    },
    pinkHeading: {
      color: '#881337',
      filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.1))'
    }
  };

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
            <h2 className="display-1 fw-bold mb-4" style={styles.gradientText}>
              About Ndapewa Events
            </h2>
            <div className="mx-auto mb-4" style={styles.divider}></div>
            <p className="fs-4 mb-0" style={{...styles.pinkText, maxWidth: '800px', margin: '0 auto', filter: 'drop-shadow(1px 1px 1px rgba(0,0,0,0.1))'}}>
              Where elegance meets intention in luxury event planning
            </p>
          </div>
        </div>

        {/* Main Content Glass Card */}
        <div className="row justify-content-center mb-5">
          <div className="col-12">
            <div className="p-4 p-lg-5 mb-5" style={styles.glassCard}>
              <div className="row align-items-center">
                {/* Content */}
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <h3 className="display-5 fw-bold mb-4" style={styles.pinkHeading}>
                    Luxury Weddings & Events
                  </h3>
                  <p className="fs-5 mb-4" style={styles.pinkText}>
                    Ndapewa Events is a luxury wedding and event planning company where elegance meets intention. 
                    We design luxury weddings and events that are as meaningful as they are beautiful.
                  </p>
                  <p className="fs-5 mb-4" style={styles.pinkText}>
                    Rooted in Christian values and guided by intentional creativity, we curate bespoke experiences 
                    that reflect your heart and vision. Every detail is handled with care, grace, and excellence.
                  </p>
                  <p className="fs-5 mb-4" style={styles.pinkText}>
                    From elegant weddings to elevated celebrations — we believe beauty, purpose, and faith belong 
                    at the center of every unforgettable event.
                  </p>
                  
                  {/* CTA Button */}
                  <div className="pt-3">
                    <button 
                      style={styles.buttonGradient}
                      onMouseOver={(e) => {
                        e.target.style.transform = 'scale(1.05)';
                        e.target.style.boxShadow = '0 8px 25px 0 rgba(236, 72, 153, 0.5)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = '0 4px 14px 0 rgba(236, 72, 153, 0.39)';
                      }}
                    >
                      Learn More About Us
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div className="col-lg-6">
                  <div 
                    style={styles.imageContainer}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Luxury wedding setup"
                      className="img-fluid"
                      style={{height: '400px', width: '100%', objectFit: 'cover'}}
                    />
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to top, rgba(136, 19, 55, 0.4), transparent)'
                    }}></div>
                  </div>
                  {/* Floating elements */}
                  <div style={{
                    ...styles.floatingElement,
                    top: '-1rem',
                    right: '-1rem',
                    width: '2rem',
                    height: '2rem',
                    backgroundColor: '#fb7185',
                    animation: 'bounce 2s ease-in-out infinite'
                  }}></div>
                  <div style={{
                    ...styles.floatingElement,
                    bottom: '-1rem',
                    left: '-1rem',
                    width: '1.5rem',
                    height: '1.5rem',
                    backgroundColor: '#f472b6',
                    animation: 'pulse 2s ease-in-out infinite'
                  }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="row g-3 mb-5">
          {[
            { number: "10+", label: "Years Experience", icon: "⭐" },
            { number: "300+", label: "Events Planned", icon: "🎉" },
            { number: "250+", label: "Happy Couples", icon: "💕" },
            { number: "12", label: "Awards Won", icon: "🏆" }
          ].map((stat, index) => (
            <div key={index} className="col-6 col-lg-3">
              <div 
                className="p-4 text-center h-100"
                style={styles.statsCard}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05) translateY(-8px)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.35)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1) translateY(0)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                }}
              >
                <div className="fs-1 mb-3" style={{animation: 'pulse 2s ease-in-out infinite'}}>{stat.icon}</div>
                <h3 className="display-6 fw-bold mb-2" style={styles.gradientText}>
                  {stat.number}
                </h3>
                <p className="mb-0 fw-semibold" style={styles.pinkText}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-12">
            <div className="p-4 p-lg-5" style={styles.valuesCard}>
              <h3 className="display-5 fw-bold text-center mb-5" style={styles.pinkHeading}>
                Our Core Values
              </h3>
              <div className="row g-4">
                {[
                  { 
                    title: "Faith & Purpose", 
                    description: "Rooted in Christian values, we bring meaning to every celebration",
                    icon: "✨"
                  },
                  { 
                    title: "Intentional Creativity", 
                    description: "Every design choice reflects your unique vision and story",
                    icon: "🎨"
                  },
                  { 
                    title: "Excellence & Grace", 
                    description: "Delivering perfection with care and attention to every detail",
                    icon: "👑"
                  }
                ].map((value, index) => (
                  <div key={index} className="col-md-4">
                    <div 
                      className="text-center h-100"
                      style={{transition: 'all 0.3s ease', cursor: 'pointer'}}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <div 
                        className="fs-1 mb-3"
                        style={{
                          filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => e.target.style.animation = 'bounce 1s ease-in-out'}
                        onMouseOut={(e) => e.target.style.animation = 'none'}
                      >
                        {value.icon}
                      </div>
                      <h4 className="fs-4 fw-bold mb-3" style={styles.pinkHeading}>{value.title}</h4>
                      <p className="mb-0" style={styles.pinkText}>{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="p-4 p-lg-5" style={styles.missionVisionCard}>
              <div className="row g-5">
                {/* Mission */}
                <div className="col-lg-6">
                  <div 
                    className="h-100"
                    style={{
                      transition: 'all 0.5s ease',
                      cursor: 'pointer'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.querySelector('.mission-icon').style.animation = 'pulse 1s ease-in-out';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.querySelector('.mission-icon').style.animation = 'none';
                    }}
                  >
                    <div className="text-center mb-4">
                      <div 
                        className="mission-icon fs-1 mb-3"
                        style={{
                          filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        🎯
                      </div>
                      <h3 className="display-6 fw-bold" style={styles.gradientText}>
                        Mission
                      </h3>
                      <div className="mx-auto mb-4" style={{...styles.divider, width: '4rem'}}></div>
                    </div>
                    <p className="fs-5 text-center" style={styles.pinkText}>
                      Our mission is to craft unforgettable moments with divine intentionality and refined elegance. 
                      We are dedicated to designing bespoke experiences that reflect the heart of every client — 
                      grounded in grace, executed with excellence, and finished with luxury touches that inspire awe and celebration.
                    </p>
                  </div>
                </div>

                {/* Vision */}
                <div className="col-lg-6">
                  <div 
                    className="h-100"
                    style={{
                      transition: 'all 0.5s ease',
                      cursor: 'pointer'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.querySelector('.vision-icon').style.animation = 'bounce 1s ease-in-out';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.querySelector('.vision-icon').style.animation = 'none';
                    }}
                  >
                    <div className="text-center mb-4">
                      <div 
                        className="vision-icon fs-1 mb-3"
                        style={{
                          filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        🌟
                      </div>
                      <h3 className="display-6 fw-bold" style={styles.gradientText}>
                        Vision
                      </h3>
                      <div className="mx-auto mb-4" style={{...styles.divider, width: '4rem'}}></div>
                    </div>
                    <p className="fs-5 text-center" style={styles.pinkText}>
                      We envision a world where every event, whether a sacred union or a stylish celebration — 
                      radiates beauty, purpose, and peace. Through faith-rooted creativity and meticulous planning, 
                      we aspire to be a trusted name in luxury event experiences, known for turning dreams into tangible, joy-filled realities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
          40%, 43% { transform: translateY(-30px); }
          70% { transform: translateY(-15px); }
        }
        
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
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
        
        @media (max-width: 768px) {
          .display-1 { font-size: 3rem !important; }
          .display-5 { font-size: 2rem !important; }
          .fs-4 { font-size: 1.25rem !important; }
          .fs-5 { font-size: 1.1rem !important; }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;