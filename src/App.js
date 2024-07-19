import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import World from './World';
import Politics from './Politics';
import Economy from './Economy'; // Import the Economy component
import Security from './Security'; // Import the Security component
import Law from './Law'; // Import the Law component
import Science from './Science'; // Import the Science component
import Society from './Society'; // Import the Society component
import Culture from './Culture'; // Import the Culture component
import HeaderOne from './HeaderOne';
import HeaderTwo from './HeaderTwo';
import Support from './Support';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />          
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/world" element={<World />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/economy" element={<Economy />} />
          <Route path="/security" element={<Security />} />
          <Route path="/law" element={<Law />} />
          <Route path="/HeaderOne" element={<HeaderOne />} />
          <Route path="/HeaderTwo" element={<HeaderTwo />} />
          <Route path="Support" element={<Support/>} />
          
          <Route path="/science" element={<Science />} />
          <Route path="/society" element={<Society />} />
          <Route path="/culture" element={<Culture />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
