import React from 'react';
import './Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram, faWhatsapp, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section-heading">TRENDING TOPICS</div>
      <div className="section">
        <li><a href="/santiago-martin">Santiago Martin</a></li>
        <li><a href="/electoral-bonds-latest-news">Electoral Bonds Latest News</a></li>
        <li><a href="/electoral-bonds-data">Electoral Bonds Data</a></li>
        <li><a href="/caa">CAA</a></li>
        <li><a href="/ipl-2024-schedule">IPL 2024 Schedule</a></li>
        <li><a href="/wpl-2024-final-result">WPL 2024 Final Result</a></li>
        <li><a href="/holi-2024-schedule">Holi 2024 Schedule</a></li>
        <li><a href="/farmers-protest-2024-news">Farmers Protest 2024 News</a></li>
        <li><a href="/ipl-2024">IPL 2024</a></li>
        <li><a href="/climate-change-news">Climate Change News</a></li>
        <li><a href="/electoral-bonds">Electoral Bonds</a></li>
        <li><a href="/megha-ltd">Megha Ltd</a></li>
        <li><a href="/new-electoral-bonds-data">New Electoral Bonds Data</a></li>
        <li><a href="/lok-sabha-election-dates">Lok Sabha Election Dates</a></li>
      </div>
      <hr className="border-line" />
      <div className="section-heading">SECTIONS</div>
      <div className="section">
        <li><a href="/politics">Politics</a></li>
        <li><a href="/opinion">Opinion</a></li>
        <li><a href="/videos">Videos</a></li>
        <li><a href="/sports">Sports</a></li>
        <li><a href="/podcasts">Podcasts</a></li>
        <li><a href="/entertainment">Entertainment</a></li>
        <li><a href="/the-quint-lab">The Quint Lab</a></li>
        <li><a href="/graphic-novels">Graphic Novels</a></li>
        <li><a href="/photos">Photos</a></li>
        <li><a href="/india">India</a></li>
        <li><a href="/hope-series">HOPE Series</a></li>
        <li><a href="/law">Law</a></li>
        <li><a href="/gender">Gender</a></li>
        <li><a href="/cyber">Cyber</a></li>
        <li><a href="/climate-change">Climate Change</a></li>
        <li><a href="/faqs">FAQs</a></li>
        <li><a href="/explainers">Explainers</a></li>
        <li><a href="/technology">Technology</a></li>
        <li><a href="/world">World</a></li>
        <li><a href="/south-asians">South Asians</a></li>
        <li><a href="/education">Education</a></li>
        <li><a href="/business">Business</a></li>
        <li><a href="/good-news">Good News</a></li>
        <li><a href="/members-opinion">Members' Opinion</a></li>
      </div>
      <hr className="border-line" />
      <div className="follow-us">
        <p>FOLLOW US ON:</p>
        <ul className="social-links">
        <li><a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} style={{ color: '#3b5998' , fontSize:'30'}} /></a></li>
<li><a href="https://youtube.com/example" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} style={{ color: '#c4302b' ,fontSize:'30'}} /></a></li>
<li><a href="https://www.instagram.com/electionmahaul/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} style={{ color: '#e4405f',fontSize:'30' }} /></a></li>
<li><a href="https://wa.me/phoneNumber" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} style={{ color: '#25d366',fontSize:'30' }} /></a></li>
<li><a href="https://t.me/username" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTelegram} style={{ color: '#0088cc',fontSize:'30' }} /></a></li>
<li><a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} style={{ color: '#1DA1F2',fontSize:'30' }} /></a></li>

        </ul>
      </div>
      <p className="copyright">&copy; 2024 Election Mahaul. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
