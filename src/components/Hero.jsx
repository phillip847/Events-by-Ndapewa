import React from 'react';

const Hero = () => {
  return (
    <section className="min-vh-100 d-flex align-items-center" style={{
      background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="container-fluid px-3 px-md-5 text-center text-white">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="display-2 fw-bold mb-4">EventPerfect</h1>
            <h2 className="h3 mb-4">Wedding & Event Planning</h2>
            <p className="lead mb-5">We specialize in turning your wedding dreams into enchanting realities with meticulous planning and attention to detail.</p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <a href="#about" className="btn btn-primary btn-lg px-4">Learn More</a>
              <a href="#cta" className="btn btn-outline-light btn-lg px-4">Get Quote</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;