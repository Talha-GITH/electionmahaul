import React from 'react';
import './HeaderOne.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faYoutube, faInstagram, faWhatsapp, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function HeaderOne({ menuOpen, toggleMenu }) {
  const handleLinkClick = () => {
    // Close the menu when a link is clicked
    if (menuOpen) {
      toggleMenu();
    }
  };

  return (
    <header className="header">
      <h1 className="title">
        <span className="small-text">Election</span> Mahaul
      </h1>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        {/* Add text "Menu" below the toggle icon */}
        <div className="menu-text">Menu</div>
      </div>
      
      <nav className={menuOpen ? 'open' : ''}>
        <ul>
          <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/world" onClick={handleLinkClick}>World</Link></li>
          <li><Link to="/politics" onClick={handleLinkClick}>Politics</Link></li>
          <li><Link to="/economy" onClick={handleLinkClick}>Economy</Link></li>
          <li><Link to="/security" onClick={handleLinkClick}>Security</Link></li>
          <li><Link to="/law" onClick={handleLinkClick}>Law</Link></li>
          <li><Link to="/science" onClick={handleLinkClick}>Science</Link></li>
          <li><Link to="/society" onClick={handleLinkClick}>Society</Link></li>
          <li><Link to="/culture" onClick={handleLinkClick}>Culture</Link></li>
        </ul>
        <div className="follow-us">
          <p>FOLLOW US ON:</p>
          <div className="social-links-container">
            <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} style={{ color: '#3b5998' , fontSize:'30'}} /></a>
            <a href="https://youtube.com/example" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} style={{ color: '#c4302b' ,fontSize:'30'}} /></a>
            <a href="https://www.instagram.com/electionmahaul/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} style={{ color: '#e4405f',fontSize:'30' }} /></a>
            <a href="https://wa.me/phoneNumber" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} style={{ color: '#25d366',fontSize:'30' }} /></a>
            <a href="https://t.me/username" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTelegram} style={{ color: '#0088cc',fontSize:'30' }} /></a>
            <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} style={{ color: '#1DA1F2',fontSize:'30' }} /></a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HeaderOne;
