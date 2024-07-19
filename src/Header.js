import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderOne from './HeaderOne';
import HeaderTwo from './HeaderTwo';
import HeaderThree from './HeaderThree'; 

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100 }}>
      <HeaderThree /> 
      <HeaderOne menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <HeaderTwo />
    </div>
  );
}

export default Header;
