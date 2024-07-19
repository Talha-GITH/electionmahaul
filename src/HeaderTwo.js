import React from 'react';
import './HeaderTwo.css'; // Import CSS file for styling
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const HeaderTwo = () => {
  return (
    <div className="headertwo">
      <ul className="element-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/world">World</Link></li>
        <li><Link to="/politics">Politics</Link></li>
        <li><Link to="/economy">Economy</Link></li>
        <li><Link to="/security">Security</Link></li>
        <li><Link to="/law">Law</Link></li>
        <li><Link to="/science">Science</Link></li>
        <li><Link to="/society">Society</Link></li>
        <li><Link to="/culture">Culture</Link></li>
        <li><Link to="/opinion">Opinion</Link></li>
        <li><Link to="/video">Video</Link></li>
        <li><Link to="/analysis">Analysis</Link></li>
        <li><Link to="/media">Media</Link></li>
        <li><Link to="/government">Government</Link></li>
        <li><Link to="/editors-pick">Editors Pick</Link></li>
        <li><Link to="/top-stories">Top Stories</Link></li>
        <li><Link to="/live-wire">Live Wire</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/science">Science</Link></li>
      </ul>
    </div>
  );
}

export default HeaderTwo;
