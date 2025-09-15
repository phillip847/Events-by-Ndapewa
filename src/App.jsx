// App.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import all components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CTA from './components/CTA';
import AboutUs from './components/AboutUs';
//import Services from './components/Services';
//import Packages from './components/Packages';
//import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
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
        <section id="about" className="py-5">
          <AboutUs />
        </section>

        {/* Call to Action Section */}
        <section id="cta" className="py-5">
          <CTA />
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;