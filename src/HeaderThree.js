import React from 'react';
import './HeaderThree.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faYoutube, faFacebook, faInstagram, faWhatsapp, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'; // Import social media icons
import { Link } from 'react-router-dom'; 

const HeaderThree = () => {
 
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="header-three">
      <div className="left-icons">
        <a href="https://www.youtube.com"><FontAwesomeIcon icon={faYoutube} /></a>
        <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://www.instagram.com/electionmahaul/"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.whatsapp.com"><FontAwesomeIcon icon={faWhatsapp} /></a>
        <a href="https://t.me"><FontAwesomeIcon icon={faTelegram} /></a>
        <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
      </div>
      <div className="center-date">
        {currentDate}
      </div>
      <div className="right-support">
        <Link to="/Support" style={{ color: '#b71c1c' }}>Support our Journalism!</Link>
      </div>
    </div>
  );
}

export default HeaderThree;
