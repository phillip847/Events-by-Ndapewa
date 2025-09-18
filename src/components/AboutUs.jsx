import React from 'react';

const AboutUs = () => {
  return (
    <div className="container-fluid px-3 px-md-5 py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h2 className="display-4 mb-4">About Our Story</h2>
          <p className="lead mb-4">
            Founded with a passion for creating unforgettable moments, we've been turning dreams into reality for over a decade.
          </p>
        </div>
      </div>
      
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4">
          <h3 className="h2 mb-4">Crafting Perfect Moments Since 2012</h3>
          <p className="mb-4">
            What started as a small dream has blossomed into one of the region's most trusted event planning companies. 
            We believe that every celebration is unique, and our mission is to bring your personal vision to life.
          </p>
          <p className="mb-4">
            Our team of experienced professionals works closely with you from the initial concept to the final farewell, 
            ensuring that every moment is perfectly orchestrated.
          </p>
        </div>
        <div className="col-lg-6">
          <img 
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Our team at work"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      <div className="row text-center mt-5 bg-light rounded p-5">
        <div className="col-md-3 mb-3">
          <h3 className="display-4 text-primary">12+</h3>
          <p>Years Experience</p>
        </div>
        <div className="col-md-3 mb-3">
          <h3 className="display-4 text-primary">500+</h3>
          <p>Events Planned</p>
        </div>
        <div className="col-md-3 mb-3">
          <h3 className="display-4 text-primary">300+</h3>
          <p>Happy Clients</p>
        </div>
        <div className="col-md-3 mb-3">
          <h3 className="display-4 text-primary">15</h3>
          <p>Awards Won</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;