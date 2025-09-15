// components/AboutUs.jsx
import React, { useState, useEffect, useRef } from 'react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    experience: 0,
    events: 0,
    clients: 0,
    awards: 0
  });

  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
          startCounterAnimation();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animation function
  const startCounterAnimation = () => {
    const targets = {
      experience: 12,
      events: 500,
      clients: 300,
      awards: 15
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = duration / steps;

    Object.keys(targets).forEach(key => {
      const target = targets[key];
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepTime);
    });
  };

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Lead Wedding Planner",
      image: "https://images.unsplash.com/photo-1494790108755-2616c2d0f06b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "With over 8 years of experience, Sarah brings creativity and precision to every event."
    },
    {
      name: "Michael Chen",
      role: "Event Coordinator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Michael specializes in corporate events and ensures every detail runs smoothly."
    },
    {
      name: "Emma Rodriguez",
      role: "Design Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Emma's artistic vision transforms venues into magical spaces that tell your story."
    }
  ];

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="container-fluid px-0 py-5">
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <div className={`${isVisible ? 'animate-fade-in' : ''}`}>
              <h2 className="fw-light mb-3" style={{fontSize: 'clamp(2rem, 5vw, 3rem)'}}>
                About Our
                <span className="text-primary d-block">Story</span>
              </h2>
              
              <hr className="mx-auto mb-4" style={{width: '80px', height: '3px', backgroundColor: '#0d6efd'}} />
              
              <p className="lead text-muted">
                Founded with a passion for creating unforgettable moments, we've been turning dreams into reality for over a decade.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="row align-items-center mb-5">
          {/* Left Side - Story Content */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className={`about-content ${isVisible ? 'animate-slide-in-left' : ''}`}>
              <div className="story-content mb-5">
                <h3 className="fw-light mb-4" style={{color: '#2c3e50', fontSize: 'clamp(1.5rem, 4vw, 2rem)'}}>
                  Crafting Perfect Moments Since 2012
                </h3>
                
                <p className="text-muted mb-4" style={{lineHeight: '1.8'}}>
                  What started as a small dream has blossomed into one of the region's most trusted event planning companies. We believe that every celebration is unique, and our mission is to bring your personal vision to life with meticulous attention to detail and unwavering dedication.
                </p>
                
                <p className="text-muted mb-4" style={{lineHeight: '1.8'}}>
                  Our team of experienced professionals works closely with you from the initial concept to the final farewell, ensuring that every moment is perfectly orchestrated and authentically represents your style and personality.
                </p>

                {/* Values */}
                <div className="values-list">
                  {[
                    { title: "Personalized Service", desc: "Every event is tailored to your unique vision" },
                    { title: "Attention to Detail", desc: "No element is too small for our careful consideration" },
                    { title: "Seamless Execution", desc: "Flawless coordination from start to finish" }
                  ].map((value, index) => (
                    <div key={index} className={`value-item d-flex mb-3 ${isVisible ? 'animate-fade-in-up' : ''}`} 
                         style={{animationDelay: `${0.5 + index * 0.2}s`}}>
                      <div className="value-icon me-3 mt-1">
                        <div style={{
                          width: '12px',
                          height: '12px',
                          background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                          borderRadius: '50%'
                        }}></div>
                      </div>
                      <div>
                        <h6 className="mb-1 fw-semibold">{value.title}</h6>
                        <small className="text-muted">{value.desc}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="col-lg-6">
            <div className={`about-image-container ${isVisible ? 'animate-slide-in-right' : ''}`}>
              <div className="position-relative">
                {/* Main Image */}
                <div className="about-main-image" style={{
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}>
                  <img 
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Our team at work"
                    className="img-fluid w-100"
                    style={{height: '400px', objectFit: 'cover'}}
                  />
                </div>

                {/* Floating Card */}
                <div className="floating-card position-absolute bg-white p-4 shadow-lg" style={{
                  bottom: '-30px',
                  left: '30px',
                  borderRadius: '12px',
                  maxWidth: '250px',
                  animation: isVisible ? 'float 3s ease-in-out infinite' : 'none'
                }}>
                  <div className="text-center">
                    <div className="mb-2">
                      <span className="display-6 fw-bold text-primary-custom">12+</span>
                    </div>
                    <p className="mb-0 small text-muted">Years of Excellence</p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="position-absolute" style={{
                  top: '-20px',
                  right: '-20px',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, rgba(255,107,107,0.1), rgba(69,183,209,0.1))',
                  borderRadius: '50%',
                  animation: isVisible ? 'pulse-soft 2s ease-in-out infinite' : 'none'
                }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Counter */}
        <div className={`bg-light p-5 mb-5 ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <div className="container-fluid px-0">
            <div className="row text-center g-4">
              {[
                { key: 'experience', label: 'Years Experience', suffix: '+' },
                { key: 'events', label: 'Events Planned', suffix: '+' },
                { key: 'clients', label: 'Happy Clients', suffix: '+' },
                { key: 'awards', label: 'Awards Won', suffix: '' }
              ].map((stat, index) => (
                <div key={stat.key} className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                  <div className={`stat-item ${isVisible ? 'animate-scale-in' : ''}`}
                       style={{animationDelay: `${1 + index * 0.1}s`}}>
                    <div className="stat-number display-4 fw-bold text-primary-custom mb-2">
                      {counters[stat.key]}{stat.suffix}
                    </div>
                    <p className="stat-label text-muted mb-0" style={{fontSize: '0.95rem'}}>
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h3 className={`display-5 fw-light mb-4 ${isVisible ? 'animate-fade-in' : ''}`} 
                  style={{color: '#2c3e50', animationDelay: '1.5s'}}>
                Meet Our Creative Team
              </h3>
              <p className={`text-muted ${isVisible ? 'animate-fade-in' : ''}`} 
                 style={{animationDelay: '1.7s'}}>
                The passionate professionals who bring your dreams to life
              </p>
            </div>
          </div>

          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className={`${isVisible ? 'animate-fade-in-up' : ''}`}
                     style={{animationDelay: `${2 + index * 0.2}s`}}>
                  <div className="card border-0 h-100 shadow-sm">
                    <div className="team-image-container position-relative overflow-hidden">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="card-img-top team-image"
                        style={{
                          height: '300px',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                      />
                      <div className="team-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-4"
                           style={{
                             background: 'linear-gradient(transparent 0%, rgba(0,0,0,0.7) 100%)',
                             opacity: 0,
                             transition: 'opacity 0.3s ease'
                           }}>
                        <div className="text-white">
                          <h5 className="mb-1">{member.name}</h5>
                          <p className="small mb-0">{member.role}</p>
                        </div>
                      </div>
                    </div>
                    <div className="card-body p-4">
                      <h5 className="card-title fw-semibold mb-1">{member.name}</h5>
                      <p className="text-primary-custom small mb-3">{member.role}</p>
                      <p className="card-text text-muted small">{member.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;