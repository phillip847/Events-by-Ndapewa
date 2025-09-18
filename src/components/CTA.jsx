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

  return (
    <section className="py-5" style={{
      background: 'linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="container-fluid px-3 px-md-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="display-4 mb-4">Ready to Plan Your Perfect Event?</h2>
            <p className="lead mb-4">Let's bring your vision to life. Get in touch with us today for a personalized consultation.</p>
            <div className="row">
              <div className="col-md-6 mb-3">
                <h5 style={{color: '#ec4899'}}>Call Us</h5>
                <p className="mb-0">0817700348</p>
                <p className="mb-0">0812448543</p>
              </div>
              <div className="col-md-6 mb-3">
                <h5 style={{color: '#ec4899'}}>Email Us</h5>
                <p className="mb-0">ndapewaevents@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card shadow">
              <div className="card-body p-4">
                <h3 className="mb-4 text-center">Get Your Free Quote</h3>
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
                  <button type="submit" className="btn btn-lg w-100" style={{background: 'linear-gradient(to right, #ec4899, #f43f5e)', border: 'none', color: 'white'}}>
                    Send My Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;