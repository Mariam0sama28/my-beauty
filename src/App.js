import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Service from "./Service";
import Experts from "./Experts";
// Main App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/experts" element={<Experts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// Navigation Bar Component
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          ✨ Luxe Beauty Clinic
        </Link>

        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/service" className="nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/Experts" className="nav-link">
              Experts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Luxe Beauty Clinic</h3>
          <p>Your journey to radiant beauty starts here</p>
        </div>

        <div className="footer-section">
          <h4>Hours</h4>
          <p>Mon - Fri: 9am - 7pm</p>
          <p>Sat: 10am - 6pm</p>
          <p>Sun: Closed</p>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>📞 (02) 01093617936 </p>
          <p>✉️ info@luxebeautymarioma.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Luxe Beauty Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
}

// Home Page Component
function HomePage() {
  return (
    <div className="page">
      {/* Hero Section with background image */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Start your beauty trip with us</h1>
          <div className="hero-buttons">
            <button className="auth-button login-button">Login</button>
            <button className="auth-button signin-button">Sign In</button>
          </div>
        </div>
      </section>

      {/* Services Preview Section with scrolling animation */}
      <section className="services-preview">
        <h2 className="section-title">Our Signature Treatments</h2>

        <div className="marquee-container">
          <div className="marquee-content">
            {/* First set of service cards */}
            <ServiceCard
              image="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&q=80"
              title="Facial Treatments"
              description="Rejuvenating facials using premium products for glowing skin"
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=500&q=80"
              title="Face Lift"
              description="Non-surgical lifting and contouring for youthful appearance"
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&q=80"
              title="Body Treatments"
              description="Luxurious spa treatments for complete body wellness"
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&q=80"
              title="Nail Care"
              description="Luxurious manicures and pedicures with lasting results"
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=500&q=80"
              title="Skin Rejuvenation"
              description="Advanced treatments to restore your skin's radiance"
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=500&q=80"
              title="Laser Treatments"
              description="State-of-the-art laser technology for perfect skin"
            />

            {/* Duplicate set for seamless infinite scroll */}
            <ServiceCard
              image="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&q=80"
              title="Facial Treatments"
              description="Rejuvenating facials using premium products for glowing skin"
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=500&q=80"
              title="Face Lift"
              description="Non-surgical lifting and contouring for youthful appearance"
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&q=80"
              title="Body Treatments"
              description="Luxurious spa treatments for complete body wellness"
            />
          </div>
        </div>

        <Link to="/service" className="view-all-link">
          View All Services →
        </Link>
      </section>

      {/* About Section - Why Choose Us */}
      <section className="about-section">
        {/* Decorative background shapes */}
        <div className="about-background-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

        <div className="about-content">
          <h2 className="fade-in-up">Why Choose Luxe Beauty?</h2>

          <div className="about-grid">
            {/* Benefit 1 */}
            <div className="about-item slide-in-left">
              <div className="about-icon-container">
                <img
                  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=200&q=80"
                  alt="Expert"
                  className="about-icon-img"
                />
                <div className="icon-glow"></div>
              </div>
              <span className="about-number">01</span>
              <h3>Expert Professionals</h3>
              <p>
                Our licensed aestheticians have years of specialized training
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="about-item slide-in-up">
              <div className="about-icon-container">
                <img
                  src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&q=80"
                  alt="Premium"
                  className="about-icon-img"
                />
                <div className="icon-glow"></div>
              </div>
              <span className="about-number">02</span>
              <h3>Premium Products</h3>
              <p>We use only the highest quality, clinically-proven products</p>
            </div>

            {/* Benefit 3 */}
            <div className="about-item slide-in-right">
              <div className="about-icon-container">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&q=80"
                  alt="Care"
                  className="about-icon-img"
                />
                <div className="icon-glow"></div>
              </div>
              <span className="about-number">03</span>
              <h3>Personalized Care</h3>
              <p>Every treatment is customized to your unique needs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

//it's the start for  Service Card
function ServiceCard({ image, title, description }) {
  return (
    <div className="service-card-image">
      <img src={image} alt={title} />
      <div className="service-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

// Contact Page Component
function ContactPage() {
  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you soon to confirm your appointment.");
  };

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-shapes">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
        </div>
        <h1 className="bounce-in">Get In Touch</h1>
        <p className="fade-in-delay">
          We'd love to hear from you and help you look your best
        </p>
      </section>

      {/* Main Content Area */}
      <section className="contact-content">
        <div className="contact-grid">
          {/* Left Side - Contact Form */}
          <div className="contact-form-container slide-in-left-contact">
            <h2>Book Your Appointment</h2>
            <p className="form-subtitle">Transform your beauty journey today</p>

            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="form-group float-label">
                <input type="text" id="name" required placeholder=" " />
                <label htmlFor="name">Full Name *</label>
              </div>

              {/* Email Field */}
              <div className="form-group float-label">
                <input type="email" id="email" required placeholder=" " />
                <label htmlFor="email">Email Address *</label>
              </div>

              {/* Phone Field */}
              <div className="form-group float-label">
                <input type="tel" id="phone" required placeholder=" " />
                <label htmlFor="phone">Phone Number *</label>
              </div>

              {/* Service Selection */}
              <div className="form-group float-label">
                <select id="service" required>
                  <option value="">Select a service</option>
                  <option>Facial Treatment</option>
                  <option>Face Lift</option>
                  <option>Body Treatment</option>
                  <option>Nail Services</option>
                  <option>Skin Rejuvenation</option>
                  <option>Laser Treatment</option>
                  <option>Other</option>
                </select>
                <label htmlFor="service">Preferred Service</label>
              </div>

              {/* Message Field */}
              <div className="form-group float-label">
                <textarea id="message" rows="4" placeholder=" "></textarea>
                <label htmlFor="message">
                  Tell us about your beauty goals...
                </label>
              </div>

              {/* Submit Button */}
              <button type="submit" className="submit-button">
                <span>Send Message</span>
                <span className="button-icon">✨</span>
              </button>
            </form>
          </div>

          {/* Right Side - Contact Information Cards */}
          <div className="contact-info-container slide-in-right-contact">
            {/* Location Card */}
            <div
              className="info-card pop-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="info-icon">📍</div>
              <h3>Visit Us</h3>
              <p>
                123 Beauty Lane
                <br />
                Los Angeles, CA 90210
              </p>
              <div className="card-shine"></div>
            </div>

            {/* Phone Card */}
            <div
              className="info-card pop-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="info-icon">📞</div>
              <h3>Call Us</h3>
              <p>(02) 01093617936</p>
              <div className="card-shine"></div>
            </div>

            {/* Email Card */}
            <div
              className="info-card pop-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="info-icon">✉️</div>
              <h3>Email Us</h3>
              <p>info@luxebeautymarioma.com</p>
              <div className="card-shine"></div>
            </div>

            {/* Hours Card */}
            <div
              className="info-card pop-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="info-icon">🕐</div>
              <h3>Hours</h3>
              <p>
                Monday - Friday: 9am - 7pm
                <br />
                Saturday: 10am - 6pm
                <br />
                Sunday: Closed
              </p>
              <div className="card-shine"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
