import React, { useState } from 'react';

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello! I'm interested in your event planning services.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/message/HUEBKXOM7NKOI1?text=${message}`, '_blank');
  };

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
      backgroundImage: `linear-gradient(rgba(255, 182, 193, 0.3), rgba(255, 20, 147, 0.4)), url('https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    },
    glassCard: {
      backdropFilter: 'blur(16px)',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '1.5rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    },
    pinkHeading: {
      color: '#be185d',
      filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))',
      fontWeight: 'bold'
    },
    pinkText: {
      color: '#be185d',
      fontWeight: '600',
      filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.2))'
    }
  };

  return (
    <section className="py-5 d-flex align-items-center" style={styles.container}>
      <div style={styles.backgroundImage}></div>
      <div className="container-fluid px-3 px-md-5" style={{position: 'relative', zIndex: 10}}>
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="display-4 fw-bold mb-4" style={styles.pinkHeading}>Ready to Plan Your Perfect Event?</h2>
            <p className="lead mb-4" style={styles.pinkText}>Let's bring your vision to life. Get in touch with us today for a personalized consultation.</p>
            <div className="row">
              <div className="col-md-6 mb-3">
                <h5 style={{color: '#ec4899', fontWeight: 'bold'}}>Call Us</h5>
                <p className="mb-0" style={styles.pinkText}>0817700348</p>
                <p className="mb-0" style={styles.pinkText}>0812448543</p>
              </div>
              <div className="col-md-6 mb-3">
                <h5 style={{color: '#ec4899', fontWeight: 'bold'}}>Email Us</h5>
                <p className="mb-0" style={styles.pinkText}>ndapewaevents@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-4" style={styles.glassCard}>
                <h3 className="mb-4 text-center" style={styles.pinkHeading}>Get Your Free Quote</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control form-control-lg"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control form-control-lg"
                      name="message"
                      rows="4"
                      placeholder="Tell us about your event"
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-lg w-100" 
                    style={{background: 'linear-gradient(to right, #ec4899, #f43f5e)', border: 'none', color: 'white', borderRadius: '9999px', fontWeight: '600', transition: 'all 0.3s ease', boxShadow: '0 4px 14px 0 rgba(236, 72, 153, 0.39)'}}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.boxShadow = '0 8px 25px 0 rgba(236, 72, 153, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = '0 4px 14px 0 rgba(236, 72, 153, 0.39)';
                    }}
                  >
                    Send My Request
                  </button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;