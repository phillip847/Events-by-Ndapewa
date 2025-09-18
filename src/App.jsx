// App.jsx
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import all components
import Loader from './components/Loader';
import BackToTop from './components/BackToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CTA from './components/CTA';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
//import Packages from './components/Packages';
//import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* About Us Section */}
        <section id="about">
          <AboutUs />
        </section>

        <section id="services">
          <Services />
        </section>

        {/* Call to Action Section */}
        <section id="cta">
          <CTA />
        </section>

      </main>

      {/* Footer */}
      <Footer />
      
      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}

export default App;