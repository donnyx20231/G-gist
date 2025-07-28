// src/HomePage.js
import { useState, useEffect } from 'react';
import '../Splashscreen/Splashscreen.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="logo">
        <img src="../../assets/img/logo2.jpeg" alt="Logo" />
        <span>G gist</span>
      </div>
      <div className="menu-toggle">
        <button onClick={toggleMenu} className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Movies</a></li>
        <li><a href="#">TV Shows</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    
  );
};

const HomePage = () => {
  return (
    <div className="background-slide">
      <Navbar />
      <div className="content">
        <h1>Feel the Vibe. Live the Story.</h1>
        <hr />
        <button>Get Started</button>
      </div>
      <footer>
        <hr></hr>
        <p>© 2025 G gist. All rights reserved.</p>
        <div className="social-links">
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;